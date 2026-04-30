import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AppProvider } from './AppProvider';
import NewWebsiteLayout from './lelever-next/layout/NewWebsiteLayout';
import ScrollToTop from './lelever-next/components/ScrollToTop';
import LegacyTripleSegmentRedirect from './lelever-next/services-pages/LegacyTripleSegmentRedirect';
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

const LandingPageV2 = lazyRoute(() => import('./pages/LandingPageV2'), 'LandingPageV2');
const NewHomePage = lazyRoute(() => import('./lelever-next/pages/NewHomePage'), 'NewHomePage');
const ContactPage = lazyRoute(() => import('./lelever-next/pages/ContactPage'), 'ContactPage');
const AvisPage = lazyRoute(() => import('./lelever-next/pages/AvisPage'), 'AvisPage');
const AboutPage = lazyRoute(() => import('./lelever-next/pages/AboutPage'), 'AboutPage');
const PeintreProfessionnelPage = lazyRoute(() => import('./lelever-next/pages/PeintreProfessionnelPage'), 'PeintreProfessionnelPage');
const SecteursDesservisPage = lazyRoute(() => import('./lelever-next/pages/SecteursDesservisPage'), 'SecteursDesservisPage');
const MontrealCityPage = lazyRoute(() => import('./lelever-next/pages/MontrealCityPage'), 'MontrealCityPage');
const LavalCityPage = lazyRoute(() => import('./lelever-next/pages/LavalCityPage'), 'LavalCityPage');
const LongueuilCityPage = lazyRoute(() => import('./lelever-next/pages/LongueuilCityPage'), 'LongueuilCityPage');
const GatineauCityPage = lazyRoute(() => import('./lelever-next/pages/GatineauCityPage'), 'GatineauCityPage');
const RiveSudCityPage = lazyRoute(() => import('./lelever-next/pages/RiveSudCityPage'), 'RiveSudCityPage');
const ServicesPage = lazyRoute(() => import('./lelever-next/pages/ServicesPage'), 'ServicesPage');
const PeintureCommercialePage = lazyRoute(() => import('./lelever-next/services-pages/PeintureCommercialePage'), 'PeintureCommercialePage');
const PeintureExterieurePage = lazyRoute(() => import('./lelever-next/services-pages/PeintureExterieurePage'), 'PeintureExterieurePage');
const PeintureResidentiellePage = lazyRoute(() => import('./lelever-next/services-pages/PeintureResidentiellePage'), 'PeintureResidentiellePage');
const PeintureInterieurePage = lazyRoute(() => import('./lelever-next/services-pages/PeintureInterieurePage'), 'PeintureInterieurePage');
const PeintureIndustriellePage = lazyRoute(() => import('./lelever-next/services-pages/PeintureIndustriellePage'), 'PeintureIndustriellePage');
const PeintureCondoPage = lazyRoute(() => import('./lelever-next/pages/PeintureCondoPage'), 'PeintureCondoPage');
const PeintureAppartementPage = lazyRoute(() => import('./lelever-next/pages/PeintureAppartementPage'), 'PeintureAppartementPage');
const PeintureArmoiresCuisinePage = lazyRoute(() => import('./lelever-next/pages/PeintureArmoiresCuisinePage'), 'PeintureArmoiresCuisinePage');
const SousServicePage = lazyRoute(() => import('./lelever-next/services-pages/sous_service/SousServicePage'), 'SousServicePage');
const BlogPage = lazyRoute(() => import('./lelever-next/pages/BlogPage'), 'BlogPage');
const CommentChoisirPeintreProfessionnelPage = lazyRoute(() => import('./lelever-next/pages/CommentChoisirPeintreProfessionnelPage'), 'CommentChoisirPeintreProfessionnelPage');
const PrixPeintureMontrealPage = lazyRoute(() => import('./lelever-next/pages/PrixPeintureMontrealPage'), 'PrixPeintureMontrealPage');
const ErreursAEviterPeintureInterieurePage = lazyRoute(() => import('./lelever-next/pages/ErreursAEviterPeintureInterieurePage'), 'ErreursAEviterPeintureInterieurePage');
const NotFoundPage = lazyRoute(() => import('./lelever-next/pages/NotFoundPage'), 'NotFoundPage');
const AuditImagesPage = lazyRoute(() => import('./lelever-next/pages/AuditImagesPage'), 'AuditImagesPage');
const SoumissionDashboard = lazyRoute(() => import('./pages/SoumissionDashboard'), 'SoumissionDashboard');
const AdminDashboard = lazyRoute(() => import('./pages/AdminDashboard'), 'AdminDashboard');
const EmploiesDashboard = lazyRoute(() => import('./pages/EmploiesDashboard'), 'EmploiesDashboard');
const ContactDashboard = lazyRoute(() => import('./pages/ContactDashboard'), 'ContactDashboard');
const TimeSheet = lazyRoute(() => import('./pages/TimeSheet'), 'TimeSheet');
const TimeSheetDashboard = lazyRoute(() => import('./pages/TimeSheetDashboard'), 'TimeSheetDashboard');
const EmployeeManagement = lazyRoute(() => import('./pages/EmployeeManagement'), 'EmployeeManagement');
const EmployeeDetails = lazyRoute(() => import('./pages/EmployeeDetails'), 'EmployeeDetails');
const ThermOfUsePage = lazyRoute(() => import('./pages/ThermOfUse'), 'ThermOfUsePage');
const PrivacyPolicyPage = lazyRoute(() => import('./pages/PrivacyPolicyPage'), 'PrivacyPolicyPage');
const RealisationsPage = lazyRoute(() => import('./lelever-next/pages/RealisationsPage'), 'RealisationsPage');
const SpecializedServiceHubPage = lazyRoute(
  () => import('./lelever-next/pages/SpecializedServiceHubPage'),
  'SpecializedServiceHubPage'
);
const PeintureMontrealHubPage = lazyRoute(
  () => import('./lelever-next/pages/PeintureMontrealHubPage'),
  'PeintureMontrealHubPage'
);

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
          <Route path="/brossard" element={<Navigate to="/secteurs/rive-sud" replace />} />

          <Route path="/" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><NewHomePage /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageSkeleton />}><ContactPage /></Suspense>} />
            <Route path="a-propos" element={<Suspense fallback={<PageSkeleton />}><AboutPage /></Suspense>} />
            <Route path="audit-images" element={<Suspense fallback={<PageSkeleton />}><AuditImagesPage /></Suspense>} />
          </Route>

          <Route path="/politique-de-confidentialite" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><PrivacyPolicyPage /></Suspense>} />
          </Route>
          <Route path="/mentions-legales" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><ThermOfUsePage /></Suspense>} />
          </Route>
          <Route path="/peintre-professionnel" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><PeintreProfessionnelPage /></Suspense>} />
          </Route>
          <Route path="/avis-clients" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><AvisPage /></Suspense>} />
          </Route>
          <Route path="/realisations" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><RealisationsPage /></Suspense>} />
          </Route>
          <Route path="/peinture-interieure-montreal" element={<NewWebsiteLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <PeintureMontrealHubPage variant="interieur" />
                </Suspense>
              }
            />
          </Route>
          <Route path="/peinture-exterieure-montreal" element={<NewWebsiteLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <PeintureMontrealHubPage variant="exterieur" />
                </Suspense>
              }
            />
          </Route>
          {/* Redirects 301 depuis les anciennes URLs /secteurs-desservis vers /secteurs */}
          <Route path="/secteurs-desservis" element={<Navigate to="/secteurs" replace />} />
          <Route path="/secteurs-desservis/montreal" element={<Navigate to="/secteurs/montreal" replace />} />
          <Route path="/secteurs-desservis/laval" element={<Navigate to="/secteurs/laval" replace />} />
          <Route path="/secteurs-desservis/longueuil" element={<Navigate to="/secteurs/longueuil" replace />} />
          <Route path="/secteurs-desservis/brossard" element={<Navigate to="/secteurs/rive-sud" replace />} />

          {/* /secteurs — URLs canoniques pour toutes les pages de ville */}
          <Route path="/secteurs" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><SecteursDesservisPage /></Suspense>} />
            <Route path="montreal" element={<Suspense fallback={<PageSkeleton />}><MontrealCityPage /></Suspense>} />
            <Route path="laval" element={<Suspense fallback={<PageSkeleton />}><LavalCityPage /></Suspense>} />
            <Route path="longueuil" element={<Suspense fallback={<PageSkeleton />}><LongueuilCityPage /></Suspense>} />
            <Route path="gatineau" element={<Suspense fallback={<PageSkeleton />}><GatineauCityPage /></Suspense>} />
            <Route path="rive-sud" element={<Suspense fallback={<PageSkeleton />}><RiveSudCityPage /></Suspense>} />
          </Route>
          <Route path="/services" element={<NewWebsiteLayout />}>
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
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <SpecializedServiceHubPage slug="teinture-exterieure" />
                </Suspense>
              }
            />
            <Route
              path="preparation-de-surfaces"
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <SpecializedServiceHubPage slug="preparation-de-surfaces" />
                </Suspense>
              }
            />
            <Route
              path="peinture-au-pistolet"
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <SpecializedServiceHubPage slug="peinture-au-pistolet" />
                </Suspense>
              }
            />
            <Route
              path="reparation-de-platre-et-gypse"
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <SpecializedServiceHubPage slug="reparation-de-platre-et-gypse" />
                </Suspense>
              }
            />
            <Route
              path="peinture-apres-sinistre"
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <SpecializedServiceHubPage slug="peinture-apres-sinistre" />
                </Suspense>
              }
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
          <Route path="/blog" element={<NewWebsiteLayout />}>
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
          </Route>

          <Route
            path="/peintre-montreal"
            element={<Navigate to="/fr/peintre-montreal" replace />}
          />
          <Route path="/fr" element={<NewWebsiteLayout />}>
            <Route
              path="peintre-montreal"
              element={<Suspense fallback={<PageSkeleton />}><LandingPageV2 lang="fr" indexable={false} /></Suspense>}
            />
          </Route>
          <Route path="/en" element={<NewWebsiteLayout />}>
            <Route
              path="peintre-montreal"
              element={<Suspense fallback={<PageSkeleton />}><LandingPageV2 lang="en" indexable={false} /></Suspense>}
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
            <Route path="emplois" element={<Suspense fallback={<PageSkeleton />}><EmploiesDashboard /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageSkeleton />}><ContactDashboard /></Suspense>} />
            <Route path="timesheets" element={<Suspense fallback={<PageSkeleton />}><TimeSheetDashboard /></Suspense>} />
            <Route path="employees" element={<Suspense fallback={<PageSkeleton />}><EmployeeManagement /></Suspense>} />
            <Route path="employee-details" element={<Suspense fallback={<PageSkeleton />}><EmployeeDetails /></Suspense>} />
          </Route>
          <Route path="/timesheet" element={<Suspense fallback={<PageSkeleton />}><TimeSheet /></Suspense>} />
          <Route path="/404" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><NotFoundPage /></Suspense>} />
          </Route>
          <Route path="*" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><NotFoundPage /></Suspense>} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  );
}
