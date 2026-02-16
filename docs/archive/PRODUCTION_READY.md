# Production readiness checklist

## Verified

- **Linting**: No ESLint errors in `src/`.
- **Console usage**: Only `console.error` in catch blocks (SubmissionForm, webhook, auth, dashboards) and logs in test/scripts. No `debugger` or `alert()`.
- **Routing**: Policy routes corrected — `/politiques/confidentialite` → Privacy, `/politiques/termes-conditions` → Terms.
- **Policy pages**: Spacing aligned with rest of site (pt/px/pb, no excessive top gap).
- **Images**: Local image paths verified; placeholder schema URLs in blog data replaced with real S3 URLs.
- **Typography**: Responsive font sizes and theme tokens used across main site; no invalid Chakra tokens.
- **Mobile**: Drawer uses Chakra `DrawerOverlay` and correct z-index; review badge no longer covers hamburger.
- **Services section**: Duplicate subtitle text below cards removed.

## Before deploy

1. **Build**: Run `npm run build` and fix any build errors.
2. **Env**: Ensure production API URLs / env vars are set (e.g. Netlify / Vite env).
3. **Firebase**: Confirm Firebase config and rules are correct for production.
4. **Sitemap/SEO**: `public/sitemap.xml` and `public/robots.txt` are in place; update base URL if needed.
5. **Manual smoke test**: Home, contact, one service page, policy pages, and mobile menu.

## Optional later

- Replace remaining `console.error` with a logging service if you want to avoid browser console in production.
- Add error boundaries around main route trees for a better error UX.
