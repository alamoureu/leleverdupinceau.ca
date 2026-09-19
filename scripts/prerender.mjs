/**
 * PRÉ-RENDU HTML (SEO)
 *
 * Après `vite build` : crawl Chromium de toutes les pages contenu, écriture HTML dans
 * dist/, puis génération des 301 legacy pour le reste des URLs publiques historiques.
 *
 * Inventaire : scripts/all-public-routes.mjs (App + sitemaps + ALL_ROUTES + données).
 *
 * Usage : node scripts/prerender.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';
import {
  classifyPublicRoutes,
  redirectHtml,
} from './all-public-routes.mjs';

// Chromium vit dans node_modules (voir netlify.toml + npm run playwright:install).
// Sans ça, Playwright cherche dans ~/Library/Caches et échoue en local.
if (!process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = '0';
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const PORT = Number(process.env.PRERENDER_PORT || 4179);
/** Nombre d'onglets Chromium en parallèle. Au-delà, le CPU des runners Netlify sature. */
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
/** Délai max d'attente du rendu React pour une page. */
const PAGE_TIMEOUT = Number(process.env.PRERENDER_TIMEOUT || 45000);
/** Tentatives par route (vite preview renvoie parfois un 404 transitoire sous charge). */
const ROUTE_RETRIES = Number(process.env.PRERENDER_RETRIES || 3);

/**
 * Hôtes de mesure d'audience bloqués pendant le crawl. Sans ça, chaque build enverrait
 * une quarantaine de fausses visites dans GA4 et Microsoft Clarity, et leurs scripts
 * seraient figés dans le HTML statique. Les vrais visiteurs les chargent normalement :
 * les balises d'origine de index.html et des composants React restent intactes.
 */
const TRACKER_HOSTS = [
  'googletagmanager.com',
  'google-analytics.com',
  'googleadservices.com',
  'doubleclick.net',
  'clarity.ms',
  'connect.facebook.net',
  'facebook.com',
];

const c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
};

/** `/` → dist/index.html, `/contact` → dist/contact/index.html */
function outputFileFor(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, ...route.split('/').filter(Boolean), 'index.html');
}

/**
 * Attend que la page soit réellement rendue : les routes sont en `React.lazy`, donc
 * `#root` reste vide un instant après le chargement du document.
 */
async function waitForRender(page) {
  await page.waitForFunction(
    () => {
      const root = document.getElementById('root');
      if (!root) return false;
      const text = root.innerText || '';
      return text.trim().length > 200 && Boolean(document.title);
    },
    { timeout: PAGE_TIMEOUT }
  );
  // react-helmet applique les meta dans un effet, une frame après le premier rendu.
  await page.waitForFunction(
    () => Boolean(document.querySelector('meta[name="description"]')),
    { timeout: 5000 }
  ).catch(() => {});
}

/**
 * Relève les scripts du gabarit produit par `vite build`. Tout script présent dans la page
 * rendue mais absent de cette liste a été injecté au runtime (analytics, beacons de
 * conversion) : il ne doit pas être figé dans le HTML statique.
 */
function readTemplateScripts() {
  const html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
  const srcs = new Set();
  const inline = new Set();

  for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const src = match[1].match(/\ssrc=["']([^"']+)["']/);
    if (src) srcs.add(src[1]);
    else if (match[2].trim()) inline.add(match[2].trim());
  }

  return { srcs: [...srcs], inline: [...inline] };
}

/**
 * Nettoie le DOM avant sérialisation. Le HTML capturé est celui d'une page déjà exécutée :
 * il contient des tags injectés au runtime qu'il ne faut pas figer dans le fichier statique.
 *
 * Note : cette fonction est sérialisée dans Chromium via page.evaluate - elle ne peut
 * pas référencer d'autres helpers du module Node (tout doit être inline).
 */
function cleanDocumentForSerialization({ template, trackerHosts }) {
  // 1. Ne garder que les scripts du gabarit, plus le JSON-LD de react-helmet qui est
  // justement ce qu'on veut rendre visible aux crawlers. Les scripts d'analytics sont
  // réinjectés côté client par index.html et les composants React chez le visiteur.
  document.querySelectorAll('script').forEach((el) => {
    if (el.type === 'application/ld+json') return;
    const src = el.getAttribute('src');
    const keep = src
      ? template.srcs.includes(src)
      : template.inline.includes((el.textContent || '').trim());
    if (!keep) el.remove();
  });

  // 2. Les traqueurs ajoutent aussi des iframes et des <link> (preconnect, css).
  document.querySelectorAll('iframe[src], link[href]').forEach((el) => {
    const url = el.getAttribute('src') || el.getAttribute('href') || '';
    if (trackerHosts.some((host) => url.includes(host))) el.remove();
  });

  // 3. index.html porte des meta statiques de repli. Quand react-helmet a fourni
  // l'équivalent pour cette page, la version statique devient un doublon que les
  // crawlers signalent.
  document.querySelectorAll('meta[data-react-helmet]').forEach((helmetMeta) => {
    const key = helmetMeta.getAttribute('name')
      ? `meta[name="${helmetMeta.getAttribute('name')}"]`
      : helmetMeta.getAttribute('property')
        ? `meta[property="${helmetMeta.getAttribute('property')}"]`
        : null;
    if (!key) return;
    document.querySelectorAll(key).forEach((meta) => {
      if (!meta.hasAttribute('data-react-helmet')) meta.remove();
    });
  });
  document.querySelectorAll('link[rel="canonical"]').forEach((link) => {
    if (!link.hasAttribute('data-react-helmet')) link.remove();
  });

  // 4. Le chargement asynchrone des polices bascule `rel` de "preload" à "stylesheet"
  // via onload. Sérialisé tel quel, le CSS redeviendrait bloquant au premier rendu.
  document.querySelectorAll('link[onload][as="style"]').forEach((link) => {
    link.setAttribute('rel', 'preload');
  });

  // 4b. Emotion / Chakra injecte les règles via CSSOM (style.textContent reste vide).
  // outerHTML ne sérialise pas le CSSOM → HTML sans CSS → images aux dimensions
  // intrinsèques (~38k px de haut) puis collapse au chargement JS = CLS ~0.40.
  document.querySelectorAll('style[data-emotion]').forEach((styleEl) => {
    const sheet = styleEl.sheet;
    if (!sheet) return;
    try {
      const css = [...sheet.cssRules].map((rule) => rule.cssText).join('');
      if (css) styleEl.textContent = css;
    } catch {
      // Feuilles cross-origin illisibles : ignorer.
    }
  });

  // 4c. Filet de sécurité avant émotion : réserver le ratio sans exploser la largeur.
  if (!document.getElementById('cls-img-aspect')) {
    const imgCss = document.createElement('style');
    imgCss.id = 'cls-img-aspect';
    imgCss.textContent =
      'img[width][height]{max-width:100%;}';
    document.head.appendChild(imgCss);
  }

  // 4d. Signale au client qu'il s'agit d'un HTML pré-rendu (PageSkeleton CLS guard).
  document.documentElement.setAttribute('data-prerender', '1');


  // 5. PERF CRITIQUE : pendant le crawl, React.lazy charge TOUTES les chunks de la
  // page (y compris les modules d'images 2 Mo). Vite injecte alors un
  // <link rel="modulepreload"> pour chacune. Si on les laisse dans le HTML, le
  // navigateur télécharge ~15-17 Mo au premier paint (LCP 20s+) et allonge la
  // chaîne critique (HTML → vendor ~190 Ko). On retire TOUS les modulepreload :
  // le contenu LCP est déjà dans le HTML pré-rendu ; Vite chargera les JS à
  // l'hydratation sans concurrencer l'image LCP sur la bande passante.
  document.querySelectorAll('link[rel="modulepreload"]').forEach((link) => {
    link.remove();
  });
  document.querySelectorAll('link[rel="preload"][as="image"]').forEach((link) => {
    link.remove();
  });

  // 6. Images : ne PAS muter width/height/loading/fetchpriority ici.
  // Ces attrs viennent de React (htmlWidth, etc.). Les réécrire avec
  // naturalWidth casse l'hydratation (React #418) → client re-render → CLS ~0.40.
  // Le CSS Emotion est déjà flushé (4b) + max-width de secours (4c).
}

async function renderRouteOnce(browser, baseUrl, route, template) {
  const page = await browser.newPage({
    viewport: { width: 1366, height: 900 },
    // Certaines sections attendent un UA "réel" avant d'afficher le contenu enrichi.
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 leleverdupinceau-prerender',
  });

  try {
    await page.route('**/*', (route_) => {
      const host = new URL(route_.request().url()).hostname;
      if (TRACKER_HOSTS.some((t) => host === t || host.endsWith(`.${t}`))) {
        return route_.abort();
      }
      return route_.continue();
    });

    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle',
      timeout: PAGE_TIMEOUT,
    });
    if (response && response.status() >= 400) {
      throw new Error(`HTTP ${response.status()}`);
    }

    await waitForRender(page);

    await page.evaluate(cleanDocumentForSerialization, {
      template,
      trackerHosts: TRACKER_HOSTS,
    });

    const html = await page.evaluate(
      () => `<!DOCTYPE html>\n${document.documentElement.outerHTML}`
    );

    if (html.includes('127.0.0.1')) {
      throw new Error("l'URL du serveur de preview a fuité dans le HTML");
    }
    return html;
  } finally {
    await page.close();
  }
}

async function renderRoute(browser, baseUrl, route, template) {
  let lastError;
  for (let attempt = 1; attempt <= ROUTE_RETRIES; attempt += 1) {
    try {
      return await renderRouteOnce(browser, baseUrl, route, template);
    } catch (error) {
      lastError = error;
      if (attempt < ROUTE_RETRIES) {
        await new Promise((r) => setTimeout(r, 250 * attempt));
      }
    }
  }
  throw lastError;
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error(
      `${c.red}✗ dist/index.html introuvable. Lance "vite build" avant le pré-rendu.${c.reset}`
    );
    process.exit(1);
  }

  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error(
      `${c.red}✗ Playwright / Chromium manquant. Lance : npm run playwright:install${c.reset}`
    );
    process.exit(1);
  }

  const { content: routes, redirects: legacy, spaOnly = [], uncovered } = classifyPublicRoutes();
  if (uncovered.length > 0) {
    console.error(`${c.red}✗ URLs publiques non classées (ni contenu ni redirect) :${c.reset}`);
    uncovered.forEach((p) => console.error(`  ${p}`));
    process.exit(1);
  }

  const template = readTemplateScripts();
  console.log(
    `\n${c.cyan}${c.bold}Pré-rendu HTML (Site LP)${c.reset} ${c.dim}(${routes.length} pages + ${Object.keys(legacy).length} redirects, ${spaOnly.length} SPA only, ${CONCURRENCY} en parallèle)${c.reset}\n`
  );

  const server = await preview({
    root: ROOT,
    preview: { port: PORT, strictPort: true, host: '127.0.0.1', open: false },
    logLevel: 'warn',
  });
  const baseUrl = `http://127.0.0.1:${PORT}`;

  const browser = await chromium.launch();
  // Le HTML est gardé en mémoire puis écrit à la fin : sinon le serveur de preview
  // servirait les fichiers déjà pré-rendus aux pages suivantes du crawl.
  const rendered = new Map();
  const failed = [];

  const queue = [...routes];
  const workers = Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    while (queue.length > 0) {
      const route = queue.shift();
      try {
        rendered.set(route, await renderRoute(browser, baseUrl, route, template));
        console.log(`${c.green}✓${c.reset} ${route}`);
      } catch (error) {
        failed.push({ route, message: error.message });
        console.log(`${c.red}✗${c.reset} ${route} ${c.dim}${error.message}${c.reset}`);
      }
    }
  });

  await Promise.all(workers);
  await browser.close();
  await server.close();

  for (const [route, html] of rendered) {
    const file = outputFileFor(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html, 'utf-8');
  }

  // Échecs isolés : écrire le shell SPA pour que dist reste couvert (Netlify
  // servira le HTML puis hydratera React). Sans ça, le check "fichiers manquants"
  // cassait le build alors que le message parlait déjà de fallback SPA.
  const spaShell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
  for (const { route } of failed) {
    const file = outputFileFor(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, spaShell, 'utf-8');
  }

  // Anciennes URLs : HTML de redirection (preview local) + _redirects Netlify en 301!
  // force (!) pour que le 301 gagne même si un fichier HTML existe dans dist.
  const contentPaths = new Set(rendered.keys());
  const redirectLines = [
    '# Généré par scripts/prerender.mjs - ne pas éditer à la main',
    '# 301! = force : les crawlers reçoivent un vrai 301, pas le fallback SPA',
  ];

  let redirectCount = 0;
  for (const [from, to] of Object.entries(legacy).sort(([a], [b]) => a.localeCompare(b))) {
    if (contentPaths.has(from)) continue;
    const file = outputFileFor(from);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, redirectHtml(from, to), 'utf-8');
    redirectLines.push(`${from}  ${to}  301!`);
    redirectCount += 1;
  }

  redirectLines.push('');
  redirectLines.push('# SPA fallback (admin, 404, routes inconnues)');
  redirectLines.push('# Sans force (!) : les /path/index.html pré-rendus sont servis en priorité aux crawlers');
  redirectLines.push('/*  /index.html  200');
  fs.writeFileSync(path.join(DIST, '_redirects'), `${redirectLines.join('\n')}\n`, 'utf-8');

  // Sitemap indexable (hors landings ads) pour que Google découvre toutes les pages pré-rendues
  try {
    const { writeSitemap } = await import('./generate-sitemap.mjs');
    const { count } = writeSitemap();
    console.log(`${c.green}✓${c.reset} sitemap.xml (${count} URLs indexables)`);
  } catch (error) {
    console.error(`${c.red}✗ sitemap.xml non généré :${c.reset}`, error.message);
    process.exit(1);
  }

  console.log(
    `\n${c.bold}${rendered.size}/${routes.length} pages pré-rendues${c.reset}` +
      ` ${c.dim}+ ${redirectCount} redirections 301 legacy${c.reset}` +
      (failed.length > 0 ? ` ${c.yellow}(${failed.length} en échec → shell SPA)${c.reset}` : '')
  );

  if (failed.length > 0) {
    console.log(
      `${c.yellow}Ces pages restent servies en SPA (shell index.html écrit dans dist) :${c.reset}`
    );
    failed.forEach(({ route, message }) => console.log(`  ${route} - ${message}`));
  }

  // Un échec isolé ne doit pas bloquer le déploiement, mais un échec total signale
  // un vrai problème de build : mieux vaut casser le déploiement que perdre le SEO.
  if (rendered.size === 0) {
    console.error(`\n${c.red}✗ Aucune page pré-rendue.${c.reset}\n`);
    process.exit(1);
  }

  // Vérification finale : chaque URL classée a un fichier dans dist
  const missingFiles = [];
  for (const route of routes) {
    if (!fs.existsSync(outputFileFor(route))) missingFiles.push(route);
  }
  for (const from of Object.keys(legacy)) {
    if (contentPaths.has(from)) continue;
    if (!fs.existsSync(outputFileFor(from))) missingFiles.push(from);
  }
  if (missingFiles.length > 0) {
    console.error(`\n${c.red}✗ Fichiers manquants dans dist (${missingFiles.length}) :${c.reset}`);
    missingFiles.slice(0, 30).forEach((p) => console.error(`  ${p}`));
    process.exit(1);
  }

  console.log(
    `${c.green}✓ Couverture complète : ${rendered.size} HTML + ${redirectCount} redirects = ${rendered.size + redirectCount} URLs${c.reset}\n`
  );
}

main().catch((error) => {
  console.error(`\n${c.red}✗ Pré-rendu interrompu : ${error.stack || error.message}${c.reset}\n`);
  process.exit(1);
});
