/**
 * Pages où le badge avis Google est accroché sous la nav (coin droit du héros).
 * Doit rester aligné avec WebsiteNavBar.
 */
const REVIEW_BADGE_PATHS = new Set([
  '/peintre-professionnel',
  '/a-propos',
  '/avis-clients',
  '/blog',
  '/realisations',
  '/contact',
  '/fr/peintre-montreal',
  '/en/peintre-montreal',
  '/en/painter-montreal',
]);

export function showsNavReviewBadge(pathname = '') {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/') return true;
  if (path.startsWith('/services') || path.startsWith('/secteurs')) return true;
  return REVIEW_BADGE_PATHS.has(path);
}
