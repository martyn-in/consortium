import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import './AuraEventCard.css';

export default function AuraEventCard({ 
  event, 
  onSelectEvent, 
  onViewDetails,
  index = 0, 
  isFeatured = false 
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const EventIcon = event.icon || Sparkles;
  const isCenterCard = event.isFeaturedCenter || isFeatured;

  return (
    <motion.div
      ref={cardRef}
      className={`cyber-card-frame ${isCenterCard ? 'center-highlight' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => sound.playHover()}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      {/* Dynamic Aura Glow Layer */}
      <div className="cyber-card-outer-glow" aria-hidden="true" />
      <div className="cyber-corner-cut-tl" aria-hidden="true" />
      <div className="cyber-corner-cut-br" aria-hidden="true" />

      {/* Top Category & Catalog Chip */}
      <div className="cyber-card-top-chip">
        <span className="cyber-card-cat-pill">{event.category}</span>
        <span className="cyber-card-order-num">#{event.sourceOrder || index + 1}</span>
      </div>

      {/* Center Icon Halo */}
      <div className="cyber-card-icon-wrap">
        <div className="cyber-card-icon-halo">
          <EventIcon size={28} className="cyber-event-icon" />
        </div>
      </div>

      {/* Card Body — Clean, Punchy, Professional */}
      <div className="cyber-card-body">
        <h3 className="cyber-card-title">{event.title}</h3>
        <p className="cyber-card-tagline">{event.tagline}</p>
      </div>

      {/* Status / Prize Indicator */}
      <div className="cyber-card-meta">
        <div className="cyber-prize-row">
          <Trophy size={14} className="trophy-gold" />
          <span className="prize-text">AWARDS TBA</span>
        </div>
      </div>

      {/* Action Buttons: Register & View Details */}
      <div className="cyber-card-actions">
        <button
          className="cyber-card-btn-register"
          onClick={(e) => {
            e.stopPropagation();
            sound.playClick();
            onSelectEvent(event);
          }}
          aria-label={`Register for ${event.title}`}
        >
          <span>REGISTER</span>
          <ArrowRight size={14} />
        </button>

        <button
          className="cyber-card-btn-details"
          onClick={(e) => {
            e.stopPropagation();
            sound.playHover();
            if (onViewDetails) onViewDetails(event);
          }}
          title="View full event specifications"
          aria-label={`View details for ${event.title}`}
        >
          <ExternalLink size={13} />
        </button>
      </div>
    </motion.div>
  );
}
