/**
 * FAQ landing STLP — same as Montréal except RBQ licence question omitted (6 items).
 *
 * @param {Record<string, string>} t - Objet de traduction (ex. useTranslation().t)
 */
export function buildLandingFaqsStlp(t) {
  return [
    { question: t.landingFaq1Question, answer: t.landingFaq1Answer },
    { question: t.landingFaq2Question, answer: t.landingFaq2Answer },
    { question: t.landingFaq3Question, answer: t.landingFaq3Answer },
    { question: t.landingFaq5Question, answer: t.landingFaq5Answer },
    { question: t.landingFaq6Question, answer: t.landingFaq6Answer },
    { question: t.landingFaq7Question, answer: t.landingFaq7Answer },
  ];
}
