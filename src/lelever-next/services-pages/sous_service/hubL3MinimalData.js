/**
 * Minimal L3 hub entries linked from /services (Batch 1 sitemap).
 * Full editorial enrichment can replace these bodies later.
 */

const complementaryResidential = {
  complementaryServicesTitle: {
    fr: 'Voir aussi',
    en: 'See also',
  },
  complementaryServicesIntro: {
    fr: 'Pour une vue complète de nos offres résidentielles :',
    en: 'For a full view of our residential offerings:',
  },
  complementaryServices: [
    {
      title: {
        fr: 'Peinture résidentielle',
        en: 'Residential painting',
      },
      href: '/services/peinture-residentielle',
    },
  ],
};

const complementaryInterior = {
  complementaryServicesTitle: {
    fr: 'Voir aussi',
    en: 'See also',
  },
  complementaryServicesIntro: {
    fr: 'Découvrez l\'ensemble de nos services intérieurs :',
    en: 'Explore all our interior services:',
  },
  complementaryServices: [
    {
      title: {
        fr: 'Peinture intérieure',
        en: 'Interior painting',
      },
      href: '/services/peinture-interieure',
    },
  ],
};

const aboutBlock = {
  aboutTitle: {
    fr: 'Des peintres professionnels pour votre projet',
    en: 'Professional painters for your project',
  },
  aboutDescription: {
    fr: 'Équipes RBQ, chantiers propres et soumission rapide dans le Grand Montréal.',
    en: 'RBQ-licensed teams, clean job sites and fast quotes in Greater Montreal.',
  },
  aboutButtonText: {
    fr: 'Pourquoi un peintre professionnel',
    en: 'Why hire a professional painter',
  },
  aboutButtonLink: '/peintre-professionnel',
};

export const residentielleCondoData = {
  name: {
    fr: 'Peinture de condo',
    en: 'Condo painting',
  },
  canonical:
    'https://leleverdupinceau.ca/services/peinture-residentielle/condo',
  h1: {
    fr: 'Peinture de condo',
    en: 'Condo painting',
  },
  introduction: {
    fr: [
      'Espaces compacts, règlements de copropriété et accès serrés.',
      'Coordination claire pour limiter le dérangement.',
    ],
    en: [
      'Tighter spaces, syndicate rules and limited access.',
      'Clear coordination to limit disruption.',
    ],
  },
  whyUsTitle: {
    fr: 'Une approche adaptée aux condos',
    en: 'An approach suited to condos',
  },
  whyUsIntro: {
    fr: 'Nous sommes habitués aux projets en copropriété :',
    en: 'We are used to strata projects:',
  },
  whyUsContent: {
    fr: [
      'Respect des règles d\'accès et du voisinage',
      'Protection et circulation dans les corridors',
      'Zones fréquentes : entrée, cuisine, chambres, salle de bain',
      'Peintres ponctuels et chantier laissé propre',
    ],
    en: [
      'Respect for access rules and neighbours',
      'Protection and flow in hallways',
      'Common zones: entry, kitchen, bedrooms, bathroom',
      'Punctual painters and a tidy site',
    ],
  },
  ...aboutBlock,
  ...complementaryResidential,
  ctaTitle: {
    fr: 'Obtenez votre soumission gratuite',
    en: 'Get your free quote',
  },
  ctaDescription: {
    fr: 'Parlez-nous de votre condo et du syndicat si besoin.',
    en: 'Tell us about your condo and syndicate requirements if any.',
  },
};

export const residentielleAppartementData = {
  name: {
    fr: 'Peinture d\'appartement',
    en: 'Apartment painting',
  },
  canonical:
    'https://leleverdupinceau.ca/services/peinture-residentielle/appartement',
  h1: {
    fr: 'Peinture d\'appartement',
    en: 'Apartment painting',
  },
  introduction: {
    fr: [
      'Remise au propre rapide pour location, déménagement ou turnover.',
      '3½, 4½, 5½ et plus - livré vite, sans sacrifier la qualité.',
    ],
    en: [
      'Quick refresh for rentals, moves or tenant turnover.',
      '3½, 4½, 5½ and more - delivered fast without cutting quality.',
    ],
  },
  whyUsTitle: {
    fr: 'Pour les locataires et propriétaires',
    en: 'For tenants and landlords',
  },
  whyUsIntro: {
    fr: 'Nous couvrons les besoins typiques des appartements :',
    en: 'We cover typical apartment needs:',
  },
  whyUsContent: {
    fr: [
      'Murs et plafonds avec retouches ciblées si besoin',
      'Portes, chambranles et surfaces à fort passage',
      'Coordination avec dates de déménagement ou de location',
      'Estimation claire avant le début des travaux',
    ],
    en: [
      'Walls and ceilings with targeted touch-ups if needed',
      'Doors, jambs and high-traffic surfaces',
      'Coordination with move-in or lease dates',
      'Clear estimate before work begins',
    ],
  },
  ...aboutBlock,
  ...complementaryResidential,
  ctaTitle: {
    fr: 'Obtenez votre soumission gratuite',
    en: 'Get your free quote',
  },
  ctaDescription: {
    fr: 'Indiquez la superficie et les pièces à repeindre.',
    en: 'Share square footage and rooms to repaint.',
  },
};

export const interieureArmoiresData = {
  name: {
    fr: 'Peinture d\'armoires de cuisine',
    en: 'Kitchen cabinet painting',
  },
  canonical:
    'https://leleverdupinceau.ca/services/peinture-interieure/armoires-de-cuisine',
  h1: {
    fr: 'Peinture d\'armoires de cuisine',
    en: 'Kitchen cabinet painting',
  },
  introduction: {
    fr: [
      'Alternative économique au remplacement, fini net et durable.',
      'Préparation, apprêt et finition pour une surface uniforme.',
    ],
    en: [
      'A cost-effective alternative to replacement, clean and durable.',
      'Prep, primer and finish for a uniform surface.',
    ],
  },
  whyUsTitle: {
    fr: 'Processus maîtrisé',
    en: 'Controlled process',
  },
  whyUsIntro: {
    fr: 'Les étapes clés pour un résultat durable :',
    en: 'Key steps for a lasting result:',
  },
  whyUsContent: {
    fr: [
      'Dégraissage et ponçage adaptés au matériau',
      'Apprêt et couches de finition compatibles usage cuisine',
      'Contrôle des coulures et des traces de pinceau',
      'Chantier protégé dans la pièce',
    ],
    en: [
      'Degreasing and sanding suited to the material',
      'Primer and top coats suited to kitchen use',
      'Control of runs and brush marks',
      'Protected work area in the room',
    ],
  },
  ...aboutBlock,
  ...complementaryInterior,
  ctaTitle: {
    fr: 'Obtenez votre soumission gratuite',
    en: 'Get your free quote',
  },
  ctaDescription: {
    fr: 'Envoyez une photo de vos armoires pour une première estimation.',
    en: 'Send a photo of your cabinets for a first estimate.',
  },
};
