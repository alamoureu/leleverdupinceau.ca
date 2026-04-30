#!/usr/bin/env node
/**
 * Open Modified Pages – Double-check recent changes
 *
 * Opens all pages that were modified (images, photo headers, ControlSection subtitle, etc.)
 *
 * Usage:
 *   npm run open:modified              → open all modified pages (one after another, default browser)
 *   npm run open:modified -- --tabs    → open each in a new tab (same window)
 *   npm run open:modified -- --chrome  → open ALL pages in a NEW Chrome window (one tab per page)
 *
 * Make sure the dev server is running (npm start) before using.
 */

const { exec } = require('child_process');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const DELAY_MS = 600;
const useTabs = process.argv.includes('--tabs');
const useChrome = process.argv.includes('--chrome');

const MODIFIED_PAGES = [
  ['/', 'Accueil – ControlSection, Projets récents, TeamSection (Danny Wrapping), Ressources'],
  ['/fr/peintre-montreal', 'Landing FR – peintre-montreal'],
  ['/en/peintre-montreal', 'Landing EN – peintre-montreal (English)'],
  ['/blog', 'Blog – Photo header + cartes (louis_Consultation pour Blog 1)'],
  ['/contact', 'Contact – Photo header'],
  ['/avis-clients', 'Avis – Photo header'],
  ['/a-propos', 'À propos – Photo header (a propos folder)'],
  ['/peintre-professionnel', 'Peintre pro – Photo header + hero (Paint Cut-in Louis) + 5 cartes services'],
  ['/services', 'Services – Photo header (service hub)'],
  ['/secteurs', 'Secteurs – Photo header (sector hub)'],
  ['/services/peinture-residentielle', 'Peinture résidentielle – Photo header'],
  ['/services/peinture-commerciale', 'Peinture commerciale – Photo header'],
  ['/services/peinture-interieure', 'Peinture intérieure – Photo header'],
  ['/services/peinture-exterieure', 'Peinture extérieure – Photo header'],
  ['/services/peinture-industrielle', 'Peinture industrielle – Photo header'],
  ['/secteurs/montreal', 'Montréal – Photo header + guides blog'],
  ['/secteurs/laval', 'Laval – Photo header'],
  ['/secteurs/longueuil', 'Longueuil – Photo header'],
  ['/secteurs/rive-sud', 'Rive-Sud – Photo header'],
];

function openInBrowser(urlOrPath, browser = null) {
  const target = urlOrPath.startsWith('http') ? urlOrPath : BASE_URL + urlOrPath;
  let command;
  if (browser === 'chrome') {
    command =
      process.platform === 'darwin'
        ? `open -a "Google Chrome" "${target}"`
        : process.platform === 'win32'
          ? `start chrome "${target}"`
          : `google-chrome "${target}"`;
  } else {
    command =
      process.platform === 'win32'
        ? `start "" "${target}"`
        : process.platform === 'darwin'
          ? `open "${target}"`
          : `xdg-open "${target}"`;
  }
  exec(command, (err) => {
    if (err) console.error('Error opening:', err.message);
  });
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function run() {
  console.log('\n📋 Ouverture des pages modifiées (vérification des changements)\n');
  console.log('Base URL:', BASE_URL);
  console.log('Pages:', MODIFIED_PAGES.length);
  if (useChrome) {
    console.log('Mode: Chrome – nouvelle fenêtre avec un onglet par page\n');
  } else if (useTabs) {
    console.log('Mode: nouvel onglet pour chaque page\n');
  } else {
    console.log('Mode: une page après l’autre (délai', DELAY_MS, 'ms)\n');
  }

  const urls = MODIFIED_PAGES.map(([path]) =>
    path.startsWith('http') ? path : BASE_URL + path
  );

  if (useChrome && process.platform === 'darwin') {
    // Open all URLs in Chrome: multiple URLs = one new window with one tab per URL
    const urlsArg = urls.map((u) => `"${u}"`).join(' ');
    exec(`open -a "Google Chrome" ${urlsArg}`, (err) => {
      if (err) {
        console.error('Error:', err.message);
        console.log('Fallback: opening pages one by one in Chrome...\n');
        MODIFIED_PAGES.forEach(([path], i) => {
          setTimeout(() => openInBrowser(path, 'chrome'), i * 400);
        });
      }
    });
    MODIFIED_PAGES.forEach(([pathName, label], i) => {
      console.log(`  ${i + 1}/${MODIFIED_PAGES.length} – ${pathName}`);
      console.log(`     → ${label}`);
    });
  } else if (useChrome) {
    MODIFIED_PAGES.forEach(([pathName, label], i) => {
      console.log(`  ${i + 1}/${MODIFIED_PAGES.length} – ${pathName}`);
      console.log(`     → ${label}`);
      openInBrowser(pathName, 'chrome');
    });
  } else {
    for (let i = 0; i < MODIFIED_PAGES.length; i++) {
      const [pathName, label] = MODIFIED_PAGES[i];
      console.log(`  ${i + 1}/${MODIFIED_PAGES.length} – ${pathName}`);
      console.log(`     → ${label}`);
      openInBrowser(useTabs ? pathName : pathName);
      if (!useTabs && i < MODIFIED_PAGES.length - 1) await delay(DELAY_MS);
    }
  }

  console.log('\n✅ Pages ouvertes. Vérifiez chaque changement listé ci-dessus.\n');
}

run();
