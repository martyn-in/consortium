import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function EventBentoGrid({ events, onOpenDetails }) {
  return (
    <div className="events-pure-grid">
      {events.map((evt, index) => (
        <motion.div
          key={evt.id}
          className="event-pure-card"
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
          {/* 1% Transparency Glass Media Wrap */}
          <div className="event-pure-media-wrap">
            <img
              src={evt.image}
              alt={evt.title}
              className="event-pure-img"
              loading="lazy"
            />
            <div className="event-pure-glass-scrim" />
          </div>

          {/* Outside View: Clean Event Name Only */}
          <div className="event-pure-content">
            <h3 className="event-pure-title">{evt.title}</h3>
            <div className="event-pure-action-hint">
              <span>VIEW DETAILS</span>
              <ArrowUpRight size={15} className="hint-arrow" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
