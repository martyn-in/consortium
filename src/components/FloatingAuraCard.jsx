import { useRef } from 'react';
import { Trophy, ArrowRight, Users, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import './FloatingAuraCard.css';

export default function FloatingAuraCard({ 
  event, 
  onRegister, 
  onViewDetails 
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const EventIcon = event.icon || Sparkles;

  return (
    <div className="floating-card-stage-anchor">
      {/* Card Frame with 360-Degree Moving Border Line Aura */}
      <div 
        ref={cardRef}
        className="floating-aura-card-frame"
        style={{ '--beam-delay': `${-(currentIndex * 0.75)}s` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => sound.playHover()}
      >
        {/* Cyber Neon Corner Cut Brackets */}
        <div className="cyber-bracket bracket-tl" />
        <div className="cyber-bracket bracket-tr" />
        <div className="cyber-bracket bracket-bl" />
        <div className="cyber-bracket bracket-br" />

        {/* Card Header: Category Badge */}
        <div className="floating-card-header">
          <div className="floating-cat-badge">
            <span className="cat-pulse-dot" />
            <span>{event.category}</span>
          </div>
        </div>

        {/* Big Glowing Icon Halo */}
        <div className="floating-icon-stage">
          <div className="floating-icon-ambient-ring" />
          <div className="floating-icon-box">
            <EventIcon size={38} className="floating-event-icon" />
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="floating-card-body">
          <h3 className="floating-event-title">{event.title}</h3>
          <p className="floating-event-tagline">{event.tagline}</p>
          <p className="floating-event-desc">{event.description}</p>
        </div>

        {/* Micro-Specs Matrix */}
        <div className="floating-specs-strip">
          <div className="floating-spec-item">
            <Users size={14} className="spec-ico text-cyan" />
            <span>{event.teamSize || 'Individual / Team'}</span>
          </div>
          <div className="floating-spec-divider" />
          <div className="floating-spec-item">
            <MapPin size={14} className="spec-ico text-magenta" />
            <span>{event.venue || 'Campus Arena'}</span>
          </div>
          <div className="floating-spec-divider" />
          <div className="floating-spec-item">
            <Trophy size={14} className="spec-ico text-gold" />
            <span>Awards TBA</span>
          </div>
        </div>

        {/* Action Dock */}
        <div className="floating-actions-dock">
          <button
            className="floating-btn-register"
            onClick={() => {
              sound.playClick();
              onRegister(event);
            }}
          >
            <span>REGISTER FOR THIS ARENA</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="floating-btn-details"
            onClick={() => {
              sound.playClick();
              if (onViewDetails) onViewDetails(event);
            }}
            title="View Full Rules & Details"
            aria-label="View Full Rules"
          >
            <ExternalLink size={15} />
            <span>RULES</span>
          </button>
        </div>
      </div>
    </div>
  );
}
