import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, MapPin, Trophy, ArrowRight, Compass } from 'lucide-react';
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



  // 3 Elegant Glass Information Cards: Date, Venue, Events
  const infoCards = [
    { label: 'DATE', value: 'Oct 15 - 16, 2026', icon: Calendar },
    { label: 'VENUE', value: 'IARE Campus, Hyderabad', icon: MapPin },
    { label: 'EVENTS', value: '30+ Flagship Arenas', icon: Trophy }
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

        {/* 2. Large Cinematic Futuristic Chrome Title */}
        <motion.h1
          className="future-title"
          initial={{
            opacity: 0,
            scale: 0.7,
            filter: "blur(20px)"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0)"
          }}
          transition={{
            duration: 1.2
          }}
        >
          <span>
            CONSORTIUM
          </span>
          <strong>
            2026
          </strong>
        </motion.h1>

        {/* 3. Cinematic Subtitle */}
        <motion.p 
          className="royal-hero-subtitle"
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          The Annual National Tech Summit
        </motion.p>

        {/* 4. Primary Call to Action Buttons: [ REGISTER NOW ] and [ EXPLORE ] */}
        <motion.div 
          className="royal-hero-actions"
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, type: 'spring', stiffness: 200 }}
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
            <span>EXPLORE</span>
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
