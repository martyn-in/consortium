import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';

// Unified Professional Signature Theme (Consistent Aqua & Deep Oceanic Sky)
const UNIFIED_THEME = { 
  color: '#00e5ff', 
  bg: '#041026', 
  glow: 'rgba(0, 229, 255, 0.35)' 
};

export default function EventBentoGrid({ events, onOpenDetails }) {
  return (
    <div className="events-pure-grid">
      {events.map((evt, index) => {
        const theme = UNIFIED_THEME;

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
