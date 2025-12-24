
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

import FontWrapper from './components/FontWrapper';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <FontWrapper>
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
      </FontWrapper>
    </LanguageProvider>
  );
};

export default App;
