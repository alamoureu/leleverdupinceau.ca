const ERP_LEAD_SOURCE = 'leleverdupinceau_website';

/** Path proxied by Vite (dev) and Netlify to the real ERP server — same-origin in the browser. */
const ERP_LEAD_PROXY_PATH = '/api/webhooks/leads/website';

/**
 * Use a relative URL when the configured endpoint matches the proxy path so the
 * browser does not cross-origin POST (ERP often has no CORS on webhooks).
 * Set VITE_ERP_WEBSITE_LEAD_DIRECT=true to always use the absolute URL from env.
 */
function resolveErpWebsiteLeadUrl(raw) {
  if (!raw) return '';
  const t = String(raw).trim();
  if (t.startsWith('/')) return t;
  if (
    typeof import.meta !== 'undefined' &&
    import.meta.env?.VITE_ERP_WEBSITE_LEAD_DIRECT === 'true'
  ) {
    return t;
  }
  try {
    const u = new URL(t);
    const path = u.pathname.replace(/\/$/, '') || '/';
    const proxyPath = ERP_LEAD_PROXY_PATH.replace(/\/$/, '') || '/';
    if (path === proxyPath) {
      return ERP_LEAD_PROXY_PATH;
    }
  } catch {
    return t;
  }
  return t;
}

function normalizePhoneForErp(phone) {
  const digits = String(phone ?? '').replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) return digits.slice(1);
  if (digits.length === 10) return digits;
  return digits || String(phone ?? '').trim();
}

function paintingTypeLabel(paintingType, lang) {
  const v = (paintingType || '').toLowerCase();
  if (lang === 'en') {
    if (v.includes('int') || v === 'interior') return 'Interior painting';
    if (v.includes('ext') || v === 'exterior') return 'Exterior painting';
  }
  if (v.includes('int') || v === 'interior' || v.includes('intérieure'))
    return 'Peinture intérieure';
  if (v.includes('ext') || v === 'exterior' || v.includes('extérieure'))
    return 'Peinture extérieure';
  return String(paintingType || '').trim();
}

function buildDescriptionDuProjet(formData, lang = 'fr') {
  const msg = String(
    formData.projectDetails ?? formData.message ?? formData.description ?? ''
  ).trim();

  if (
    formData.typePeinture ||
    (Array.isArray(formData.besoinPeinture) && formData.besoinPeinture.length)
  ) {
    const besoins = Array.isArray(formData.besoinPeinture)
      ? formData.besoinPeinture.join(', ')
      : String(formData.besoinPeinture ?? '');
    const parts = [];
    if (formData.typePeinture) {
      parts.push(`Type: ${formData.typePeinture}`);
    }
    if (besoins) {
      parts.push(`${lang === 'en' ? 'Needs' : 'Besoins'}: ${besoins}`);
    }
    if (msg) parts.push(msg);
    return parts.join('\n');
  }

  const pt = paintingTypeLabel(formData.paintingType, lang);
  const parts = [];
  if (pt) parts.push(pt);
  if (msg) parts.push(msg);
  return parts.join('\n\n');
}

/**
 * Payload for POST /api/webhooks/leads/website (custom ERP).
 * Matches docs: name, email, phone, postal_code, description_du_projet, source.
 */
export function buildErpWebsiteLeadPayload(formData, options = {}) {
  const lang = options.language || formData.language || 'fr';
  const name = String(formData.name ?? formData.first_name ?? '').trim();
  const email = String(formData.email ?? '').trim();
  const phone = normalizePhoneForErp(formData.phone ?? formData.tel ?? '');
  const postal_code = String(formData.address ?? '').trim();
  const description_du_projet = buildDescriptionDuProjet(formData, lang);

  return {
    name,
    email,
    phone,
    postal_code,
    description_du_projet,
    source: ERP_LEAD_SOURCE,
  };
}

/**
 * Sends a website lead to the custom ERP webhook.
 * No-op if VITE_ERP_WEBSITE_LEAD_URL is unset (e.g. local dev without ERP).
 */
export async function sendWebsiteLeadToErp(formData, options = {}) {
  const configured =
    typeof import.meta !== 'undefined' && import.meta.env?.VITE_ERP_WEBSITE_LEAD_URL
      ? String(import.meta.env.VITE_ERP_WEBSITE_LEAD_URL).trim()
      : '';
  const url = resolveErpWebsiteLeadUrl(configured);

  if (!url) {
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.info(
        '[ERP] VITE_ERP_WEBSITE_LEAD_URL is unset; skipping ERP lead POST'
      );
    }
    return null;
  }

  const payload = buildErpWebsiteLeadPayload(formData, options);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.error('Error sending to ERP website webhook:', error);
    }
    throw error;
  }
}
