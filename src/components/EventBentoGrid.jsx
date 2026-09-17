import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';

// Curated Luxury Color Palettes for each event (Zero Glassmorphism & High Vibrancy)
const EVENT_THEMES = {
  'paper-presentation': { color: '#3b82f6', bg: '#081329', glow: 'rgba(59, 130, 246, 0.45)' },
  'poster-presentations': { color: '#10b981', bg: '#052219', glow: 'rgba(16, 185, 129, 0.45)' },
  'project-expo': { color: '#06b6d4', bg: '#051f28', glow: 'rgba(6, 182, 212, 0.45)' },
  'lan-gaming': { color: '#8b5cf6', bg: '#191030', glow: 'rgba(139, 92, 246, 0.45)' },
  'photography': { color: '#f59e0b', bg: '#261805', glow: 'rgba(245, 158, 11, 0.45)' },
  'death-mystery': { color: '#f43f5e', bg: '#290913', glow: 'rgba(244, 63, 94, 0.45)' },
  'treasure-hunt': { color: '#6366f1', bg: '#10122e', glow: 'rgba(99, 102, 241, 0.45)' },
  'short-films': { color: '#ec4899', bg: '#280a1c', glow: 'rgba(236, 72, 153, 0.45)' },
  'flight-simulator': { color: '#0ea5e9', bg: '#061c2b', glow: 'rgba(14, 165, 233, 0.45)' },
  'bridge-mockup': { color: '#eab308', bg: '#221903', glow: 'rgba(234, 179, 8, 0.45)' }
};

export default function EventBentoGrid({ events, onOpenDetails }) {
  return (
    <div className="events-pure-grid">
      {events.map((evt, index) => {
        const theme = EVENT_THEMES[evt.id] || { 
          color: '#3b82f6', 
          bg: '#081329', 
          glow: 'rgba(59, 130, 246, 0.45)' 
        };

        return (
          <motion.div
            key={evt.id}
            className="event-pure-card"
            style={{
              '--evt-color': theme.color,
              '--evt-bg': theme.bg,
              '--evt-glow': theme.glow
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.35,
              delay: index * 0.03,
              ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => sound.playHover()}
            onClick={() => {
              sound.playClick();
              onOpenDetails(evt);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenDetails(evt);
              }
            }}
          >
            {/* Top Color Accent Line */}
            <div className="event-color-top-bar" />

            {/* Media Wrap with Solid Color Vignette (No Glassmorphism) */}
            <div className="event-pure-media-wrap">
              <img
                src={evt.image}
                alt={evt.title}
                className="event-pure-img"
                loading="lazy"
              />
              <div className="event-pure-color-scrim" />
            </div>

            {/* Outside View: Clean Event Name & Colored Action Callout */}
            <div className="event-pure-content">
              <h3 className="event-pure-title">{evt.title}</h3>
              <div className="event-pure-action-hint">
                <span>VIEW DETAILS</span>
                <ArrowUpRight size={15} className="hint-arrow" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
