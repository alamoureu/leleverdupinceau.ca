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
    fr: 'Équipes RBQ, chantiers propres et soumission rapide dans le Grand Montréal et Gatineau.',
    en: 'RBQ-licensed teams, clean job sites and fast quotes in Greater Montreal and Gatineau.',
  },
  aboutButtonText: {
    fr: 'Pourquoi un peintre professionnel',
    en: 'Why hire a professional painter',
  },
  aboutButtonLink: '/peintre-professionnel',
};

export const residentielleMaisonData = {
  name: {
    fr: 'Peinture de maison',
    en: 'House painting',
  },
  canonical:
    'https://leleverdupinceau.ca/services/peinture-residentielle/maison',
  h1: {
    fr: 'Peinture de maison',
    en: 'House painting',
  },
  introduction: {
    fr: [
      'Maisons unifamiliales, cottage et propriétés résidentielles : nous préparons les surfaces, protégeons vos pièces occupées et appliquons des finis durables.',
      'Sur rendez-vous, nous précisons les espaces à traiter, les couleurs et un échéancier réaliste.',
    ],
    en: [
      'Single-family homes, cottages and residential properties: we prepare surfaces, protect occupied rooms and apply durable finishes.',
      'On consultation we clarify areas to treat, colours and a realistic schedule.',
    ],
  },
  whyUsTitle: {
    fr: 'Pourquoi faire appel à nous pour votre maison',
    en: 'Why choose us for your house',
  },
  whyUsIntro: {
    fr: 'Nous adaptons la méthode à chaque pièce et à chaque étage :',
    en: 'We adapt our method to each room and floor:',
  },
  whyUsContent: {
    fr: [
      'Préparation et correction mineure avant peinture',
      'Protection des planchers, meubles et circulation',
      'Finitions cohérentes sur murs, plafonds et boiseries',
      'Respect des délais convenus avec vous',
    ],
    en: [
      'Prep and minor corrections before painting',
      'Protection of floors, furniture and traffic areas',
      'Consistent finishes on walls, ceilings and trim',
      'Respect for timelines agreed with you',
    ],
  },
  ...aboutBlock,
  ...complementaryResidential,
  ctaTitle: {
    fr: 'Obtenez votre soumission gratuite',
    en: 'Get your free quote',
  },
  ctaDescription: {
    fr: 'Décrivez votre maison et recevez une estimation sous 24 h.',
    en: 'Describe your home and receive an estimate within 24 hours.',
  },
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
      'Condos : espaces plus compacts, règlements de copropriété et contraintes d\'accès (stationnement, ascenseur, plages horaires).',
      'Nous coordonnons avec vous les étapes pour limiter le dérangement et livrer une finition nette.',
    ],
    en: [
      'Condos mean tighter spaces, syndicate rules and access constraints (parking, elevator, time windows).',
      'We coordinate steps with you to limit disruption and deliver a clean finish.',
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
      'Locations, déménagements ou préparation avant une nouvelle location : nous peignons 3½, 4½, 5½ et plus selon vos priorités.',
      'Nous optimisons les passages pour livrer vite sans sacrifier la qualité.',
    ],
    en: [
      'Rental turnovers, moves or prep before a new tenant: we paint 3½, 4½, 5½ and more according to your priorities.',
      'We optimize workflow to deliver quickly without sacrificing quality.',
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
      'Alternative économique au remplacement : préparation, apprêt et finis résistants pour une cuisine renouvelée.',
      'Nous travaillons méthodiquement pour une surface lisse et uniforme.',
    ],
    en: [
      'A cost-effective alternative to replacement: prep, primer and durable finishes for a refreshed kitchen.',
      'We work methodically for a smooth, uniform surface.',
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
