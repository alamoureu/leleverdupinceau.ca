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
import BlogPage from './lelever-next/pages/BlogPage';
import NewWebsiteLayout from './lelever-next/layout/NewWebsiteLayout';
import PasswordProtectedPage from './lelever-next/components/PasswordProtectedPage';
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
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/soumission' element={<FreeQuotationPage />} />
            <Route path='/contact' element={<Nousjoindre />} />
            <Route path='/a-propos-de-nous' element={<AboutUs />} />
            <Route path='/emplois' element={<Emplois />} />
            <Route
              path='/services/peinture-exterieure'
              element={<PeintureExt />}
            />
            <Route
              path='/services/peinture-interieure'
              element={<PeintureInt />}
            />
            <Route
              path='/politiques/confidentialite'
              element={<ThermOfUsePage />}
            />
            <Route
              path='/politiques/termes-conditions'
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
          </Route>
          <Route
            path='/contact'
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
        </Routes>
      </AppProvider>
    </Router>
  );
}
