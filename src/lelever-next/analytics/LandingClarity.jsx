import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Loads Microsoft Clarity for Google Ads landing pages (separate project from the main site).
 * Only injects the script when the current route is in `paths`.
 */
export default function LandingClarity({ projectId, paths }) {
  const location = useLocation();

  useEffect(() => {
    if (!projectId || !paths?.includes(location.pathname)) return;
    if (typeof document === 'undefined') return;
    if (document.querySelector(`script[src*="clarity.ms/tag/${projectId}"]`)) return;

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
    })(window, document, 'clarity', 'script', projectId);
  }, [location.pathname, projectId, paths]);

  return null;
}
