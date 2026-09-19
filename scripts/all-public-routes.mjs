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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const CITY_TO_SECTEUR = {
  montreal: '/secteurs/montreal',
  laval: '/secteurs/laval',
  longueuil: '/secteurs/longueuil',
  brossard: '/secteurs/rive-sud',
};

/** Pages qui rendent encore du contenu React (pré-rendu HTML complet). */
export const CONTENT_ROUTES = [
  '/',
  '/contact',
  '/a-propos',
  '/politique-de-confidentialite',
  '/mentions-legales',
  '/peintre-professionnel',
  '/avis-clients',
  '/realisations',
  '/peinture-interieure-montreal',
  '/peinture-exterieure-montreal',
  '/secteurs',
  '/secteurs/montreal',
  '/secteurs/montreal/westmount',
  '/secteurs/montreal/ville-marie',
  '/secteurs/montreal/plateau-mont-royal',
  '/secteurs/montreal/outremont',
  '/secteurs/laval',
  '/secteurs/longueuil',
  '/secteurs/gatineau',
  '/secteurs/rive-sud',
  '/services',
  '/services/peinture-commerciale',
  '/services/peinture-exterieure',
  '/services/peinture-residentielle',
  '/services/peinture-interieure',
  '/services/peinture-industrielle',
  '/services/teinture-exterieure',
  '/services/preparation-de-surfaces',
  '/services/peinture-au-pistolet',
  '/services/reparation-de-platre-et-gypse',
  '/services/peinture-apres-sinistre',
  '/services/peinture-residentielle/condo',
  '/services/peinture-residentielle/appartement',
  '/services/peinture-residentielle/maison',
  '/services/peinture-residentielle/interieure',
  '/services/peinture-residentielle/exterieure',
  '/services/peinture-commerciale/interieure',
  '/services/peinture-commerciale/exterieure',
  '/services/peinture-interieure/armoires-de-cuisine',
  // service × ville (SousServicePage)
  ...['peinture-interieure', 'peinture-exterieure', 'peinture-commerciale', 'peinture-residentielle', 'peinture-industrielle']
    .flatMap((s) => ['montreal', 'laval', 'longueuil', 'brossard'].map((c) => `/services/${s}/${c}`)),
  '/blog',
  '/blog/comment-choisir-un-peintre-professionnel',
  '/blog/prix-peinture-montreal',
  '/blog/erreurs-a-eviter-peinture-interieure',
  '/blog/peinture-armoires-cuisine-guide',
  '/blog/betonel-vs-benjamin-moore',
  // landings ads (noindex côté React, mais HTML réel)
  '/fr/peintre-montreal',
  '/fr/peintre-gatineau',
  '/en/peintre-montreal',
  '/en/painter-montreal',
  '/en/painter-gatineau',
];

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
  '/brossard': '/secteurs/rive-sud',
  '/a-propos-de-nous': '/a-propos',
  '/peintre-montreal': '/fr/peintre-montreal',
  '/secteurs-desservis': '/secteurs',
  '/secteurs-desservis/montreal': '/secteurs/montreal',
  '/secteurs-desservis/laval': '/secteurs/laval',
  '/secteurs-desservis/longueuil': '/secteurs/longueuil',
  '/secteurs-desservis/brossard': '/secteurs/rive-sud',
  '/services/new-peinture-interieure': '/services/peinture-interieure',
  '/services/new-peinture-exterieure': '/services/peinture-exterieure',
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
  const [, serviceSlug, param2] = m;
  if (param2 === 'interieure' || param2 === 'exterieure') {
    return `/services/${serviceSlug}`;
  }
  if (CITY_TO_SECTEUR[param2]) return CITY_TO_SECTEUR[param2];
  return '/services';
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

/**
 * Quartiers listés dans service_quartier (URLs legacy → redirect).
 * On lit les fichiers du dossier neighborhoods/ + les clés du data file.
 */
function readQuartierLegacyPaths() {
  const paths = new Set();
  const neighDir = path.join(
    ROOT,
    'src/lelever-next/services-pages/service_quartier/neighborhoods'
  );
  if (fs.existsSync(neighDir)) {
    for (const f of fs.readdirSync(neighDir)) {
      if (!f.endsWith('Data.js') && !f.endsWith('Data.jsx')) continue;
      // ahuntsicData.js → try to read slug from file, else kebab from name
      const src = fs.readFileSync(path.join(neighDir, f), 'utf-8');
      const slug =
        (src.match(/slug:\s*['"]([a-z0-9-]+)['"]/) || [])[1] ||
        f
          .replace(/Data\.jsx?$/, '')
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase();
      paths.add(`/services/peinture-interieure/montreal/${slug}`);
    }
  }

  const dataFile = path.join(
    ROOT,
    'src/lelever-next/services-pages/service_quartier/peintureInterieureSecteursData.js'
  );
  if (fs.existsSync(dataFile)) {
    const src = fs.readFileSync(dataFile, 'utf-8');
    const block = src.match(/neighborhoods\s*:\s*\{([\s\S]*?)\n\s*\},/);
    if (block) {
      for (const m of block[1].matchAll(/['"]?([a-z][a-z0-9-]*)['"]?\s*:/g)) {
        if (['fr', 'en', 'name'].includes(m[1])) continue;
        paths.add(`/services/peinture-interieure/montreal/${m[1]}`);
      }
    }
  }

  return [...paths];
}

/** Union de toutes les URLs publiques connues (inventaires + app + données). */
export function getUniversePaths() {
  const set = new Set([
    ...CONTENT_ROUTES,
    ...Object.keys(ALIAS_REDIRECTS),
    ...readLocs(path.join(ROOT, 'public', 'sitemap.xml')),
    ...readLocs(path.join(ROOT, 'public', 'sitemap-test.xml')),
    ...readAllRoutesTxt(),
    ...readQuartierLegacyPaths(),
    // sous-service × ville (4 services-subs × 4 villes)
    ...['peinture-commerciale', 'peinture-residentielle'].flatMap((svc) =>
      ['interieure', 'exterieure'].flatMap((sub) =>
        ['montreal', 'laval', 'longueuil', 'brossard'].map(
          (city) => `/services/${svc}/${sub}/${city}`
        )
      )
    ),
  ]);
  return [...set].map(normalize).filter((p) => !isPrivate(p)).sort();
}

/**
 * @returns {{ content: string[], redirects: Record<string, string>, uncovered: string[] }}
 */
export function classifyPublicRoutes() {
  const contentSet = new Set(CONTENT_ROUTES.map(normalize));
  const redirects = { ...ALIAS_REDIRECTS };
  const uncovered = [];

  for (const pathname of getUniversePaths()) {
    if (contentSet.has(pathname)) continue;
    if (redirects[pathname]) continue;

    const triple = resolveTriple(pathname);
    if (triple) {
      redirects[pathname] = triple;
      continue;
    }

    // Autres chemins /services/:a/:b inconnus → hub service ou /services
    const dual = pathname.match(/^\/services\/([^/]+)\/([^/]+)$/);
    if (dual) {
      redirects[pathname] = `/services/${dual[1]}`;
      continue;
    }

    uncovered.push(pathname);
  }

  for (const [from, to] of Object.entries(redirects)) {
    if (from === to) delete redirects[from];
    if (contentSet.has(from)) delete redirects[from];
  }

  return {
    content: [...contentSet].sort(),
    redirects,
    uncovered,
  };
}

export function redirectHtml(from, to) {
  const canonical = `https://www.leleverdupinceau.ca${to}`;
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
  const { content, redirects, uncovered } = classifyPublicRoutes();
  console.log(`Contenu à pré-rendre : ${content.length}`);
  console.log(`Redirects 301        : ${Object.keys(redirects).length}`);
  console.log(`Non classés          : ${uncovered.length}`);
  if (uncovered.length) {
    uncovered.forEach((p) => console.log(`  ✗ ${p}`));
    process.exit(1);
  }
  console.log('OK - toutes les URLs publiques sont classées.');
}
