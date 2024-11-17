import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/WebSiteLandingPage';
import PeintureExt from './pages/PeintureExterieur';
import PeintureInt from './pages/PeintureInterieur';
import Nousjoindre from './pages/Nousjoindre';
import AboutUs from './pages/AboutUs';
import Emplois from './pages/Emplois';
import { AppProvider } from './AppProvider';
import FreeQuotationPage from './pages/SoumissionPage';
import LandingPageLayout from './layout/LandingPageLayout';
import LandingPage from './pages/LandingPage';
import WebsiteLayout from './layout/WebsiteLayout';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/soumission" element={<FreeQuotationPage />} />
            <Route path="/contact" element={<Nousjoindre />} />
            <Route path="/a-propos-de-nous" element={<AboutUs />} />
            <Route path="/emplois" element={<Emplois />} />
            <Route
              path="/services/peinture-exterieure"
              element={<PeintureExt />}
            />
            <Route
              path="/services/peinture-interieure"
              element={<PeintureInt />}
            />
          </Route>
          <Route path="/fr" element={<LandingPageLayout lang="fr" />}>
            <Route
              path="peintre-montreal"
              element={<LandingPage lang="fr" />}
            />
          </Route>
          <Route path="/en" element={<LandingPageLayout lang="en" />}>
            <Route
              path="painter-montreal"
              element={<LandingPage lang="en" />}
            />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  );
}
