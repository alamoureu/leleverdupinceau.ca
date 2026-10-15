#!/usr/bin/env node
/**
 * Guardrail: no before/after doublons.
 * - Forbids loopMode="duplicate" / double items.map / ba-a-/ba-b- clone keys
 * - Within each before/after pair list, each image file may appear at most once
 *
 * Usage: node scripts/check-before-after-dupes.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(__dirname, '../src/site');
const errors = [];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.jsx?$/.test(ent.name)) out.push(p);
  }
  return out;
}

function rel(filePath) {
  return path.relative(path.join(__dirname, '..'), filePath);
}

function parseImageImports(text, filePath) {
  const imports = new Map();
  const re = /import\s+(\w+)\s+from\s+(["'])((?:\\.|(?!\2).)*)\2/g;
  let m;
  while ((m = re.exec(text))) {
    const [, name, , spec] = m;
    if (!spec.includes('images/') && !/\.(webp|jpe?g|png|gif)$/i.test(spec)) continue;
    imports.set(name, path.resolve(path.dirname(filePath), spec.split('?')[0]));
  }
  return imports;
}

function sliceBalancedArray(text, openBracketIndex) {
  let depth = 0;
  for (let j = openBracketIndex; j < text.length; j += 1) {
    if (text[j] === '[') depth += 1;
    else if (text[j] === ']') {
      depth -= 1;
      if (depth === 0) return text.slice(openBracketIndex + 1, j);
    }
  }
  return '';
}

function extractObjectPairs(block) {
  const pairs = [];
  const re = /before\s*:\s*(\w+)\s*,\s*after\s*:\s*(\w+)/g;
  let m;
  while ((m = re.exec(block))) pairs.push([m[1], m[2]]);
  return pairs;
}

function extractTuplePairs(block) {
  const pairs = [];
  const re = /\[\s*(\w+)\s*,\s*(\w+)\s*,/g;
  let m;
  while ((m = re.exec(block))) pairs.push([m[1], m[2]]);
  return pairs;
}

function checkPairList(label, pairs, imports, filePath) {
  if (pairs.length < 2) return;
  const usage = new Map();
  pairs.forEach(([b, a], index) => {
    for (const [role, varName] of [
      ['before', b],
      ['after', a],
    ]) {
      const abs = imports.get(varName);
      if (!abs) continue;
      if (!usage.has(abs)) usage.set(abs, []);
      usage.get(abs).push({ index, role, varName });
    }
  });

  for (const [abs, hits] of usage) {
    const indexes = new Set(hits.map((h) => h.index));
    const beforeAndAfterSameFile =
      hits.length >= 2 &&
      hits.some((h) => h.role === 'before') &&
      hits.some((h) => h.role === 'after') &&
      indexes.size === 1;
    if (indexes.size > 1 || beforeAndAfterSameFile) {
      errors.push(
        `${rel(filePath)} [${label}]: duplicate image ${path.basename(abs)} used at pair indexes ${[...indexes].join(', ')}`,
      );
    }
  }
}

function findArrayAfter(text, pattern) {
  const m = pattern.exec(text);
  if (!m) return null;
  const bracket = text.indexOf('[', m.index + m[0].length - 1);
  if (bracket < 0) return null;
  return sliceBalancedArray(text, bracket);
}

for (const filePath of walk(SITE)) {
  const text = fs.readFileSync(filePath, 'utf8');

  if (/loopMode\s*=\s*\{?\s*["']duplicate["']/.test(text) || /loopMode\s*:\s*["']duplicate["']/.test(text)) {
    errors.push(`${rel(filePath)}: loopMode="duplicate" is forbidden (clones cards = visible doublons)`);
  }
  if (/ba-a-|ba-b-/.test(text)) {
    errors.push(`${rel(filePath)}: ba-a-/ba-b- clone keys found - remove the second rendered set`);
  }
  if (/items\.map\([\s\S]{0,500}?items\.map\(/.test(text) && /BeforeAfter|PairSlide/.test(text)) {
    errors.push(`${rel(filePath)}: items.map appears twice in before/after carousel`);
  }

  const imports = parseImageImports(text, filePath);

  // const fooBeforeAfterPairs = [ ... ] / const pairs = [ before: ...
  const constRe = /const\s+(\w+)\s*=\s*\[/g;
  let cm;
  while ((cm = constRe.exec(text))) {
    const name = cm[1];
    if (!/(before|after|pair|Pairs|CURATED|FEATURED|images)/i.test(name) && name !== 'pairs') {
      continue;
    }
    const block = sliceBalancedArray(text, cm.index + cm[0].length - 1);
    if (!block || (!/before\s*:/.test(block) && !/\[\s*\w+\s*,\s*\w+\s*,/.test(block))) continue;
    const pairs = /before\s*:/.test(block)
      ? extractObjectPairs(block)
      : extractTuplePairs(block);
    checkPairList(name, pairs, imports, filePath);
  }

  // beforeAfterPairs: [ in configs
  const cfgRe = /beforeAfterPairs\s*:\s*\[/g;
  let cfg;
  let cfgI = 0;
  while ((cfg = cfgRe.exec(text))) {
    const block = sliceBalancedArray(text, cfg.index + cfg[0].length - 1);
    checkPairList(`beforeAfterPairs#${cfgI}`, extractObjectPairs(block), imports, filePath);
    cfgI += 1;
  }

  // buildLandingPagePairs inner `const pairs = [`
  if (filePath.endsWith('BeforeAfterCarouselSection.jsx')) {
    const landing = findArrayAfter(text, /export function buildLandingPagePairs[\s\S]*?const pairs\s*=\s*/);
    if (landing) {
      checkPairList('buildLandingPagePairs', extractObjectPairs(landing), imports, filePath);
    }
  }
}

if (errors.length) {
  console.error('Before/after duplicate check FAILED:\n');
  for (const e of [...new Set(errors)]) console.error(` - ${e}`);
  console.error(`\n${[...new Set(errors)].length} issue(s).`);
  process.exit(1);
}

console.log('Before/after duplicate check OK.');
