#!/usr/bin/env node
/**
 * Compress AND resize website images in place (overwrites originals in src/lelever-next/images).
 * Resizing is the main fix for slow loading: images larger than maxDim are scaled down.
 * Requires: npm install --save-dev sharp
 *
 * Usage:
 *   node scripts/compress-images.js              # compress + resize all images
 *   node scripts/compress-images.js --dry-run    # list files that would be processed
 *   node scripts/compress-images.js --max-dim=1080 --include=avant --include=before_after
 *
 * Options:
 *   --quality=82     JPEG/WebP quality (default 82)
 *   --png-level=9    PNG compression 0-9 (default 9)
 *   --max-dim=1920   Max width/height in px; larger images are resized (default 1920)
 *   --include=SUB    Only process paths containing SUB (case-insensitive, repeatable; OR)
 *   --exclude=SUB    Skip paths containing SUB (case-insensitive, repeatable; OR)
 *
 * Roles (recommended max-dim):
 *   Carousel / avant-après : 1080 (cards ~360px CSS, 2x DPR)
 *   Heroes / headers       : 1920
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const projectRoot = path.join(__dirname, '..');
const imagesBase = path.join(projectRoot, 'src', 'lelever-next', 'images');
const imageExtensions = /\.(png|jpg|jpeg|gif|heic|webp)$/i;

function collectAllImageFiles(dir, relPrefix = '') {
  const list = [];
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const name = e.name;
    const rel = relPrefix ? relPrefix + path.sep + name : name;
    const full = path.join(dir, name);
    if (e.isDirectory()) {
      if (name !== 'node_modules' && !name.startsWith('.')) {
        list.push(...collectAllImageFiles(full, rel));
      }
    } else if (imageExtensions.test(name)) {
      list.push({ path: rel.replace(/\\/g, '/'), absolutePath: full });
    }
  }
  return list;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    dryRun: false,
    jpegQuality: 82,
    pngLevel: 9,
    maxDim: 1920,
    includes: [],
    excludes: [],
  };
  for (const a of args) {
    if (a === '--dry-run') opts.dryRun = true;
    else if (a.startsWith('--quality=')) opts.jpegQuality = Math.max(1, Math.min(100, parseInt(a.slice(10), 10) || 82));
    else if (a.startsWith('--png-level=')) opts.pngLevel = Math.max(0, Math.min(9, parseInt(a.slice(11), 10) ?? 9));
    else if (a.startsWith('--max-dim=')) opts.maxDim = Math.max(320, Math.min(4096, parseInt(a.slice(10), 10) || 1920));
    else if (a.startsWith('--include=')) {
      const v = a.slice(10).trim().toLowerCase();
      if (v) opts.includes.push(v);
    } else if (a.startsWith('--exclude=')) {
      const v = a.slice(10).trim().toLowerCase();
      if (v) opts.excludes.push(v);
    }
  }
  return opts;
}

function matchesFilters(relPath, opts) {
  const lower = relPath.toLowerCase();
  if (opts.includes.length > 0 && !opts.includes.some((sub) => lower.includes(sub))) {
    return false;
  }
  if (opts.excludes.some((sub) => lower.includes(sub))) {
    return false;
  }
  return true;
}

async function compressWithSharp(opts) {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('Missing dependency. Run: npm install --save-dev sharp');
    process.exit(1);
  }

  if (!fs.existsSync(imagesBase)) {
    console.error('Images folder not found:', imagesBase);
    process.exit(1);
  }

  const allImages = collectAllImageFiles(imagesBase);
  const images = allImages.filter((img) => matchesFilters(img.path, opts));
  if (images.length === 0) {
    console.log('No images matched filters in', imagesBase);
    if (opts.includes.length) console.log('  include:', opts.includes.join(', '));
    if (opts.excludes.length) console.log('  exclude:', opts.excludes.join(', '));
    return;
  }

  console.log('Found', images.length, 'images' + (images.length !== allImages.length ? ` (of ${allImages.length} total)` : ''));
  console.log('Resize: max dimension', opts.maxDim, 'px (images larger will be scaled down)');
  if (opts.includes.length) console.log('Include:', opts.includes.join(', '));
  if (opts.excludes.length) console.log('Exclude:', opts.excludes.join(', '));
  let totalOriginal = 0;
  let totalNew = 0;
  let resizedCount = 0;
  let changedCount = 0;
  const tempDir = path.join(os.tmpdir(), 'lelever-compress-' + Date.now());

  if (!opts.dryRun) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    let originalSize = 0;
    try {
      originalSize = fs.statSync(img.absolutePath).size;
    } catch (_) {}

    if (opts.dryRun) {
      totalOriginal += originalSize;
      continue;
    }

    const tempPath = path.join(tempDir, 'img_' + i + path.extname(img.absolutePath));

    try {
      let pipeline = sharp(img.absolutePath);
      const meta = await pipeline.metadata();
      const format = meta.format;
      const w = meta.width || 0;
      const h = meta.height || 0;
      const needsResize = opts.maxDim > 0 && (w > opts.maxDim || h > opts.maxDim);

      if (needsResize) {
        pipeline = pipeline.resize(opts.maxDim, opts.maxDim, {
          fit: 'inside',
          withoutEnlargement: true,
        });
        resizedCount++;
      }

      if (format === 'jpeg' || format === 'jpg') {
        pipeline = pipeline.jpeg({ quality: opts.jpegQuality, mozjpeg: true });
      } else if (format === 'png') {
        pipeline = pipeline.png({ compressionLevel: opts.pngLevel, adaptiveFiltering: true });
      } else if (format === 'webp') {
        pipeline = pipeline.webp({ quality: opts.jpegQuality });
      } else if (format === 'gif') {
        pipeline = pipeline.gif();
      } else {
        totalOriginal += originalSize;
        totalNew += originalSize;
        continue;
      }

      await pipeline.toFile(tempPath);
      const newSize = fs.statSync(tempPath).size;
      const newMeta = await sharp(tempPath).metadata();
      const newW = newMeta.width || w;
      const newH = newMeta.height || h;

      // Keep original if recompression grew the file and we did not resize
      if (!needsResize && newSize >= originalSize) {
        fs.unlinkSync(tempPath);
        totalOriginal += originalSize;
        totalNew += originalSize;
        continue;
      }

      fs.renameSync(tempPath, img.absolutePath);
      totalOriginal += originalSize;
      totalNew += newSize;
      const sizeChange = originalSize !== newSize;
      const dimChange = needsResize && (w !== newW || h !== newH);
      if (sizeChange || dimChange) {
        changedCount++;
        const parts = [img.path];
        if (dimChange) parts.push(` ${w}x${h} → ${newW}x${newH}`);
        if (sizeChange) parts.push(` ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB`);
        console.log('  ', parts.join(' |'));
      }
    } catch (err) {
      if (fs.existsSync(tempPath)) try { fs.unlinkSync(tempPath); } catch (_) {}
      console.error('Error processing', img.path, err.message);
    }
  }

  if (!opts.dryRun && fs.existsSync(tempDir)) {
    try {
      fs.rmSync(tempDir, { recursive: true });
    } catch (_) {}
  }

  if (opts.dryRun) {
    console.log('Dry run: would process', images.length, 'images');
    console.log('Total size:', (totalOriginal / 1024 / 1024).toFixed(2), 'MB');
    return;
  }

  const saved = totalOriginal - totalNew;
  const pct = totalOriginal ? ((saved / totalOriginal) * 100).toFixed(1) : 0;
  console.log('');
  console.log(
    'Done. Processed',
    images.length,
    'images in place' +
      (resizedCount ? ' (' + resizedCount + ' resized)' : '') +
      (changedCount ? ', ' + changedCount + ' changed' : '')
  );
  console.log('Before:', (totalOriginal / 1024 / 1024).toFixed(2), 'MB');
  console.log('After: ', (totalNew / 1024 / 1024).toFixed(2), 'MB');
  console.log('Saved:  ', (saved / 1024 / 1024).toFixed(2), 'MB (' + pct + '%)');
}

const opts = parseArgs();
compressWithSharp(opts).catch((err) => {
  console.error(err);
  process.exit(1);
});
