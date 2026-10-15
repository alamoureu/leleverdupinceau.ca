/**
 * Inventaire complet des URLs publiques et classification contenu vs redirect.
 * Source de vérité pour le pré-rendu : "rien ne doit tomber dans le fallback SPA"
 * sauf admin / timesheet / 404.
 *
 * Usage : importé par prerender.mjs ; aussi exécutable :
 *   node scripts/all-public-routes.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { OFFICIAL_SITE_LP_ROUTES } from './generate-sitemap.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const CITY_TO_SECTEUR = {
  montreal: '/secteurs/montreal',
  laval: '/secteurs/laval',
  longueuil: '/secteurs/longueuil',
  brossard: '/secteurs/brossard',
};

const NEIGHBORHOOD_TO_SECTEUR = {
  westmount: '/secteurs/montreal/westmount',
  outremont: '/secteurs/montreal/outremont',
  'plateau-mont-royal': '/secteurs/montreal/plateau-mont-royal',
  'ville-marie': '/secteurs/montreal/ville-marie',
};

/** Anciens slugs de quartiers (URLs legacy → redirect). */
const LEGACY_QUARTIER_SLUGS = [
  'ahuntsic',
  'bois-franc',
  'centre-ville',
  'cote-des-neiges',
  'griffintown',
  'hochelaga',
  'ile-des-soeurs',
  'lachine',
  'lasalle',
  'le-village',
  'mile-end',
  'notre-dame-de-grace',
  'outremont',
  'plateau-mont-royal',
  'pointe-saint-charles',
  'rosemont-petite-patrie',
  'saint-henri',
  'saint-leonard',
  'verdun',
  'ville-mont-royal',
  'ville-saint-laurent',
  'villeray',
  'westmount',
  'ville-marie',
];

/**
 * Pages pré-rendues en HTML (SSR) = sitemap officiel Site LP uniquement.
 * Les autres routes React restent en SPA (fallback Netlify).
 */
export const CONTENT_ROUTES = OFFICIAL_SITE_LP_ROUTES.map((r) => r.path);

/**
 * Landings pubs : pré-rendues avec noindex dans le HTML (pas de Disallow robots.txt),
 * hors sitemap. Google peut crawler et voir noindex plutôt qu'une fiche fantôme.
 */
/** One FR + one EN ads landing only (no duplicate EN peintre/painter URLs). */
export const NOINDEX_PRERENDER_ROUTES = [
  '/fr/peintre-montreal',
  '/en/painter-montreal',
];

/** Routes app hors Site LP - shell SPA uniquement (pas de HTML SSR). */
export const SPA_ONLY_ROUTES = [];

/** Redirects explicites (App.jsx <Navigate>). */
const ALIAS_REDIRECTS = {
  '/new-home': '/',
  '/new-home/contact': '/contact',
  '/new-home/a-propos': '/a-propos',
  '/new-contact': '/contact',
  '/politiques/confidentialite': '/politique-de-confidentialite',
  '/politiques/termes-conditions': '/mentions-legales',
  '/soumission': '/contact',
  '/avis': '/avis-clients',
  '/brossard': '/secteurs/brossard',
  '/a-propos-de-nous': '/a-propos',
  '/peintre-montreal': '/fr/peintre-montreal',
  '/en/peintre-montreal': '/en/painter-montreal',
  '/secteurs-desservis': '/secteurs',
  '/secteurs-desservis/montreal': '/secteurs/montreal',
  '/secteurs-desservis/laval': '/secteurs/laval',
  '/secteurs-desservis/longueuil': '/secteurs/longueuil',
  '/secteurs-desservis/brossard': '/secteurs/brossard',
  '/services/new-peinture-interieure': '/services/peinture-interieure',
  '/services/new-peinture-exterieure': '/services/peinture-exterieure',
  '/services/peinture-residentielle/interieure': '/services/peinture-residentielle',
  '/services/peinture-residentielle/exterieure': '/services/peinture-residentielle',
  '/services/peinture-commerciale/interieure': '/services/peinture-commerciale',
  '/services/peinture-commerciale/exterieure': '/services/peinture-commerciale',
  '/peinture-interieure-montreal': '/services/peinture-interieure',
  '/peinture-exterieure-montreal': '/services/peinture-exterieure',
};

function normalize(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function isPrivate(pathname) {
  return (
    pathname === '/timesheet' ||
    pathname === '/emplois' ||
    pathname === '/404' ||
    pathname === '/admin' ||
    pathname.startsWith('/admin/')
  );
}

/** Même logique que LegacyTripleSegmentRedirect.jsx */
function resolveTriple(pathname) {
  const m = pathname.match(/^\/services\/([^/]+)\/([^/]+)\/([^/]+)$/);
  if (!m) return null;
  const [, serviceSlug, param2, param3] = m;
  // City last segment wins over interieure/exterieure (consolidates city intent)
  if (param3 && CITY_TO_SECTEUR[param3]) {
    return CITY_TO_SECTEUR[param3];
  }
  if (param3 && NEIGHBORHOOD_TO_SECTEUR[param3]) {
    return NEIGHBORHOOD_TO_SECTEUR[param3];
  }
  if (param2 === 'interieure' || param2 === 'exterieure') {
    return `/services/${serviceSlug}`;
  }
  if (CITY_TO_SECTEUR[param2]) return CITY_TO_SECTEUR[param2];
  return '/services';
}

/** Legacy /services/:service/:city → /secteurs/:city ; sinon hub service. */
function resolveDual(pathname) {
  const m = pathname.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (!m) return null;
  const [, serviceSlug, param2] = m;
  if (CITY_TO_SECTEUR[param2]) return CITY_TO_SECTEUR[param2];
  if (param2 === 'interieure' || param2 === 'exterieure') {
    return `/services/${serviceSlug}`;
  }
  return `/services/${serviceSlug}`;
}

function readLocs(xmlPath) {
  if (!fs.existsSync(xmlPath)) return [];
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  const out = [];
  for (const match of xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)) {
    try {
      out.push(normalize(new URL(match[1]).pathname));
    } catch {
      /* ignore */
    }
  }
  return out;
}

function readAllRoutesTxt() {
  const p = path.join(ROOT, 'ALL_ROUTES.txt');
  if (!fs.existsSync(p)) return [];
  return fs
    .readFileSync(p, 'utf-8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map(normalize);
}

function legacyQuartierPaths() {
  return LEGACY_QUARTIER_SLUGS.map(
    (slug) => `/services/peinture-interieure/montreal/${slug}`
  );
}

function legacyServiceCityPaths() {
  return [
    'peinture-interieure',
    'peinture-exterieure',
    'peinture-commerciale',
    'peinture-residentielle',
    'peinture-industrielle',
  ].flatMap((s) =>
    ['montreal', 'laval', 'longueuil', 'brossard'].map((c) => `/services/${s}/${c}`)
  );
}

function legacySousServiceCityPaths() {
  return ['peinture-commerciale', 'peinture-residentielle'].flatMap((svc) =>
    ['interieure', 'exterieure'].flatMap((sub) =>
      ['montreal', 'laval', 'longueuil', 'brossard'].map(
        (city) => `/services/${svc}/${sub}/${city}`
      )
    )
  );
}

/** Union de toutes les URLs publiques connues (inventaires + app + données). */
export function getUniversePaths() {
  const set = new Set([
    ...CONTENT_ROUTES,
    ...NOINDEX_PRERENDER_ROUTES,
    ...SPA_ONLY_ROUTES,
    ...Object.keys(ALIAS_REDIRECTS),
    ...readLocs(path.join(ROOT, 'public', 'sitemap.xml')),
    ...readAllRoutesTxt(),
    ...legacyQuartierPaths(),
    ...legacyServiceCityPaths(),
    ...legacySousServiceCityPaths(),
  ]);
  return [...set].map(normalize).filter((p) => !isPrivate(p)).sort();
}

/**
 * @returns {{ content: string[], noindexPrerender: string[], redirects: Record<string, string>, spaOnly: string[], uncovered: string[] }}
 */
export function classifyPublicRoutes() {
  const contentSet = new Set(CONTENT_ROUTES.map(normalize));
  const noindexSet = new Set(NOINDEX_PRERENDER_ROUTES.map(normalize));
  const spaOnlySet = new Set(SPA_ONLY_ROUTES.map(normalize));
  const redirects = { ...ALIAS_REDIRECTS };
  const uncovered = [];

  for (const pathname of getUniversePaths()) {
    if (contentSet.has(pathname)) continue;
    if (noindexSet.has(pathname)) continue;
    if (spaOnlySet.has(pathname)) continue;
    if (redirects[pathname]) continue;

    const triple = resolveTriple(pathname);
    if (triple) {
      redirects[pathname] = triple;
      continue;
    }

    const dual = resolveDual(pathname);
    if (dual) {
      redirects[pathname] = dual;
      continue;
    }

    spaOnlySet.add(pathname);
  }

  for (const [from, to] of Object.entries(redirects)) {
    if (from === to) delete redirects[from];
    if (contentSet.has(from)) delete redirects[from];
    if (noindexSet.has(from)) delete redirects[from];
    if (spaOnlySet.has(from)) delete redirects[from];
  }

  return {
    content: [...contentSet].sort((a, b) => {
      if (a === '/') return -1;
      if (b === '/') return 1;
      return a.localeCompare(b);
    }),
    noindexPrerender: [...noindexSet].sort(),
    redirects,
    spaOnly: [...spaOnlySet].sort(),
    uncovered,
  };
}

export function redirectHtml(from, to) {
  const canonical = `https://leleverdupinceau.ca${to}`;
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Redirection</title>
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="refresh" content="0;url=${to}">
  <meta name="robots" content="noindex, follow">
</head>
<body>
  <p>Cette page a déménagé. <a href="${to}">Continuer vers ${to}</a>.</p>
  <!-- legacy-redirect: ${from} → ${to} -->
</body>
</html>
`;
}

// CLI : rapport de couverture
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const { content, noindexPrerender, redirects, spaOnly, uncovered } = classifyPublicRoutes();
  console.log(`Contenu à pré-rendre (Site LP) : ${content.length}`);
  console.log(`Landings noindex (pré-rendu)  : ${noindexPrerender.length}`);
  console.log(`Redirects 301                 : ${Object.keys(redirects).length}`);
  console.log(`SPA only (pas de HTML SSR)    : ${spaOnly.length}`);
  console.log(`Non classés                   : ${uncovered.length}`);
  if (uncovered.length) {
    uncovered.forEach((p) => console.log(`  ✗ ${p}`));
    process.exit(1);
  }
  console.log('OK - Site LP pré-rendu ; landings noindex ; reste en SPA ou redirect.');
}
