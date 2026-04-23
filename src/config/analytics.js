export const GA_MEASUREMENT_ID = 'G-81FGM6EH3M';

/** Microsoft Clarity — session replay / heatmaps (dashboard: clarity.microsoft.com). */
export const MICROSOFT_CLARITY_PROJECT_ID = 'w4za0mogel';

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
