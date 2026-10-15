#!/usr/bin/env node
/**
 * Audit images under src/lelever-next/images against real imports in src/.
 * Reports missing imports and unused files on disk.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const imagesBase = path.join(root, 'src', 'lelever-next', 'images');
const IMAGE_EXT = /\.(webp|jpe?g|png|gif|svg)$/i;

function collectImageFiles(dir, relPrefix = '') {
  const list = [];
  if (!fs.existsSync(dir)) return list;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const rel = relPrefix ? `${relPrefix}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) list.push(...collectImageFiles(full, rel));
    else if (IMAGE_EXT.test(e.name)) list.push(rel.replace(/\\/g, '/'));
  }
  return list;
}

function resolveImports() {
  const referenced = new Set();
  const missing = [];

  const out = execSync(
    `rg -n "from\\\\s+['\\"]" --glob '*.{js,jsx}' src || true`,
    { cwd: root, encoding: 'utf8' }
  ).trim();

  for (const line of out ? out.split('\n') : []) {
    const first = line.indexOf(':');
    const second = line.indexOf(':', first + 1);
    if (first < 0 || second < 0) continue;
    const file = path.join(root, line.slice(0, first));
    const content = line.slice(second + 1);
    const m = content.match(/from\s+(['"])([\s\S]*?)\1/);
    if (!m) continue;
    const rel = m[2];
    if (!IMAGE_EXT.test(rel) || !rel.includes('images')) continue;
    const abs = path.resolve(path.dirname(file), rel);
    if (!fs.existsSync(abs)) {
      missing.push({ file: path.relative(root, file), abs: path.relative(root, abs) });
      continue;
    }
    if (abs.startsWith(imagesBase + path.sep) || abs === imagesBase) {
      referenced.add(path.relative(imagesBase, abs).replace(/\\/g, '/'));
    }
  }

  // import.meta.glob directories
  const globOut = execSync(
    `rg -n "import\\.meta\\.glob" --glob '*.{js,jsx}' src || true`,
    { cwd: root, encoding: 'utf8' }
  ).trim();

  for (const line of globOut ? globOut.split('\n') : []) {
    const first = line.indexOf(':');
    if (first < 0) continue;
    const file = path.join(root, line.slice(0, first));
    const q = line.slice(first).match(/glob\(\s*['"]([^'"]+)['"]/);
    if (!q) continue;
    const pattern = q[1];
    const star = pattern.search(/[*{]/);
    const prefix = star >= 0 ? pattern.slice(0, star) : pattern;
    const searchDir = path.resolve(path.dirname(file), prefix);
    if (!fs.existsSync(searchDir)) continue;
    for (const f of collectImageFiles(searchDir)) {
      const abs = path.join(searchDir, f);
      if (abs.startsWith(imagesBase + path.sep)) {
        referenced.add(path.relative(imagesBase, abs).replace(/\\/g, '/'));
      }
    }
  }

  return { referenced, missing };
}

const { referenced, missing } = resolveImports();
const onDisk = collectImageFiles(imagesBase);
const unused = onDisk.filter((f) => !referenced.has(f));

console.log('\nImage audit: src/lelever-next/images\n');
console.log('Imports resolved:', referenced.size);
console.log('Files on disk:', onDisk.length);

if (missing.length) {
  console.log('\nMISSING (imported but not found):');
  missing.forEach((m) => console.log('  ', m.file, '->', m.abs));
} else {
  console.log('\nAll image imports resolve.');
}

const staging = unused.filter((f) => f.startsWith('Photos à ajouter'));
const liveUnused = unused.filter((f) => !f.startsWith('Photos à ajouter'));

if (liveUnused.length) {
  console.log(`\nUnused outside staging (${liveUnused.length}):`);
  liveUnused.slice(0, 40).forEach((p) => console.log('  ', p));
  if (liveUnused.length > 40) console.log(`  ... +${liveUnused.length - 40} more`);
}

if (staging.length) {
  console.log(`\nUnused in Photos à ajouter (inbox, ${staging.length}): kept for future adds`);
}

console.log('');
process.exit(missing.length ? 1 : 0);
