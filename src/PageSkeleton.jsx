import React from 'react';
import { Box } from '@chakra-ui/react';

/**
 * Fallback Suspense pour navigations client (lazy routes).
 * Sur le premier paint pré-rendu, index.jsx attend le chunk via routePreload
 * avant hydrateRoot - ce skeleton ne doit plus remplacer le HTML statique.
 * Si ça arrive quand même, on réserve la hauteur pour éviter un CLS footer.
 */
export default function PageSkeleton() {
  const reservePrerender =
    typeof document !== 'undefined' &&
    document.documentElement.getAttribute('data-prerender') === '1';

  return (
    <Box
      minH={reservePrerender ? '12000px' : '50vh'}
      aria-hidden
    />
  );
}
