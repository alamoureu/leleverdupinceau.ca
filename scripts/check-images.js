const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, '..', 'src', 'lelever-next', 'images');

const pathsToCheck = [
  // ServicesSection
  '1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG',
  '1-page-principale/service hub/Peinture commerciale/IMG_6766.PNG',
  '1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG',
  // TrustBanner
  'rbqlogo.png',
  'trushieldlogo.png',
  // MethodSection / ProcessStepsSection
  'new-landing/method-1.jpeg',
  'new-landing/method-2.jpeg',
  'new-landing/method-3.PNG',
  'new-landing/method-4.PNG',
  // ControlSection
  'new-landing/control-1.jpeg',
  'new-landing/control-2.png',
  'new-landing/control-3.jpeg',
  // SectorsSection
  'mtl.png',
  'laval.png',
  'longueuil.png',
  'brossard.png',
  // HeroSection
  'heroImage.png',
  // TeamSection / PeintreProfessionnelPage
  '1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.PNG',
  // ResourcesSection / ServiceQuartierGuidesSection
  '1-page-principale/blog hub/Peinture intérieure/IMG_6764.PNG',
  '1-page-principale/blog hub/Peinture résidentielle/IMG_6763.PNG',
  '1-page-principale/blog hub/Peinture commerciale/IMG_6762.PNG',
  // BlogPage hero
  '1-page-principale/blog hub/Peinture extérieure/IMG_6753.PNG',
  // SecteursDesservisPage
  '1-page-principale/sector hub/Peinture intérieure/IMG_6759.PNG',
  // RecentProjectsSection
  '1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG',
  '1-page-principale/Home/Projet extérieur/IMG_6755.PNG',
  // 2-services
  '2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG',
  '2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG',
  '2-services/Page peinture extérieure/Photo header/IMG_0989.JPG',
  '2-services/Page peinture intérieure/6. réalisations/IMG_5976.PNG',
  // 4-sous-services
  '4-sous-services/commercial x éxtérieure/1. réalisations/IMG_6777.PNG',
  '4-sous-services/résdientielle x intérieure/1. réalisations/IMG_6764.PNG',
  '4-sous-services/résidentielle x éxtérieure/1. réalisations/IMG_6778.PNG',
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
