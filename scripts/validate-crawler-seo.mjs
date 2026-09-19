/**
 * Validate that a deployed site exposes SEO content without JavaScript.
 * Usage: node scripts/validate-crawler-seo.mjs https://leafy-kheer-5bf952.netlify.app
 */

const BASE = (process.argv[2] || '').replace(/\/$/, '');
if (!BASE) {
  console.error('Usage: node scripts/validate-crawler-seo.mjs https://your-site.netlify.app');
  process.exit(1);
}

const ROUTES = [
  '/',
  '/contact',
  '/a-propos',
  '/services/peinture-interieure',
  '/services/peinture-interieure/montreal',
  '/services/peinture-commerciale/interieure',
  '/secteurs/laval',
  '/secteurs/montreal/westmount',
  '/blog/prix-peinture-montreal',
  '/peintre-professionnel',
  '/fr/peintre-montreal',
  // legacy (should 301 or redirect stub)
  '/services/peinture-interieure/montreal/westmount',
  '/soumission',
  '/avis',
  '/secteurs-desservis/laval',
];

const UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

function extract(html) {
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [, ''])[1].trim();
  const desc = (
    html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i) ||
    [, '']
  )[1];
  const canonical = (html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) || [, ''])[1];
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  const ld = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (m) => {
      try {
        return JSON.parse(m[1])['@type'] || 'ok';
      } catch {
        return 'INVALID';
      }
    }
  );
  const emptyRoot = /<div[^>]*id=["']root["'][^>]*>\s*<\/div>/i.test(html);
  const isRedirectStub = /legacy-redirect|http-equiv=["']refresh["']/i.test(html);
  return { title, desc, canonical, h1, words, ld, emptyRoot, isRedirectStub };
}

async function fetchRaw(url, redirectMode = 'manual') {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html' },
    redirect: redirectMode,
  });
  return res;
}

let pass = 0;
let fail = 0;
const failures = [];

console.log(`Crawler SEO validation (JavaScript OFF)\nSite: ${BASE}\n${'='.repeat(72)}`);

for (const route of ROUTES) {
  const url = `${BASE}${route}`;
  try {
    let res = await fetchRaw(url, 'manual');

    if ([301, 302, 307, 308].includes(res.status)) {
      const loc = res.headers.get('location') || '';
      const dest = loc.startsWith('http') ? loc : new URL(loc, BASE).href;
      console.log(`\n${route}`);
      console.log(`  HTTP ${res.status} → ${loc}`);

      const destRes = await fetchRaw(dest, 'follow');
      const html = await destRes.text();
      const info = extract(html);
      const ok =
        destRes.status === 200 &&
        !info.emptyRoot &&
        info.title &&
        info.words > 80 &&
        Boolean(info.h1 || info.isRedirectStub);

      console.log(`  Destination title: ${info.title.slice(0, 70)}`);
      console.log(`  Destination h1   : ${(info.h1 || '(none)').slice(0, 70)}`);
      console.log(`  Destination words: ${info.words} | JSON-LD: ${info.ld.join(', ') || 'none'}`);
      console.log(`  ${ok ? 'PASS (301 + content at destination)' : 'FAIL'}`);
      if (ok) pass += 1;
      else {
        fail += 1;
        failures.push(route);
      }
      continue;
    }

    const html = await res.text();
    const info = extract(html);

    console.log(`\n${route}`);
    console.log(`  HTTP ${res.status} | ${html.length} bytes`);
    console.log(`  title : ${info.title.slice(0, 75) || '(NONE)'}`);
    console.log(`  desc  : ${(info.desc || '(NONE)').slice(0, 75)}`);
    console.log(`  canon : ${info.canonical || '(NONE)'}`);
    console.log(`  h1    : ${(info.h1 || '(NONE)').slice(0, 75)}`);
    console.log(
      `  words : ${info.words} | empty #root: ${info.emptyRoot} | JSON-LD: ${info.ld.join(', ') || 'none'}`
    );

    let ok = false;
    let label = '';
    if (info.isRedirectStub) {
      ok = Boolean(info.canonical) && res.status === 200;
      label = ok ? 'PASS (redirect HTML stub)' : 'FAIL incomplete redirect stub';
    } else {
      const legalNoH1 = route.includes('politique') || route.includes('mentions');
      ok =
        res.status === 200 &&
        !info.emptyRoot &&
        Boolean(info.title) &&
        info.words > 100 &&
        Boolean(info.h1 || legalNoH1) &&
        Boolean(info.desc);
      label = ok
        ? 'PASS (full HTML visible without JavaScript)'
        : 'FAIL (crawler would see empty or thin page)';
    }

    console.log(`  ${label}`);
    if (ok) pass += 1;
    else {
      fail += 1;
      failures.push(route);
    }
  } catch (error) {
    console.log(`\n${route}`);
    console.log(`  FAIL fetch: ${error.message}`);
    fail += 1;
    failures.push(route);
  }
}

console.log(`\n${'='.repeat(72)}`);
console.log(`RESULT: ${pass} pass, ${fail} fail / ${ROUTES.length}`);
if (failures.length) console.log(`Failed: ${failures.join(', ')}`);
process.exit(fail ? 1 : 0);
