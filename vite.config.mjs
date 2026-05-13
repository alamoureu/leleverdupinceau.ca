import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Régénère public/image-audit-preview.html avant chaque dev/build (Netlify n'a pas les fichiers non versionnés). */
function generateImageAuditPreviewHtml() {
  return {
    name: 'generate-image-audit-preview-html',
    buildStart() {
      const script = path.join(__dirname, 'scripts', 'generate-image-audit-html.js');
      const r = spawnSync(process.execPath, [script], {
        cwd: __dirname,
        stdio: 'inherit',
      });
      if (r.error) throw r.error;
      if (r.status !== 0) {
        throw new Error(`generate-image-audit-html.js exited with code ${r.status}`);
      }
    },
  };
}

const AUDIT_IMAGES_ROOT = path.join(__dirname, 'src', 'lelever-next', 'images');

const AUDIT_IMAGE_MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.bmp': 'image/bmp',
  '.avif': 'image/avif',
};

/** Dev : sert /src/lelever-next/images/... pour public/image-audit-preview.html. Build : copie ce dossier dans dist pour la prod. */
function imageAuditPreviewSupport() {
  return {
    name: 'image-audit-preview-support',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url?.split('?')[0] ?? '';
        if (!raw.startsWith('/src/lelever-next/images/')) {
          next();
          return;
        }
        let pathname = raw;
        try {
          pathname = decodeURIComponent(raw);
        } catch {
          next();
          return;
        }
        const rel = pathname.replace(/^\/src\/lelever-next\/images\/?/, '');
        if (!rel || rel.includes('..')) {
          next();
          return;
        }
        const abs = path.join(AUDIT_IMAGES_ROOT, rel);
        if (!abs.startsWith(AUDIT_IMAGES_ROOT)) {
          next();
          return;
        }
        let st;
        try {
          st = fs.statSync(abs);
        } catch {
          next();
          return;
        }
        if (!st.isFile()) {
          next();
          return;
        }
        const ext = path.extname(abs).toLowerCase();
        res.setHeader('Content-Type', AUDIT_IMAGE_MIME[ext] || 'application/octet-stream');
        fs.createReadStream(abs).on('error', () => next()).pipe(res);
      });
    },
    closeBundle() {
      const distDir = path.join(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;
      if (!fs.existsSync(AUDIT_IMAGES_ROOT)) return;
      const imagesDest = path.join(distDir, 'src', 'lelever-next', 'images');
      fs.mkdirSync(path.dirname(imagesDest), { recursive: true });
      fs.cpSync(AUDIT_IMAGES_ROOT, imagesDest, { recursive: true });
    },
  };
}

export default defineConfig({
  plugins: [generateImageAuditPreviewHtml(), react(), imageAuditPreviewSupport()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // All React-dependent libs in ONE chunk so they share the same React instance (avoids createContext/useLayoutEffect undefined)
            if (
              id.includes('react-dom') ||
              id.includes('react/') ||
              id.includes('scheduler') ||
              id.includes('@chakra-ui') ||
              id.includes('@emotion') ||
              id.includes('react-router') ||
              id.includes('framer-motion') ||
              id.includes('react-compare-image') ||
              id.includes('react-simple-image-slider')
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
  ],
});
