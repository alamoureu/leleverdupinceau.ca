'use client';

import { useEffect } from 'react';

/**
 * App Router error boundary – catches uncaught errors in the app tree.
 * Renders a fallback instead of the default Next.js error screen.
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('App error boundary caught:', error);
    }
  }, [error]);

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        padding: '2rem',
        maxWidth: '600px',
        margin: '2rem auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#1a365d', marginBottom: '1rem' }}>Une erreur est survenue</h1>
      <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
        Désolé, un problème technique s&apos;est produit. Veuillez rafraîchir la page ou réessayer plus tard.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: '#3182ce',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
        }}
      >
        Réessayer
      </button>
    </div>
  );
}
