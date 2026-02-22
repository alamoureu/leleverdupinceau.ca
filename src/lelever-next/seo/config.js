/**
 * SEO config – Montreal painting company
 * Goal: dominate "peinture Montréal", "painting Montreal", "peintre professionnel Montréal"
 */

export const SITE_URL = 'https://www.leleverdupinceau.ca';

export const DEFAULT_OG_IMAGE = 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_1.jpg';

export const SITE_NAME = 'Le Lever du Pinceau';

/** Primary keywords for Montreal painting (FR + EN) */
export const KEYWORDS = {
  fr: [
    'peinture Montréal',
    'peintre professionnel Montréal',
    'peinture résidentielle Montréal',
    'peinture commerciale Montréal',
    'peinture intérieure Montréal',
    'peinture extérieure Montréal',
    'peintre Laval',
    'peinture Longueuil',
    'peinture Brossard',
    'Grand Montréal peinture',
    'devis peinture gratuit Montréal',
    'entreprise de peinture Montréal',
    'peintre recommandé Montréal',
  ].join(', '),
  en: [
    'painting Montreal',
    'professional painter Montreal',
    'residential painting Montreal',
    'commercial painting Montreal',
    'interior painting Montreal',
    'exterior painting Montreal',
    'painter Laval',
    'painting Longueuil',
    'painting Brossard',
    'Greater Montreal painting',
    'free painting quote Montreal',
    'painting company Montreal',
    'recommended painter Montreal',
  ].join(', '),
};

/** Default meta for social / fallback */
export const DEFAULT_META = {
  fr: {
    title: 'Peinture résidentielle et commerciale à Montréal | Le Lever du Pinceau – #1',
    description:
      'Entreprise de peinture #1 à Montréal. Peinture intérieure, extérieure, résidentielle et commerciale. Laval, Longueuil, Brossard. Devis gratuit. Équipe professionnelle, finition impeccable.',
  },
  en: {
    title: 'Residential & Commercial Painting Montreal | Le Lever du Pinceau – #1',
    description:
      '#1 painting company in Montreal. Interior, exterior, residential and commercial painting. Laval, Longueuil, Brossard. Free quote. Professional team, impeccable finish.',
  },
};

/** LocalBusiness schema used in layout (enhanced for Montreal) */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.leleverdupinceau.ca/#organization',
  name: 'Le Lever du Pinceau',
  alternateName: 'Le Lever du Pinceau – Peintres professionnels Montréal',
  description:
    'Entreprise de peinture professionnelle à Montréal, Laval, Longueuil et Brossard. Peinture résidentielle, commerciale, intérieure, extérieure et industrielle. Devis gratuit. Équipe qualifiée RBQ.',
  url: 'https://www.leleverdupinceau.ca',
  telephone: '+14388680772',
  email: 'leleverdupinceau@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2175 Rue Saint-Patrick',
    addressLocality: 'Montréal',
    addressRegion: 'QC',
    postalCode: 'H3K 1B4',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.48264,
    longitude: -73.56835,
  },
  areaServed: [
    { '@type': 'City', name: 'Montréal', containedInPlace: { '@type': 'State', name: 'Quebec' } },
    { '@type': 'City', name: 'Laval' },
    { '@type': 'City', name: 'Longueuil' },
    { '@type': 'City', name: 'Brossard' },
    { '@type': 'AdministrativeArea', name: 'Grand Montréal' },
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '05:30',
    closes: '23:30',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '100',
  },
  image: 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_1.jpg',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100094900160859',
    'https://www.instagram.com/leleverdupinceau',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de peinture',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture résidentielle' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture commerciale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture intérieure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture extérieure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture industrielle' } },
    ],
  },
};
