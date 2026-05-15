import { buildLandingFaqs } from './landingFaqs';

function gatineauize(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/Montréal/g, 'Gatineau').replace(/Montreal/gi, 'Gatineau');
}

/**
 * FAQ landing Google Ads Gatineau — même contenu que Montréal, ville remplacée.
 *
 * @param {Record<string, string>} t - Objet de traduction (ex. useTranslation().t)
 */
export function buildLandingFaqsGatineau(t) {
  return buildLandingFaqs(t).map((item) => ({
    question: gatineauize(item.question),
    answer: gatineauize(item.answer),
  }));
}
