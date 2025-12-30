import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppProvider';

import MainPage from './pages/WebSiteLandingPage';
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
import PasswordProtectedPage from './lelever-next/components/PasswordProtectedPage';
import ScrollToTop from './lelever-next/components/ScrollToTop';
import PeintureExt from './pages/PeintureExterieur';
import PeintureInt from './pages/PeintureInterieur';
import Nousjoindre from './pages/Nousjoindre';
import AboutUs from './pages/AboutUs';
import Emplois from './pages/Emplois';
import FreeQuotationPage from './pages/SoumissionPage';
import LandingPageLayout from './layout/LandingPageLayout';
import LandingPage from './pages/LandingPage';
import WebsiteLayout from './layout/WebsiteLayout';
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
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<MainPage />} />
            <Route path='soumission' element={<FreeQuotationPage />} />
            <Route path='contact' element={<Nousjoindre />} />
            <Route path='a-propos-de-nous' element={<AboutUs />} />
            <Route path='emplois' element={<Emplois />} />
            <Route
              path='services/peinture-exterieure'
              element={<PeintureExt />}
            />
            <Route
              path='services/peinture-interieure'
              element={<PeintureInt />}
            />
            <Route
              path='politiques/confidentialite'
              element={<ThermOfUsePage />}
            />
            <Route
              path='politiques/termes-conditions'
              element={<PrivacyPolicyPage />}
            />
          </Route>
          <Route path='peintre-montreal' element={<LandingPage lang='fr' />} />
          <Route path='/fr' element={<LandingPageLayout lang='fr' />}>
            <Route
              path='peintre-montreal'
              element={<LandingPage lang='fr' />}
            />
          </Route>
          <Route path='/en' element={<LandingPageLayout lang='en' />}>
            <Route
              path='painter-montreal'
              element={<LandingPage lang='en' />}
            />
          </Route>
          <Route
            path='/new-home'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<NewHomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='a-propos' element={<AboutPage />} />
          </Route>
          <Route
            path='/peintre-professionnel'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<PeintreProfessionnelPage />} />
          </Route>
          <Route
            path='/avis'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<AvisPage />} />
          </Route>
          <Route
            path='/secteurs-desservis'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<SecteursDesservisPage />} />
            <Route path='brossard' element={<BrossardCityPage />} />
            <Route path='montreal' element={<MontrealCityPage />} />
            <Route path='laval' element={<LavalCityPage />} />
            <Route path='longueuil' element={<LongueuilCityPage />} />
          </Route>
          <Route
            path='/services'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<ServicesPage />} />
            <Route
              path='peinture-commerciale'
              element={<PeintureCommercialePage />}
            />
            <Route
              path='new-peinture-exterieure'
              element={<PeintureExterieurePage />}
            />
            <Route
              path='peinture-residentielle'
              element={<PeintureResidentiellePage />}
            />
            <Route
              path='new-peinture-interieure'
              element={<PeintureInterieurePage />}
            />
            <Route
              path='peinture-industrielle'
              element={<PeintureIndustriellePage />}
            />
            {/* Dynamic Service × SubService routes - MUST be before Service × SubService × City */}
            <Route
              path=':serviceSlug/:subServiceSlug'
              element={<SousServicePage />}
            />
            {/* Smart router for 3-segment routes - handles both SousServiceVille and ServiceQuartierSecteur */}
            <Route
              path=':serviceSlug/:param2/:param3'
              element={<SmartServiceRouter />}
            />
            {/* Dynamic Service × City routes - MUST be last to avoid conflicts */}
            <Route
              path=':serviceSlug/:citySlug'
              element={<ServiceQuartierPage />}
            />
          </Route>
          <Route
            path='/blog'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<BlogPage />} />
            <Route
              path='comment-choisir-un-peintre-professionnel'
              element={<CommentChoisirPeintreProfessionnelPage />}
            />
            <Route
              path='prix-peinture-montreal'
              element={<PrixPeintureMontrealPage />}
            />
            <Route
              path='erreurs-a-eviter-peinture-interieure'
              element={<ErreursAEviterPeintureInterieurePage />}
            />
          </Route>
          <Route
            path='/new-contact'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<ContactPage />} />
          </Route>
          <Route
            path='/a-propos'
            element={
              <PasswordProtectedPage>
                <NewWebsiteLayout />
              </PasswordProtectedPage>
            }
          >
            <Route index element={<AboutPage />} />
          </Route>
          <Route path='/admin'>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='soumissions' element={<SoumissionDashboard />} />
            <Route path='emplois' element={<EmploiesDashboard />} />
            <Route path='contact' element={<ContactDashboard />} />
            <Route path='timesheets' element={<TimeSheetDashboard />} />
            <Route path='employees' element={<EmployeeManagement />} />
            <Route path='employee-details' element={<EmployeeDetails />} />
          </Route>
          <Route path='/timesheet' element={<TimeSheet />} />
          {/* 404 Page - Use WebsiteLayout for old site compatibility */}
          <Route path='/404' element={<WebsiteLayout />}>
            <Route index element={<NotFoundPage />} />
          </Route>
          {/* 404 - Catch all unmatched routes - Use WebsiteLayout to preserve old site behavior */}
          <Route path='*' element={<WebsiteLayout />}>
            <Route index element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  );
}
