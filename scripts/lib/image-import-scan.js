/**
 * Scan des imports d'images statiques sous src/ (ESM).
 * Retourne une Map: chemin canonique (posix, relatif à la racine du repo) -> Set de chemins importeurs.
 */
const fs = require('fs');
const path = require('path');

const IMAGE_EXT = /\.(?:png|jpe?g|gif|webp|svg|ico|bmp|avif)(?:\?[^'"]*)?$/i;
const IMPORT_FROM_RE = /import\s+(?:[\s\S]*?)\s+from\s+['"]([^'"]+)['"]/gm;

function walkSourceFiles(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.name === 'node_modules' || e.name === 'dist' || e.name === 'build') continue;
    if (e.isDirectory()) walkSourceFiles(full, acc);
    else if (/\.(jsx?|tsx?)$/.test(e.name)) acc.push(full);
  }
  return acc;
}

function collectImageImports(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const out = [];
  let m;
  IMPORT_FROM_RE.lastIndex = 0;
  while ((m = IMPORT_FROM_RE.exec(text)) !== null) {
    const spec = m[1].trim();
    if (!IMAGE_EXT.test(spec)) continue;
    if (spec.startsWith('http:') || spec.startsWith('https:')) continue;
    out.push(spec);
  }
  return out;
}

/**
 * @param {string} repoRoot
 * @returns {{ byAsset: Map<string, Set<string>>, missing: Map<string, Set<string>> }}
 */
function scanImageImports(repoRoot) {
  const srcRoot = path.join(repoRoot, 'src');
  const files = walkSourceFiles(srcRoot);
  const byAsset = new Map();
  const missing = new Map();

  for (const absFile of files) {
    const dir = path.dirname(absFile);
    const relImporter = path.relative(repoRoot, absFile).split(path.sep).join('/');
    for (const spec of collectImageImports(absFile)) {
      const resolved = path.resolve(dir, spec);
      if (!resolved.startsWith(repoRoot)) continue;
      const canonical = path.relative(repoRoot, resolved).split(path.sep).join('/');
      if (!byAsset.has(canonical)) byAsset.set(canonical, new Set());
      byAsset.get(canonical).add(relImporter);
      if (!fs.existsSync(resolved)) {
        if (!missing.has(canonical)) missing.set(canonical, new Set());
        missing.get(canonical).add(relImporter);
      }
    }
  }
  return { byAsset, missing };
}

module.exports = { scanImageImports };
