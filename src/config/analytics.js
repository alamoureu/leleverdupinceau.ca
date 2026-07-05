export const GA_MEASUREMENT_ID = 'G-81FGM6EH3M';

/** Microsoft Clarity — session replay / heatmaps (dashboard: clarity.microsoft.com). */
export const MICROSOFT_CLARITY_PROJECT_ID = 'w4za0mogel';

/** Clarity project for Google Ads landing pages (peintre-montreal, STLP). */
export const LANDING_ADS_CLARITY_PROJECT_ID = 'w4hw2yfvew';

/** GA4 event name for lead form completion — must match the event imported in Google Ads (e.g. "Le Lever du Pinceau (web) form_completion"). */
export const FORM_COMPLETION_EVENT = 'form_completion';

/**
 * Fires the GA4 `form_completion` event for a successful lead form submission.
 * Safe to call even if gtag.js failed to load (e.g. ad-blocker, offline, SSR) —
 * it silently no-ops instead of throwing.
 *
 * @param {Object} [params] - Optional extra event parameters (e.g. form_name, language).
 */
export function trackFormCompletion(params = {}) {
  try {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', FORM_COMPLETION_EVENT, {
      send_to: GA_MEASUREMENT_ID,
      ...params,
    });
  } catch (_) {
    /* never let analytics break a real submission */
  }
}

/**
 * Sends a GA4 page_view for SPA route changes (gtag in index.html only fires on first load).
 */
export function trackPageView(pagePath, pageTitle) {
  try {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      send_to: GA_MEASUREMENT_ID,
      page_path: pagePath,
      page_title: pageTitle,
    });
  } catch (_) {
    /* never let analytics break navigation */
  }
}
