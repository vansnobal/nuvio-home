
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col paper-texture">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
