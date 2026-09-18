import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import c26Logo from '../assets/consortium_c26_logo_clean.png';
import './Navbar.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'COUNTDOWN', href: '#schedule' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Navbar({ onNavigateToEvents }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    let lastCheckTime = 0;
    const sections = ['home', 'about', 'events', 'schedule', 'venue', 'contact'];

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const scrolled = currentY > 25;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          // Throttle layout queries to every 120ms to eliminate layout thrashing
          const now = performance.now();
          if (now - lastCheckTime > 120) {
            lastCheckTime = now;
            const scrollPos = currentY + 220;

            for (const sectionId of sections) {
              const el = document.getElementById(sectionId);
              if (el) {
                const top = el.offsetTop;
                const height = el.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                  setActiveSection((prev) => (prev !== sectionId ? sectionId : prev));
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);

    if (href === '#events' && onNavigateToEvents) {
      onNavigateToEvents();
      return;
    }

    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className={`c26-navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="c26-navbar-inner">

        {/* 1. Left: Official C26 Consortium Logo from User */}
        <a 
          href="#home" 
          className="c26-brand-lockup"
          onClick={(e) => handleNavClick(e, '#home')}
          onMouseEnter={() => sound.playHover()}
          aria-label="Consortium 2026 Home"
        >
          <img 
            src={c26Logo} 
            alt="Consortium 2026" 
            className="c26-brand-logo-img" 
          />
        </a>

        {/* 2. Center: Floating Cyber Capsule Navigation Dock */}
        <nav className="c26-nav-capsule-dock" aria-label="Main Navigation">
          {navItems.map((item) => {
            const sectionKey = item.href.replace('#', '');
            const isActive = activeSection === sectionKey;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`c26-nav-capsule-btn ${isActive ? 'is-active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => sound.playHover()}
              >
                {isActive && <span className="c26-btn-pulse-dot" aria-hidden="true">●</span>}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* 3. Right: Mobile Hamburger Toggle */}
        <div className="c26-nav-right-actions">
          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="c26-mobile-menu-toggle"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="c26-mobile-drawer aura-glow-border">
          <div className="c26-mobile-drawer-links">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`c26-mobile-nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="c26-mobile-nav-label">{item.label}</span>
                  {isActive ? (
                    <span className="c26-mobile-active-indicator">ACTIVE</span>
                  ) : (
                    <ArrowUpRight size={15} className="text-muted opacity-50" />
                  )}
                </a>
              );
            })}

            <div className="c26-mobile-drawer-divider" />

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="c26-mobile-register-cta"
              onClick={handleRegisterClick}
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
