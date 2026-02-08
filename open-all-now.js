const { exec } = require('child_process');

const BASE_URL = 'http://localhost:5173';

// ALL valid routes based on actual data structure
const allRoutes = [
  // Sous-service pages (Service × SubService)
  // '/services/peinture-commerciale/exterieure',
  // '/services/peinture-commerciale/interieure',
  // '/services/peinture-residentielle/exterieure',
  // '/services/peinture-residentielle/interieure',

  // Sous-service × ville pages (Service × SubService × City)
  // '/services/peinture-commerciale/exterieure/brossard',
  // '/services/peinture-commerciale/exterieure/laval',
  // '/services/peinture-commerciale/exterieure/longueuil',
  // '/services/peinture-commerciale/exterieure/montreal',
  // '/services/peinture-commerciale/interieure/brossard',
  // '/services/peinture-commerciale/interieure/laval',
  // '/services/peinture-commerciale/interieure/longueuil',
  // '/services/peinture-commerciale/interieure/montreal',
  // '/services/peinture-residentielle/exterieure/brossard',
  // '/services/peinture-residentielle/exterieure/laval',
  // '/services/peinture-residentielle/exterieure/longueuil',
  // '/services/peinture-residentielle/exterieure/montreal',
  // '/services/peinture-residentielle/interieure/brossard',
  // '/services/peinture-residentielle/interieure/laval',
  // '/services/peinture-residentielle/interieure/longueuil',
  // '/services/peinture-residentielle/interieure/montreal',

  // Service × ville pages (Service × City)
  // '/services/peinture-commerciale/brossard',
  // '/services/peinture-commerciale/laval',
  // '/services/peinture-commerciale/longueuil',
  // '/services/peinture-commerciale/montreal',
  // '/services/peinture-exterieure/brossard',
  // '/services/peinture-exterieure/laval',
  // '/services/peinture-exterieure/longueuil',
  // '/services/peinture-exterieure/montreal',
  // '/services/peinture-industrielle/brossard',
  // '/services/peinture-industrielle/laval',
  // '/services/peinture-industrielle/longueuil',
  // '/services/peinture-industrielle/montreal',
  // '/services/peinture-interieure/brossard',
  // '/services/peinture-interieure/laval',
  // '/services/peinture-interieure/longueuil',
  // '/services/peinture-interieure/montreal',
  // '/services/new-peinture-residentielle/brossard',
  // '/services/new-peinture-residentielle/laval',
  // '/services/new-peinture-residentielle/longueuil',
  // '/services/new-peinture-residentielle/montreal',

  // Service × City × Neighborhood (ONLY for peinture-interieure) - THE ONES THAT WEREN'T WORKING
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

  // Blog pages
  // '/blog/comment-choisir-un-peintre-professionnel',
  // '/blog/prix-peinture-montreal',
  // '/blog/erreurs-a-eviter-peinture-interieure',
];

console.log(`\n🚀 Opening ${allRoutes.length} routes NOW!\n`);

allRoutes.forEach((route, index) => {
  const url = `${BASE_URL}${route}`;
  exec(`start ${url}`, (error) => {
    if (error) {
      console.error(`❌ Error opening ${route}: ${error.message}`);
    } else {
      console.log(`✅ ${index + 1}/${allRoutes.length} - ${route}`);
    }
  });
});

console.log(`\n✅ All routes opening in browser!\n`);
