/**
 * SEO config - Montreal painting company
 * Goal: dominate "peinture Montréal", "painting Montreal", "peintre professionnel Montréal"
 */

import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_LABEL, GOOGLE_REVIEWS_URL } from '../constants/googleReviews';
import {
  BUSINESS_HOURS_CLOSES,
  BUSINESS_HOURS_OPENS,
  COMPANY_EMAIL,
  RBQ_LICENSE,
} from '../constants/company';

/** Canonical host = apex (Netlify 301s www → apex). */
export const SITE_URL = 'https://leleverdupinceau.ca';

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

/** Default meta for social / fallback (aligned with NewHomePage) */
export const DEFAULT_META = {
  fr: {
    title: 'Peintre professionnel à Montréal | Le Lever du Pinceau',
    description: `Peintre à Montréal : intérieur, extérieur, résidentiel et commercial. ${GOOGLE_REVIEWS_LABEL.fr} 5 étoiles, licence RBQ, soumission gratuite en 24h.`,
  },
  en: {
    title: 'Professional Painter in Montreal | Le Lever du Pinceau',
    description: `Montreal painter: interior, exterior, residential and commercial. ${GOOGLE_REVIEW_COUNT}+ 5-star reviews, RBQ license, free quote in 24h.`,
  },
};

/** LocalBusiness schema used in layout (enhanced for Montreal) */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://leleverdupinceau.ca/#organization',
  name: 'Le Lever du Pinceau',
  alternateName: 'Le Lever du Pinceau - Peintres professionnels Montréal',
  description:
    'Entreprise de peinture professionnelle à Montréal, Laval, Longueuil et Brossard. Peinture résidentielle, commerciale, intérieure, extérieure et industrielle. Devis gratuit. Équipe qualifiée RBQ.',
  url: 'https://leleverdupinceau.ca',
  telephone: '+14388680772',
  email: COMPANY_EMAIL,
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
    { '@type': 'City', name: 'Saint-Lambert' },
    { '@type': 'City', name: 'La Prairie' },
    { '@type': 'AdministrativeArea', name: 'Rive-Sud' },
    { '@type': 'AdministrativeArea', name: 'Grand Montréal' },
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: BUSINESS_HOURS_OPENS,
    closes: BUSINESS_HOURS_CLOSES,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(GOOGLE_RATING),
    bestRating: '5',
    worstRating: '1',
    ratingCount: String(GOOGLE_REVIEW_COUNT),
  },
  image: 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_1.jpg',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100094900160859',
    'https://www.instagram.com/leleverdupinceau',
    GOOGLE_REVIEWS_URL,
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'Licence RBQ',
    identifier: RBQ_LICENSE,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de peinture',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture résidentielle' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture commerciale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture intérieure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture extérieure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture industrielle' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Teinture extérieure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Préparation de surfaces' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture au pistolet' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réparation de plâtre et gypse' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture après-sinistre' } },
    ],
  },
};
