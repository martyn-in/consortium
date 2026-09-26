import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronDown, MapPin, Compass, Trophy } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { fadeUp } from '../animations/motion';
import { useTheme } from '../context/ThemeContext';
import iareLogoDark from '../assets/iare_logo_dark_text.png';
import iareLogoWhite from '../assets/iare_logo_white_text.png';
import consortiumUnifiedArtwork from '../assets/consortium_2026_unified_transparent.png';
import consortiumDarkArtwork from '../assets/consortium_2026_dark_transparent.png';
import consortiumLuxuryHero from '../assets/consortium_2026_luxury_hero.jpg';
import './Hero.css';

export default function Hero({ onNavigateToEvents }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const iareLogo = isDark ? iareLogoWhite : iareLogoDark;
  const consortiumArtwork = isDark ? consortiumDarkArtwork : consortiumUnifiedArtwork;

  const handleRegister = (e) => {
    e.preventDefault();
    sound.playClick();
    if (onNavigateToEvents) {
      onNavigateToEvents();
    } else {
      const target = document.getElementById('events');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    sound.playClick();
    const target = document.getElementById('events');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`hero-section ${isDark ? 'hero-editorial-theme' : ''}`}>
      {isDark ? (
        /* ============================================================
           DARK MODE: ULTRA-LUXURY 3D TECHNO-CULTURAL HERO
           ============================================================ */
        <div className="luxury-hero-container">
          <div className="luxury-hero-stage">
            {/* 1. Super-sleek Live Pulse Eyebrow Pill */}
            <motion.div
              className="luxury-hero-eyebrow-pill"
              variants={fadeUp(0.08, 10)}
              initial="hidden"
              animate="visible"
            >
              <span className="luxury-pulse-ruby" />
              <span className="luxury-pill-tag">CONSORTIUM 2026</span>
              <span className="luxury-pill-sep">•</span>
              <span>NATIONAL TECHNO-CULTURAL CONCLAVE</span>
              <span className="luxury-pill-sep">•</span>
              <span className="luxury-pill-date">OCTOBER 9 &amp; 10</span>
            </motion.div>

            {/* 2. Grand 3D Artwork Centerpiece Lockup */}
            <motion.div
              className="luxury-hero-centerpiece-wrap"
              variants={fadeUp(0.16, 14)}
              initial="hidden"
              animate="visible"
            >
              <div className="luxury-hero-image-pod">
                <img
                  src={consortiumLuxuryHero}
                  alt="CONSORTIUM 2026 - 3D Futuristic Fest Branding"
                  className="luxury-hero-3d-img"
                  loading="eager"
                  decoding="async"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="luxury-hero-image-aura" aria-hidden="true" />
              </div>
            </motion.div>

            {/* 3. Host Institution Organizer: IARE Logo and Text */}
            <motion.div
              className="luxury-hero-iare-lockup"
              variants={fadeUp(0.24, 12)}
              initial="hidden"
              animate="visible"
            >
              <div className="luxury-iare-org-rule">
                <span className="luxury-iare-rule-line" />
                <span className="luxury-iare-org-label">ORGANIZED BY</span>
                <span className="luxury-iare-rule-line" />
              </div>

              <motion.a
                href="https://www.iare.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-iare-badge-wrap"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                title="Visit Institute of Aeronautical Engineering Official Portal (iare.ac.in)"
              >
                <div className="luxury-iare-logo-halo">
                  <img
                    src={iareLogoWhite}
                    alt="Institute of Aeronautical Engineering"
                    className="luxury-iare-logo-img"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="luxury-iare-text-side">
                  <h2 className="luxury-iare-college-title">
                    INSTITUTE OF AERONAUTICAL ENGINEERING
                  </h2>
                  <p className="luxury-iare-college-meta">
                    AUTONOMOUS &nbsp;•&nbsp; HYDERABAD &nbsp;•&nbsp; ESTD. 2000 &nbsp;•&nbsp; NAAC &apos;A++&apos; GRADE
                  </p>
                </div>
              </motion.a>
            </motion.div>

            {/* 4. Action Center / CTA Buttons */}
            <motion.div
              className="luxury-hero-actions-row"
              variants={fadeUp(0.32, 12)}
              initial="hidden"
              animate="visible"
            >
              <button
                type="button"
                className="luxury-primary-btn"
                onClick={handleRegister}
                aria-label="Register now for Consortium 2026"
              >
                <span>REGISTER NOW</span>
                <span className="luxury-btn-arrow-halo">
                  <ArrowRight size={17} strokeWidth={2.4} />
                </span>
              </button>

              <button
                type="button"
                className="luxury-secondary-btn"
                onClick={handleScroll}
                aria-label="Explore Flagship Events"
              >
                <Compass size={17} className="luxury-btn-icon" />
                <span>EXPLORE 10+ FLAGSHIPS</span>
              </button>

              <a
                href="https://www.iare.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-tertiary-link"
                title="Institute of Aeronautical Engineering (Autonomous Official Portal)"
              >
                <MapPin size={16} className="luxury-link-pin" />
                <span>IARE HYDERABAD</span>
                <span className="luxury-autonomous-pill">AUTONOMOUS</span>
              </a>
            </motion.div>

            {/* 5. 4 Luxury Floating Glass Metric Cards */}
            <motion.div
              className="luxury-hero-stats-dock"
              variants={fadeUp(0.4, 12)}
              initial="hidden"
              animate="visible"
            >
              <div className="luxury-stat-card">
                <span className="luxury-stat-val">50+</span>
                <span className="luxury-stat-title">FLAGSHIP EVENTS</span>
                <span className="luxury-stat-sub">Tech, Esports &amp; Culture</span>
              </div>

              <div className="luxury-stat-card">
                <span className="luxury-stat-val">5,000+</span>
                <span className="luxury-stat-title">PARTICIPANTS</span>
                <span className="luxury-stat-sub">100+ Universities</span>
              </div>

              <div className="luxury-stat-card">
                <span className="luxury-stat-val">₹5,00,000+</span>
                <span className="luxury-stat-title">PRIZE POOL</span>
                <span className="luxury-stat-sub">Cash, Grants &amp; Trophies</span>
              </div>

              <div className="luxury-stat-card">
                <span className="luxury-stat-val">OCT 9–10</span>
                <span className="luxury-stat-title">NATIONAL FEST</span>
                <span className="luxury-stat-sub">2 Non-Stop Days</span>
              </div>
            </motion.div>

            {/* 6. Centered Scroll Pill */}
            <motion.div
              className="luxury-hero-scroll-pill"
              variants={fadeUp(0.48, 10)}
              initial="hidden"
              animate="visible"
              onClick={handleScroll}
              role="button"
              tabIndex={0}
              aria-label="Scroll to explore festival"
            >
              <span className="luxury-scroll-text">EXPLORE EVENTS</span>
              <ChevronDown size={16} className="luxury-scroll-icon" />
            </motion.div>
          </div>
        </div>
      ) : (
        /* ============================================================
           LIGHT MODE: 100% UNTOUCHED ORIGINAL LAYOUT
           ============================================================ */
        <div className="hero-stage">
          {/* 1. Transparent 3D Consortium 2026 Title Artwork */}
          <motion.div
            className="hero-title-lockup-wrapper"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="hero-3d-floating-artwork-wrap"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <h1 className="sr-only">CONSORTIUM 2026 – National Level Technical Fest</h1>
              <img
                src={consortiumArtwork}
                alt="CONSORTIUM 2026"
                className="hero-3d-artwork-image"
                width={2938}
                height={1732}
                loading="eager"
                decoding="async"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          </motion.div>

          {/* 2. Official Motto */}
          <motion.p
            className="hero-subtitle"
            variants={fadeUp(0.2, 10)}
            initial="hidden"
            animate="visible"
          >
            IDEAS&nbsp;&nbsp;|&nbsp;&nbsp;INNOVATION&nbsp;&nbsp;|&nbsp;&nbsp;IMPACT
          </motion.p>

          {/* 3. Official Date Badge */}
          <motion.div
            className="hero-date-pill"
            variants={fadeUp(0.3, 10)}
            initial="hidden"
            animate="visible"
          >
            <Calendar size={20} className="hero-date-icon" strokeWidth={2.2} />
            <span className="hero-date-text">OCTOBER 09 – 10, 2026</span>
            <span className="hero-date-divider" />
            <span className="hero-date-label">2 DAYS NATIONAL LEVEL FEST</span>
          </motion.div>

          {/* 4. Host Institution Organizer Block */}
          <motion.div
            className="hero-organizer-block"
            variants={fadeUp(0.4, 10)}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-org-rule">
              <span className="hero-org-line hero-org-line--blue" />
              <span className="hero-org-label">ORGANIZED BY</span>
              <span className="hero-org-line hero-org-line--gold" />
            </div>

            <motion.a
              href="https://www.iare.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-iare-logo-wrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              title="Visit Institute of Aeronautical Engineering Official Portal (iare.ac.in)"
            >
              <img
                src={iareLogo}
                alt="Institute of Aeronautical Engineering"
                className="hero-iare-logo"
                loading="eager"
                decoding="async"
              />
            </motion.a>

            <a
              href="https://www.iare.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-institute-link"
              title="Visit Institute of Aeronautical Engineering Official Portal (iare.ac.in)"
            >
              <h2 className="hero-institute">
                INSTITUTE OF AERONAUTICAL ENGINEERING
              </h2>
            </a>
            <p className="hero-location">
              AUTONOMOUS&nbsp;&nbsp;•&nbsp;&nbsp;HYDERABAD
            </p>
          </motion.div>

          {/* 5. Primary Register Now CTA Button */}
          <motion.div
            className="hero-actions"
            variants={fadeUp(0.5, 10)}
            initial="hidden"
            animate="visible"
          >
            <button
              type="button"
              className="hero-cta-btn"
              onClick={handleRegister}
              aria-label="Register now for Consortium 2026"
            >
              <span className="hero-cta-btn-text">REGISTER NOW</span>
              <span className="hero-cta-btn-arrow">
                <ArrowRight size={18} strokeWidth={2.2} />
              </span>
            </button>
          </motion.div>

          {/* 6. Natural Scroll for More Indicator */}
          <motion.div
            className="hero-scroll"
            variants={fadeUp(0.6, 10)}
            initial="hidden"
            animate="visible"
            onClick={handleScroll}
            role="button"
            tabIndex={0}
            aria-label="Scroll to explore events"
          >
            <span className="hero-scroll-text">SCROLL FOR MORE</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ChevronDown size={20} className="hero-scroll-chevron" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
