const ERP_LEAD_SOURCE = 'leleverdupinceau_website';

/**
 * Hardcoded ERP website lead webhooks (Render).
 * POST goes here from the browser — not via leleverdupinceau.ca, and not from env vars
 * (VITE_ERP_WEBSITE_LEAD_URL is intentionally unused).
 */
export const ERP_WEBSITE_LEAD_URLS = [
  'https://llp-erp-server.onrender.com/api/webhooks/leads/website',
  'https://ldp-systems-client.onrender.com/api/webhooks/leads/website',
];

/** @deprecated use ERP_WEBSITE_LEAD_URLS */
export const ERP_WEBSITE_LEAD_URL = ERP_WEBSITE_LEAD_URLS[0];

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

async function postWebsiteLead(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} (${url})`);
  }

  return response;
}

/**
 * Sends a website lead to all ERP webhooks (direct POST to Render).
 * ERP must allow CORS from your site origin and from localhost (dev) if you test there.
 */
export async function sendWebsiteLeadToErp(formData, options = {}) {
  const payload = buildErpWebsiteLeadPayload(formData, options);

  try {
    const results = await Promise.allSettled(
      ERP_WEBSITE_LEAD_URLS.map((url) => postWebsiteLead(url, payload))
    );

    const failures = results.filter((result) => result.status === 'rejected');

    if (failures.length === results.length) {
      throw failures[0].reason;
    }

    if (
      failures.length &&
      typeof import.meta !== 'undefined' &&
      import.meta.env?.DEV
    ) {
      failures.forEach((failure) => {
        console.error('Error sending to ERP website webhook:', failure.reason);
      });
    }

    return results.find((result) => result.status === 'fulfilled')?.value;
  } catch (error) {
    if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.error('Error sending to ERP website webhook:', error);
    }
    throw error;
  }
}
