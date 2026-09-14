import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Calendar } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { fadeUp } from '../animations/motion';
import consortiumTitleArtwork from '../assets/consortium_title.png';
import iareLogo from '../assets/iare_logo_white_text.png';
import './Hero.css';

const Hero = ({ onNavigateToEvents }) => {
  const handleRegisterClick = () => {
    sound.playClick();
    if (onNavigateToEvents) {
      onNavigateToEvents();
    } else {
      const el = document.getElementById('events');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    sound.playClick();
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-inner">
        {/* Massive 3D Chrome Title Artwork + Slanted 2026 */}
        <div className="hero-title-wrap">
          <h1 className="sr-only">CONSORTIUM 2026</h1>

          <motion.div 
            className="hero-consortium-banner-wrap"
            initial={{ opacity: 0, scale: 0.88, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src={consortiumTitleArtwork} 
              alt="CONSORTIUM" 
              className="hero-consortium-artwork" 
            />
          </motion.div>

          {/* Slanted Vibrant Neon Year 2026 */}
          <motion.span 
            className="hero-title-year-brush"
            initial={{ opacity: 0, scale: 0.7, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 0.25,
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
          >
            2026
          </motion.span>

          {/* Official Event Timeline Badge: OCTOBER 9 & 10 */}
          <motion.div 
            className="hero-timeline-badge-wrap"
            variants={fadeUp(0.3, 10)}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-timeline-badge">
              <Calendar size={14} className="hero-timeline-icon" />
              <span className="hero-timeline-text">OCTOBER 09 – 10, 2026</span>
              <span className="hero-timeline-spark">✦</span>
              <span className="hero-timeline-sub">2-DAY NATIONAL ARENA</span>
            </div>
          </motion.div>
        </div>

        {/* Organized By Section */}
        <motion.div 
          className="hero-organizer-block"
          variants={fadeUp(0.35, 12)}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-org-badge-row">
            <span className="org-flourish-line"></span>
            <span className="hero-org-label">ORGANIZED BY</span>
            <span className="org-flourish-line"></span>
          </div>

          <motion.div 
            className="hero-iare-logo-wrap"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            title="Institute of Aeronautical Engineering"
          >
            <img 
              src={iareLogo} 
              alt="Institute of Aeronautical Engineering" 
              className="hero-iare-logo-img" 
            />
          </motion.div>

          <h2 className="hero-org-name">INSTITUTE OF AERONAUTICAL ENGINEERING</h2>
          <span className="hero-org-sub">
            AUTONOMOUS <span className="hero-sub-diamond">◆</span> HYDERABAD
          </span>
        </motion.div>

        {/* Single Primary Register Now Button */}
        <motion.div 
          className="hero-actions"
          variants={fadeUp(0.5, 12)}
          initial="hidden"
          animate="visible"
        >
          <button 
            className="hero-btn-primary-mockup"
            onClick={handleRegisterClick}
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Natural Flow Scroll for More */}
        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          onClick={handleScrollDown}
          role="button"
          tabIndex={0}
          title="Scroll to explore arenas"
        >
          <span className="hero-scroll-text">SCROLL FOR MORE</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="hero-chevron-wrap"
          >
            <ChevronDown size={18} className="hero-scroll-chevron" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
