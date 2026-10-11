# Scripts

Utilitaires de build, SEO et vérification pour leleverdupinceau.ca.

## Build / SEO

| Script | Commande | Rôle |
|--------|----------|------|
| `prerender.mjs` | `npm run prerender` | Pré-rendu HTML des 35 pages Site LP |
| `all-public-routes.mjs` | `npm run prerender:audit` | Inventaire contenu / redirects / SPA |
| `generate-sitemap.mjs` | `npm run sitemap:generate` | Génère `public/sitemap.xml` |
| `validate-crawler-seo-all.mjs` | `npm run validate:crawler` | Validation SEO crawler |
| `validate-hero-contrast.mjs` | `npm run validate:hero-contrast` | Contraste héros après build |

## Vérification

```bash
node scripts/verify-routes.js   # liens / canonicals
node scripts/verify-links.js    # to= / href= dans le code
```

## Images / review

```bash
npm run images:compress
npm run images:byte-dupes
npm run open:modified
npm run review:pages
```
