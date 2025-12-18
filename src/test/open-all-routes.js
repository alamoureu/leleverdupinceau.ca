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
  'Main Routes (9)': [
    '/',
    '/new-home',
    '/peintre-professionnel',
    '/secteurs-desservis',
    '/services',
    '/blog',
    '/a-propos',
    '/avis',
    '/new-contact',
  ],
  'City Routes (4)': [
    '/secteurs-desservis/montreal',
    '/secteurs-desservis/laval',
    '/secteurs-desservis/longueuil',
    '/secteurs-desservis/brossard',
  ],
  'Main Service Routes (5)': [
    '/services/peinture-commerciale',
    '/services/peinture-residentielle',
    '/services/new-peinture-interieure',
    '/services/new-peinture-exterieure',
    '/services/peinture-industrielle',
  ],
  'Sub-Service Routes (4)': [
    '/services/peinture-commerciale/interieure',
    '/services/peinture-commerciale/exterieure',
    '/services/peinture-residentielle/interieure',
    '/services/peinture-residentielle/exterieure',
  ],
  'Service × City Routes (20)': [
    '/services/peinture-commerciale/montreal',
    '/services/peinture-commerciale/laval',
    '/services/peinture-commerciale/longueuil',
    '/services/peinture-commerciale/brossard',
    '/services/peinture-residentielle/montreal',
    '/services/peinture-residentielle/laval',
    '/services/peinture-residentielle/longueuil',
    '/services/peinture-residentielle/brossard',
    '/services/new-peinture-interieure/montreal',
    '/services/new-peinture-interieure/laval',
    '/services/new-peinture-interieure/longueuil',
    '/services/new-peinture-interieure/brossard',
    '/services/new-peinture-exterieure/montreal',
    '/services/new-peinture-exterieure/laval',
    '/services/new-peinture-exterieure/longueuil',
    '/services/new-peinture-exterieure/brossard',
    '/services/peinture-industrielle/montreal',
    '/services/peinture-industrielle/laval',
    '/services/peinture-industrielle/longueuil',
    '/services/peinture-industrielle/brossard',
  ],
  'Sous-Service × City Routes (16)': [
    '/services/peinture-commerciale/interieure/montreal',
    '/services/peinture-commerciale/interieure/laval',
    '/services/peinture-commerciale/interieure/longueuil',
    '/services/peinture-commerciale/interieure/brossard',
    '/services/peinture-commerciale/exterieure/montreal',
    '/services/peinture-commerciale/exterieure/laval',
    '/services/peinture-commerciale/exterieure/longueuil',
    '/services/peinture-commerciale/exterieure/brossard',
    '/services/peinture-residentielle/interieure/montreal',
    '/services/peinture-residentielle/interieure/laval',
    '/services/peinture-residentielle/interieure/longueuil',
    '/services/peinture-residentielle/interieure/brossard',
    '/services/peinture-residentielle/exterieure/montreal',
    '/services/peinture-residentielle/exterieure/laval',
    '/services/peinture-residentielle/exterieure/longueuil',
    '/services/peinture-residentielle/exterieure/brossard',
  ],
  'Service × Quartier Routes (23)': [
    '/services/peinture-interieure/montreal/ahuntsic',
    '/services/peinture-interieure/montreal/bois-franc',
    '/services/peinture-interieure/montreal/centre-ville',
    '/services/peinture-interieure/montreal/cote-des-neiges',
    '/services/peinture-interieure/montreal/griffintown',
    '/services/peinture-interieure/montreal/hochelaga',
    '/services/peinture-interieure/montreal/ile-des-soeurs',
    '/services/peinture-interieure/montreal/lachine',
    '/services/peinture-interieure/montreal/lasalle',
    '/services/peinture-interieure/montreal/le-village',
    '/services/peinture-interieure/montreal/mile-end',
    '/services/peinture-interieure/montreal/notre-dame-de-grace',
    '/services/peinture-interieure/montreal/outremont',
    '/services/peinture-interieure/montreal/plateau-mont-royal',
    '/services/peinture-interieure/montreal/pointe-saint-charles',
    '/services/peinture-interieure/montreal/rosemont-petite-patrie',
    '/services/peinture-interieure/montreal/saint-henri',
    '/services/peinture-interieure/montreal/saint-leonard',
    '/services/peinture-interieure/montreal/verdun',
    '/services/peinture-interieure/montreal/ville-mont-royal',
    '/services/peinture-interieure/montreal/villeray',
    '/services/peinture-interieure/montreal/ville-saint-laurent',
    '/services/peinture-interieure/montreal/westmount',
  ],
  'Blog Routes (3)': [
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
  console.log('⚠️  WARNING: This will open 84 browser tabs!\n');

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
  console.log(`  ${categories.length + 1}. ALL ROUTES (84 tabs)`);
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
