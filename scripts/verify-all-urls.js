#!/usr/bin/env node
/**
 * Verifies all expected site URLs are present in sitemap and route sources.
 * Run: node scripts/verify-all-urls.js
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..');
const sitemapPath = path.join(BASE, 'public', 'sitemap.xml');

const EXPECTED_URLS = [
  '/',
  '/contact',
  '/a-propos',
  '/soumission',
  '/avis',
  '/peintre-professionnel',
  '/secteurs-desservis',
  '/secteurs-desservis/montreal',
  '/secteurs-desservis/laval',
  '/secteurs-desservis/longueuil',
  '/secteurs-desservis/brossard',
  '/services',
  '/services/peinture-interieure',
  '/services/peinture-exterieure',
  '/services/peinture-residentielle',
  '/services/peinture-commerciale',
  '/services/peinture-industrielle',
  '/blog',
  '/blog/comment-choisir-un-peintre-professionnel',
  '/blog/prix-peinture-montreal',
  '/blog/erreurs-a-eviter-peinture-interieure',
  '/politiques/confidentialite',
  '/politiques/termes-conditions',
];

const HOST = 'https://www.leleverdupinceau.ca';

function main() {
  let failed = 0;
  console.log('\n🔗 Verify all URLs\n');
  console.log('==========================================\n');

  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ sitemap.xml not found at public/sitemap.xml');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const sitemapUrls = [...sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(
    (m) => new URL(m[1]).pathname.replace(/\/$/, '') || '/'
  );

  for (const urlPath of EXPECTED_URLS) {
    const norm = urlPath === '/' ? '' : urlPath;
    const inSitemap = sitemapUrls.some((p) => (p || '/') === (norm || '/'));
    if (inSitemap) {
      console.log(`  ✅ ${urlPath || '/'}`);
    } else {
      console.log(`  ❌ MISSING FROM SITEMAP: ${urlPath || '/'}`);
      failed++;
    }
  }

  const appPath = path.join(BASE, 'src', 'App.jsx');
  const appContent = fs.readFileSync(appPath, 'utf-8');
  const hasIndex = appContent.includes('path="/"') && appContent.includes('NewHomePage');
  const hasContact = appContent.includes('path="contact"');
  const hasServices = appContent.includes('path="/services"');
  if (!hasIndex || !hasContact || !hasServices) {
    console.log('\n  ❌ App.jsx missing key routes (/, contact, /services)');
    failed++;
  }

  console.log('\n==========================================');
  if (failed > 0) {
    console.log(`\n❌ ${failed} check(s) failed.\n`);
    process.exit(1);
  }
  console.log(`\n✅ All ${EXPECTED_URLS.length} URLs verified in sitemap.\n`);
  process.exit(0);
}

main();
