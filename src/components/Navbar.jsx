import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Video, VideoOff, Crown } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import Button from './Button';
import './Navbar.css';

const Navbar = ({ onOpenPassModal, isVideoPlaying, onToggleVideo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newMuteState = sound.toggleMute();
    setIsMuted(newMuteState);
  };

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EVENTS', href: '#events' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <motion.header 
      className={`royal-navbar-root ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <nav className="royal-navbar-container">
          {/* Brand Mark with Crown & Gold Glow */}
          <motion.a 
            href="#home" 
            className="royal-brand-link"
            onClick={() => sound.playClick()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="royal-crown-emblem">
              <Crown size={16} className="crown-icon" />
            </div>
            <div className="brand-text-stack">
              <span className="royal-brand-title">CONSORTIUM</span>
              <span className="royal-brand-sub">NATIONAL TECH SUMMIT 2026</span>
            </div>
          </motion.a>

          {/* Institutional Badge */}
          <div className="royal-center-crest hide-mobile">
            <span className="crest-star">✦</span>
            <span>IARE HYDERABAD • OCTOBER 15-16, 2026</span>
            <span className="crest-star">✦</span>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="royal-right-nav">
            <div className="royal-menu-links" onMouseLeave={() => setHoveredLink(null)}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="royal-nav-link"
                  onMouseEnter={() => {
                    sound.playHover();
                    setHoveredLink(link.label);
                  }}
                  onClick={() => sound.playClick()}
                >
                  <span className="nav-label-text">{link.label}</span>
                  {hoveredLink === link.label && (
                    <motion.div
                      layoutId="royalNavUnderline"
                      className="royal-active-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Video Motion Toggle */}
            <motion.button
              className={`royal-icon-btn ${!isVideoPlaying ? 'disabled' : ''}`}
              onClick={() => {
                sound.playClick();
                onToggleVideo();
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              title={isVideoPlaying ? 'Pause Background Video' : 'Play Background Video'}
              aria-label="Toggle background video"
            >
              {isVideoPlaying ? <Video size={16} className="text-gold" /> : <VideoOff size={16} />}
            </motion.button>

            {/* Audio Toggle */}
            <motion.button
              className="royal-icon-btn"
              onClick={handleAudioToggle}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              title={isMuted ? 'Unmute Audio Effects' : 'Mute Audio Effects'}
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-gold" />}
            </motion.button>

            {/* Primary Action Button */}
            <Button
              variant="primary"
              className="navbar-gold-btn"
              onClick={() => {
                sound.playClick();
                onOpenPassModal();
              }}
              magnetic={true}
              strength={0.2}
            >
              <span>REGISTER NOW</span>
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              className="royal-hamburger-btn"
              onClick={() => {
                sound.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="royal-drawer-backdrop" 
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="royal-drawer-sheet" 
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className="drawer-top-bar">
                <span className="tech-pill">
                  <span className="pulse-dot"></span> ROYAL FESTIVAL
                </span>
                <button 
                  className="royal-icon-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="drawer-nav-items">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="drawer-link-item"
                    onClick={() => {
                      sound.playClick();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="drawer-bottom-stack">
                <div className="drawer-toggles-row">
                  <button
                    className="royal-icon-btn flex-1"
                    onClick={() => {
                      sound.playClick();
                      onToggleVideo();
                    }}
                  >
                    {isVideoPlaying ? <Video size={16} /> : <VideoOff size={16} />}
                    <span>{isVideoPlaying ? 'Video On' : 'Video Off'}</span>
                  </button>
                  <button
                    className="royal-icon-btn flex-1"
                    onClick={handleAudioToggle}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    <span>{isMuted ? 'Muted' : 'Sound'}</span>
                  </button>
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    sound.playClick();
                    setIsMobileMenuOpen(false);
                    onOpenPassModal();
                  }}
                >
                  <span>REGISTER NOW</span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
