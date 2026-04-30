#!/usr/bin/env node

/**
 * Browser Route Opener
 * Opens all routes in browser for visual verification
 */

const { exec } = require('child_process');
const readline = require('readline');

const BASE_URL = 'http://localhost:5173';
const DELAY_MS = 500; // Delay between opening each route

const allRoutes = {
  'Main Routes': [
    '/',
    '/contact',
    '/peintre-professionnel',
    '/secteurs',
    '/services',
    '/blog',
    '/a-propos',
    '/avis-clients',
    '/realisations',
    '/politique-de-confidentialite',
    '/mentions-legales',
  ],
  'City Routes': [
    '/secteurs/montreal',
    '/secteurs/laval',
    '/secteurs/longueuil',
    '/secteurs/gatineau',
    '/secteurs/rive-sud',
  ],
  'Main Service Routes': [
    '/services/peinture-commerciale',
    '/services/peinture-residentielle',
    '/services/peinture-interieure',
    '/services/peinture-exterieure',
    '/services/peinture-industrielle',
  ],
  'L3 / specialized': [
    '/services/peinture-residentielle/maison',
    '/services/peinture-residentielle/condo',
    '/services/peinture-residentielle/appartement',
    '/services/peinture-interieure/armoires-de-cuisine',
    '/services/teinture-exterieure',
    '/services/preparation-de-surfaces',
    '/services/peinture-au-pistolet',
    '/services/reparation-de-platre-et-gypse',
    '/services/peinture-apres-sinistre',
  ],
  'Blog Routes': [
    '/blog/comment-choisir-un-peintre-professionnel',
    '/blog/prix-peinture-montreal',
    '/blog/erreurs-a-eviter-peinture-interieure',
  ],
};

function openUrl(url) {
  const fullUrl = BASE_URL + url;
  const command =
    process.platform === 'win32'
      ? `start "" "${fullUrl}"`
      : process.platform === 'darwin'
      ? `open "${fullUrl}"`
      : `xdg-open "${fullUrl}"`;

  exec(command, (error) => {
    if (error) {
      console.error(`❌ Error opening ${url}:`, error.message);
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openRoutesByCategory(category, routes) {
  console.log(`\n🌐 Opening ${category}...`);

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    console.log(`  ${i + 1}/${routes.length} - ${route}`);
    openUrl(route);

    if (i < routes.length - 1) {
      await delay(DELAY_MS);
    }
  }

  console.log(`✅ ${category} complete!`);
}

async function openAllRoutes() {
  console.log('\n🚀 Le Lever du Pinceau - Browser Route Opener\n');
  console.log('==============================================\n');
  console.log(`📍 Base URL: ${BASE_URL}`);
  console.log(`⏱️  Delay between tabs: ${DELAY_MS}ms\n`);

  let totalRoutes = 0;
  for (const routes of Object.values(allRoutes)) {
    totalRoutes += routes.length;
  }

  console.log(`📊 Total routes to open: ${totalRoutes}\n`);
  console.log(`⚠️  WARNING: This will open ${totalRoutes} browser tabs!\n`);

  for (const [category, routes] of Object.entries(allRoutes)) {
    await openRoutesByCategory(category, routes);
    await delay(1000); // Extra delay between categories
  }

  console.log('\n==============================================');
  console.log('\n✅ All routes opened in browser!');
  console.log('\n💡 Check each tab to verify pages load correctly\n');
}

async function openSpecificCategory() {
  console.log('\n🚀 Le Lever du Pinceau - Browser Route Opener\n');
  console.log('==============================================\n');
  console.log('Select which category to open:\n');

  const categories = Object.keys(allRoutes);
  categories.forEach((cat, idx) => {
    console.log(`  ${idx + 1}. ${cat}`);
  });
  console.log(`  ${categories.length + 1}. ALL ROUTES`);
  console.log('  0. Exit\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter your choice (0-9): ', async (answer) => {
    const choice = parseInt(answer);

    if (choice === 0) {
      console.log('\n👋 Exiting...\n');
      rl.close();
      return;
    }

    if (choice === categories.length + 1) {
      rl.close();
      await openAllRoutes();
      return;
    }

    if (choice >= 1 && choice <= categories.length) {
      const selectedCategory = categories[choice - 1];
      const routes = allRoutes[selectedCategory];
      rl.close();
      await openRoutesByCategory(selectedCategory, routes);
      console.log('\n✅ Done!\n');
      return;
    }

    console.log('\n❌ Invalid choice\n');
    rl.close();
  });
}

// Check if script is run directly
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.includes('--all') || args.includes('-a')) {
    openAllRoutes();
  } else {
    openSpecificCategory();
  }
}

module.exports = { openUrl, openRoutesByCategory, allRoutes };
