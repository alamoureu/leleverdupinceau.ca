#!/usr/bin/env node
/**
 * Open Pages with Sub-Service Cards
 *
 * Opens the service pages that have sub-service cards with images
 * to verify the photos are correctly displayed.
 *
 * Usage:
 *   npm run open:subservices     → Open pages with sub-service cards
 *
 * Make sure the dev server is running (npm start) before using.
 */

const { exec } = require('child_process');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const DELAY_MS = 500;

const PAGES_WITH_SUBSERVICE_CARDS = [
  ['/services/peinture-residentielle', 'Peinture résidentielle (intérieure + extérieure cards)'],
  ['/services/peinture-interieure', 'Peinture intérieure (résidentielle intérieure card)'],
  ['/services/peinture-exterieure', 'Peinture extérieure (résidentielle extérieure card)'],
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
  console.log('\n🖼️  Ouverture des pages avec cartes de sous-services\n');
  console.log('Base URL:', BASE_URL);
  console.log('Pages:', PAGES_WITH_SUBSERVICE_CARDS.length);
  console.log('Vérifiez que les photos apparaissent dans les cartes.\n');

  for (let i = 0; i < PAGES_WITH_SUBSERVICE_CARDS.length; i++) {
    const [pathName, label] = PAGES_WITH_SUBSERVICE_CARDS[i];
    console.log(`  ${i + 1}/${PAGES_WITH_SUBSERVICE_CARDS.length} – ${label}`);
    console.log(`      ${pathName}`);
    openInBrowser(pathName);
    if (i < PAGES_WITH_SUBSERVICE_CARDS.length - 1) await delay(DELAY_MS);
  }

  console.log('\n✅ Onglets ouverts. Vérifiez que les images des cartes de sous-services s\'affichent correctement.\n');
}

run();
