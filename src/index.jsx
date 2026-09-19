import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { theme } from './theme';
import ErrorBoundary from './ErrorBoundary';

const container = document.getElementById('root');
const tree = (
  <ChakraProvider theme={theme}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ChakraProvider>
);

const hasPrerender = container.hasChildNodes();

function clearPrerenderFlag() {
  document.documentElement.removeAttribute('data-prerender');
  if (container.style.minHeight) container.style.minHeight = '';
}

if (hasPrerender) {
  // Keep page height while React recovers from hydration mismatches.
  const reservedHeight = container.offsetHeight;
  if (reservedHeight > 0) {
    container.style.minHeight = `${reservedHeight}px`;
  }

  hydrateRoot(container, tree, {
    onRecoverableError: () => {},
  });

  // Drop guards once the client tree has had time to settle.
  [500, 1500, 3000].forEach((ms) => setTimeout(clearPrerenderFlag, ms));
} else {
  clearPrerenderFlag();
  createRoot(container).render(tree);
}
