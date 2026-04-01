import { useEffect } from 'react';
import { MICROSOFT_CLARITY_PROJECT_ID } from '../../config/analytics';

/**
 * Loads Microsoft Clarity once (official snippet). Use on pages where tracking is desired.
 * Matches the standard inline loader from https://www.clarity.ms/
 */
export default function MicrosoftClarity() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
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
  }, []);

  return null;
}
