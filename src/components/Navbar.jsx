import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 600px scroll will be the complete blue (shorter division makes it faster, larger makes it slower)
      const ratio = Math.min(window.scrollY / 1000, 1);
      setScrollRatio(ratio);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mixPercentage = Math.round(scrollRatio * 100);

  // Dynamic colors based on scroll
  const navBg = `color-mix(in srgb, rgba(10, 25, 47, 0.9) ${mixPercentage}%, transparent)`;
  const navShadow = scrollRatio > 0 ? `0 10px 30px -10px rgba(2,12,27, ${scrollRatio * 0.7})` : 'none';
  const navBorder = `color-mix(in srgb, var(--border-color) ${mixPercentage}%, transparent)`;

  return (
    <nav style={{ ...styles.nav, backgroundColor: navBg, borderBottomColor: navBorder, boxShadow: navShadow, backdropFilter: scrollRatio > 0 ? 'blur(10px)' : 'none' }}>
      <div className="container" style={styles.container}>
        <div style={styles.logoGroup}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
              <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" stroke="var(--primary-color)" strokeWidth="6" strokeLinejoin="round" />
              <text x="50" y="66" fontSize="46" fontWeight="600" fill="var(--primary-color)" textAnchor="middle" fontFamily="var(--font-mono), monospace">G</text>
            </svg>
          </a>
        </div>

        <ul style={styles.links}>
          <li><a href="#home" style={{ ...styles.activeLink, color: 'var(--text-primary)' }}>Home</a></li>
          <li><a href="#about" style={{ ...styles.link, color: 'var(--text-primary)' }}>About</a></li>
          <li><a href="#portfolio" style={{ ...styles.link, color: 'var(--text-primary)' }}>Projects</a></li>
        </ul>

        <div style={styles.actions}>
          <a href="#resume" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '1rem',
    borderBottom: '1px solid var(--text-primary)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoText: {
    fontWeight: '700',
    fontSize: '1.1rem',
    transition: 'color 0.6s',
  },
  links: {
    display: 'flex',
    gap: '2.5rem',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  link: {
    transition: 'color 0.6s',
  },
  activeLink: {
    fontWeight: '600',
    transition: 'color 0.6s',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  iconBtn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)',
    borderRadius: '2rem',
    padding: '0.25rem',
  },
  toggleBg: {
    backgroundColor: 'var(--primary-color)',
    color: '#fff',
    borderRadius: '50%',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};
