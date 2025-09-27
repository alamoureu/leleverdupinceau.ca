import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import MainPage from './pages/WebSiteLandingPage';
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
          <Route path='/admin'>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='soumissions' element={<SoumissionDashboard />} />
            <Route path='emplois' element={<EmploiesDashboard />} />
            <Route path='contact' element={<ContactDashboard />} />
            <Route path='timesheets' element={<TimeSheetDashboard />} />
            <Route path='employees' element={<EmployeeManagement />} />
          </Route>
          <Route path='/timesheet' element={<TimeSheet />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}
