# Production readiness checklist – Le Lever du Pinceau

Use this list before major launches and deployments.

---

## ✅ Done

- **Error Boundary** – `src/ErrorBoundary.jsx` catches React render errors and shows a friendly fallback (no white screen).
- **SEO** – `SEOHead` on pages; canonical, OG, Twitter, hreflang; LocalBusiness schema in config; sitemap.xml and robots.txt.
- **Analytics** – GA4 in index.html (`G-81FGM6EH3M`).
- **Theme & buttons** – Brand colors (CTA blue) consistent; solid, outline, ghost, tertiary variants in theme.
- **robots.txt** – Allows public site; disallows `/admin`, `/admin/`, `/timesheet`, `/fr/peintre-montreal`, `/en/peintre-montreal`.
- **.gitignore** – `.env`, `.env.local`, `.env.production.local` ignored.
- **index.html** – Meta description, viewport, theme-color, geo, google-site-verification.

---

## 🔒 Security

| Item | Status | Notes |
|------|--------|--------|
| Firebase config | ⚠️ In code | API key is public by design; restrict in Firebase Console (domains, APIs). Prefer env vars for different envs (see .env.example). |
| Admin/employee passwords | ⚠️ Hardcoded | `authService.js` and `SoumissionDashboard.jsx` use default passwords. For production, change them and/or move hashes to env. |
| GoHighLevel webhook | ✅ | Errors logged; no secrets in client. |
| Blog/dangerouslySetInnerHTML | ✅ | Only used for trusted CMS/blog content. |

---

## 🚀 Performance

| Item | Status | Notes |
|------|--------|--------|
| Route code-splitting | 📋 Recommended | Build shows one large JS chunk (~2MB). Consider `React.lazy()` + `Suspense` for admin and heavy routes to reduce initial load. |
| Images | ✅ | Lazy loading where used; external images from CDN/S3. |
| Console in production | 📋 Optional | `console.error` kept in SubmissionForm and gohighlevelWebhook for debugging. For strict prod, gate with `import.meta.env.DEV` or use error reporting (e.g. Sentry). |

---

## ♿ Accessibility & UX

| Item | Status | Notes |
|------|--------|--------|
| Focus / keyboard | ✅ | Chakra theme sets focus-visible outline (brand.500). |
| Forms | ✅ | Labels, validation, loading states on submission forms. |
| Language | ✅ | FR/EN toggle; hreflang on pages. |

---

## 📋 Pre-launch

1. **Env** – Copy `.env.example` to `.env.local` if you need overrides (Firebase, etc.).
2. **Passwords** – Change default admin/employee and SoumissionDashboard passwords; consider env for hashes.
3. **Firebase** – In Console: set authorized domains, restrict API keys, enable App Check if needed.
4. **Sitemap** – Regenerate or update `public/sitemap.xml` when adding new public pages.
5. **Smoke test** – Home, contact, one service, one city, blog, 404; test submission and contact forms.

---

## 📁 Key files

- **App entry** – `src/index.jsx` (ErrorBoundary wraps App).
- **Theme** – `src/theme.js`.
- **SEO** – `src/lelever-next/seo/SEOHead.jsx`, `config.js`.
- **Auth** – `src/services/authService.js`.
- **Firebase** – `src/firebase.js`.
