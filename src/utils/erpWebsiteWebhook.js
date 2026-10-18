const ERP_LEAD_SOURCE = 'leleverdupinceau_website';
const LANDING_PAGE_STORAGE_KEY = 'ldp_landing_page';

/** ERP website lead webhook - single destination for all website forms. */
export const ERP_WEBSITE_LEAD_URL =
  'https://ldp-systems-server.onrender.com/api/webhooks/leads/website';

function readLandingPage() {
  try {
    return window.sessionStorage.getItem(LANDING_PAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeLandingPage(url) {
  try {
    window.sessionStorage.setItem(LANDING_PAGE_STORAGE_KEY, url);
  } catch {
    /* sessionStorage unavailable (private mode, blocked storage) */
  }
}

/**
 * Stores the visitor's arrival URL once per session. Must run before the router
 * renders so redirects and in-site navigation can't replace it (keeps fbclid / STLP path).
 */
export function captureLandingPage() {
  if (typeof window === 'undefined') return;
  if (!readLandingPage()) writeLandingPage(window.location.href);
}

/** When the arrival page is itself a redirect, attribute the lead to the destination. */
export function updateLandingPageOnRedirect(fromHref, toHref) {
  if (typeof window === 'undefined') return;
  if (readLandingPage() === fromHref) writeLandingPage(toHref);
}

export function getLandingPage() {
  if (typeof window === 'undefined') return '';
  return readLandingPage() || window.location.href;
}

function extractPostalCode(address) {
  const raw = String(address ?? '').trim();
  const match = raw.match(/[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d/);
  if (!match) return raw;
  const compact = match[0].replace(/[\s-]/g, '').toUpperCase();
  return `${compact.slice(0, 3)} ${compact.slice(3)}`;
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

  const pt = paintingTypeLabel(
    formData.paintingType ?? formData.typePeinture,
    lang
  );
  const parts = [];
  if (pt) parts.push(pt);
  if (msg) parts.push(msg);
  return parts.join('\n\n');
}

/**
 * Payload for POST /api/webhooks/leads/website (custom ERP).
 * Matches docs: name, email, phone, postal_code, language, source, landing_page.
 * The ERP attributes the lead from landing_page (Google Ads, STLP or Meta Ads).
 */
export function buildErpWebsiteLeadPayload(formData, options = {}) {
  const lang = options.language || formData.language || 'fr';
  const name = String(formData.name ?? formData.first_name ?? '').trim();
  const email = String(formData.email ?? '').trim();
  const phone = normalizePhoneForErp(formData.phone ?? formData.tel ?? '');
  const postal_code = extractPostalCode(
    formData.postal_code ?? formData.address
  );
  const description_du_projet = buildDescriptionDuProjet(formData, lang);

  return {
    name,
    email,
    phone,
    postal_code,
    language: lang,
    description_du_projet,
    source: ERP_LEAD_SOURCE,
    landing_page: getLandingPage(),
  };
}

/**
 * Sends a website lead to the ERP webhook.
 * ERP must allow CORS from your site origin and from localhost (dev) if you test there.
 */
export async function sendWebsiteLeadToErp(formData, options = {}) {
  const payload = buildErpWebsiteLeadPayload(formData, options);

  try {
    const response = await fetch(ERP_WEBSITE_LEAD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json().catch(() => null);
    if (!result?.ok || !result?.ran) {
      throw new Error(`ERP did not create the lead: ${JSON.stringify(result)}`);
    }

    return result;
  } catch (error) {
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.error('Error sending to ERP website webhook:', error);
    }
    throw error;
  }
}
