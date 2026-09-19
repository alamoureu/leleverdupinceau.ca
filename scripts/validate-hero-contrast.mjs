#!/usr/bin/env node
/**
 * Validates that dark image-hero overlays never leave body text without a light color.
 *
 * Catches the Chakra pitfall where an invalid token like whiteAlpha.850 is ignored,
 * so the paragraph inherits gray.800 on a dark photo.
 *
 * Usage (after build/prerender):
 *   node scripts/validate-hero-contrast.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');

const VALID_ALPHA = new Set([
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]);

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtml(p, acc);
    else if (ent.name === 'index.html') acc.push(p);
  }
  return acc;
}

function routeFrom(file) {
  const rel = path.relative(DIST, path.dirname(file)).replace(/\\/g, '/');
  return rel === '' || rel === '.' ? '/' : `/${rel}`;
}

function classColors(css, cls) {
  const re = new RegExp(
    '\\.' +
      cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
      '(?:\\s|,|\\{)[^{]*\\{([^}]*)\\}',
    'g',
  );
  const colors = [];
  let m;
  while ((m = re.exec(css))) {
    const cm = m[1].match(/color:\s*([^;]+)/i);
    if (cm) colors.push(cm[1].trim());
  }
  return colors;
}

function isLight(c) {
  return /white|255,\s*255,\s*255|#fff|ffffff/i.test(c || '');
}

/** Source-side: invalid whiteAlpha / blackAlpha tokens */
function scanSourceTokens() {
  const roots = [
    path.join(__dirname, '..', 'src', 'lelever-next'),
    path.join(__dirname, '..', 'src', 'pages'),
  ];
  const files = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (/\.(jsx|js|tsx|ts)$/.test(ent.name)) files.push(p);
    }
  };
  roots.forEach(walk);

  const bad = [];
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    for (const m of src.matchAll(/(whiteAlpha|blackAlpha)\.(\d+)/g)) {
      if (!VALID_ALPHA.has(m[2])) {
        bad.push(`${path.relative(path.join(__dirname, '..'), file)}: ${m[0]}`);
      }
    }
  }
  return bad;
}

/** Dist: after a dark overlay, paragraphs following the first H1 must be light */
function scanDistHeroes() {
  const pages = walkHtml(DIST).filter((p) => !p.includes('image-audit'));
  const bad = [];

  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const css = (html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || []).join('\n');

    // Find each dark overlay, then the next H1 (hero title) after it
    const overlayRe = /rgba\(0,\s*0,\s*0,\s*0\.\d+/g;
    let om;
    const seenH1 = new Set();
    while ((om = overlayRe.exec(html))) {
      const afterOverlay = html.slice(om.index, om.index + 80000);
      const h1 = afterOverlay.match(/<h1[^>]*class="([^"]*)"[^>]*>([^<]*)<\/h1>/i);
      if (!h1) continue;
      const h1Abs = om.index + h1.index;
      if (seenH1.has(h1Abs)) continue;
      seenH1.add(h1Abs);

      const h1Colors = h1[1]
        .split(/\s+/)
        .filter((c) => c.startsWith('css-'))
        .flatMap((c) => classColors(css, c));

      // Light-page headers use gray H1 - skip. Real image heroes use white H1.
      if (!h1Colors.some(isLight)) continue;

      const afterH1 = html.slice(h1Abs, h1Abs + 2500);
      const cut = afterH1.search(
        /<button\b|Obtenir ma soumission|Get my free|Voir nos réalisations/i,
      );
      const heroCopy = cut > 0 ? afterH1.slice(0, cut) : afterH1;
      const paragraphs = [
        ...heroCopy.matchAll(/<p[^>]*class="([^"]*)"[^>]*>([^<]{12,280})<\/p>/gi),
      ];

      for (const p of paragraphs.slice(0, 5)) {
        const text = p[2].replace(/\s+/g, ' ').trim();
        if (/^[›>]$/.test(text) || text.length < 12) continue;
        if (/^(Accueil|Home|Services|Secteurs)/i.test(text) && text.length < 40) {
          continue;
        }
        const colors = p[1]
          .split(/\s+/)
          .filter((c) => c.startsWith('css-'))
          .flatMap((c) => classColors(css, c));
        if (!colors.some(isLight)) {
          bad.push({
            route: routeFrom(file),
            kind: colors.length ? 'DARK_PARAGRAPH' : 'NO_COLOR_INHERITS_BODY',
            text: text.slice(0, 100),
            colors: colors.length ? colors : ['(none)'],
          });
        }
      }
    }
  }

  return bad;
}

const tokenIssues = scanSourceTokens();
const distIssues = fs.existsSync(DIST) ? scanDistHeroes() : [];

let failed = false;

if (tokenIssues.length) {
  failed = true;
  console.error('\n✗ Invalid Chakra alpha tokens (ignored → body gray on heroes):\n');
  tokenIssues.forEach((t) => console.error('  -', t));
}

if (distIssues.length) {
  failed = true;
  console.error('\n✗ Dark hero text contrast failures in dist/:\n');
  for (const i of distIssues) {
    console.error(
      `  - ${i.route} [${i.kind}] color=${i.colors.join('|')} — "${i.text}"`,
    );
  }
}

if (failed) {
  console.error(
    '\nFix: use color="white" (or whiteAlpha.800 / whiteAlpha.900 only) on all hero Text/Heading over dark overlays.\n',
  );
  process.exit(1);
}

console.log(
  '✓ Hero contrast OK (no invalid alpha tokens; dark-overlay heroes use light text)',
);
