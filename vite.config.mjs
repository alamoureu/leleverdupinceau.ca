import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** Width presets for `?responsive=<role>` imports (build-time srcset). */
const RESPONSIVE_WIDTHS = {
  hero: '640;960;1280;1600',
  card: '400;600;800',
  sector: '400;600;800',
  method: '320;480;640',
  ba: '480;720;960',
};

export default defineConfig({
  plugins: [
    react({
      // Routes all JSX through typography wrappers (NBSP before ?!:;)
      jsxImportSource: '@typography-jsx',
    }),
    imagetools({
      defaultDirectives: (url) => {
        const role = url.searchParams.get('responsive');
        const w = role && RESPONSIVE_WIDTHS[role];
        if (!w) return new URLSearchParams();
        return new URLSearchParams({
          w,
          format: 'webp',
          quality: '80',
          as: 'img',
          withoutEnlargement: '',
        });
      },
    }),
  ],
  resolve: {
    alias: {
      '@typography-jsx': path.resolve(
        rootDir,
        'src/site/utils/typography-jsx',
      ),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  esbuild: {
    // Firebase ships @license comments that Lighthouse counts as "unminified JS"
    legalComments: 'none',
  },
  build: {
    // Public maps: Lighthouse treemap + production debugging (unscored audit otherwise)
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep Firebase out of the main vendor chunk (loaded only on form submit)
            if (id.includes('firebase')) {
              return 'firebase';
            }
            // Chakra imports framer-motion eagerly - keep them with React in one chunk
            // (a separate FM chunk creates a circular vendor↔FM dependency and breaks runtime)
            if (
              id.includes('react-dom') ||
              id.includes('/react/') ||
              id.includes('\\react\\') ||
              id.includes('/scheduler/') ||
              id.includes('\\scheduler\\') ||
              id.includes('@chakra-ui') ||
              id.includes('@emotion') ||
              id.includes('react-router') ||
              id.includes('framer-motion')
            ) {
              return 'vendor';
            }
          }
        },
      },
    },
  },
  assetsInclude: [
    '**/*.PNG',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.JPG',
    '**/*.JPEG',
    '**/*.webp',
    '**/*.WEBP',
  ],
});
