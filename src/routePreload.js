/**
 * Preload the lazy page module for the current URL before hydrateRoot.
 *
 * Prerendered HTML already contains the full page. If hydrate runs while
 * React.lazy still pending, Suspense swaps that HTML for PageSkeleton (blank
 * main + nav chrome) for 1-2s. Safari then shows the scary
 * "réduire les mesures de protection" banner.
 *
 * Uses the same displayName + sync cache as App.jsx lazyRoute so the first
 * client render is eager (no Suspense) once this resolves.
 */
import { ensurePageModule } from './lazyRoute';

/** path → [displayName, importFn] - displayName must match App.jsx lazyRoute ids */
const EXACT = {
  '/': ['HomePage', () => import('./site/pages/HomePage')],
  '/contact': ['ContactPage', () => import('./site/pages/ContactPage')],
  '/a-propos': ['AboutPage', () => import('./site/pages/AboutPage')],
  '/politique-de-confidentialite': [
    'PrivacyPolicyPage',
    () => import('./site/pages/PrivacyPolicyPage'),
  ],
  '/mentions-legales': ['TermsOfUsePage', () => import('./site/pages/TermsOfUse')],
  '/peintre-professionnel': [
    'PeintreProfessionnelPage',
    () => import('./site/pages/PeintreProfessionnelPage'),
  ],
  '/avis-clients': ['AvisPage', () => import('./site/pages/AvisPage')],
  '/realisations': ['RealisationsPage', () => import('./site/pages/RealisationsPage')],
  '/secteurs': [
    'SecteursDesservisPage',
    () => import('./site/pages/SecteursDesservisPage'),
  ],
  '/secteurs/montreal': [
    'MontrealCityPage',
    () => import('./site/pages/MontrealCityPage'),
  ],
  '/secteurs/montreal/westmount': [
    'WestmountPage',
    () => import('./site/pages/WestmountPage'),
  ],
  '/secteurs/montreal/ville-marie': [
    'VilleMariePage',
    () => import('./site/pages/VilleMariePage'),
  ],
  '/secteurs/montreal/plateau-mont-royal': [
    'PlateauMontRoyalPage',
    () => import('./site/pages/PlateauMontRoyalPage'),
  ],
  '/secteurs/montreal/outremont': [
    'OutremontPage',
    () => import('./site/pages/OutremontPage'),
  ],
  '/secteurs/laval': ['LavalCityPage', () => import('./site/pages/LavalCityPage')],
  '/secteurs/longueuil': [
    'LongueuilCityPage',
    () => import('./site/pages/LongueuilCityPage'),
  ],
  '/secteurs/brossard': [
    'BrossardCityPage',
    () => import('./site/pages/BrossardCityPage'),
  ],
  '/secteurs/st-lambert': [
    'StLambertCityPage',
    () => import('./site/pages/StLambertCityPage'),
  ],
  '/secteurs/laprairie': [
    'LaprairieCityPage',
    () => import('./site/pages/LaprairieCityPage'),
  ],
  '/services': ['ServicesPage', () => import('./site/pages/ServicesPage')],
  '/services/peinture-commerciale': [
    'PeintureCommercialePage',
    () => import('./site/services-pages/PeintureCommercialePage'),
  ],
  '/services/peinture-exterieure': [
    'PeintureExterieurePage',
    () => import('./site/services-pages/PeintureExterieurePage'),
  ],
  '/services/peinture-residentielle': [
    'PeintureResidentiellePage',
    () => import('./site/services-pages/PeintureResidentiellePage'),
  ],
  '/services/peinture-interieure': [
    'PeintureInterieurePage',
    () => import('./site/services-pages/PeintureInterieurePage'),
  ],
  '/services/peinture-industrielle': [
    'PeintureIndustriellePage',
    () => import('./site/services-pages/PeintureIndustriellePage'),
  ],
  '/services/teinture-exterieure': [
    'TeintureExterieurePage',
    () => import('./site/pages/TeintureExterieurePage'),
  ],
  '/services/preparation-de-surfaces': [
    'PreparationSurfacesPage',
    () => import('./site/services-pages/PreparationSurfacesPage'),
  ],
  '/services/peinture-au-pistolet': [
    'PeintureAuPistoletPage',
    () => import('./site/services-pages/PeintureAuPistoletPage'),
  ],
  '/services/reparation-de-platre-et-gypse': [
    'ReparationPlatreGysePage',
    () => import('./site/services-pages/ReparationPlatreGysePage'),
  ],
  '/services/peinture-apres-sinistre': [
    'PeintureApresSinistrePage',
    () => import('./site/services-pages/PeintureApresSinistrePage'),
  ],
  '/services/peinture-residentielle/maison': [
    'PeintureMaisonPage',
    () => import('./site/pages/PeintureMaisonPage'),
  ],
  '/services/peinture-residentielle/condo': [
    'PeintureCondoPage',
    () => import('./site/pages/PeintureCondoPage'),
  ],
  '/services/peinture-residentielle/appartement': [
    'PeintureAppartementPage',
    () => import('./site/pages/PeintureAppartementPage'),
  ],
  '/services/peinture-interieure/armoires-de-cuisine': [
    'PeintureArmoiresCuisinePage',
    () => import('./site/pages/PeintureArmoiresCuisinePage'),
  ],
  '/blog': ['BlogPage', () => import('./site/pages/BlogPage')],
  '/blog/comment-choisir-un-peintre-professionnel': [
    'CommentChoisirPeintreProfessionnelPage',
    () => import('./site/pages/CommentChoisirPeintreProfessionnelPage'),
  ],
  '/blog/prix-peinture-montreal': [
    'PrixPeintureMontrealPage',
    () => import('./site/pages/PrixPeintureMontrealPage'),
  ],
  '/blog/erreurs-a-eviter-peinture-interieure': [
    'ErreursAEviterPeintureInterieurePage',
    () => import('./site/pages/ErreursAEviterPeintureInterieurePage'),
  ],
  '/blog/peinture-armoires-cuisine-guide': [
    'PeintureArmoiresCuisineGuidePage',
    () => import('./site/pages/PeintureArmoiresCuisineGuidePage'),
  ],
  '/blog/betonel-vs-benjamin-moore': [
    'BetonelVsBenjaminMoorePage',
    () => import('./site/pages/BetonelVsBenjaminMoorePage'),
  ],
  '/fr/peintre-montreal': [
    'LandingPageV2',
    () => import('./site/pages/LandingPageV2'),
  ],
  '/en/painter-montreal': [
    'LandingPageV2',
    () => import('./site/pages/LandingPageV2'),
  ],
  '/fr/stlp-peinture-inc': [
    'LandingPageStlp',
    () => import('./site/pages/LandingPageStlp'),
  ],
  '/en/stlp-peinture-inc': [
    'LandingPageStlp',
    () => import('./site/pages/LandingPageStlp'),
  ],
  '/admin/dashboard': ['AdminDashboard', () => import('./admin/AdminDashboard')],
  '/admin/soumissions': [
    'SoumissionDashboard',
    () => import('./admin/SoumissionDashboard'),
  ],
  '/admin/emplois': ['EmploisDashboard', () => import('./admin/EmploisDashboard')],
  '/admin/contact': ['ContactDashboard', () => import('./admin/ContactDashboard')],
  '/404': ['NotFoundPage', () => import('./site/pages/NotFoundPage')],
};

function normalizePath(pathname) {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

function resolveEntry(pathname) {
  const path = normalizePath(pathname);
  if (EXACT[path]) return EXACT[path];

  const sous = path.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (sous) {
    return [
      'SousServicePage',
      () => import('./site/services-pages/sous_service/SousServicePage'),
    ];
  }

  return null;
}

/** Resolve and load the page module for pathname into the shared sync cache. */
export function preloadRoute(pathname = window.location.pathname) {
  const entry = resolveEntry(pathname);
  if (!entry) return Promise.resolve(null);
  const [displayName, importFn] = entry;
  return ensurePageModule(displayName, importFn).catch(() => null);
}
