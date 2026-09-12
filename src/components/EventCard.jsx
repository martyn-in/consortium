import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users, MapPin, ChevronRight, Trophy } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import Button from './Button';
import './EventCard.css';

const EventCard = ({ event, index = 0, onSelectEvent }) => {
  const cardRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0, opacity: 0 });

  // 3D Tilt Spring Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  if (!event) return null;
  const Icon = event.Icon || Trophy;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);

    setSpotlightPos({ x: mouseX, y: mouseY, opacity: 1 });
  };

  const handleMouseEnter = () => {
    sound.playHover();
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      className="royal-event-card luxury-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: ((index % 4) + 1) * 0.1, // Stagger delay: Card 1 delay .1, Card 2 delay .2, Card 3 delay .3...
        ease: 'easeOut'
      }}
    >
      {/* Dynamic Gold Spotlight Border on Hover */}
      <div 
        className="royal-card-spotlight"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(212, 175, 55, 0.35), transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="royal-card-top">
        <div className="royal-icon-halo">
          <Icon size={22} className="text-gold" />
        </div>
        <span className="royal-tag-badge">{event.tag}</span>
      </div>

      {/* Content Body */}
      <div className="royal-card-body">
        <span className="royal-card-category">{event.category}</span>
        <h3 className="royal-card-title">{event.title}</h3>
        <p className="royal-card-desc">{event.description}</p>
      </div>

      {/* Meta Specs & Prize Block */}
      <div className="royal-card-bottom">
        <div className="royal-prize-row">
          <Trophy size={16} className="text-gold" />
          <span className="royal-prize-label">CASH PRIZE</span>
          <strong className="royal-prize-value">{event.prize}</strong>
        </div>

        <div className="royal-specs-flex">
          <div className="royal-spec-item">
            <Users size={14} className="text-gold" />
            <span>{event.team}</span>
          </div>
          <div className="royal-spec-item">
            <MapPin size={14} className="text-gold" />
            <span>{event.venue}</span>
          </div>
        </div>

        {/* Action Button pinned to bottom */}
        <div className="royal-card-cta-wrap">
          <Button
            variant="primary"
            className="w-full royal-card-btn"
            onClick={() => {
              sound.playClick();
              onSelectEvent(event);
            }}
            strength={0.15}
          >
            <span>REGISTER FOR ARENA</span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
