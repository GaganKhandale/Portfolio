import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ResumePage from './components/ResumePage';
import Projects from './components/Projects';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (hash !== '#resume') {
      setTimeout(() => {
        const id = hash.replace('#', '');
        if (id && id !== 'home') {
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -80; // Offset for navbar
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);


  const isResumePage = hash === '#resume';

  return (
    <div className="app">
      <Navbar />
      <SocialSidebar />
      {isResumePage ? (
        <ResumePage />
      ) : (
        <>
          <main>
            <Hero onContactClick={() => setIsContactModalOpen(true)} />
            <AboutAndSkills />
            <Projects onContactClick={() => setIsContactModalOpen(true)} />
          </main>
          <Footer onContactClick={() => setIsContactModalOpen(true)} />
        </>
      )}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
