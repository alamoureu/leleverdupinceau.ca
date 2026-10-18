/** Ads landing (Google Ads, noindex). */
export const ADS_LANDING_PATHS = [
  '/fr/peintre-montreal',
  '/en/painter-montreal',
];

/** STLP landing (indexable Montreal cluster). */
export const STLP_LANDING_PATHS = [
  '/fr/stlp-peinture-inc',
  '/en/stlp-peinture-inc',
];

/** FR/EN pairs for the floating language toggle on landings. */
export const LANDING_LOCALE_PAIRS = {
  '/fr/peintre-montreal': '/en/painter-montreal',
  '/en/painter-montreal': '/fr/peintre-montreal',
  '/fr/stlp-peinture-inc': '/en/stlp-peinture-inc',
  '/en/stlp-peinture-inc': '/fr/stlp-peinture-inc',
};

export function isAdsLandingPath(pathname) {
  return ADS_LANDING_PATHS.includes(pathname);
}

export function isStlpLandingPath(pathname) {
  return STLP_LANDING_PATHS.includes(pathname);
}

/** Ads + STLP: minimal chrome (no hamburger, no site footer). */
export function isLocaleLandingPath(pathname) {
  return isAdsLandingPath(pathname) || isStlpLandingPath(pathname);
}
