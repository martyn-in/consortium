import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, IndianRupee } from 'lucide-react';
import { sound } from '../utils/soundEffects';

import { useTheme } from '../context/ThemeContext';

// Curated Apple Luxury Finishes (Pacific Blue, Emerald Jade, Desert Amber, Cosmic Violet, Rose Ruby, Alpine Cyan)
const APPLE_LUXURY_THEMES = [
  {
    color: '#0071e3',
    deep: '#003da5',
    pillBg: 'rgba(240, 247, 255, 0.96)',
    pillBorder: 'rgba(0, 113, 227, 0.3)',
    pillText: '#003da5',
    btnBg: 'linear-gradient(135deg, #003da5 0%, #0071e3 100%)',
    glow: 'rgba(0, 113, 227, 0.22)'
  },
  {
    color: '#10b981',
    deep: '#047857',
    pillBg: 'rgba(240, 253, 244, 0.96)',
    pillBorder: 'rgba(16, 185, 129, 0.3)',
    pillText: '#065f46',
    btnBg: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
    glow: 'rgba(16, 185, 129, 0.22)'
  },
  {
    color: '#f59e0b',
    deep: '#b45309',
    pillBg: 'rgba(255, 251, 235, 0.96)',
    pillBorder: 'rgba(245, 158, 11, 0.32)',
    pillText: '#92400e',
    btnBg: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
    glow: 'rgba(245, 158, 11, 0.22)'
  },
  {
    color: '#8b5cf6',
    deep: '#6d28d9',
    pillBg: 'rgba(245, 243, 255, 0.96)',
    pillBorder: 'rgba(124, 58, 237, 0.3)',
    pillText: '#5b21b6',
    btnBg: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
    glow: 'rgba(124, 58, 237, 0.22)'
  },
  {
    color: '#f43f5e',
    deep: '#be123c',
    pillBg: 'rgba(255, 241, 242, 0.96)',
    pillBorder: 'rgba(244, 63, 94, 0.3)',
    pillText: '#9f1239',
    btnBg: 'linear-gradient(135deg, #be123c 0%, #f43f5e 100%)',
    glow: 'rgba(244, 63, 94, 0.22)'
  },
  {
    color: '#06b6d4',
    deep: '#0e7490',
    pillBg: 'rgba(236, 254, 255, 0.96)',
    pillBorder: 'rgba(6, 182, 212, 0.3)',
    pillText: '#155e75',
    btnBg: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)',
    glow: 'rgba(6, 182, 212, 0.22)'
  }
];

const DARK_CONSORTIUM_THEMES = [
  {
    color: '#E5092E',
    deep: '#F5F5F5',
    pillBg: '#141418',
    pillBorder: '#29292D',
    pillText: '#FF1744',
    btnBg: 'linear-gradient(135deg, #8B0018 0%, #E5092E 100%)',
    glow: 'rgba(229, 9, 46, 0.35)'
  },
  {
    color: '#FF1744',
    deep: '#F5F5F5',
    pillBg: '#141418',
    pillBorder: '#29292D',
    pillText: '#F5F5F5',
    btnBg: 'linear-gradient(135deg, #E5092E 0%, #FF1744 100%)',
    glow: 'rgba(255, 23, 68, 0.35)'
  },
  {
    color: '#E5092E',
    deep: '#F5F5F5',
    pillBg: '#141418',
    pillBorder: '#29292D',
    pillText: '#FF1744',
    btnBg: 'linear-gradient(135deg, #8B0018 0%, #E5092E 100%)',
    glow: 'rgba(229, 9, 46, 0.4)'
  },
  {
    color: '#FF1744',
    deep: '#F5F5F5',
    pillBg: '#141418',
    pillBorder: '#29292D',
    pillText: '#F5F5F5',
    btnBg: 'linear-gradient(135deg, #E5092E 0%, #FF1744 100%)',
    glow: 'rgba(229, 9, 46, 0.35)'
  },
  {
    color: '#FF1744',
    deep: '#F5F5F5',
    pillBg: '#141418',
    pillBorder: '#29292D',
    pillText: '#FF1744',
    btnBg: 'linear-gradient(135deg, #8B0018 0%, #FF1744 100%)',
    glow: 'rgba(255, 23, 68, 0.4)'
  },
  {
    color: '#E5092E',
    deep: '#F5F5F5',
    pillBg: '#141418',
    pillBorder: '#29292D',
    pillText: '#B3B3B3',
    btnBg: 'linear-gradient(135deg, #8B0018 0%, #E5092E 100%)',
    glow: 'rgba(229, 9, 46, 0.35)'
  }
];

export default function EventBentoGrid({ events, onOpenDetails, onRegister }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const themeList = isDark ? DARK_CONSORTIUM_THEMES : APPLE_LUXURY_THEMES;
  return (
    <div className="events-pure-grid">
      {events.map((evt, index) => {
        const currentTheme = themeList[index % themeList.length];

        return (
          <motion.div
            key={evt.id}
            className="event-pure-card"
            style={{
              '--evt-color': currentTheme.color,
              '--evt-deep': currentTheme.deep,
              '--evt-pill-bg': currentTheme.pillBg,
              '--evt-pill-border': currentTheme.pillBorder,
              '--evt-pill-text': currentTheme.pillText,
              '--evt-btn-bg': currentTheme.btnBg,
              '--evt-glow': currentTheme.glow
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
                  <span>{evt.fee.replace(/^₹\s*/, '')}</span>
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
                decoding="async"
              />
              <div className="event-pure-color-scrim" />
            </div>

            {/* Card Preview Content: Title & Dual Actions (View Details + Register) */}
            <div className="event-pure-content">
              <div className="event-pure-title-wrap">
                <h3 className="event-pure-title">{evt.title}</h3>
              </div>
              
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
