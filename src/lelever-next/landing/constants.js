/**
 * Landing page SEO and config. Single source of truth for meta and URLs.
 */

export const CANONICAL_BASE = 'https://www.leleverdupinceau.ca';

/**
 * Padding-top du contenu hero : dégagement surtout de la barre fixe (logo + tel).
 * Le badge Google est à droite ; le titre est à gauche, donc pas besoin d’empiler la hauteur du badge.
 * La hauteur visuelle du bloc est préservée via un spacer sous le contenu dans `LandingHeroSection`.
 */
export const LANDING_MAIN_CONTENT_PT = {
  base: '130px',
  sm: '130px',
  md: '175px',
  lg: '175px',
  xl: '225px',
};

/** Sur mobile (`h: auto`), réserve sous le CTA ; un peu moins haut pour rapprocher WhyUs du clip en V. */
export const LANDING_HERO_MOBILE_PT_COMPENSATION = {
  base: '44px',
  sm: '48px',
};

/**
 * Rythme vertical unique pour `LandingPageV2` : même `py` entre blocs sur tous les breakpoints (tokens Chakra).
 * Les autres pages gardent leurs valeurs par défaut si `sectionPy` n’est pas passé.
 */
export const LANDING_SECTION_PY = {
  base: 10,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 20,
  '2xl': 24,
};

/** 50 % de `LANDING_SECTION_PY` : paires pb + pt pour réduire de moitié l’espace entre deux blocs (landing). */
export const LANDING_SECTION_PY_HALF = {
  base: 5,
  sm: 5,
  md: 8,
  lg: 10,
  xl: 10,
  '2xl': 12,
};

/**
 * Moins d’espace vertical autour du bandeau Bétonel (mobile) : moitié de `LANDING_SECTION_PY` en base/sm, identique au-dessus de md.
 */
export const LANDING_BETONEL_BAND_PY = {
  base: 5,
  sm: 5,
  md: 16,
  lg: 20,
  xl: 20,
  '2xl': 24,
};

/** Pt du bloc Why Us sous le hero (un peu moins que `LANDING_SECTION_PY` sur mobile). */
export const LANDING_WHYUS_SECTION_PT = {
  base: 3,
  sm: 3,
  md: 8,
  lg: 10,
  xl: '95px',
  '2xl': '125px',
};

export const LANDING_META = {
  fr: {
    title: 'Entreprise de Peinture à Montréal | Le Lever du Pinceau',
    description:
      "Découvrez les meilleurs services de peinture intérieure et extérieure à Montréal avec Le Lever du Pinceau. Travail professionnel, matériaux de qualité et prix compétitifs. Demandez votre soumission gratuite dès aujourd'hui.",
    keywords:
      'Peinture intérieure Montréal, Peinture extérieure Montréal, Services de peinture résidentielle, Peintres professionnels, Devis peinture Montréal',
  },
  en: {
    title: 'Painting Company Montreal | Le Lever du Pinceau',
    description:
      'Discover the best interior and exterior painting services in Montreal with Le Lever du Pinceau. Professional work, quality materials and competitive prices. Request your free quote today.',
    keywords:
      'Interior painting Montreal, Exterior painting Montreal, Residential painting services, Professional painters, Painting quote Montreal',
  },
};
