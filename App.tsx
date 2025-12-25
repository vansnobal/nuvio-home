
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Guide from './pages/Guide';

import FontWrapper from './components/FontWrapper';

import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <FontWrapper>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Hero />
                  <Features />
                  <CTA />
                </main>
                <Footer />
              </>
            } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </Router>
      </FontWrapper>
    </LanguageProvider>
  );
};

export default App;
