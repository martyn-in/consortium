import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

export default function EventArenaCard({
  event,
  isActive = false,
  isSide = false,
  _sidePosition = 0,
  onSelect,
  onOpenDetails,
  onRegister
}) {
  const cardRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();
  }, []);

  // MotionValues for performant GPU tilt without triggering re-renders
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for natural dampening
  const springConfig = { stiffness: 180, damping: 22, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotate between -4deg and +4deg
  const rotateX = useTransform(smoothMouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-4, 4]);

  // Image counter-parallax
  const imageX = useTransform(smoothMouseX, [0, 1], [10, -10]);
  const imageY = useTransform(smoothMouseY, [0, 1], [10, -10]);

  // Spotlight position inside card
  const spotX = useTransform(smoothMouseX, [0, 1], ['0%', '100%']);
  const spotY = useTransform(smoothMouseY, [0, 1], ['0%', '100%']);

  const handleMouseMove = useCallback((e) => {
    if (isTouchDevice || !cardRef.current || !isActive) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(Math.max(0, Math.min(1, x)));
    mouseY.set(Math.max(0, Math.min(1, y)));
  }, [isTouchDevice, isActive, mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [isTouchDevice, mouseX, mouseY]);

  const handleCardClick = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    
    if (!isActive && onSelect) {
      sound.playClick();
      onSelect(event);
    } else if (isActive && onOpenDetails) {
      sound.playClick();
      onOpenDetails(event);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`arena-card ${isActive ? 'is-active' : ''} ${isSide ? 'is-side' : ''}`}
      style={{
        rotateX: isTouchDevice ? 0 : rotateX,
        rotateY: isTouchDevice ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      whileHover={isActive && !isTouchDevice ? { scale: 1.01 } : {}}
      role="article"
      aria-label={`${event.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (!isActive && onSelect) onSelect(event);
          else if (onOpenDetails) onOpenDetails(event);
        }
      }}
    >
      {/* 1. Dynamic Cursor-Follow Aura Border Glow */}
      <motion.div
        className="arena-card-aura-border"
        style={{
          '--spot-x': spotX,
          '--spot-y': spotY
        }}
      />

      {/* 2. Inner Frame with 3D Depth */}
      <div className="arena-card-inner">
        {/* Full-bleed Event Visual Image with Counter-Parallax */}
        <div className="arena-card-image-wrap">
          <motion.img
            src={event.image}
            alt={event.title}
            className="arena-card-image"
            style={{
              x: isTouchDevice ? 0 : imageX,
              y: isTouchDevice ? 0 : imageY,
              scale: isActive ? 1.04 : 1.0
            }}
            loading="lazy"
          />
          {/* Subtle bottom-only vignette for clean text legibility without blocking the photo */}
          <div className="arena-card-subtle-vignette" />
        </div>

        {/* Bottom Content: Focused Purely on Event Name & Sleek Actions */}
        <div className="arena-card-content arena-card-content-minimal">
          <div className="arena-card-title-lockup">
            <h3 className="arena-card-title">{event.title}</h3>
            {event.department && (
              <span className="arena-card-dept-tag">
                Conducted by {event.department}
              </span>
            )}
          </div>

          {/* Action CTAs */}
          <div className="arena-card-actions">
            <button
              type="button"
              className="arena-btn-details"
              onClick={(e) => {
                e.stopPropagation();
                sound.playClick();
                onOpenDetails(event);
              }}
              aria-label={`View full details for ${event.title}`}
            >
              <span>VIEW DETAILS</span>
              <ExternalLink size={14} className="action-ico" />
            </button>

            {event.registrationEnabled && (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="arena-btn-register"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  if (onRegister) onRegister(event);
                }}
                aria-label={`Register for ${event.title}`}
              >
                <span>REGISTER</span>
                <ArrowRight size={14} className="action-ico" />
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Edge Light Spotlight */}
        <motion.div
          className="arena-card-spotlight"
          style={{
            '--spot-x': spotX,
            '--spot-y': spotY
          }}
        />
      </div>
    </motion.div>
  );
}
