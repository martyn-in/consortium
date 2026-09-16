import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import './Navbar.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'TIMELINE', href: '#arena-experience' },
  { label: 'CONTACT', href: '#venue' }
];

export default function Navbar({ onNavigateToEvents }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section spy
      const sections = ['home', 'about', 'events', 'arena-experience', 'venue'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
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

        {/* 1. Left: Premium Brand Lockup with Crisp SVG Cyber Crest & Typography */}
        <a 
          href="#home" 
          className="c26-brand-lockup"
          onClick={(e) => handleNavClick(e, '#home')}
          onMouseEnter={() => sound.playHover()}
          aria-label="Consortium 2026 Home"
        >
          {/* Futuristic Hexagonal Nexus Crest */}
          <div className="c26-brand-crest">
            <svg 
              width="34" 
              height="34" 
              viewBox="0 0 44 44" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="c26-brand-svg-shield"
            >
              {/* Outer Hexagon with Cyan Glow */}
              <polygon 
                points="22,3 39,12.8 39,32.2 22,42 5,32.2 5,12.8" 
                stroke="url(#shieldCyanGrad)" 
                strokeWidth="2.2" 
                fill="rgba(0, 240, 255, 0.06)"
              />
              {/* Inner Technical Facet Ring */}
              <polygon 
                points="22,8 34,15 34,29 22,36 10,29 10,15" 
                stroke="rgba(0, 240, 255, 0.35)" 
                strokeWidth="1" 
                strokeDasharray="2 2"
              />
              {/* Stylized Futuristic 'C' Monogram */}
              <path 
                d="M26 16H18C15.2 16 13 18.2 13 21V23C13 25.8 15.2 28 18 28H26" 
                stroke="url(#shieldAccentGrad)" 
                strokeWidth="2.8" 
                strokeLinecap="round" 
              />
              {/* Apex Pulse Star */}
              <circle cx="28" cy="22" r="2.2" fill="#00f0ff" />
              {/* Corner Accents */}
              <circle cx="22" cy="3" r="1.5" fill="#00f0ff" />
              <circle cx="39" cy="12.8" r="1.5" fill="#c084fc" />
              <circle cx="39" cy="32.2" r="1.5" fill="#00f0ff" />
              <circle cx="22" cy="42" r="1.5" fill="#00f0ff" />
              <circle cx="5" cy="32.2" r="1.5" fill="#c084fc" />
              <circle cx="5" cy="12.8" r="1.5" fill="#00f0ff" />
              <defs>
                <linearGradient id="shieldCyanGrad" x1="5" y1="3" x2="39" y2="42" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00f0ff" />
                  <stop offset="0.6" stopColor="#38bdf8" />
                  <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
                <linearGradient id="shieldAccentGrad" x1="13" y1="16" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" />
                  <stop offset="0.6" stopColor="#00f0ff" />
                  <stop offset="1" stopColor="#67e8f9" />
                </linearGradient>
              </defs>
            </svg>
            <div className="c26-crest-aura" aria-hidden="true" />
          </div>

          {/* Clean Typographic Brandmark */}
          <div className="c26-brand-text-block">
            <div className="c26-brand-row">
              <span className="c26-brand-wordmark">CONSORTIUM</span>
              <span className="c26-brand-badge-pill">2026</span>
            </div>
            <span className="c26-brand-submark">IARE • NATIONAL FEST</span>
          </div>
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

        {/* 3. Right: Sleek High-Contrast Cyber Register Button */}
        <div className="c26-nav-right-actions">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="c26-nav-register-btn"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            title="Register for Consortium 2026"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight size={15} className="register-arrow-icon" />
          </a>

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
