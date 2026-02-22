# Production readiness checklist – Le Lever du Pinceau

## Completed in this pass

### SEO
- **index.html** – Default title, description, viewport, geo, Google site verification, GA4, theme-color (`#0A2B68`).
- **SEOHead** – Used across main pages: title, description, canonical, OG, Twitter Card, hreflang (fr/en/x-default), optional schema.
- **SEO config** – `SITE_URL` = `https://www.leleverdupinceau.ca`, `DEFAULT_OG_IMAGE`, `KEYWORDS`, `LOCAL_BUSINESS_SCHEMA` (ProfessionalService with address, geo, areaServed, aggregateRating, hasOfferCatalog).
- **Canonicals** – Standardized to **www** for: city pages (Montréal, Laval, Longueuil, Brossard), main service pages (peinture intérieure, extérieure, résidentielle, commerciale, industrielle).
- **Policy pages** – `PrivacyPolicyPage` and `ThermOfUse` (Terms) now use `SEOHead` with title, description, `canonicalPath`.
- **404** – `NotFoundPage` has Helmet with title, description, `noindex, nofollow`.
- **Layout** – `NewWebsiteLayout` injects `LOCAL_BUSINESS_SCHEMA` (JSON-LD) on all pages.
- **robots.txt** – Allows `/`, disallows `/admin/`, `/timesheet`, locale duplicate paths; sitemap URL set.
- **sitemap.xml** – Covers home, contact, about, services, secteurs, avis, peintre-professionnel, blog, blog posts, soumission, politiques; uses `https://www.leleverdupinceau.ca`.

### Branding & UI
- **theme.js** – CTA blue `#1761E8` (brand.500/600); navbar/footer denser blue `#0A2B68` (brand.700).
- **index.html** – `theme-color` set to `#0A2B68`.
- **manifest.json** – `theme_color` set to `#0A2B68`.

### Technical
- **ScrollToTop** – Used in App for route changes.
- **GA4** – Loaded in index.html (`G-81FGM6EH3M`).
- **Fonts** – Plus Jakarta Sans preconnect + load in index.html.

---

## Optional / follow-up

### Canonicals (www)
- **Data files** – Many canonicals in `service_ville`, `sous_service`, `sous_service_ville`, `service_quartier/neighborhoods` still use `https://leleverdupinceau.ca` (no www). For full consistency, replace with `https://www.leleverdupinceau.ca` or build canonicals from `SITE_URL` in code.
- **Breadcrumb schema** – Service/ville/sous-service pages that build breadcrumb `item` URLs in JS could use `SITE_URL` from `seo/config.js` so everything stays www.

### Console
- **AuditImagesPage** – `console.warn` on save failures (dev/debug).
- **SubmissionForm** – `console.error` on webhook/submission errors (useful in production for debugging; optional to gate with `NODE_ENV` or remove).

### Sitemap
- **lastmod** – Currently `2025-02-17`; update when you do big content updates.
- **Dynamic routes** – Sous-service and quartier/ville URLs (e.g. `/services/peinture-residentielle/exterieure/montreal`) are not in the static sitemap; consider generating a sitemap from routes/data if you want them all indexed.

### Performance / PWA
- **manifest.json** – `display: "browser"`; consider `"standalone"` if you want a more app-like install.
- **Icons** – Ensure `favicon.ico` and any `icons` in manifest exist and are correct.

### Security / Env
- **Env vars** – Ensure any API keys (e.g. GoHighLevel, forms) are in env and not committed.
- **Admin routes** – `/admin/*` and `/timesheet` are noindex via robots; keep them protected by auth.

### Accessibility
- **Skip link** – Present in layout (skip to main).
- **Focus** – Theme uses `brand.500` for focus-visible outline.
- **Headings** – Ensure one `h1` per page and logical order (already the case on reviewed pages).

### Final checks before go-live
- [ ] Run `npm run build` and fix any errors.
- [ ] Test critical flows: home, contact form, submission form, main service and city pages.
- [ ] Confirm GA4 and any conversion events.
- [ ] Check meta/social preview with [Facebook Debugger](https://developers.facebook.com/tools/debug/) / [Twitter Card Validator](https://cards-dev.twitter.com/validator).
- [ ] Validate sitemap in Google Search Console after deploy.
- [ ] Confirm production domain uses HTTPS and redirects www/non-www to the chosen canonical (www).

---

**Last updated:** 2025-02-21
