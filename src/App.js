import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/WebSiteLandingPage';
import PeintureExt from './PeintureExterieur';
import PeintureInt from './PeintureInterieur';
import Nousjoindre from './Nousjoindre';
import AboutUs from './AboutUs';
import Emplois from './Emplois';
import { AppProvider } from './AppProvider';
import FreeQuotationPage from './FreeQuotationPage';
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
