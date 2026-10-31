import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { StatePage } from './pages/StatePage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { SolutionsOverviewPage } from './pages/SolutionsOverviewPage';
import { SolarInstallationPage } from './pages/SolarInstallationPage';
import { IncentivesPage } from './pages/IncentivesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ReferralsPage } from './pages/ReferralsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { GetAQuotePage } from './pages/GetAQuotePage';
import { LegalPage } from './pages/LegalPage';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-teal-600 selection:text-white">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Pricing page */}
            <Route path="/plans-services/pricing" element={<PricingPage />} />
            <Route path="/plans-services" element={<PricingPage />} />
            <Route path="/plans-services/solar-installation" element={<SolarInstallationPage />} />
            <Route path="/plans-services/solar-incentives" element={<IncentivesPage />} />

            {/* Solutions routes */}
            <Route path="/solutions" element={<SolutionsOverviewPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/whole-home-solar-solutions" element={<SolutionsOverviewPage />} />

            {/* Locations (8 states) */}
            <Route path="/locations/:stateSlug" element={<StatePage />} />
            <Route path="/locations" element={<HomePage />} />

            {/* Explore / Company */}
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/referrals" element={<ReferralsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/get-a-quote" element={<GetAQuotePage />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-of-use" element={<LegalPage />} />
            <Route path="/accessibility" element={<LegalPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
