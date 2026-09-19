#!/usr/bin/env node
/**
 * Génère public/sitemap.xml (et dist/sitemap.xml si dist/ existe)
 * selon le sitemap officiel "Site LP" (ordre du plan papier).
 *
 * Pages marquées "à ajouter" sont incluses même si le HTML n'existe pas encore.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://www.leleverdupinceau.ca';

/**
 * Sitemap officiel Site LP - ordre du plan.
 * Labels = intitulés du papier (référence humaine uniquement).
 */
export const OFFICIAL_SITE_LP_ROUTES = [
  // Accueil & services
  { path: '/', label: 'Main Page' },
  { path: '/services', label: 'Tous les services' },
  { path: '/services/peinture-residentielle', label: 'Résidentiel' },
  { path: '/services/peinture-commerciale', label: 'Commercial' },
  { path: '/services/peinture-interieure', label: 'Intérieure' },
  { path: '/services/peinture-exterieure', label: 'Extérieure' },
  { path: '/services/peinture-industrielle', label: 'Industrielle' },
  // Entreprise
  { path: '/avis-clients', label: 'Avis' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/a-propos', label: 'À Propos' },
  { path: '/peintre-professionnel', label: 'Peintre Professionnel' },
  // Secteurs desservis
  { path: '/secteurs', label: 'Secteurs desservis' },
  { path: '/secteurs/montreal', label: 'Montréal' },
  { path: '/secteurs/laval', label: 'Laval' },
  { path: '/secteurs/longueuil', label: 'Longueuil' },
  { path: '/secteurs/brossard', label: 'Brossard' },
  { path: '/secteurs/st-lambert', label: 'St-Lambert' },
  { path: '/secteurs/laprairie', label: 'Laprairie' },
  { path: '/secteurs/montreal/westmount', label: 'Westmount' },
  { path: '/secteurs/montreal/outremont', label: 'Outremont' },
  { path: '/secteurs/montreal/plateau-mont-royal', label: 'Plateau Mont-Royal' },
  { path: '/secteurs/montreal/ville-marie', label: 'Ville-Marie / Centre-Ville' },
  // Pages piliers & sous-services
  { path: '/peinture-interieure-montreal', label: 'Intérieure Montréal' },
  { path: '/peinture-exterieure-montreal', label: 'Extérieure Montréal' },
  {
    path: '/services/peinture-interieure/armoires-de-cuisine',
    label: 'Armoire de cuisine',
  },
  { path: '/services/teinture-exterieure', label: 'Teinture extérieure' },
  {
    path: '/services/preparation-de-surfaces',
    label: 'Préparation de surfaces',
  },
  { path: '/services/peinture-au-pistolet', label: 'Pistolet' },
  // Nos réalisations / sous-pages liées
  { path: '/realisations', label: 'Nos réalisations' },
  {
    path: '/services/reparation-de-platre-et-gypse',
    label: 'Réparation de plâtre & gypse',
  },
  {
    path: '/services/peinture-apres-sinistre',
    label: 'Peinture après sinistres',
  },
  {
    path: '/services/peinture-residentielle/maison',
    label: 'Maison unifamiliale',
  },
  { path: '/services/peinture-residentielle/condo', label: 'Condo' },
  {
    path: '/services/peinture-residentielle/appartement',
    label: 'Appartement',
  },
];

function priorityFor(route) {
  if (route === '/') return '1.0';
  if (route === '/contact') return '0.95';
  if (route === '/services' || route === '/secteurs') return '0.95';
  if (route.startsWith('/services/') && route.split('/').length === 3) return '0.85';
  if (route.startsWith('/secteurs/')) return '0.85';
  if (route.startsWith('/blog')) return '0.75';
  if (
    route === '/peinture-interieure-montreal' ||
    route === '/peinture-exterieure-montreal'
  ) {
    return '0.9';
  }
  return '0.8';
}

function changefreqFor(route) {
  if (route === '/') return 'daily';
  if (route.startsWith('/blog')) return 'weekly';
  if (route.startsWith('/services') || route.startsWith('/secteurs')) return 'weekly';
  return 'monthly';
}

export function buildSitemapXml(lastmod = new Date().toISOString().slice(0, 10)) {
  const routes = OFFICIAL_SITE_LP_ROUTES.map((r) => r.path);

  const urls = routes
    .map((route) => {
      const loc = route === '/' ? `${ORIGIN}/` : `${ORIGIN}${route}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreqFor(route)}</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function writeSitemap() {
  const xml = buildSitemapXml();
  const publicPath = path.join(ROOT, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, xml, 'utf8');
  const distDir = path.join(ROOT, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  }
  const count = (xml.match(/<loc>/g) || []).length;
  const pending = OFFICIAL_SITE_LP_ROUTES.filter((r) => r.pending).length;
  return { publicPath, count, pending };
}

const isCli =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isCli) {
  const { count, pending, publicPath } = writeSitemap();
  console.log(`✓ sitemap.xml (${count} URLs, ${pending} à ajouter) → ${path.relative(ROOT, publicPath)}`);
}
