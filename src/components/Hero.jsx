import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { fadeUp } from '../animations/motion';
import iareLogo from '../assets/iare_logo_dark_text.png';
import consortiumUnifiedArtwork from '../assets/consortium_2026_unified_transparent.png';
import './Hero.css';

export default function Hero({ onNavigateToEvents }) {
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
    <section id="home" className="hero-section">
      <div className="hero-stage">

        {/* 1. Transparent 3D Consortium 2026 Title Artwork (No Blue Glow, Prominent Size) */}
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
              src={consortiumUnifiedArtwork}
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
    </section>
  );
}
