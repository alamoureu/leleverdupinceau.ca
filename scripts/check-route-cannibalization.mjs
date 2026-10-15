#!/usr/bin/env node
/**
 * Guardrail: no competing public URLs for the same intent.
 * - Unique sitemap / content paths
 * - Exactly one FR + one EN ads landing (noindex)
 * - Alias /en/peintre-montreal must redirect to /en/painter-montreal
 * - Legacy service×city URLs must redirect (not stay as content)
 * - No content path that is also a redirect source
 *
 * Usage: node scripts/check-route-cannibalization.mjs
 */

import {
  classifyPublicRoutes,
  NOINDEX_PRERENDER_ROUTES,
} from './all-public-routes.mjs';
import { OFFICIAL_SITE_LP_ROUTES } from './generate-sitemap.mjs';

const errors = [];

function fail(msg) {
  errors.push(msg);
}

const paths = OFFICIAL_SITE_LP_ROUTES.map((r) => r.path);
const seen = new Set();
for (const p of paths) {
  if (seen.has(p)) fail(`Duplicate sitemap path: ${p}`);
  seen.add(p);
}

const { content, noindexPrerender, redirects } = classifyPublicRoutes();

const contentSet = new Set(content);
for (const p of content) {
  if (redirects[p]) fail(`Content path also has a redirect: ${p} → ${redirects[p]}`);
}

const expectedLandings = ['/fr/peintre-montreal', '/en/painter-montreal'];
const landingSorted = [...noindexPrerender].sort();
const expectedSorted = [...expectedLandings].sort();
if (landingSorted.join('|') !== expectedSorted.join('|')) {
  fail(
    `Ads landings must be exactly ${expectedLandings.join(', ')} (got ${noindexPrerender.join(', ') || 'none'})`
  );
}

if (NOINDEX_PRERENDER_ROUTES.includes('/en/peintre-montreal')) {
  fail('/en/peintre-montreal must not be a noindex prerender page (redirect only)');
}

if (redirects['/en/peintre-montreal'] !== '/en/painter-montreal') {
  fail('/en/peintre-montreal must 301 to /en/painter-montreal');
}

if (redirects['/peintre-montreal'] !== '/fr/peintre-montreal') {
  fail('/peintre-montreal must 301 to /fr/peintre-montreal');
}

const mustRedirectSamples = [
  '/services/peinture-interieure/montreal',
  '/services/peinture-commerciale/montreal',
  '/services/peinture-commerciale/interieure/montreal',
  '/services/peinture-residentielle/exterieure/laval',
  '/services/peinture-interieure/montreal/westmount',
  '/secteurs-desservis',
  '/secteurs-desservis/montreal',
  '/avis',
  '/soumission',
  '/peinture-interieure-montreal',
];

for (const from of mustRedirectSamples) {
  if (contentSet.has(from)) {
    fail(`Legacy URL still classified as content (cannibalizes canonical): ${from}`);
  }
  if (!redirects[from]) {
    fail(`Legacy URL missing redirect: ${from}`);
  }
}

// City in last segment of triple URLs → city page (not service hub)
const cityTriple = redirects['/services/peinture-commerciale/interieure/montreal'];
if (cityTriple !== '/secteurs/montreal') {
  fail(
    `/services/peinture-commerciale/interieure/montreal must redirect to /secteurs/montreal (got ${cityTriple || 'none'})`
  );
}

const dualCity = redirects['/services/peinture-interieure/montreal'];
if (dualCity !== '/secteurs/montreal') {
  fail(
    `/services/peinture-interieure/montreal must redirect to /secteurs/montreal (got ${dualCity || 'none'})`
  );
}

if (errors.length) {
  console.error('Route cannibalization check FAILED:\n');
  errors.forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}

console.log('✓ Route cannibalization check OK');
console.log(`  Content (sitemap): ${content.length}`);
console.log(`  Ads landings:     ${noindexPrerender.join(', ')}`);
console.log(`  Redirects:        ${Object.keys(redirects).length}`);
