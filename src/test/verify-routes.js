#!/usr/bin/env node

/**
 * Route list aligned with canonical URLs (secteurs, avis-clients, services hub).
 */

console.log('\n🧪 Le Lever du Pinceau - Route Verification\n');
console.log('==========================================\n');

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
  'L3 / specialized services': [
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
  'Legacy redirects (optional smoke test)': [
    '/secteurs-desservis',
    '/secteurs-desservis/montreal',
    '/avis',
    '/soumission',
  ],
  'Blog Routes': [
    '/blog/comment-choisir-un-peintre-professionnel',
    '/blog/prix-peinture-montreal',
    '/blog/erreurs-a-eviter-peinture-interieure',
  ],
};

let totalRoutes = 0;
let totalCategories = 0;

for (const [category, routes] of Object.entries(allRoutes)) {
  totalCategories++;
  console.log(`✅ ${category}: ${routes.length} routes`);
  totalRoutes += routes.length;
}

console.log('\n==========================================');
console.log(
  `\n📊 Total: ${totalRoutes} routes across ${totalCategories} categories`
);
console.log('\n✅ Route list ready for manual testing\n');
process.exit(0);
