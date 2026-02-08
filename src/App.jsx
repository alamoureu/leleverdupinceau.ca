import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AppProvider } from './AppProvider';

import LandingPageV2 from './pages/LandingPageV2';
import NewHomePage from './lelever-next/pages/NewHomePage';
import ContactPage from './lelever-next/pages/ContactPage';
import AvisPage from './lelever-next/pages/AvisPage';
import AboutPage from './lelever-next/pages/AboutPage';
import PeintreProfessionnelPage from './lelever-next/pages/PeintreProfessionnelPage';
import SecteursDesservisPage from './lelever-next/pages/SecteursDesservisPage';
import BrossardCityPage from './lelever-next/pages/BrossardCityPage';
import MontrealCityPage from './lelever-next/pages/MontrealCityPage';
import LavalCityPage from './lelever-next/pages/LavalCityPage';
import LongueuilCityPage from './lelever-next/pages/LongueuilCityPage';
import ServicesPage from './lelever-next/pages/ServicesPage';
import PeintureCommercialePage from './lelever-next/services-pages/PeintureCommercialePage';
import PeintureExterieurePage from './lelever-next/services-pages/PeintureExterieurePage';
import PeintureResidentiellePage from './lelever-next/services-pages/PeintureResidentiellePage';
import PeintureInterieurePage from './lelever-next/services-pages/PeintureInterieurePage';
import PeintureIndustriellePage from './lelever-next/services-pages/PeintureIndustriellePage';
import ServiceQuartierPage from './lelever-next/services-pages/service_ville/ServiceQuartierPage';
import SousServicePage from './lelever-next/services-pages/sous_service/SousServicePage';
import SmartServiceRouter from './lelever-next/services-pages/SmartServiceRouter';
import BlogPage from './lelever-next/pages/BlogPage';
import CommentChoisirPeintreProfessionnelPage from './lelever-next/pages/CommentChoisirPeintreProfessionnelPage';
import PrixPeintureMontrealPage from './lelever-next/pages/PrixPeintureMontrealPage';
import ErreursAEviterPeintureInterieurePage from './lelever-next/pages/ErreursAEviterPeintureInterieurePage';
import NotFoundPage from './lelever-next/pages/NotFoundPage';
import NewWebsiteLayout from './lelever-next/layout/NewWebsiteLayout';
import ScrollToTop from './lelever-next/components/ScrollToTop';
import FreeQuotationPage from './pages/SoumissionPage';
import SoumissionDashboard from './pages/SoumissionDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmploiesDashboard from './pages/EmploiesDashboard';
import ContactDashboard from './pages/ContactDashboard';
import TimeSheet from './pages/TimeSheet';
import TimeSheetDashboard from './pages/TimeSheetDashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import EmployeeDetails from './pages/EmployeeDetails';
import ThermOfUsePage from './pages/ThermOfUse';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

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
            <Route index element={<NewHomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="a-propos" element={<AboutPage />} />
            <Route path="soumission" element={<FreeQuotationPage />} />
            <Route
              path="politiques/confidentialite"
              element={<PrivacyPolicyPage />}
            />
            <Route
              path="politiques/termes-conditions"
              element={<ThermOfUsePage />}
            />
          </Route>
          <Route path="/peintre-professionnel" element={<NewWebsiteLayout />}>
            <Route index element={<PeintreProfessionnelPage />} />
          </Route>
          <Route path="/avis" element={<NewWebsiteLayout />}>
            <Route index element={<AvisPage />} />
          </Route>
          <Route path="/secteurs-desservis" element={<NewWebsiteLayout />}>
            <Route index element={<SecteursDesservisPage />} />
            <Route path="brossard" element={<BrossardCityPage />} />
            <Route path="montreal" element={<MontrealCityPage />} />
            <Route path="laval" element={<LavalCityPage />} />
            <Route path="longueuil" element={<LongueuilCityPage />} />
          </Route>
          <Route path="/services" element={<NewWebsiteLayout />}>
            <Route index element={<ServicesPage />} />
            <Route
              path="peinture-commerciale"
              element={<PeintureCommercialePage />}
            />
            <Route
              path="new-peinture-exterieure"
              element={
                <Navigate to="/services/peinture-exterieure" replace />
              }
            />
            <Route
              path="peinture-exterieure"
              element={<PeintureExterieurePage />}
            />
            <Route
              path="peinture-residentielle"
              element={<PeintureResidentiellePage />}
            />
            <Route
              path="new-peinture-interieure"
              element={<Navigate to="/services/peinture-interieure" replace />}
            />
            <Route
              path="peinture-interieure"
              element={<PeintureInterieurePage />}
            />
            <Route
              path="peinture-industrielle"
              element={<PeintureIndustriellePage />}
            />
            <Route
              path=":serviceSlug/:subServiceSlug"
              element={<SousServicePage />}
            />
            <Route
              path=":serviceSlug/:param2/:param3"
              element={<SmartServiceRouter />}
            />
            <Route
              path=":serviceSlug/:citySlug"
              element={<ServiceQuartierPage />}
            />
          </Route>
          <Route path="/blog" element={<NewWebsiteLayout />}>
            <Route index element={<BlogPage />} />
            <Route
              path="comment-choisir-un-peintre-professionnel"
              element={<CommentChoisirPeintreProfessionnelPage />}
            />
            <Route
              path="prix-peinture-montreal"
              element={<PrixPeintureMontrealPage />}
            />
            <Route
              path="erreurs-a-eviter-peinture-interieure"
              element={<ErreursAEviterPeintureInterieurePage />}
            />
          </Route>

          <Route
            path="peintre-montreal"
            element={<Navigate to="/fr/peintre-montreal" replace />}
          />
          <Route path="/fr" element={<NewWebsiteLayout />}>
            <Route
              path="peintre-montreal"
              element={<LandingPageV2 lang="fr" indexable={false} />}
            />
          </Route>
          <Route path="/en" element={<NewWebsiteLayout />}>
            <Route
              path="peintre-montreal"
              element={<LandingPageV2 lang="en" indexable={false} />}
            />
            <Route
              path="painter-montreal"
              element={<Navigate to="/en/peintre-montreal" replace />}
            />
          </Route>

          <Route path="/admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="soumissions" element={<SoumissionDashboard />} />
            <Route path="emplois" element={<EmploiesDashboard />} />
            <Route path="contact" element={<ContactDashboard />} />
            <Route path="timesheets" element={<TimeSheetDashboard />} />
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="employee-details" element={<EmployeeDetails />} />
          </Route>
          <Route path="/timesheet" element={<TimeSheet />} />
          <Route path="/404" element={<NewWebsiteLayout />}>
            <Route index element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<NewWebsiteLayout />}>
            <Route index element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  );
}
