#!/usr/bin/env node
/**
 * Génère public/sitemap.xml (et dist/sitemap.xml si dist/ existe) à partir de
 * CONTENT_ROUTES, en excluant les landings ads (robots Disallow / noindex).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONTENT_ROUTES } from './all-public-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://www.leleverdupinceau.ca';

const ADS_PREFIXES = ['/fr/', '/en/'];

function isIndexable(route) {
  return !ADS_PREFIXES.some((p) => route.startsWith(p));
}

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
  const routes = [...new Set(CONTENT_ROUTES.filter(isIndexable))].sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });

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
  return { publicPath, count };
}

const isCli =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isCli) {
  const { count, publicPath } = writeSitemap();
  console.log(`✓ sitemap.xml (${count} URLs) → ${path.relative(ROOT, publicPath)}`);
}
