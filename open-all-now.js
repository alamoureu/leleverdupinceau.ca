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
  // '/services/new-peinture-exterieure/brossard',
  // '/services/new-peinture-exterieure/laval',
  // '/services/new-peinture-exterieure/longueuil',
  // '/services/new-peinture-exterieure/montreal',
  // '/services/peinture-industrielle/brossard',
  // '/services/peinture-industrielle/laval',
  // '/services/peinture-industrielle/longueuil',
  // '/services/peinture-industrielle/montreal',
  // '/services/new-peinture-interieure/brossard',
  // '/services/new-peinture-interieure/laval',
  // '/services/new-peinture-interieure/longueuil',
  // '/services/new-peinture-interieure/montreal',
  // '/services/new-peinture-residentielle/brossard',
  // '/services/new-peinture-residentielle/laval',
  // '/services/new-peinture-residentielle/longueuil',
  // '/services/new-peinture-residentielle/montreal',

  // Service × City × Neighborhood (ONLY for peinture-interieure) - THE ONES THAT WEREN'T WORKING
  '/services/new-peinture-interieure/montreal/ahuntsic',
  '/services/new-peinture-interieure/montreal/bois-franc',
  '/services/new-peinture-interieure/montreal/centre-ville',
  '/services/new-peinture-interieure/montreal/cote-des-neiges',
  '/services/new-peinture-interieure/montreal/griffintown',
  '/services/new-peinture-interieure/montreal/hochelaga',
  '/services/new-peinture-interieure/montreal/ile-des-soeurs',
  '/services/new-peinture-interieure/montreal/lachine',
  '/services/new-peinture-interieure/montreal/lasalle',
  '/services/new-peinture-interieure/montreal/le-village',
  '/services/new-peinture-interieure/montreal/mile-end',
  '/services/new-peinture-interieure/montreal/notre-dame-de-grace',
  '/services/new-peinture-interieure/montreal/outremont',
  '/services/new-peinture-interieure/montreal/plateau-mont-royal',
  '/services/new-peinture-interieure/montreal/pointe-saint-charles',
  '/services/new-peinture-interieure/montreal/rosemont-petite-patrie',
  '/services/new-peinture-interieure/montreal/saint-henri',
  '/services/new-peinture-interieure/montreal/saint-leonard',
  '/services/new-peinture-interieure/montreal/verdun',
  '/services/new-peinture-interieure/montreal/ville-mont-royal',
  '/services/new-peinture-interieure/montreal/villeray',
  '/services/new-peinture-interieure/montreal/ville-saint-laurent',
  '/services/new-peinture-interieure/montreal/westmount',

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
