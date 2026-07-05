import { CANONICAL_BASE } from './constants';

/** Breadcrumb schema for the indexable STLP landing — cluster signal without visible links sitewide. */
export function buildStlpBreadcrumbSchema(lang) {
  const isFr = lang !== 'en';
  const path = isFr ? '/fr/stlp' : '/en/stlp';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isFr ? 'Accueil' : 'Home',
        item: `${CANONICAL_BASE}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isFr ? 'Peintres professionnels' : 'Professional painters',
        item: `${CANONICAL_BASE}/peintre-professionnel`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isFr ? 'Peintres à Montréal' : 'Painters in Montreal',
        item: `${CANONICAL_BASE}${path}`,
      },
    ],
  };
}
