#!/usr/bin/env node
/**
 * Lists groups of image files with identical MD5 (byte duplicates).
 * Usage: node scripts/find-image-byte-dupes.js
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '../src/lelever-next/images');

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.JPG', '.JPEG', '.PNG']);

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(name.name))) out.push(p);
  }
  return out;
}

const files = walk(ROOT);
const byHash = new Map();

for (const abs of files) {
  const buf = fs.readFileSync(abs);
  const h = crypto.createHash('md5').update(buf).digest('hex');
  if (!byHash.has(h)) byHash.set(h, []);
  byHash.get(h).push(abs);
}

const dupes = [...byHash.entries()]
  .filter(([, paths]) => paths.length > 1)
  .sort((a, b) => b[1].length - a[1].length);

const repoRoot = path.join(__dirname, '..');
console.log(
  JSON.stringify(
    {
      totalFiles: files.length,
      duplicateGroups: dupes.length,
      groups: dupes.map(([hash, paths]) => ({
        hash,
        count: paths.length,
        paths: paths.map((p) => path.relative(repoRoot, p)),
      })),
    },
    null,
    2
  )
);
