const LOCATION_ID = 'jv3Oww982uHzfUFk9Ize';

export const GHL_FORM_IDS = {
  fr: 'OjKxDBP4Q9vOx8pOvn7d',
  en: 'odZg4CGs76Lj7I4hoSa3',
};

const CUSTOM_FIELD_PAINTING_TYPE = '6LFScGe0fXKzH5ZI3x4S';
const CUSTOM_FIELD_PROJECT_DESCRIPTION = 'xGRSLO7DGNCfFO4KZn5T';

function toPaintingTypeValue(paintingType, lang = 'fr') {
  const v = (paintingType || '').toLowerCase();
  if (lang === 'en') {
    if (v.includes('int') || v === 'interior') return 'Interior painting';
    if (v.includes('ext') || v === 'exterior') return 'Exterior painting';
  }
  if (v.includes('int') || v === 'interior' || v.includes('intérieure')) return 'Peinture intérieure';
  if (v.includes('ext') || v === 'exterior' || v.includes('extérieure')) return 'Peinture extérieure';
  return paintingType || '';
}

function normalizePhone(phone) {
  const digits = String(phone ?? '').replace(/\D/g, '');
  if (digits.length === 10 && /^[2-9]/.test(digits)) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return String(phone ?? '').trim() || '';
}

function formatTimezoneOffset(date) {
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? '+' : '-';
  const abs = Math.abs(offset);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return `${sign}${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export async function sendToGoHighLevel(formData, options = {}) {
  const WEBHOOK_URL =
    'https://services.leadconnectorhq.com/hooks/jv3Oww982uHzfUFk9Ize/webhook-trigger/bde68bea-be14-4bf6-88e8-13acd1e05bdb';

  const lang = options.language || formData.language || 'fr';
  const formId = GHL_FORM_IDS[lang] || GHL_FORM_IDS.fr;

  const fullName = String(formData.name ?? formData.first_name ?? '').trim();
  const phone = normalizePhone(formData.phone ?? formData.tel ?? '');
  const email = String(formData.email ?? '').trim();
  const address = String(formData.address ?? '').trim();
  const paintingTypeValue = toPaintingTypeValue(formData.paintingType, lang);
  const projectDescription = String(
    formData.projectDetails ?? formData.message ?? formData.description ?? ''
  ).trim();

  const language = lang === 'en' ? 'en' : 'fr';
  const description_de_la_job = projectDescription;
  const service_demand = paintingTypeValue;
  const terms_and_conditions = String(formData.terms_and_conditions ?? formData.termsAndConditions ?? '').trim();
  const timezone =
    typeof Intl !== 'undefined' && Intl.DateTimeFormat
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : '';
  const Timezone = timezone ? `${timezone} (GMT${formatTimezoneOffset(new Date())})` : '';
  const eventData = {
    source: 'direct',
    referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
    url_params: {},
    page: {
      url: typeof window !== 'undefined' && window.location ? window.location.href : '',
      title: typeof document !== 'undefined' && document.title ? document.title : '',
    },
    timestamp: Date.now(),
    type: 'page-visit',
  };

  const contact = {
    name: fullName,
    first_name: fullName,
    phone,
    email,
    address,
    address_1: address,
    [CUSTOM_FIELD_PAINTING_TYPE]: paintingTypeValue,
    [CUSTOM_FIELD_PROJECT_DESCRIPTION]: projectDescription,
    description_du_projet: projectDescription,
    description_de_la_job,
    service_demand,
    language,
  };

  const payload = {
    name: fullName,
    first_name: fullName,
    phone,
    email,
    address,
    address_1: address,
    [CUSTOM_FIELD_PAINTING_TYPE]: paintingTypeValue,
    [CUSTOM_FIELD_PROJECT_DESCRIPTION]: projectDescription,
    description_du_projet: projectDescription,
    description_de_la_job,
    service_demand,
    language,
    terms_and_conditions,
    Timezone,
    eventData,
    formId,
    location_id: LOCATION_ID,
    source: 'Website Form',
    submittedAt: new Date().toISOString(),
    contact,
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
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
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending to GoHighLevel webhook:', error);
    }
    throw error;
  }
}

