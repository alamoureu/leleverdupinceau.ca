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
import SmartServiceRouter from './lelever-next/services-pages/SmartServiceRouter';
import PageSkeleton from './PageSkeleton';

const LandingPageV2 = React.lazy(() => import('./views/LandingPageV2'));
const NewHomePage = React.lazy(() => import('./lelever-next/pages/NewHomePage'));
const ContactPage = React.lazy(() => import('./lelever-next/pages/ContactPage'));
const AvisPage = React.lazy(() => import('./lelever-next/pages/AvisPage'));
const AboutPage = React.lazy(() => import('./lelever-next/pages/AboutPage'));
const PeintreProfessionnelPage = React.lazy(() => import('./lelever-next/pages/PeintreProfessionnelPage'));
const SecteursDesservisPage = React.lazy(() => import('./lelever-next/pages/SecteursDesservisPage'));
const BrossardCityPage = React.lazy(() => import('./lelever-next/pages/BrossardCityPage'));
const MontrealCityPage = React.lazy(() => import('./lelever-next/pages/MontrealCityPage'));
const LavalCityPage = React.lazy(() => import('./lelever-next/pages/LavalCityPage'));
const LongueuilCityPage = React.lazy(() => import('./lelever-next/pages/LongueuilCityPage'));
const ServicesPage = React.lazy(() => import('./lelever-next/pages/ServicesPage'));
const PeintureCommercialePage = React.lazy(() => import('./lelever-next/services-pages/PeintureCommercialePage'));
const PeintureExterieurePage = React.lazy(() => import('./lelever-next/services-pages/PeintureExterieurePage'));
const PeintureResidentiellePage = React.lazy(() => import('./lelever-next/services-pages/PeintureResidentiellePage'));
const PeintureInterieurePage = React.lazy(() => import('./lelever-next/services-pages/PeintureInterieurePage'));
const PeintureIndustriellePage = React.lazy(() => import('./lelever-next/services-pages/PeintureIndustriellePage'));
const ServiceQuartierPage = React.lazy(() => import('./lelever-next/services-pages/service_ville/ServiceQuartierPage'));
const SousServicePage = React.lazy(() => import('./lelever-next/services-pages/sous_service/SousServicePage'));
const BlogPage = React.lazy(() => import('./lelever-next/pages/BlogPage'));
const CommentChoisirPeintreProfessionnelPage = React.lazy(() => import('./lelever-next/pages/CommentChoisirPeintreProfessionnelPage'));
const PrixPeintureMontrealPage = React.lazy(() => import('./lelever-next/pages/PrixPeintureMontrealPage'));
const ErreursAEviterPeintureInterieurePage = React.lazy(() => import('./lelever-next/pages/ErreursAEviterPeintureInterieurePage'));
const NotFoundPage = React.lazy(() => import('./lelever-next/pages/NotFoundPage'));
const AuditImagesPage = React.lazy(() => import('./lelever-next/pages/AuditImagesPage'));
const SoumissionDashboard = React.lazy(() => import('./views/SoumissionDashboard'));
const AdminDashboard = React.lazy(() => import('./views/AdminDashboard'));
const EmploiesDashboard = React.lazy(() => import('./views/EmploiesDashboard'));
const ContactDashboard = React.lazy(() => import('./views/ContactDashboard'));
const TimeSheet = React.lazy(() => import('./views/TimeSheet'));
const TimeSheetDashboard = React.lazy(() => import('./views/TimeSheetDashboard'));
const EmployeeManagement = React.lazy(() => import('./views/EmployeeManagement'));
const EmployeeDetails = React.lazy(() => import('./views/EmployeeDetails'));
const ThermOfUsePage = React.lazy(() => import('./views/ThermOfUse'));
const PrivacyPolicyPage = React.lazy(() => import('./views/PrivacyPolicyPage'));

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

          <Route path="/" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><NewHomePage /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageSkeleton />}><ContactPage /></Suspense>} />
            <Route path="a-propos" element={<Suspense fallback={<PageSkeleton />}><AboutPage /></Suspense>} />
            <Route
              path="politiques/confidentialite"
              element={<Suspense fallback={<PageSkeleton />}><PrivacyPolicyPage /></Suspense>}
            />
            <Route
              path="politiques/termes-conditions"
              element={<Suspense fallback={<PageSkeleton />}><ThermOfUsePage /></Suspense>}
            />
            <Route path="audit-images" element={<Suspense fallback={<PageSkeleton />}><AuditImagesPage /></Suspense>} />
          </Route>
          <Route path="/peintre-professionnel" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><PeintreProfessionnelPage /></Suspense>} />
          </Route>
          <Route path="/avis" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><AvisPage /></Suspense>} />
          </Route>
          <Route path="/secteurs-desservis" element={<NewWebsiteLayout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><SecteursDesservisPage /></Suspense>} />
            <Route path="brossard" element={<Suspense fallback={<PageSkeleton />}><BrossardCityPage /></Suspense>} />
            <Route path="montreal" element={<Suspense fallback={<PageSkeleton />}><MontrealCityPage /></Suspense>} />
            <Route path="laval" element={<Suspense fallback={<PageSkeleton />}><LavalCityPage /></Suspense>} />
            <Route path="longueuil" element={<Suspense fallback={<PageSkeleton />}><LongueuilCityPage /></Suspense>} />
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
              path=":serviceSlug/:subServiceSlug"
              element={<Suspense fallback={<PageSkeleton />}><SousServicePage /></Suspense>}
            />
            <Route
              path=":serviceSlug/:param2/:param3"
              element={<SmartServiceRouter />}
            />
            <Route
              path=":serviceSlug/:citySlug"
              element={<Suspense fallback={<PageSkeleton />}><ServiceQuartierPage /></Suspense>}
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
            path="peintre-montreal"
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
              element={<Navigate to="/en/peintre-montreal" replace />}
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
