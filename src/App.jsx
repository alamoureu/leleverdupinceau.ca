import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AppProvider } from './AppProvider';
import WebsiteLayout from './site/layout/WebsiteLayout';
import ScrollToTop from './site/components/ScrollToTop';
import LegacyTripleSegmentRedirect from './site/services-pages/LegacyTripleSegmentRedirect';
import PageSkeleton from './PageSkeleton';

// Always resolve to a component with a string displayName so React never hits "Cannot convert object to primitive value" in lazyInitializer/printWarning.
function lazyRoute(importFn, displayName) {
  return React.lazy(async () => {
    const mod = await importFn();
    const Component = mod?.default;
    const name = typeof displayName === 'string' ? displayName : 'LazyRoute';
    const Wrapper = function LazyRouteWrapper(props) {
      if (typeof Component !== 'function') return null;
      return React.createElement(Component, props);
    };
    Wrapper.displayName = name;
    return { default: Wrapper };
  });
}

const LandingPageV2 = lazyRoute(() => import('./site/pages/LandingPageV2'), 'LandingPageV2');
// Start the home chunk as soon as App loads so "/" does not wait on a second waterfall.
const homePageImport = import('./site/pages/HomePage');
const HomePage = lazyRoute(() => homePageImport, 'HomePage');
const ContactPage = lazyRoute(() => import('./site/pages/ContactPage'), 'ContactPage');
const AvisPage = lazyRoute(() => import('./site/pages/AvisPage'), 'AvisPage');
const AboutPage = lazyRoute(() => import('./site/pages/AboutPage'), 'AboutPage');
const PeintreProfessionnelPage = lazyRoute(() => import('./site/pages/PeintreProfessionnelPage'), 'PeintreProfessionnelPage');
const SecteursDesservisPage = lazyRoute(() => import('./site/pages/SecteursDesservisPage'), 'SecteursDesservisPage');
const MontrealCityPage = lazyRoute(() => import('./site/pages/MontrealCityPage'), 'MontrealCityPage');
const LavalCityPage = lazyRoute(() => import('./site/pages/LavalCityPage'), 'LavalCityPage');
const LongueuilCityPage = lazyRoute(() => import('./site/pages/LongueuilCityPage'), 'LongueuilCityPage');
const BrossardCityPage = lazyRoute(() => import('./site/pages/BrossardCityPage'), 'BrossardCityPage');
const StLambertCityPage = lazyRoute(() => import('./site/pages/StLambertCityPage'), 'StLambertCityPage');
const LaprairieCityPage = lazyRoute(() => import('./site/pages/LaprairieCityPage'), 'LaprairieCityPage');
const ServicesPage = lazyRoute(() => import('./site/pages/ServicesPage'), 'ServicesPage');
const PeintureCommercialePage = lazyRoute(() => import('./site/services-pages/PeintureCommercialePage'), 'PeintureCommercialePage');
const PeintureExterieurePage = lazyRoute(() => import('./site/services-pages/PeintureExterieurePage'), 'PeintureExterieurePage');
const PeintureResidentiellePage = lazyRoute(() => import('./site/services-pages/PeintureResidentiellePage'), 'PeintureResidentiellePage');
const PeintureInterieurePage = lazyRoute(() => import('./site/services-pages/PeintureInterieurePage'), 'PeintureInterieurePage');
const PeintureIndustriellePage = lazyRoute(() => import('./site/services-pages/PeintureIndustriellePage'), 'PeintureIndustriellePage');
const PeintureMaisonPage = lazyRoute(() => import('./site/pages/PeintureMaisonPage'), 'PeintureMaisonPage');
const PeintureCondoPage = lazyRoute(() => import('./site/pages/PeintureCondoPage'), 'PeintureCondoPage');
const PeintureAppartementPage = lazyRoute(() => import('./site/pages/PeintureAppartementPage'), 'PeintureAppartementPage');
const PeintureArmoiresCuisinePage = lazyRoute(() => import('./site/pages/PeintureArmoiresCuisinePage'), 'PeintureArmoiresCuisinePage');
const SousServicePage = lazyRoute(() => import('./site/services-pages/sous_service/SousServicePage'), 'SousServicePage');
const BlogPage = lazyRoute(() => import('./site/pages/BlogPage'), 'BlogPage');
const CommentChoisirPeintreProfessionnelPage = lazyRoute(() => import('./site/pages/CommentChoisirPeintreProfessionnelPage'), 'CommentChoisirPeintreProfessionnelPage');
const PrixPeintureMontrealPage = lazyRoute(() => import('./site/pages/PrixPeintureMontrealPage'), 'PrixPeintureMontrealPage');
const ErreursAEviterPeintureInterieurePage = lazyRoute(() => import('./site/pages/ErreursAEviterPeintureInterieurePage'), 'ErreursAEviterPeintureInterieurePage');
const PeintureArmoiresCuisineGuidePage = lazyRoute(() => import('./site/pages/PeintureArmoiresCuisineGuidePage'), 'PeintureArmoiresCuisineGuidePage');
const BetonelVsBenjaminMoorePage = lazyRoute(() => import('./site/pages/BetonelVsBenjaminMoorePage'), 'BetonelVsBenjaminMoorePage');
const NotFoundPage = lazyRoute(() => import('./site/pages/NotFoundPage'), 'NotFoundPage');
const SoumissionDashboard = lazyRoute(() => import('./admin/SoumissionDashboard'), 'SoumissionDashboard');
const AdminDashboard = lazyRoute(() => import('./admin/AdminDashboard'), 'AdminDashboard');
const EmploisDashboard = lazyRoute(() => import('./admin/EmploisDashboard'), 'EmploisDashboard');
const ContactDashboard = lazyRoute(() => import('./admin/ContactDashboard'), 'ContactDashboard');
const TermsOfUsePage = lazyRoute(() => import('./site/pages/TermsOfUse'), 'TermsOfUsePage');
const PrivacyPolicyPage = lazyRoute(() => import('./site/pages/PrivacyPolicyPage'), 'PrivacyPolicyPage');
const RealisationsPage = lazyRoute(() => import('./site/pages/RealisationsPage'), 'RealisationsPage');
const WestmountPage = lazyRoute(() => import('./site/pages/WestmountPage'), 'WestmountPage');
const VilleMariePage = lazyRoute(() => import('./site/pages/VilleMariePage'), 'VilleMariePage');
const PlateauMontRoyalPage = lazyRoute(() => import('./site/pages/PlateauMontRoyalPage'), 'PlateauMontRoyalPage');
const OutremontPage = lazyRoute(() => import('./site/pages/OutremontPage'), 'OutremontPage');
const TeintureExterieurePage = lazyRoute(() => import('./site/pages/TeintureExterieurePage'), 'TeintureExterieurePage');
const PreparationSurfacesPage = lazyRoute(() => import('./site/services-pages/PreparationSurfacesPage'), 'PreparationSurfacesPage');
const PeintureAuPistoletPage = lazyRoute(() => import('./site/services-pages/PeintureAuPistoletPage'), 'PeintureAuPistoletPage');
const ReparationPlatreGysePage = lazyRoute(() => import('./site/services-pages/ReparationPlatreGysePage'), 'ReparationPlatreGysePage');
const PeintureApresSinistrePage = lazyRoute(() => import('./site/services-pages/PeintureApresSinistrePage'), 'PeintureApresSinistrePage');

export default function App() {
  return (
    <Router>
      <AppProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/new-home" element={<Navigate to="/" replace />} />
          <Route
            path="/new-home/contact"
            element={<Navigate to="/contact" replace />}
          />
          <Route
            path="/new-home/a-propos"
            element={<Navigate to="/a-propos" replace />}
          />
          <Route
            path="/new-contact"
            element={<Navigate to="/contact" replace />}
          />

          <Route
            path="/politiques/confidentialite"
            element={<Navigate to="/politique-de-confidentialite" replace />}
          />
          <Route
            path="/politiques/termes-conditions"
            element={<Navigate to="/mentions-legales" replace />}
          />
          <Route path="/soumission" element={<Navigate to="/contact" replace />} />
          <Route path="/avis" element={<Navigate to="/avis-clients" replace />} />
          <Route path="/brossard" element={<Navigate to="/secteurs/brossard" replace />} />

          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><HomePage /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageSkeleton />}><ContactPage /></Suspense>} />
            <Route path="a-propos" element={<Suspense fallback={<PageSkeleton />}><AboutPage /></Suspense>} />
          </Route>

          <Route path="/politique-de-confidentialite" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><PrivacyPolicyPage /></Suspense>} />
          </Route>
          <Route path="/mentions-legales" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><TermsOfUsePage /></Suspense>} />
          </Route>
          <Route path="/peintre-professionnel" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><PeintreProfessionnelPage /></Suspense>} />
          </Route>
          <Route path="/avis-clients" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><AvisPage /></Suspense>} />
          </Route>
          <Route path="/realisations" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><RealisationsPage /></Suspense>} />
          </Route>
          <Route path="/peinture-interieure-montreal" element={<Navigate to="/services/peinture-interieure" replace />} />
          <Route path="/peinture-exterieure-montreal" element={<Navigate to="/services/peinture-exterieure" replace />} />
          {/* Redirects 301 depuis les anciennes URLs /secteurs-desservis vers /secteurs */}
          <Route path="/secteurs-desservis" element={<Navigate to="/secteurs" replace />} />
          <Route path="/secteurs-desservis/montreal" element={<Navigate to="/secteurs/montreal" replace />} />
          <Route path="/secteurs-desservis/laval" element={<Navigate to="/secteurs/laval" replace />} />
          <Route path="/secteurs-desservis/longueuil" element={<Navigate to="/secteurs/longueuil" replace />} />
          <Route path="/secteurs-desservis/brossard" element={<Navigate to="/secteurs/brossard" replace />} />

          {/* /secteurs - URLs canoniques pour toutes les pages de ville */}
          <Route path="/secteurs" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><SecteursDesservisPage /></Suspense>} />
            <Route path="montreal" element={<Suspense fallback={<PageSkeleton />}><MontrealCityPage /></Suspense>} />
            <Route path="montreal/westmount" element={<Suspense fallback={<PageSkeleton />}><WestmountPage /></Suspense>} />
            <Route path="montreal/ville-marie" element={<Suspense fallback={<PageSkeleton />}><VilleMariePage /></Suspense>} />
            <Route path="montreal/plateau-mont-royal" element={<Suspense fallback={<PageSkeleton />}><PlateauMontRoyalPage /></Suspense>} />
            <Route path="montreal/outremont" element={<Suspense fallback={<PageSkeleton />}><OutremontPage /></Suspense>} />
            <Route path="laval" element={<Suspense fallback={<PageSkeleton />}><LavalCityPage /></Suspense>} />
            <Route path="longueuil" element={<Suspense fallback={<PageSkeleton />}><LongueuilCityPage /></Suspense>} />
            <Route path="brossard" element={<Suspense fallback={<PageSkeleton />}><BrossardCityPage /></Suspense>} />
            <Route path="st-lambert" element={<Suspense fallback={<PageSkeleton />}><StLambertCityPage /></Suspense>} />
            <Route path="laprairie" element={<Suspense fallback={<PageSkeleton />}><LaprairieCityPage /></Suspense>} />
          </Route>
          <Route path="/services" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><ServicesPage /></Suspense>} />
            <Route
              path="peinture-commerciale"
              element={<Suspense fallback={<PageSkeleton />}><PeintureCommercialePage /></Suspense>}
            />
            <Route
              path="new-peinture-exterieure"
              element={
                <Navigate to="/services/peinture-exterieure" replace />
              }
            />
            <Route
              path="peinture-exterieure"
              element={<Suspense fallback={<PageSkeleton />}><PeintureExterieurePage /></Suspense>}
            />
            <Route
              path="peinture-residentielle"
              element={<Suspense fallback={<PageSkeleton />}><PeintureResidentiellePage /></Suspense>}
            />
            <Route
              path="new-peinture-interieure"
              element={<Navigate to="/services/peinture-interieure" replace />}
            />
            <Route
              path="peinture-interieure"
              element={<Suspense fallback={<PageSkeleton />}><PeintureInterieurePage /></Suspense>}
            />
            <Route
              path="peinture-industrielle"
              element={<Suspense fallback={<PageSkeleton />}><PeintureIndustriellePage /></Suspense>}
            />
            <Route
              path="teinture-exterieure"
              element={<Suspense fallback={<PageSkeleton />}><TeintureExterieurePage /></Suspense>}
            />
            <Route
              path="preparation-de-surfaces"
              element={<Suspense fallback={<PageSkeleton />}><PreparationSurfacesPage /></Suspense>}
            />
            <Route
              path="peinture-au-pistolet"
              element={<Suspense fallback={<PageSkeleton />}><PeintureAuPistoletPage /></Suspense>}
            />
            <Route
              path="reparation-de-platre-et-gypse"
              element={<Suspense fallback={<PageSkeleton />}><ReparationPlatreGysePage /></Suspense>}
            />
            <Route
              path="peinture-apres-sinistre"
              element={<Suspense fallback={<PageSkeleton />}><PeintureApresSinistrePage /></Suspense>}
            />
            <Route
              path="peinture-residentielle/interieure"
              element={<Navigate to="/services/peinture-residentielle" replace />}
            />
            <Route
              path="peinture-residentielle/exterieure"
              element={<Navigate to="/services/peinture-residentielle" replace />}
            />
            <Route
              path="peinture-commerciale/interieure"
              element={<Navigate to="/services/peinture-commerciale" replace />}
            />
            <Route
              path="peinture-commerciale/exterieure"
              element={<Navigate to="/services/peinture-commerciale" replace />}
            />
            <Route
              path="peinture-residentielle/maison"
              element={<Suspense fallback={<PageSkeleton />}><PeintureMaisonPage /></Suspense>}
            />
            <Route
              path="peinture-residentielle/condo"
              element={<Suspense fallback={<PageSkeleton />}><PeintureCondoPage /></Suspense>}
            />
            <Route
              path="peinture-residentielle/appartement"
              element={<Suspense fallback={<PageSkeleton />}><PeintureAppartementPage /></Suspense>}
            />
            <Route
              path="peinture-interieure/armoires-de-cuisine"
              element={<Suspense fallback={<PageSkeleton />}><PeintureArmoiresCuisinePage /></Suspense>}
            />
            <Route
              path=":serviceSlug/:subServiceSlug"
              element={<Suspense fallback={<PageSkeleton />}><SousServicePage /></Suspense>}
            />
            <Route
              path=":serviceSlug/:param2/:param3"
              element={<LegacyTripleSegmentRedirect />}
            />
          </Route>
          <Route path="/blog" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><BlogPage /></Suspense>} />
            <Route
              path="comment-choisir-un-peintre-professionnel"
              element={<Suspense fallback={<PageSkeleton />}><CommentChoisirPeintreProfessionnelPage /></Suspense>}
            />
            <Route
              path="prix-peinture-montreal"
              element={<Suspense fallback={<PageSkeleton />}><PrixPeintureMontrealPage /></Suspense>}
            />
            <Route
              path="erreurs-a-eviter-peinture-interieure"
              element={<Suspense fallback={<PageSkeleton />}><ErreursAEviterPeintureInterieurePage /></Suspense>}
            />
            <Route
              path="peinture-armoires-cuisine-guide"
              element={<Suspense fallback={<PageSkeleton />}><PeintureArmoiresCuisineGuidePage /></Suspense>}
            />
            <Route
              path="betonel-vs-benjamin-moore"
              element={<Suspense fallback={<PageSkeleton />}><BetonelVsBenjaminMoorePage /></Suspense>}
            />
          </Route>

          <Route
            path="/peintre-montreal"
            element={<Navigate to="/fr/peintre-montreal" replace />}
          />
          <Route path="/fr" element={<WebsiteLayout />}>
            <Route
              path="peintre-montreal"
              element={<Suspense fallback={<PageSkeleton />}><LandingPageV2 lang="fr" indexable={false} /></Suspense>}
            />
          </Route>
          <Route path="/en" element={<WebsiteLayout />}>
            {/* Canonical EN ads landing; /en/peintre-montreal redirects to avoid dual EN URLs */}
            <Route
              path="peintre-montreal"
              element={<Navigate to="/en/painter-montreal" replace />}
            />
            <Route
              path="painter-montreal"
              element={<Suspense fallback={<PageSkeleton />}><LandingPageV2 lang="en" indexable={false} /></Suspense>}
            />
          </Route>

          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin">
            <Route path="dashboard" element={<Suspense fallback={<PageSkeleton />}><AdminDashboard /></Suspense>} />
            <Route path="soumissions" element={<Suspense fallback={<PageSkeleton />}><SoumissionDashboard /></Suspense>} />
            <Route path="emplois" element={<Suspense fallback={<PageSkeleton />}><EmploisDashboard /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageSkeleton />}><ContactDashboard /></Suspense>} />
            <Route path="timesheets" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="employees" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="employee-details" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
          <Route path="/timesheet" element={<Navigate to="/" replace />} />
          <Route path="/404" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><NotFoundPage /></Suspense>} />
          </Route>
          <Route path="*" element={<WebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><NotFoundPage /></Suspense>} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  );
}
