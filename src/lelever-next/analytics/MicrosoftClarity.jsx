import { useEffect } from 'react';
import { MICROSOFT_CLARITY_PROJECT_ID } from '../../config/analytics';
import { runWhenIdle } from '../../utils/runWhenIdle';

/**
 * Loads Microsoft Clarity once, deferred until idle or first interaction
 * so it does not compete with LCP / main-thread work on first paint.
 */
export default function MicrosoftClarity() {
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    return runWhenIdle(() => {
      const id = MICROSOFT_CLARITY_PROJECT_ID;
      if (document.querySelector(`script[src*="clarity.ms/tag/${id}"]`)) return;

      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', id);
    });
  }, []);

  return null;
}
