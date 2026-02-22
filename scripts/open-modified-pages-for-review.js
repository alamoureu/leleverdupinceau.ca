#!/usr/bin/env node
/**
 * Open target modified pages for review
 *
 * Use this to open all pages that were (or will be) modified so you and your
 * friend can review them together. Start the dev server first: npm start
 *
 * Usage:
 *   node scripts/open-modified-pages-for-review.js        → open each page in a new tab (with delay)
 *   node scripts/open-modified-pages-for-review.js --list → print URLs only (no browser)
 *   BASE_URL=https://staging.example.com node scripts/open-modified-pages-for-review.js
 *
 * Or via npm (add to package.json "scripts" if you want):
 *   npm run review:pages
 */

const { exec } = require('child_process');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const DELAY_MS = 500;

// Target modified pages: main + CTA pages, blog, secteurs, avis, services, sous-services, industrielle×ville, blog posts
const MODIFIED_PAGES = [
  ['/', 'Accueil'],
  ['/services', 'Services'],
  ['/contact', 'Contact'],
  ['/peintre-professionnel', 'Peintre professionnel'],
  ['/secteurs-desservis', 'Secteurs desservis'],
  ['/avis', 'Avis clients'],
  ['/blog', 'Blog'],
  ['/blog/comment-choisir-un-peintre-professionnel', 'Blog – Comment choisir un peintre'],
  ['/blog/prix-peinture-montreal', 'Blog – Prix peinture Montréal'],
  ['/blog/erreurs-a-eviter-peinture-interieure', 'Blog – Erreurs à éviter'],
  // 4 sous-services (titles, image descriptions)
  ['/services/peinture-residentielle/interieure', 'Résidentielle intérieure'],
  ['/services/peinture-residentielle/exterieure', 'Résidentielle extérieure'],
  ['/services/peinture-commerciale/interieure', 'Commerciale intérieure'],
  ['/services/peinture-commerciale/exterieure', 'Commerciale extérieure'],
  // Peinture industrielle × ville (project photos removed)
  ['/services/peinture-industrielle/montreal', 'Industrielle – Montréal'],
  ['/services/peinture-industrielle/laval', 'Industrielle – Laval'],
  ['/services/peinture-industrielle/longueuil', 'Industrielle – Longueuil'],
  ['/services/peinture-industrielle/brossard', 'Industrielle – Brossard'],
];

function openInBrowser(urlOrPath, isLocalFile = false) {
  const target = isLocalFile ? urlOrPath : BASE_URL + urlOrPath;
  const command =
    process.platform === 'win32'
      ? `start "" "${target}"`
      : process.platform === 'darwin'
        ? `open "${target}"`
        : `xdg-open "${target}"`;
  exec(command, (err) => {
    if (err) console.error('Error opening:', err.message);
  });
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function run() {
  const listOnly = process.argv.includes('--list') || process.argv.includes('-l');

  if (listOnly) {
    console.log('Target modified pages for review:\n');
    MODIFIED_PAGES.forEach(([path, label], i) => {
      console.log(`${i + 1}. ${label}`);
      console.log(`   ${BASE_URL}${path}\n`);
    });
    return;
  }

  console.log('\n📋 Opening target modified pages for review\n');
  console.log('Base URL:', BASE_URL);
  console.log('Pages:', MODIFIED_PAGES.length);
  console.log('Delay between tabs:', DELAY_MS + ' ms\n');

  for (let i = 0; i < MODIFIED_PAGES.length; i++) {
    const [pathName, label] = MODIFIED_PAGES[i];
    console.log(`  ${i + 1}/${MODIFIED_PAGES.length} – ${label}`);
    openInBrowser(pathName);
    if (i < MODIFIED_PAGES.length - 1) await delay(DELAY_MS);
  }

  console.log('\n✅ Done. Review each tab with your friend.\n');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
