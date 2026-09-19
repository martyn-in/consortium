import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, IndianRupee } from 'lucide-react';
import { sound } from '../utils/soundEffects';

// Unified Professional Signature Theme (Consistent Aqua & Deep Oceanic Sky)
const UNIFIED_THEME = { 
  color: '#00e5ff', 
  bg: '#041026', 
  glow: 'rgba(0, 229, 255, 0.35)' 
};

export default function EventBentoGrid({ events, onOpenDetails, onRegister }) {
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.02, margin: '0px 0px -30px 0px' }}
            transition={{
              duration: 0.22,
              delay: Math.min(index * 0.02, 0.1),
              ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => sound.playHover()}
            onClick={() => {
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

            {/* Top Row: Registration Fee Badge (Event count number removed) */}
            {evt.fee && (
              <div className="event-pure-badge-row">
                <div className="event-pure-fee-pill" title={`Registration Fee: ${evt.fee}`}>
                  <IndianRupee size={12} className="fee-rupee-icon" />
                  <span>{evt.fee}</span>
                </div>
              </div>
            )}

            {/* Media Wrap with Solid Color Vignette */}
            <div className="event-pure-media-wrap">
              <img
                src={evt.image}
                alt={evt.title}
                className="event-pure-img"
                loading="lazy"
              />
              <div className="event-pure-color-scrim" />
            </div>

            {/* Card Preview Content: Title & Dual Actions (View Details + Register) */}
            <div className="event-pure-content">
              <h3 className="event-pure-title">{evt.title}</h3>
              
              <div className="event-pure-actions">
                <button
                  type="button"
                  className="event-pure-btn-view"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    onOpenDetails(evt);
                  }}
                  aria-label={`View details for ${evt.title}`}
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight size={14} className="hint-arrow" />
                </button>

                <button
                  type="button"
                  className="event-pure-btn-register"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playSuccess();
                    if (onRegister) {
                      onRegister(evt);
                    } else if (evt.registrationUrl) {
                      window.open(evt.registrationUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  aria-label={`Register for ${evt.title}`}
                >
                  <span>REGISTER</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
