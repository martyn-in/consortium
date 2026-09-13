import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { eventsList } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import './Events.css';

// Authoritative Google Form registration link
const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

export default function Events() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);

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
    <section id="events" className="events-clean-section">
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

        {/* Card Stage: Large Display Card with Navigation Paddles */}
        <div 
          className="events-card-stage"
          onMouseDown={(e) => setDragStartX(e.clientX)}
          onMouseUp={(e) => {
            if (dragStartX !== null) {
              const delta = e.clientX - dragStartX;
              if (delta < -45) handleNext();
              else if (delta > 45) handlePrev();
              setDragStartX(null);
            }
          }}
          onTouchStart={(e) => setDragStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (dragStartX !== null) {
              const delta = e.changedTouches[0].clientX - dragStartX;
              if (delta < -45) handleNext();
              else if (delta > 45) handlePrev();
              setDragStartX(null);
            }
          }}
        >
          {/* Previous Arrow Button */}
          <button 
            className="events-slide-arrow-btn prev"
            onClick={handlePrev}
            aria-label="Previous Event"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Clean Grand Display Card with Laser Aura Border */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeEvent.id}
              className="events-display-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Moving Laser Aura Perimeter Line */}
              <div className="events-card-laser-border" aria-hidden="true"></div>

              {/* Clean Image Container with Zero Overlay Clutter */}
              <div className="events-card-image-wrap">
                <img 
                  src={activeEvent.image} 
                  alt={activeEvent.title} 
                  className="events-card-img" 
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Arrow Button */}
          <button 
            className="events-slide-arrow-btn next"
            onClick={handleNext}
            aria-label="Next Event"
          >
            <ChevronRight size={26} />
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

          {/* Quick Arena Navigation Dots */}
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
