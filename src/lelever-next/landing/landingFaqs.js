/**
 * Builds the landing page FAQ list from translation keys.
 * Single source of truth: content lives in translations.js.
 *
 * @param {Record<string, string>} t - Translation object (e.g. from useTranslation().t)
 * @returns {{ question: string, answer: string }[]}
 */
export function buildLandingFaqs(t) {
  return [
    { question: t.landingFaq1Question, answer: t.landingFaq1Answer },
    { question: t.landingFaq2Question, answer: t.landingFaq2Answer },
    { question: t.landingFaq3Question, answer: t.landingFaq3Answer },
    { question: t.landingFaq4Question, answer: t.landingFaq4Answer },
    { question: t.landingFaq5Question, answer: t.landingFaq5Answer },
    { question: t.landingFaq6Question, answer: t.landingFaq6Answer },
    { question: t.landingFaq7Question, answer: t.landingFaq7Answer },
  ];
}
