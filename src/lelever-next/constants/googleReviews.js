/**
 * Source unique pour les avis Google. Modifier ici seulement :
 * badges, sous-titres, meta descriptions et JSON-LD en dépendent.
 * REVIEW_COUNT ne doit jamais dépasser le vrai nombre d'avis Google (JSON-LD).
 */
export const GOOGLE_REVIEW_COUNT = 240;
export const GOOGLE_RATING = 4.8;

export const GOOGLE_REVIEWS_LABEL = {
  fr: `${GOOGLE_REVIEW_COUNT}+ avis`,
  en: `${GOOGLE_REVIEW_COUNT}+ reviews`,
};

export const GOOGLE_RATING_LABEL = {
  fr: String(GOOGLE_RATING).replace('.', ','),
  en: String(GOOGLE_RATING),
};

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Le+Lever+Du+Pinceau#lrd=0x68f987b7d3c06763:0xde27a613b1baf982,3,,,,';

const MONTHS_AGO = (n) =>
  n === 1
    ? { fr: 'Il y a 1 mois', en: 'a month ago' }
    : { fr: `Il y a ${n} mois`, en: `${n} months ago` };

/** Avis Google réels (texte copié de la fiche), du plus récent au plus ancien. */
export const GOOGLE_REVIEWS = [
  {
    name: 'Stephanie Castonguay',
    time: MONTHS_AGO(2),
    content: {
      fr: "Nous sommes extrêmement satisfaits de notre expérience avec Le Lever du Pinceau. Dès le début, Philippe a été très disponible, à l'écoute et attentif à nos besoins. Notre date de travaux a dû être modifiée à plusieurs reprises et il a fait preuve d'une grande flexibilité. L'équipe de peintres était travaillante, professionnelle et respectueuse des lieux. Le résultat final est exactement à notre goût\u00A0!",
      en: 'We are extremely satisfied with our experience with Le Lever du Pinceau. From the start, Philippe was very available, attentive and listened to our needs. Our work date had to be changed several times and he showed great flexibility. The painting team was hard-working, professional and respectful of our home. The final result is exactly to our taste!',
    },
  },
  {
    name: 'An Dao',
    time: MONTHS_AGO(5),
    content: {
      fr: "Après des travaux électriques qui ont laissé des trous partout dans nos 3 chambres, la cage d'escalier et les plafonds, nous avons contacté Philippe et son équipe. Philippe était présent tous les jours pour surveiller le chantier. Pedro et Moses ont accompli un travail méticuleux, rapide et professionnel. Meubles et planchers protégés, pièces nettoyées. Nous recommandons chaleureusement cette jeune entreprise dynamique et dévouée\u00A0!",
      en: 'After electrical work left holes all over our 3 bedrooms, the stairwell and the ceilings, we contacted Philippe and his team. Philippe was on site every day to oversee the job. Pedro and Moses did meticulous, fast and professional work. Furniture and floors protected, rooms cleaned. We warmly recommend this dynamic and dedicated young company!',
    },
  },
  {
    name: 'Zoé Boudreau',
    time: MONTHS_AGO(1),
    content: {
      fr: 'Je suis très ravie du service reçu\u00A0! Équipe compétente, rapide et courtoise. Je recommande chaleureusement\u00A0!',
      en: 'I am very delighted with the service received! Competent, fast and courteous team. I warmly recommend!',
    },
  },
  {
    name: 'Michiel Schrey',
    time: MONTHS_AGO(1),
    content: {
      fr: 'Efficaces, sympathiques, très bonnes communications, prix intéressants… Hautement recommandé\u00A0!',
      en: 'Efficient, friendly, very good communications, great prices… Highly recommended!',
    },
  },
  {
    name: 'Marie Lambert',
    time: MONTHS_AGO(1),
    content: {
      fr: "Nous sommes très heureux de notre expérience avec Le Lever Du Pinceau. Leur travail minutieux et leur grande courtoisie en font une référence pour quiconque recherche une main-d'œuvre fiable et efficace.",
      en: 'We are very happy with our experience with Le Lever Du Pinceau. Their meticulous work and great courtesy make them a reference for anyone looking for reliable and efficient labor.',
    },
  },
  {
    name: 'Chantal Baril',
    time: MONTHS_AGO(2),
    content: {
      fr: "Je suis très ravie des travaux qui ont été effectués à notre résidence. J'ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes\u00A0; le souci du détail est apparent\u00A0!",
      en: 'I am very delighted with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!',
    },
  },
  {
    name: 'Frédéric Choinière',
    time: MONTHS_AGO(1),
    content: {
      fr: "J'ai fait appel à l'équipe pour des toits difficiles d'accès. Ils ont fait un travail minutieux, sécuritaire et à l'écoute\u00A0!",
      en: 'I retained them for metal roofs difficult to access. They did the work with great care, safety, and listened to our concerns!',
    },
  },
  {
    name: 'Maureen Beech',
    time: { fr: 'Il y a 6 jours', en: '6 days ago' },
    content: {
      fr: 'Très ravie des résultats\u00A0! Équipe professionnelle et agréable. Projets livrés dans les délais et lieux laissés impeccables.',
      en: 'Very delighted with the results! Professional and pleasant team. Projects completed on time and the site was left clean and orderly.',
    },
  },
  {
    name: 'A Mayer',
    time: MONTHS_AGO(1),
    content: {
      fr: "Merci à l'équipe de Lever du Pinceau\u00A0! Je les ai engagés pour peindre ma chambre et ils ont dépassé mes attentes. Travailleurs polis, attention aux détails et service client exceptionnel\u00A0! Je recommande vivement\u00A0!",
      en: 'Thanks to the Lever du Pinceau team! I hired them to paint my bedroom and they exceeded my expectations. Polite workers, attention to detail and outstanding customer service! I highly recommend!',
    },
  },
  {
    name: 'V Gagnon',
    time: MONTHS_AGO(1),
    content: {
      fr: "Travail impeccable\u00A0! Louis est professionnel, sympathique et créatif\u00A0! Travail soigné et rapide. Je recommande vivement et j'utiliserai leurs services pour des travaux futurs\u00A0!",
      en: 'Impeccable work! Louis is professional, friendly and creative! Neat and fast work. I highly recommend and will use their services for future work!',
    },
  },
  {
    name: 'Coralie Beauchamp',
    time: MONTHS_AGO(1),
    content: {
      fr: 'Excellente expérience avec le levé du pinceau\u00A0! Professionnels, respectueux des lieux, honnêtes et travail parfait. Je recommande vivement cette équipe\u00A0!',
      en: 'Great experience with Le Lever du Pinceau! Professional, respectful of the place, honest and perfect work. I highly recommend this team!',
    },
  },
  {
    name: 'Mike S',
    time: MONTHS_AGO(1),
    content: {
      fr: "Excellente expérience. Très bons communicateurs. Super facile de travailler avec eux. Ils sont arrivés à l'heure, ont fourni un devis raisonnable, ont travaillé efficacement et ont fait un excellent travail (plâtre et peinture). Je les engagerai sans hésiter à nouveau.",
      en: 'Excellent experience. Great communicators. Super easy to work with. They came on time, provided a reasonable quote, worked efficiently, and did a great job (plaster and paint). Will definitely hire them again.',
    },
  },
  {
    name: 'Jennifer Broadfoot',
    time: MONTHS_AGO(1),
    content: {
      fr: "Les peintres ont travaillé efficacement et ont fait un excellent travail. Très satisfaite des résultats et de l'expérience dans l'ensemble.",
      en: 'The painters worked efficiently and did a great job. Happy with the results and experience overall.',
    },
  },
  {
    name: 'Robbie',
    time: MONTHS_AGO(1),
    content: {
      fr: "J'adore cette équipe\u00A0! Ils sont compétents, super gentils et professionnels. Alex et Philippe sont les meilleurs\u00A0! Ils ont fait ma terrasse arrière et je suis ravi du résultat\u00A0! Merci 🙏",
      en: 'I love these guys! They are competent and super sweet and professional. Alex and Philippe are the best!! They did my back deck and I am thrilled with the result!!!! Thank you 🙏',
    },
  },
];
