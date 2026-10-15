const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, '..', 'src', 'site', 'images');

const pathsToCheck = [
  'shared/rbqlogo.webp',
  'home/method-1.webp',
  'home/method-2.webp',
  'home/method-3.webp',
  'home/method-4.webp',
  'home/control-3.webp',
  'shared/city-thumbs/montreal.webp',
  'shared/city-thumbs/laval.webp',
  'shared/city-thumbs/longueuil.webp',
  'shared/city-thumbs/brossard.webp',
  'shared/heroImage.webp',
  'blog/Peinture extérieure/IMG_6753.webp',
  'services/commerciale/realisations/IMG_6760.webp',
  'services/exterieure/header/IMG_0989.webp',
];

const missing = [];
pathsToCheck.forEach((rel) => {
  const full = path.join(imagesBase, rel);
  if (!fs.existsSync(full)) missing.push(rel);
});

if (missing.length) {
  console.error('MISSING IMAGE FILES:');
  missing.forEach((rel) => console.error('  -', rel));
  process.exit(1);
}
console.log('All', pathsToCheck.length, 'image paths exist.');
