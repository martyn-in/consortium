import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Ticket, Globe, Crown } from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './Footer.css';

// Inline SVGs for social media
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

const TwitterXIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = ({ onOpenPassModal }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="royal-footer-section">
      {/* Top Gold Horizon Line */}
      <div className="footer-top-gold-line" />

      <div className="container footer-royal-grid">
        {/* Brand Column */}
        <Reveal direction="up" distance={30} className="footer-column brand-column">
          <div className="royal-footer-brand">
            <div className="footer-crown-mark">
              <Crown size={18} className="text-gold" />
            </div>
            <div>
              <span className="royal-footer-title">CONSORTIUM</span>
              <span className="royal-footer-year">2026</span>
            </div>
          </div>
          
          <p className="royal-footer-bio">
            The national flagship engineering summit hosted by the Institute of Aeronautical Engineering (IARE),
            Hyderabad. Uniting 5,000+ elite student innovators across India for robotics championships,
            AI hackathons, and executive conclaves.
          </p>

          <div className="footer-social-deck">
            {[
              { href: 'https://instagram.com', label: 'Instagram', Icon: InstagramIcon },
              { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
              { href: 'https://youtube.com', label: 'YouTube', Icon: YoutubeIcon },
              { href: 'https://x.com', label: 'Twitter X', Icon: TwitterXIcon, iconSize: 16 },
              { href: 'https://iare.ac.in', label: 'IARE Website', Icon: Globe }
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="royal-social-btn luxury-card"
                aria-label={s.label}
                whileHover={{ scale: 1.14, y: -4 }}
                whileTap={{ scale: 0.92 }}
                onMouseEnter={() => sound.playHover()}
              >
                <s.Icon size={s.iconSize || 18} className="text-gold" />
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* Quick Links Column */}
        <Reveal direction="up" delay={0.1} distance={30} className="footer-column">
          <h4 className="royal-footer-heading">NAVIGATION</h4>
          <div className="footer-gold-accent-line" />
          <ul className="royal-footer-links">
            <li><a href="#home" onMouseEnter={() => sound.playHover()}>Summit Overview</a></li>
            <li><a href="#about" onMouseEnter={() => sound.playHover()}>Imperial Architecture</a></li>
            <li><a href="#events" onMouseEnter={() => sound.playHover()}>Battleground Arenas</a></li>
            <li><a href="#schedule" onMouseEnter={() => sound.playHover()}>Event Timeline</a></li>
            <li><a href="#sponsors" onMouseEnter={() => sound.playHover()}>Strategic Alliances</a></li>
            <li>
              <button 
                type="button" 
                className="royal-claim-link text-gold" 
                onClick={() => { sound.playClick(); onOpenPassModal(); }}
              >
                <Ticket size={15} />
                <span>Register Imperial Pass</span>
              </button>
            </li>
          </ul>
        </Reveal>

        {/* Secretariat & Venue Column */}
        <Reveal direction="up" delay={0.15} distance={30} className="footer-column">
          <h4 className="royal-footer-heading">SECRETARIAT &amp; VENUE</h4>
          <div className="footer-gold-accent-line" />
          <ul className="royal-footer-contact">
            <li>
              <MapPin size={17} className="text-gold contact-icon" />
              <span>IARE Campus, Dundigal Road, Hyderabad, Telangana - 500043</span>
            </li>
            <li>
              <Phone size={17} className="text-gold contact-icon" />
              <span>+91 98765 43210 / 040-29705852</span>
            </li>
            <li>
              <Mail size={17} className="text-gold contact-icon" />
              <span>consortium@iare.ac.in</span>
            </li>
            <li className="convenor-tag">
              <span className="convenor-lbl">STUDENT CONVENOR DESK:</span>
              <strong className="convenor-val text-gold">+91 91234 56789</strong>
            </li>
          </ul>
        </Reveal>
      </div>

      {/* Bottom Legal Bar */}
      <div className="royal-legal-strip">
        <div className="container legal-strip-inner">
          <p>© 2026 CONSORTIUM • INSTITUTE OF AERONAUTICAL ENGINEERING. ALL RIGHTS RESERVED.</p>
          <motion.button 
            className="royal-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
