import { useEffect } from 'react';
import { GTM_CONTAINER_ID } from '../constants/analytics';

/**
 * Loads Google Tag Manager once on ads landings only
 * (`/fr/peintre-montreal`, `/en/painter-montreal`).
 * Loads immediately (async) so short ad visits still get conversion tags.
 * Direct GA4 in index.html is skipped on these routes to avoid double-counting.
 */
export default function GoogleTagManager({
  containerId = GTM_CONTAINER_ID,
}) {
  useEffect(() => {
    if (typeof document === 'undefined' || !containerId) return undefined;

    window.dataLayer = window.dataLayer || [];

    if (
      document.querySelector(
        `script[src*="googletagmanager.com/gtm.js?id=${containerId}"]`,
      )
    ) {
      return undefined;
    }

    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
    document.head.appendChild(s);

    return undefined;
  }, [containerId]);

  return null;
}
