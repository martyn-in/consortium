import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Clock } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import useModalHistory from '../hooks/useModalHistory';
import c26Logo from '../assets/consortium_c26_logo_clean.png';
import './Navbar.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

// Target date: Day 1 Commencement — October 9, 2026 at 09:00 AM IST
const FESTIVAL_START_DATE = '2026-10-09T09:00:00+05:30';

function calculateTime(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(d).padStart(2, '0'),
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0')
  };
}

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
  const [timeLeft, setTimeLeft] = useState(() => calculateTime(FESTIVAL_START_DATE));

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Intercept mobile browser back button to close drawer instead of leaving site
  useModalHistory(mobileMenuOpen, handleCloseMobileMenu, 'mobile_menu');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(FESTIVAL_START_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Zero-jank asynchronous IntersectionObserver for active section tracking
    const sections = ['home', 'about', 'events', 'schedule', 'venue', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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

        {/* 1. Left: Official C26 Consortium Logo */}
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
            decoding="async"
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

        {/* 3. Right: Combined Legendary Metallic Silver-White Countdown HUD & Mobile Toggle */}
        <div className="c26-nav-right-actions">
          <a
            href="#schedule"
            className="c26-nav-countdown-hud"
            onClick={(e) => handleNavClick(e, '#schedule')}
            onMouseEnter={() => sound.playHover()}
            aria-label="Festival Countdown Timer - Click to view detailed schedule"
            title="Consortium 2026: October 9, 2026 • Click to view detailed countdown"
          >
            <Clock size={14} className="c26-nav-countdown-clock" />
            <div className="c26-nav-countdown-track">
              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit">{timeLeft.days}</span>
                <span className="c26-nav-countdown-unit-full">DAYS</span>
                <span className="c26-nav-countdown-unit-short">D</span>
              </div>

              <span className="c26-nav-countdown-divider">:</span>

              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit">{timeLeft.hours}</span>
                <span className="c26-nav-countdown-unit-full">HOURS</span>
                <span className="c26-nav-countdown-unit-short">H</span>
              </div>

              <span className="c26-nav-countdown-divider">:</span>

              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit">{timeLeft.minutes}</span>
                <span className="c26-nav-countdown-unit-full">MIN</span>
                <span className="c26-nav-countdown-unit-short">M</span>
              </div>

              <span className="c26-nav-countdown-divider">:</span>

              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit c26-nav-countdown-sec">{timeLeft.seconds}</span>
                <span className="c26-nav-countdown-unit-full">SEC</span>
                <span className="c26-nav-countdown-unit-short">S</span>
              </div>
            </div>
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
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="c26-mobile-drawer aura-glow-border">
          <div className="c26-mobile-drawer-countdown">
            <span className="c26-mobile-countdown-label">FESTIVAL COMMENCES IN</span>
            <div className="c26-nav-countdown-track">
              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit">{timeLeft.days}</span>
                <span className="c26-nav-countdown-unit-full">DAYS</span>
              </div>
              <span className="c26-nav-countdown-divider">:</span>
              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit">{timeLeft.hours}</span>
                <span className="c26-nav-countdown-unit-full">HOURS</span>
              </div>
              <span className="c26-nav-countdown-divider">:</span>
              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit">{timeLeft.minutes}</span>
                <span className="c26-nav-countdown-unit-full">MIN</span>
              </div>
              <span className="c26-nav-countdown-divider">:</span>
              <div className="c26-nav-countdown-slot">
                <span className="c26-nav-countdown-digit c26-nav-countdown-sec">{timeLeft.seconds}</span>
                <span className="c26-nav-countdown-unit-full">SEC</span>
              </div>
            </div>
          </div>

          <div className="c26-mobile-drawer-divider" />

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
