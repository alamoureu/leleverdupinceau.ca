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

/** Strip trailing slash (except `/`) so path checks stay stable. */
export function normalizePathname(pathname = '') {
  if (!pathname) return '/';
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function isAdsLandingPath(pathname) {
  return ADS_LANDING_PATHS.includes(normalizePathname(pathname));
}

export function isStlpLandingPath(pathname) {
  return STLP_LANDING_PATHS.includes(normalizePathname(pathname));
}

/**
 * Ads + STLP paths. Prefer LandingLayout in the router over branching on this
 * inside WebsiteLayout - chrome must be locked by route layout, not pathname.
 */
export function isLocaleLandingPath(pathname) {
  return isAdsLandingPath(pathname) || isStlpLandingPath(pathname);
}
