/**
 * Full-site crawler SEO validation (no JavaScript).
 * Checks every content page + every legacy redirect from all-public-routes.mjs.
 *
 * Usage:
 *   node scripts/validate-crawler-seo-all.mjs https://leafy-kheer-5bf952.netlify.app
 */

import { classifyPublicRoutes } from './all-public-routes.mjs';

const BASE = (process.argv[2] || '').replace(/\/$/, '');
if (!BASE) {
  console.error('Usage: node scripts/validate-crawler-seo-all.mjs https://your-site.netlify.app');
  process.exit(1);
}

const UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const { content, redirects } = classifyPublicRoutes();

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
  const ldCount = (html.match(/application\/ld\+json/gi) || []).length;
  const emptyRoot = /id=["']root["'][^>]*>\s*<\/div>/i.test(html);
  const hasRootContent =
    /id=["']root["'][^>]*>[\s\S]{200,}?/i.test(html) || words > 80;
  const isRedirectStub = /legacy-redirect|http-equiv=["']refresh["']/i.test(html);
  return { title, desc, canonical, h1, words, ldCount, emptyRoot, hasRootContent, isRedirectStub };
}

async function fetchManual(url) {
  return fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html' },
    redirect: 'manual',
  });
}

async function fetchFollow(url) {
  return fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html' },
    redirect: 'follow',
  });
}

const contentResults = [];
const redirectResults = [];
const CONCURRENCY = 6;

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    })
  );
  return out;
}

console.log(`Full crawler SEO audit (JS off)\nSite: ${BASE}`);
console.log(`Content pages: ${content.length} | Legacy redirects: ${Object.keys(redirects).length}\n`);

await mapPool(content, CONCURRENCY, async (route) => {
  const url = `${BASE}${route}`;
  try {
    let res = await fetchManual(url);
    // Netlify sometimes 301 to trailing slash — follow once
    if ([301, 302, 307, 308].includes(res.status)) {
      const loc = res.headers.get('location') || '';
      const dest = loc.startsWith('http') ? loc : new URL(loc, BASE).href;
      res = await fetchFollow(dest);
    }
    const html = await res.text();
    const info = extract(html);
    const legalNoH1 = route.includes('politique') || route.includes('mentions');
    const ok =
      res.status === 200 &&
      !info.emptyRoot &&
      info.hasRootContent &&
      Boolean(info.title) &&
      info.words >= 80 &&
      Boolean(info.h1 || legalNoH1) &&
      Boolean(info.desc);

    const row = {
      route,
      ok,
      status: res.status,
      title: info.title.slice(0, 70),
      h1: (info.h1 || '').slice(0, 60),
      words: info.words,
      ld: info.ldCount,
      reason: ok
        ? 'PASS'
        : [
            res.status !== 200 && `HTTP ${res.status}`,
            info.emptyRoot && 'empty #root',
            !info.title && 'no title',
            !info.desc && 'no meta description',
            !info.h1 && !legalNoH1 && 'no h1',
            info.words < 80 && `thin (${info.words} words)`,
          ]
            .filter(Boolean)
            .join(', '),
    };
    contentResults.push(row);
    console.log(`${ok ? '✓' : '✗'} ${route} — ${row.reason}${ok ? ` (${info.words} words, h1 ok, ld=${info.ldCount})` : ''}`);
  } catch (error) {
    contentResults.push({ route, ok: false, reason: `fetch error: ${error.message}` });
    console.log(`✗ ${route} — fetch error: ${error.message}`);
  }
});

console.log('\n--- Legacy redirects ---\n');

const redirectEntries = Object.entries(redirects).sort(([a], [b]) => a.localeCompare(b));
await mapPool(redirectEntries, CONCURRENCY, async ([from, to]) => {
  const url = `${BASE}${from}`;
  try {
    const res = await fetchManual(url);
    const loc = res.headers.get('location') || '';
    const isHttpRedirect = [301, 302, 307, 308].includes(res.status);
    let ok = false;
    let detail = '';

    if (isHttpRedirect) {
      const normalizedLoc = loc.replace(/\/$/, '') || '/';
      const normalizedTo = to.replace(/\/$/, '') || '/';
      // Accept exact target or trailing-slash variant, or absolute URL ending with target
      ok =
        normalizedLoc === normalizedTo ||
        normalizedLoc.endsWith(normalizedTo) ||
        loc.includes(to);
      detail = `HTTP ${res.status} → ${loc}`;
    } else {
      const html = await res.text();
      const info = extract(html);
      ok = info.isRedirectStub && (info.canonical.includes(to) || html.includes(`url=${to}`));
      detail = ok ? 'HTML redirect stub' : `HTTP ${res.status}, not a redirect`;
    }

    // Verify destination has content
    if (ok) {
      const destUrl = isHttpRedirect
        ? loc.startsWith('http')
          ? loc
          : new URL(loc, BASE).href
        : `${BASE}${to}`;
      const destRes = await fetchFollow(destUrl);
      const destHtml = await destRes.text();
      const dest = extract(destHtml);
      if (!(dest.words >= 80 && dest.title)) {
        ok = false;
        detail += ' but destination thin/empty';
      } else {
        detail += ` | dest ${dest.words} words`;
      }
    }

    redirectResults.push({ from, to, ok, detail });
    console.log(`${ok ? '✓' : '✗'} ${from} → ${to} — ${detail}`);
  } catch (error) {
    redirectResults.push({ from, to, ok: false, detail: error.message });
    console.log(`✗ ${from} — ${error.message}`);
  }
});

const contentPass = contentResults.filter((r) => r.ok).length;
const redirectPass = redirectResults.filter((r) => r.ok).length;
const contentFail = contentResults.filter((r) => !r.ok);
const redirectFail = redirectResults.filter((r) => !r.ok);

console.log(`\n${'='.repeat(72)}`);
console.log(`CONTENT   : ${contentPass}/${content.length} PASS`);
console.log(`REDIRECTS : ${redirectPass}/${redirectEntries.length} PASS`);
console.log(`TOTAL     : ${contentPass + redirectPass}/${content.length + redirectEntries.length}`);

if (contentFail.length) {
  console.log('\nFailed content pages:');
  contentFail.forEach((r) => console.log(`  ✗ ${r.route} — ${r.reason}`));
}
if (redirectFail.length) {
  console.log('\nFailed redirects:');
  redirectFail.forEach((r) => console.log(`  ✗ ${r.from} → ${r.to} — ${r.detail}`));
}

process.exit(contentFail.length || redirectFail.length ? 1 : 0);
