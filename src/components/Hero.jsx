import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, MapPin, Trophy, Users, ArrowRight, Compass } from 'lucide-react';
import Button from './Button';
import Countdown from './Countdown';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './Hero.css';

const Hero = ({ onOpenPassModal }) => {
  const handleRegisterClick = () => {
    sound.playSuccess();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#d4af37', '#fcf6ba', '#38bdf8', '#9333ea']
    });
    onOpenPassModal();
  };

  const titleLetters = 'CONSORTIUM'.split('');

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.25
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(16px)',
      scale: 0.9,
      rotateX: -35
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // 4 Elegant Glass Information Cards requested
  const infoCards = [
    { label: 'ROYAL DATES', value: 'Oct 15 - 16, 2026', icon: Calendar },
    { label: 'HOST PALACE', value: 'IARE Campus, Hyderabad', icon: MapPin },
    { label: 'FLAGSHIP EVENTS', value: '30+ Competitions', icon: Trophy },
    { label: 'NATIONAL DELEGATES', value: '5,000+ Innovators', icon: Users }
  ];

  return (
    <section id="home" className="royal-hero-section">
      <div className="container royal-hero-inner">
        {/* 1. Royal Institutional Header Crest */}
        <motion.div 
          className="royal-hero-crest"
          initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="crest-bullet">❖</span>
          <span>INSTITUTE OF AERONAUTICAL ENGINEERING PRESENTS</span>
          <span className="crest-bullet">❖</span>
        </motion.div>

        {/* 2. Large Cinematic Title with Metallic Gold Gradient & Shine Sweep */}
        <h1 className="royal-hero-title">
          <motion.span 
            className="royal-letters-container"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="royal-letter"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          {' '}
          <motion.span 
            className="royal-year-badge"
            initial={{ opacity: 0, scale: 0.75, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, delay: 0.7, type: 'spring', stiffness: 180 }}
          >
            2026
          </motion.span>
        </h1>

        {/* 3. Luxury Editorial Subtitle with Fade Up */}
        <motion.p 
          className="royal-hero-subtitle"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          The Annual National Technical &amp; Innovation Summit. Where academic majesty meets futuristic
          engineering, autonomous combat robotics, high-stakes algorithmic hackathons, and creative warfare.
        </motion.p>

        {/* 4. PRIMARY CALL TO ACTION BUTTONS — PROMINENT AND BEAUTIFUL */}
        <motion.div 
          className="royal-hero-actions"
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, type: 'spring', stiffness: 200 }}
        >
          <Button
            variant="primary"
            onClick={handleRegisterClick}
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={18} />
          </Button>

          <Button
            variant="secondary"
            href="#events"
            onClick={() => sound.playClick()}
          >
            <Compass size={18} />
            <span>EXPLORE EVENTS</span>
          </Button>
        </motion.div>

        {/* 5. 4 Elegant Glass Information Cards */}
        <Reveal direction="up" delay={0.75} distance={30}>
          <div className="royal-info-cards-grid">
            {infoCards.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div 
                  key={idx}
                  className="royal-info-card pro-card"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="info-card-icon-halo">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">{info.label}</span>
                    <strong className="info-card-val">{info.value}</strong>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* 6. Luxury Digital Flip Countdown */}
        <Reveal direction="up" delay={0.9} distance={35}>
          <Countdown targetDate="2026-10-15T09:00:00+05:30" />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
