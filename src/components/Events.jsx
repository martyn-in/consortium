import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { eventsList } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import './Events.css';

// Authoritative Google Form registration link
const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

const getCardOffset = (index, activeIndex, total) => {
  let diff = index - activeIndex;
  while (diff > total / 2) diff -= total;
  while (diff < -total / 2) diff += total;
  return diff;
};

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const count = eventsList.length;
  const activeEvent = eventsList[activeIndex] || eventsList[0];

  const handleNext = useCallback(() => {
    sound.playClick();
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const handlePrev = useCallback(() => {
    sound.playClick();
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Auto-scroll: advance cards smoothly every 3.9s unless paused (on hover or touch/drag)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, 3900);

    return () => clearInterval(timer);
  }, [isPaused, count]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  if (!activeEvent) return null;

  return (
    <section 
      id="events" 
      className="events-clean-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Electric Lightning Displacement Filter for authentic crackling plasma arcs */}
      <svg className="lightning-filter-svg" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="electric-lightning-displacement" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.9" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" dur="0.1s" values="0.04 0.9; 0.08 0.75; 0.03 0.95; 0.07 0.85; 0.04 0.9" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="events-clean-container">
        
        {/* Above Card: Huge Event Name & Tagline */}
        <div className="events-name-header">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="events-name-inner"
            >
              <div className="events-arena-kicker-row">
                <span className="events-arena-code-chip">{activeEvent.eventCode || activeEvent.arenaCode || `EVENT #0${activeEvent.sourceOrder} // 10`}</span>
                <span className="events-arena-kicker-sep">◆</span>
                <span className="events-arena-cat-chip">{activeEvent.category}</span>
              </div>
              <h2 className="events-arena-name">
                {activeEvent.title}
              </h2>
              {activeEvent.tagline && (
                <p className="events-arena-tagline">
                  {activeEvent.tagline}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Stage: Glassmorphism 3D Peeking Carousel Stage */}
        <div 
          className="events-card-stage"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={(e) => {
            setIsPaused(true);
            setDragStartX(e.clientX);
          }}
          onMouseUp={(e) => {
            if (dragStartX !== null) {
              const delta = e.clientX - dragStartX;
              if (delta < -40) handleNext();
              else if (delta > 40) handlePrev();
              setDragStartX(null);
            }
          }}
          onTouchStart={(e) => {
            setIsPaused(true);
            setDragStartX(e.touches[0].clientX);
          }}
          onTouchEnd={(e) => {
            if (dragStartX !== null) {
              const delta = e.changedTouches[0].clientX - dragStartX;
              if (delta < -40) handleNext();
              else if (delta > 40) handlePrev();
              setDragStartX(null);
            }
            setIsPaused(false);
          }}
        >
          {/* Previous Arrow Button */}
          <button 
            className="events-slide-arrow-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Event"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Viewport with Peeking Cards */}
          <div className="events-carousel-viewport">
            {eventsList.map((evt, idx) => {
              const diff = getCardOffset(idx, activeIndex, count);
              const isCenter = diff === 0;
              const isPrev = diff === -1;
              const isNext = diff === 1;
              const isVisible = Math.abs(diff) <= 1;
              const isNear = Math.abs(diff) <= 2;

              if (!isNear) return null;

              return (
                <motion.div 
                  key={evt.id}
                  className={`events-glass-card ${isCenter ? 'is-active' : ''} ${isPrev ? 'is-prev' : ''} ${isNext ? 'is-next' : ''}`}
                  initial={false}
                  animate={{
                    x: diff === 0 ? '0%' : diff === -1 ? '-78%' : diff === 1 ? '78%' : diff < 0 ? '-140%' : '140%',
                    scale: diff === 0 ? 1 : 0.84,
                    opacity: diff === 0 ? 1 : isVisible ? 0.45 : 0,
                    zIndex: diff === 0 ? 10 : isVisible ? 4 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8
                  }}
                  onClick={() => {
                    if (isPrev) handlePrev();
                    if (isNext) handleNext();
                  }}
                >
                  {/* 360° Moving Electric Lightning Border — Strictly On Border, Zero Outside Bleed, Zero Inside Bleed */}
                  {isVisible && (
                    <div 
                      className={`events-card-lightning-border ${isCenter ? 'is-active-lightning' : 'is-side-lightning'}`} 
                      aria-hidden="true"
                    >
                      {/* High-Voltage Electric Rail */}
                      <div className="lightning-rail" />

                      {/* Primary Moving Lightning Bolt Stream */}
                      <div className="lightning-bolt-track">
                        <div className="lightning-plasma-rotor" />
                      </div>

                      {/* Electric Counter-Current Spark Arcs */}
                      <div className="lightning-spark-arcs">
                        <div className="lightning-plasma-rotor reverse" />
                      </div>
                    </div>
                  )}

                  {/* Real Photographic Background with Cinematic Obsidian Gradient Plate */}
                  {evt.image && (
                    <div className="events-card-photo-layer" aria-hidden="true">
                      <img 
                        src={evt.image} 
                        alt={evt.title} 
                        className="events-card-photo-img" 
                        loading="lazy" 
                      />
                      <div className="events-card-photo-gradient" />
                    </div>
                  )}

                  {/* Specular Top Glass Sheen */}
                  <div className="events-glass-sheen" aria-hidden="true"></div>

                  {/* Realistic Content & High-Contrast Typography */}
                  <div className="events-card-text-body">
                    {/* Header Row: Code & Category */}
                    <div className="events-textcard-header">
                      <span className="events-textcard-code">{evt.eventCode || evt.arenaCode || `EVENT #0${evt.sourceOrder} // 10`}</span>
                      <span className="events-textcard-cat">{evt.category}</span>
                    </div>

                    {/* Middle Block: Glowing Icon Shell & Large Title */}
                    <div className="events-textcard-hero">
                      {evt.icon && (
                        <div className="events-textcard-icon-shell">
                          <evt.icon size={28} className="events-textcard-icon" />
                        </div>
                      )}
                      <div className="events-textcard-title-group">
                        <h3 className="events-textcard-title">{evt.title}</h3>
                        <p className="events-textcard-tagline">{evt.tagline}</p>
                      </div>
                    </div>

                    {/* High-Impact Realistic Description */}
                    <p className="events-textcard-desc">{evt.description}</p>

                    {/* Authentic Spec Tags */}
                    {evt.cyberTags && (
                      <div className="events-textcard-tags-row">
                        {evt.cyberTags.slice(0, 4).map((tag) => (
                          <span key={tag} className="events-textcard-tag">{tag}</span>
                        ))}
                      </div>
                    )}

                    {/* Event Telemetry Metadata Specs */}
                    <div className="events-textcard-specs-row">
                      <div className="events-textcard-spec">
                        <span className="spec-label">TEAM:</span>
                        <span className="spec-val">{evt.teamSize || 'Individual / Team'}</span>
                      </div>
                      <div className="events-textcard-spec">
                        <span className="spec-label">VENUE:</span>
                        <span className="spec-val">{evt.venue || 'IARE Campus'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button 
            className="events-slide-arrow-btn next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Event"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Below Card: Single Primary Register CTA & Navigation Dots */}
        <div className="events-bottom-actions">
          {/* Prominent Glowing Register Button */}
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="events-register-cta-btn"
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={20} />
          </a>

          <span className="events-gform-subnote">
            Official Registration via Google Forms
          </span>

          {/* Quick Event Navigation Dots */}
          <div className="events-dots-row">
            {eventsList.map((evt, idx) => (
              <button
                key={evt.id}
                className={`events-dot-indicator ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  sound.playHover();
                  setActiveIndex(idx);
                }}
                aria-label={`Jump to ${evt.title}`}
                title={evt.title}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
