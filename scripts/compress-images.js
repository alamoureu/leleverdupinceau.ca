#!/usr/bin/env node
/**
 * Compress AND resize ALL website images in place (overwrites originals in src/lelever-next/images).
 * Resizing is the main fix for slow loading: images larger than maxDim are scaled down.
 * Requires: npm install --save-dev sharp
 *
 * Usage:
 *   node scripts/compress-images.js              # compress + resize all images in place
 *   node scripts/compress-images.js --dry-run    # list all files that would be processed
 *
 * Options:
 *   --quality=82    JPEG/WebP quality (default 82)
 *   --png-level=9   PNG compression 0-9 (default 9)
 *   --max-dim=1920  Max width/height in px; images larger are resized (default 1920)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const projectRoot = path.join(__dirname, '..');
const imagesBase = path.join(projectRoot, 'src', 'lelever-next', 'images');
const imageExtensions = /\.(png|jpg|jpeg|gif|webp|PNG|JPG|JPEG|GIF|WEBP)$/i;

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
  };
  for (const a of args) {
    if (a === '--dry-run') opts.dryRun = true;
    else if (a.startsWith('--quality=')) opts.jpegQuality = Math.max(1, Math.min(100, parseInt(a.slice(10), 10) || 82));
    else if (a.startsWith('--png-level=')) opts.pngLevel = Math.max(0, Math.min(9, parseInt(a.slice(11), 10) ?? 9));
    else if (a.startsWith('--max-dim=')) opts.maxDim = Math.max(320, Math.min(4096, parseInt(a.slice(10), 10) || 1920));
  }
  return opts;
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

  const images = collectAllImageFiles(imagesBase);
  if (images.length === 0) {
    console.log('No images found in', imagesBase);
    return;
  }

  console.log('Found', images.length, 'images in src/lelever-next/images');
  console.log('Resize: max dimension', opts.maxDim, 'px (images larger will be scaled down)');
  let totalOriginal = 0;
  let totalNew = 0;
  let resizedCount = 0;
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
      fs.renameSync(tempPath, img.absolutePath);
      totalOriginal += originalSize;
      totalNew += newSize;
      // Log when dimensions or file size changed so you see images being modified
      const sizeChange = originalSize !== newSize;
      const dimChange = needsResize && (w !== newW || h !== newH);
      if (sizeChange || dimChange) {
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
  console.log('Done. Processed', images.length, 'images in place' + (resizedCount ? ' (' + resizedCount + ' resized)' : ''));
  console.log('Before:', (totalOriginal / 1024 / 1024).toFixed(2), 'MB');
  console.log('After: ', (totalNew / 1024 / 1024).toFixed(2), 'MB');
  console.log('Saved:  ', (saved / 1024 / 1024).toFixed(2), 'MB (' + pct + '%)');
}

const opts = parseArgs();
compressWithSharp(opts).catch((err) => {
  console.error(err);
  process.exit(1);
});
