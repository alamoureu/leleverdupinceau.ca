#!/usr/bin/env node
/**
 * Check all image paths referenced in the codebase under src/lelever-next/images
 * and report which files or folders are missing.
 */

const fs = require('fs');
const path = require('path');

const imagesBase = path.join(__dirname, '..', 'src', 'lelever-next', 'images');

// Every image path referenced in code (relative to lelever-next/images)
// Extracted from imports across the codebase.
const referencedPaths = [
  // before_after
  'before_after/IMG_5969.jpg',
  'before_after/IMG_5970.jpg',
  'before_after/IMG_5971.jpg',
  'before_after/IMG_5972.jpg',
  'before_after/IMG_5973.jpg',
  'before_after/IMG_5974.jpg',
  'before_after/IMG_5975.jpg',
  'before_after/IMG_5976.jpg',
  'before_after/IMG_5977.jpg',
  'before_after/IMG_5978.jpg',
  'before_after/IMG_5982.jpg',
  'before_after/IMG_5984.jpg',
  // new-landing
  'new-landing/method-1.jpeg',
  'new-landing/method-2.jpeg',
  'new-landing/method-3.PNG',
  'new-landing/method-4.PNG',
  'new-landing/control-1.jpeg',
  'new-landing/control-2.png',
  'new-landing/control-3.jpeg',
  // root
  'mtl.png',
  'laval.png',
  'longueuil.png',
  'brossard.png',
  'rbqlogo.png',
  'trushieldlogo.png',
  'heroImage.png',
  'secteurs_desservis.jpg',
  // 1-page-principale
  '1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG',
  '1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG',
  '1-page-principale/service hub/Photo header/IMG_6771.PNG',
  '1-page-principale/service hub/Peinture commerciale/IMG_6766.PNG',
  '1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG',
  '1-page-principale/Home/Projet extérieur/IMG_6755.PNG',
  '1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.PNG',
  '1-page-principale/blog hub/Peinture intérieure/IMG_6764.PNG',
  '1-page-principale/blog hub/Peinture résidentielle/IMG_6763.PNG',
  '1-page-principale/blog hub/Peinture commerciale/IMG_6762.PNG',
  '1-page-principale/blog hub/Peinture extérieure/IMG_6753.PNG',
  '1-page-principale/blog hub/Peinture industrielle/IMG_6752.PNG',
  '1-page-principale/sector hub/Peinture intérieure/IMG_6759.PNG',
  // 2-services
  '2-services/Page peinture résidentielle/1. réalisations/IMG_6778.PNG',
  '2-services/Page peinture résidentielle/2. réalisations/IMG_6779.PNG',
  '2-services/Page peinture résidentielle/3. réalisations/IMG_6764.PNG',
  '2-services/Page peinture résidentielle/Peinture résidentielle extérieure/IMG_6763.PNG',
  '2-services/Page peinture industrielle/1. réalisations/IMG_6752.PNG',
  '2-services/Page peinture industrielle/2. réalisations/IMG_6757.PNG',
  '2-services/Page peinture industrielle/3. réalisations/IMG_5978.PNG',
  '2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG',
  '2-services/Page peinture commerciale/2. réalisations/IMG_6759.PNG',
  '2-services/Page peinture commerciale/3. réalisations/IMG_6777.PNG',
  '2-services/Page peinture commerciale/Peinture commerciale extérieure/IMG_6777.PNG',
  '2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG',
  '2-services/Page peinture extérieure/2. réalisations/IMG_6761.PNG',
  '2-services/Page peinture extérieure/3. réalisations/IMG_6756.PNG',
  '2-services/Page peinture extérieure/Peinture résidentielle extérieure/IMG_6763.PNG',
  '2-services/Page peinture extérieure/Peinture commerciale extérieure/IMG_6777.PNG',
  '2-services/Page peinture extérieure/Photo header/IMG_0989.JPG',
  '2-services/Page peinture intérieure/1. réalisations/IMG_6032.PNG',
  '2-services/Page peinture intérieure/2. réalisations/IMG_6768.PNG',
  '2-services/Page peinture intérieure/3. réalisations/IMG_6762.PNG',
  '2-services/Page peinture intérieure/4. réalisations/IMG_6751.PNG',
  '2-services/Page peinture intérieure/5. réalisations/IMG_6754.PNG',
  '2-services/Page peinture intérieure/6. réalisations/IMG_5976.PNG',
  // 3-ville Montréal
  '3-ville/Montréal/résidentielle/IMG_6763.PNG',
  '3-ville/Montréal/extérieure/IMG_6778.PNG',
  '3-ville/Montréal/commerciale/IMG_6760.PNG',
  '3-ville/Montréal/1. réalisations/IMG_6767.PNG',
  '3-ville/Montréal/2. réalisations/IMG_6760.PNG',
  '3-ville/Montréal/3. réalisations/IMG_6759.PNG',
  '3-ville/Montréal/4. réalisations/IMG_6756.PNG',
  '3-ville/Montréal/5. réalisations/IMG_5877.JPG',
  '3-ville/Montréal/6. réalisations/IMG_6779.PNG',
  // 3-ville laval
  '3-ville/laval/résidentielle/IMG_6763.PNG',
  '3-ville/laval/extérieure/IMG_6756.PNG',
  '3-ville/laval/commerciale/IMG_6760.PNG',
  '3-ville/laval/1. réalisations/IMG_5976.PNG',
  '3-ville/laval/2. réalisations/IMG_6765.PNG',
  '3-ville/laval/3. réalisations/IMG_6753.PNG',
  '3-ville/laval/intérieure/IMG_6764.PNG',
  '3-ville/laval/industrielle/IMG_6780.PNG',
  '3-ville/laval/résidentielle/IMG_6763.PNG',
  // 3-ville brossard
  '3-ville/brossard/résidentielle/IMG_6763.PNG',
  '3-ville/brossard/extérieure/IMG_6778.PNG',
  '3-ville/brossard/commerciale/IMG_6759.PNG',
  '3-ville/brossard/1. réalisations/IMG_6761.PNG',
  '3-ville/brossard/2. réalisations/IMG_6768.PNG',
  '3-ville/brossard/3. réalisations/IMG_6777.PNG',
  '3-ville/brossard/intérieure/IMG_6764.PNG',
  '3-ville/brossard/industrielle/IMG_6752.PNG',
  '3-ville/brossard/résidentielle/IMG_6763.PNG',
  // 3-ville longueuil
  '3-ville/longueuil/résidentielle/IMG_6763.PNG',
  '3-ville/longueuil/extérieure/IMG_6778.PNG',
  '3-ville/longueuil/commerciale/IMG_6777.PNG',
  '3-ville/longueuil/1. réalisations/IMG_5974.PNG',
  '3-ville/longueuil/2. réalisations/IMG_6028.PNG',
  '3-ville/longueuil/3. réalisations/IMG_6024.PNG',
  '3-ville/longueuil/intérieure/IMG_6758.PNG',
  '3-ville/longueuil/industrielle/IMG_6752.PNG',
  '3-ville/longueuil/résidentielle/IMG_6763.PNG',
  // 4-sous-services
  '4-sous-services/résidentielle x éxtérieure/1. réalisations/IMG_6778.PNG',
  '4-sous-services/résidentielle x éxtérieure/2. réalisations/IMG_6755.PNG',
  '4-sous-services/résidentielle x éxtérieure/3. réalisations/IMG_6761.PNG',
  '4-sous-services/commercial x éxtérieure/1. réalisations/IMG_6777.PNG',
  '4-sous-services/commercial x éxtérieure/2. réalisations/IMG_6756.PNG',
  '4-sous-services/commercial x intérieure/1. réalisations/IMG_6759.PNG',
  '4-sous-services/commercial x intérieure/2. réalisations/IMG_6760.PNG',
  '4-sous-services/commercial x intérieure/3. réalisations/IMG_6762.PNG',
  '4-sous-services/commercial x intérieure/+header/IMG_6821.PNG',
  '4-sous-services/résdientielle x intérieure/1. réalisations/IMG_6764.PNG',
  '4-sous-services/résdientielle x intérieure/2. réalisations/IMG_5976.PNG',
  '4-sous-services/résdientielle x intérieure/3. réalisations/IMG_6024.PNG',
  '4-sous-services/résdientielle x intérieure/4. réalisations/IMG_5900.PNG',
  '4-sous-services/résdientielle x intérieure/5. réalisations/IMG_5873.PNG',
  '4-sous-services/résdientielle x intérieure/6. réalisations/IMG_5982.PNG',
];

function getAllDirsRecursive(dir, base = dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.relative(base, full).replace(/\\/g, '/');
    if (e.isDirectory()) {
      results.push(rel + '/');
      results.push(...getAllDirsRecursive(full, base));
    } else {
      results.push(rel);
    }
  }
  return results;
}

const missingFiles = [];
const missingFolders = [];

referencedPaths.forEach((relPath) => {
  const fullPath = path.join(imagesBase, relPath.replace(/\//g, path.sep));
  if (!fs.existsSync(fullPath)) {
    missingFiles.push(relPath);
  }
});

// Folders that are expected (from referenced paths) – check if any are completely missing
const expectedFolders = new Set();
referencedPaths.forEach((p) => {
  const parts = p.split('/');
  for (let i = 0; i < parts.length - 1; i++) {
    expectedFolders.add(parts.slice(0, i + 1).join('/'));
  }
});

expectedFolders.forEach((folder) => {
  const full = path.join(imagesBase, folder.replace(/\//g, path.sep));
  if (!fs.existsSync(full)) {
    missingFolders.push(folder + '/');
  }
});

// Also list all actual folders under images/ to report "which folders exist" and spot any empty/unused
const allExisting = getAllDirsRecursive(imagesBase);
const imageExtensions = /\.(png|jpg|jpeg|gif|webp|svg|PNG|JPG|JPEG|JPG)$/i;
const existingImageFiles = allExisting.filter((r) => imageExtensions.test(r));
const existingDirs = allExisting.filter((r) => r.endsWith('/'));

console.log('\n📁 Image audit: src/lelever-next/images\n');
console.log('Referenced image paths checked:', referencedPaths.length);

if (missingFiles.length > 0) {
  console.log('\n❌ MISSING FILES (referenced in code but not found):');
  missingFiles.forEach((p) => console.log('   ', p));
}

if (missingFolders.length > 0) {
  console.log('\n❌ MISSING FOLDERS (part of a referenced path):');
  [...new Set(missingFolders)].forEach((p) => console.log('   ', p));
}

if (missingFiles.length === 0 && missingFolders.length === 0) {
  console.log('\n✅ All referenced image files and folders exist.');
}

// Summary of folders under images
console.log('\n📂 Top-level folders under images/:');
const topDirs = fs.readdirSync(imagesBase, { withFileTypes: true }).filter((e) => e.isDirectory());
topDirs.forEach((d) => console.log('   -', d.name));

// Optional: list image files that exist but are NOT referenced (unused)
const referencedSet = new Set(referencedPaths.map((p) => p.replace(/\//g, path.sep)));
function collectImageFiles(dir, relPrefix = '') {
  const list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const name = e.name;
    const rel = relPrefix ? relPrefix + path.sep + name : name;
    const full = path.join(dir, name);
    if (e.isDirectory()) {
      if (name !== 'node_modules' && !name.startsWith('.')) {
        list.push(...collectImageFiles(full, rel));
      }
    } else if (/\.(png|jpg|jpeg|gif|webp|svg|PNG|JPG|JPEG|GIF|WEBP|SVG)$/i.test(name)) {
      const normalized = rel.replace(/\\/g, '/');
      list.push(normalized);
    }
  }
  return list;
}
const allImageFiles = collectImageFiles(imagesBase);
const unused = allImageFiles.filter((f) => !referencedSet.has(f) && !referencedSet.has(f.replace(/\//g, path.sep)));

if (unused.length > 0) {
  console.log('\n📋 Image files present on disk but NOT referenced in code (unused):');
  unused.forEach((p) => console.log('   ', p));
  console.log('   Total unused:', unused.length);
}

console.log('');
process.exit(missingFiles.length > 0 || missingFolders.length > 0 ? 1 : 0);
