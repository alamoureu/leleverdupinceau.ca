export const GA_MEASUREMENT_ID = 'G-81FGM6EH3M';

/**
 * GTM container for ads landings only (`ADS_LANDING_PATHS`).
 * Those routes skip direct GA4 in index.html so page views are not double-counted.
 */
export const GTM_CONTAINER_ID = 'GTM-WFBG8659';

/** Microsoft Clarity - session replay / heatmaps (dashboard: clarity.microsoft.com). */
export const MICROSOFT_CLARITY_PROJECT_ID = 'w4za0mogel';

/** Clarity project for ads / STLP landings only (separate from main site). */
export const LANDING_CLARITY_PROJECT_ID = 'w4hw2yfvew';

/** GA4 event name for lead form completion - must match the event imported in Google Ads (e.g. "Le Lever du Pinceau (web) form_completion"). */
export const FORM_COMPLETION_EVENT = 'form_completion';

/**
 * Fires `form_completion` for a successful lead form submission.
 * - dataLayer push: GTM on ads landings (no direct gtag.js there)
 * - gtag send_to: direct GA4 on the rest of the site
 * Safe if analytics failed to load (ad-blocker, offline, SSR) - silently no-ops.
 *
 * @param {Object} [params] - Optional extra event parameters (e.g. form_name, language).
 */
export function trackFormCompletion(params = {}) {
  try {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: FORM_COMPLETION_EVENT, ...params });
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', FORM_COMPLETION_EVENT, {
      send_to: GA_MEASUREMENT_ID,
      ...params,
    });
  } catch (_) {
    /* never let analytics break a real submission */
  }
}
