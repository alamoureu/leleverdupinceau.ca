import React from 'react';
import { Box } from '@chakra-ui/react';

/**
 * Pendant le premier paint d'une page pré-rendue, un fallback court remonte le
 * footer dans le viewport (CLS ~0.40). On réserve une grande hauteur tant que
 * `data-prerender="1"` est présent sur <html> (retiré après hydratation).
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
