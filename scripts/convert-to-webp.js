#!/usr/bin/env node
/**
 * Convert all raster images under src/site/images to WebP,
 * update local code/script references, then remove the originals.
 *
 * Usage:
 *   node scripts/convert-to-webp.js              # convert + rewrite refs + delete originals
 *   node scripts/convert-to-webp.js --dry-run    # report only
 *   node scripts/convert-to-webp.js --keep       # keep originals after conversion
 *   node scripts/convert-to-webp.js --quality=82
 *   node scripts/convert-to-webp.js --max-dim=1920
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const projectRoot = path.join(__dirname, '..');
const imagesBase = path.join(projectRoot, 'src', 'site', 'images');
const sourceExtRe = /\.(png|jpe?g|gif|heic)$/i;
const skipDirs = new Set(['node_modules', '.git']);

function parseArgs() {
  const opts = {
    dryRun: false,
    keep: false,
    quality: 82,
    maxDim: 1920,
  };
  for (const a of process.argv.slice(2)) {
    if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--keep') opts.keep = true;
    else if (a.startsWith('--quality=')) opts.quality = Math.max(1, Math.min(100, parseInt(a.slice(10), 10) || 82));
    else if (a.startsWith('--max-dim=')) opts.maxDim = Math.max(320, Math.min(4096, parseInt(a.slice(10), 10) || 1920));
  }
  return opts;
}

function collectRasterFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name) || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectRasterFiles(full, list);
    else if (sourceExtRe.test(entry.name)) list.push(full);
  }
  return list;
}

function webpPathFor(absPath) {
  return absPath.replace(sourceExtRe, '.webp');
}

function collectTextFiles(dir, list = []) {
  const textExt = /\.(js|jsx|ts|tsx|mjs|cjs|json|md|html|css)$/i;
  if (!fs.existsSync(dir)) return list;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name) || entry.name.startsWith('.')) continue;
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectTextFiles(full, list);
    else if (textExt.test(entry.name)) list.push(full);
  }
  return list;
}

async function convertOne(sharp, absPath, opts) {
  const outPath = webpPathFor(absPath);
  const originalSize = fs.statSync(absPath).size;
  let pipeline = sharp(absPath);
  const meta = await pipeline.metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  if (opts.maxDim > 0 && (w > opts.maxDim || h > opts.maxDim)) {
    pipeline = pipeline.resize(opts.maxDim, opts.maxDim, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  const tmp = path.join(os.tmpdir(), `lelever-webp-${process.pid}-${Math.random().toString(36).slice(2)}.webp`);
  await pipeline.webp({ quality: opts.quality }).toFile(tmp);
  fs.renameSync(tmp, outPath);
  const newSize = fs.statSync(outPath).size;
  return { outPath, originalSize, newSize, resized: w > opts.maxDim || h > opts.maxDim };
}

function updateReferences(convertedBasenames) {
  // Map old relative filename endings to .webp (case-insensitive extension)
  const textRoots = [
    path.join(projectRoot, 'src'),
    path.join(projectRoot, 'scripts'),
    path.join(projectRoot, 'index.html'),
  ];
  const files = [];
  for (const root of textRoots) {
    if (fs.statSync(root).isFile()) files.push(root);
    else files.push(...collectTextFiles(root));
  }

  let filesChanged = 0;
  let replacements = 0;
  // Match quoted paths; allow apostrophes inside double/backtick quotes.
  const replaceRes = [
    /"((?:\\.|[^"\\])*?\.(?:png|jpe?g|gif|heic))"/gi,
    /'((?:\\.|[^'\\])*?\.(?:png|jpe?g|gif|heic))'/gi,
    /`((?:\\.|[^`\\])*?\.(?:png|jpe?g|gif|heic))`/gi,
  ];

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const replaceRe of replaceRes) {
      content = content.replace(replaceRe, (match, relPath) => {
        const quote = match[0];
        if (/^https?:\/\//i.test(relPath) || relPath.startsWith('//')) return match;
        if (!relPath.includes('images/') && !relPath.includes('site/')) {
          const base = path.basename(relPath);
          const webpBase = base.replace(sourceExtRe, '.webp');
          if (!convertedBasenames.has(webpBase.toLowerCase()) && !convertedBasenames.has(base.toLowerCase())) {
            return match;
          }
        }
        const newPath = relPath.replace(sourceExtRe, '.webp');
        if (newPath === relPath) return match;
        changed = true;
        replacements++;
        return quote + newPath + quote;
      });
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      filesChanged++;
    }
  }
  return { filesChanged, replacements };
}

async function main() {
  const opts = parseArgs();
  let sharp;
  try {
    sharp = require('sharp');
  } catch (_) {
    console.error('Missing dependency. Run: npm install --save-dev sharp');
    process.exit(1);
  }

  const files = collectRasterFiles(imagesBase);
  console.log(`Found ${files.length} raster images to convert under src/site/images`);
  if (opts.dryRun) {
    console.log('Dry run - no files will be written.');
    files.slice(0, 20).forEach((f) => console.log('  ', path.relative(imagesBase, f), '->', path.basename(webpPathFor(f))));
    if (files.length > 20) console.log(`  ... and ${files.length - 20} more`);
    return;
  }

  let totalOriginal = 0;
  let totalNew = 0;
  let ok = 0;
  let failed = 0;
  const convertedBasenames = new Set();
  // Existing webp files also count for reference updates
  function walkWebp(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (skipDirs.has(entry.name) || entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkWebp(full);
      else if (/\.webp$/i.test(entry.name)) convertedBasenames.add(entry.name.toLowerCase());
    }
  }
  walkWebp(imagesBase);

  const concurrency = Math.max(2, Math.min(os.cpus().length, 6));
  let index = 0;

  async function worker() {
    while (index < files.length) {
      const i = index++;
      const absPath = files[i];
      const rel = path.relative(imagesBase, absPath);
      try {
        const result = await convertOne(sharp, absPath, opts);
        totalOriginal += result.originalSize;
        totalNew += result.newSize;
        convertedBasenames.add(path.basename(result.outPath).toLowerCase());
        convertedBasenames.add(path.basename(absPath).toLowerCase());
        ok++;
        if (!opts.keep && absPath !== result.outPath) {
          fs.unlinkSync(absPath);
        }
        if ((ok + failed) % 50 === 0 || ok + failed === files.length) {
          console.log(`  progress ${ok + failed}/${files.length}`);
        }
      } catch (err) {
        failed++;
        console.error('Error:', rel, err.message);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  console.log('\nUpdating code references...');
  const refStats = updateReferences(convertedBasenames);

  const saved = totalOriginal - totalNew;
  const pct = totalOriginal ? ((saved / totalOriginal) * 100).toFixed(1) : 0;
  console.log('');
  console.log(`Converted: ${ok}  failed: ${failed}`);
  console.log(`Before: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`After:  ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved:  ${(saved / 1024 / 1024).toFixed(2)} MB (${pct}%)`);
  console.log(`Refs updated: ${refStats.replacements} in ${refStats.filesChanged} files`);
  if (!opts.keep) console.log('Originals deleted.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
