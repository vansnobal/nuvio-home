import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ComingSoon } from './components/ComingSoon';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}

export default App;
