const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, '..', 'src', 'lelever-next', 'images');

const pathsToCheck = [
  // ServicesSection
  '1-page-principale/service hub/Peinture résidentielle/IMG_6768.webp',
  '1-page-principale/service hub/Peinture commerciale/IMG_6766.webp',
  '1-page-principale/service hub/Peinture intérieure/IMG_6758.webp',
  // TrustBanner
  'rbqlogo.webp',
  'trushieldlogo.webp',
  // MethodSection / ProcessStepsSection
  'new-landing/method-1.webp',
  'new-landing/method-2.webp',
  'new-landing/method-3.webp',
  'new-landing/method-4.webp',
  // ControlSection
  'new-landing/control-1.webp',
  'new-landing/control-2.webp',
  'new-landing/control-3.webp',
  // SectorsSection
  'mtl.webp',
  'laval.webp',
  'longueuil.webp',
  'brossard.webp',
  // HeroSection
  'heroImage.webp',
  // TeamSection / PeintreProfessionnelPage
  '1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.webp',
  // ResourcesSection / ServiceGuidesSection
  '1-page-principale/blog hub/Peinture intérieure/IMG_6764.webp',
  '1-page-principale/blog hub/Peinture résidentielle/IMG_6763.webp',
  '1-page-principale/blog hub/Peinture commerciale/IMG_6762.webp',
  // BlogPage hero
  '1-page-principale/blog hub/Peinture extérieure/IMG_6753.webp',
  // SecteursDesservisPage
  '1-page-principale/sector hub/Peinture intérieure/IMG_6759.webp',
  // RecentProjectsSection
  '1-page-principale/service hub/Peinture industrielle/IMG_6757.webp',
  '1-page-principale/Home/Projet extérieur/IMG_6755.webp',
  // 2-services
  '2-services/Page peinture commerciale/1. réalisations/IMG_6760.webp',
  '2-services/Page peinture extérieure/1. réalisations/IMG_6755.webp',
  '2-services/Page peinture extérieure/Photo header/IMG_0989.webp',
  '2-services/Page peinture intérieure/6. réalisations/IMG_5976.webp',
  // 4-sous-services
  '4-sous-services/commercial x éxtérieure/1. réalisations/IMG_6777.webp',
  '4-sous-services/résdientielle x intérieure/1. réalisations/IMG_6764.webp',
  '4-sous-services/résidentielle x éxtérieure/1. réalisations/IMG_6778.webp',
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
