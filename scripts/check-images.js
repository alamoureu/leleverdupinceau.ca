const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, '..', 'src', 'lelever-next', 'images');

const pathsToCheck = [
  // ServicesSection
  // TrustBanner
  'rbqlogo.webp',
  // MethodSection / ProcessStepsSection
  'new-landing/method-1.webp',
  'new-landing/method-2.webp',
  'new-landing/method-3.webp',
  'new-landing/method-4.webp',
  // ControlSection
  'new-landing/control-3.webp',
  // SectorsSection
  'mtl.webp',
  'laval.webp',
  'longueuil.webp',
  'brossard.webp',
  // HeroSection
  'heroImage.webp',
  // TeamSection / PeintreProfessionnelPage
  // ResourcesSection / ServiceGuidesSection
  // BlogPage hero
  '1-page-principale/blog hub/Peinture extérieure/IMG_6753.webp',
  // SecteursDesservisPage
  // RecentProjectsSection
  '1-page-principale/service hub/Peinture industrielle/IMG_6757.webp',
  '1-page-principale/Home/Projet extérieur/IMG_6755.webp',
  // 2-services
  '2-services/Page peinture commerciale/1. réalisations/IMG_6760.webp',
  '2-services/Page peinture extérieure/Photo header/IMG_0989.webp',
];

const missing = [];
pathsToCheck.forEach((p) => {
  const full = path.join(imagesBase, p);
  if (!fs.existsSync(full)) {
    missing.push(p);
  }
});

if (missing.length > 0) {
  console.error('MISSING IMAGE FILES:');
  missing.forEach((p) => console.error('  -', p));
  process.exit(1);
}
console.log('All', pathsToCheck.length, 'image paths exist.');
