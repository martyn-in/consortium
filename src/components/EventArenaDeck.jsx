import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EventArenaCard from './EventArenaCard';
import { sound } from '../utils/soundEffects';

export default function EventArenaDeck({
  events,
  activeIndex,
  onIndexChange,
  onOpenDetails,
  onRegister
}) {
  const containerRef = useRef(null);

  const total = events.length;

  const handlePrev = useCallback(() => {
    sound.playClick();
    onIndexChange((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [onIndexChange, total]);

  const handleNext = useCallback(() => {
    sound.playClick();
    onIndexChange((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [onIndexChange, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Handle Drag Gesture
  const handleDragEnd = (event, info) => {
    const offsetThreshold = 60;
    const velocityThreshold = 250;

    if (info.offset.x < -offsetThreshold || info.velocity.x < -velocityThreshold) {
      handleNext();
    } else if (info.offset.x > offsetThreshold || info.velocity.x > velocityThreshold) {
      handlePrev();
    }
  };

  // Compute active event & progress percentage
  const activeEvent = events[activeIndex] || events[0];
  const progressPercent = ((activeIndex + 1) / total) * 100;

  return (
    <div className="arena-deck-wrapper" ref={containerRef}>
      {/* 1. Interactive Cinematic Deck Stage */}
      <div className="arena-deck-stage">
        {/* Navigation Arrow Left */}
        <button
          type="button"
          className="deck-nav-btn deck-nav-prev"
          onClick={handlePrev}
          aria-label="Previous Event"
          title="Previous Event (Left Arrow)"
        >
          <ChevronLeft size={24} />
        </button>

        {/* 3D Horizon Deck Viewport with Drag Support */}
        <motion.div
          className="arena-deck-viewport"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <div className="arena-deck-cards-track">
            {events.map((evt, idx) => {
              // Calculate relative distance from active index with circular wrap option
              let diff = idx - activeIndex;

              // Only render cards within visual range [-2, +2] for optimal performance
              const isVisible = Math.abs(diff) <= 2;
              if (!isVisible) return null;

              const isActive = diff === 0;

              // Perspective 3D coordinates based on position
              let xOffset = '-50%';
              let scale = 1;
              let opacity = 1;
              let rotateY = 0;
              let zIndex = 10;

              if (diff === 0) {
                // Active Card - Centered exactly horizontally and vertically
                xOffset = '-50%';
                scale = 1;
                opacity = 1;
                rotateY = 0;
                zIndex = 20;
              } else if (diff === -1) {
                // Left Side Card
                xOffset = '-118%';
                scale = 0.88;
                opacity = 0.55;
                rotateY = 10;
                zIndex = 10;
              } else if (diff === 1) {
                // Right Side Card
                xOffset = '18%';
                scale = 0.88;
                opacity = 0.55;
                rotateY = -10;
                zIndex = 10;
              } else if (diff === -2) {
                // Outer Left Card
                xOffset = '-180%';
                scale = 0.76;
                opacity = 0.15;
                rotateY = 16;
                zIndex = 5;
              } else if (diff === 2) {
                // Outer Right Card
                xOffset = '80%';
                scale = 0.76;
                opacity = 0.15;
                rotateY = -16;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={evt.id}
                  className={`arena-deck-slot ${isActive ? 'slot-active' : 'slot-side'}`}
                  initial={false}
                  animate={{
                    x: xOffset,
                    y: '-50%',
                    scale: scale,
                    opacity: opacity,
                    rotateY: rotateY,
                    zIndex: zIndex
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                    mass: 0.8
                  }}
                  onClick={() => {
                    if (!isActive) {
                      sound.playClick();
                      onIndexChange(idx);
                    }
                  }}
                >
                  <EventArenaCard
                    event={evt}
                    isActive={isActive}
                    isSide={!isActive}
                    sidePosition={diff}
                    onSelect={() => onIndexChange(idx)}
                    onOpenDetails={onOpenDetails}
                    onRegister={onRegister}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation Arrow Right */}
        <button
          type="button"
          className="deck-nav-btn deck-nav-next"
          onClick={handleNext}
          aria-label="Next Event"
          title="Next Event (Right Arrow)"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* 2. Position Indicator & Progress Bar: 03 ━━━━━━━━━ 10 */}
      <div className="arena-deck-telemetry-bar">
        <div className="deck-position-cluster">
          <span className="deck-current-num">{activeEvent.number}</span>
          <div className="deck-progress-track">
            <motion.div
              className="deck-progress-fill"
              initial={false}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="deck-total-num">{String(total).padStart(2, '0')}</span>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="deck-swipe-hint">
          <span className="swipe-dot">●</span>
          <span>SWIPE OR USE ARROWS TO NAVIGATE EVENTS</span>
        </div>
      </div>
    </div>
  );
}
