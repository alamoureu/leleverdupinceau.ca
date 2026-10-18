import { useEffect, useState } from 'react';
import { runWhenIdle } from '../../utils/runWhenIdle';

/**
 * True during the Playwright prerender crawl (UA marker) or when serving
 * static HTML that already has `data-prerender` (set at serialization time).
 * The crawl UA is required because `data-prerender` is only stamped after
 * waitForRender, too late for React's first paint.
 */
export function isPrerenderCrawl() {
  if (typeof document !== 'undefined') {
    if (document.documentElement.hasAttribute('data-prerender')) return true;
  }
  if (typeof navigator !== 'undefined') {
    return /leleverdupinceau-prerender/i.test(navigator.userAgent);
  }
  return false;
}

/**
 * Mounts children after the browser is idle (or on first interaction),
 * so their JS chunks stay off the initial critical request chain / LCP path.
 * On prerender crawls / prerendered pages, mounts immediately so static HTML
 * includes below-the-fold content.
 */
export default function DeferredMount({
  children,
  timeout = 1200,
  fallback = null,
}) {
  const [ready, setReady] = useState(isPrerenderCrawl);

  useEffect(() => {
    if (ready) return undefined;
    return runWhenIdle(() => setReady(true), { timeout });
  }, [ready, timeout]);

  if (!ready) return fallback;
  return children;
}
