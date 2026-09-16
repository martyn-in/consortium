import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, MapPin, Calendar, ArrowRight, 
  Sparkles, ExternalLink, Info 
} from 'lucide-react';
import { eventsList, categories } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import EventDetailModal from './EventDetailModal';
import './Events.css';

// Authoritative Google Form registration link
const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'All Events') return eventsList;
    return eventsList.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenModal = (event) => {
    sound.playClick();
    setActiveModalEvent(event);
  };

  const handleCloseModal = () => {
    setActiveModalEvent(null);
  };

  const handleRegister = () => {
    sound.playClick();
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="events" className="events-boxes-section">
      <div className="events-boxes-container">

        {/* Section Header */}
        <div className="events-section-header">
          <div className="events-header-kicker-chip">
            <span className="events-kicker-spark">✦</span>
            <span>10 FLAGSHIP NATIONAL ARENAS</span>
            <span className="events-kicker-spark">✦</span>
          </div>

          <h2 className="events-main-heading">
            EXPLORE <span className="events-title-brush">ARENAS</span>
          </h2>

          <p className="events-sub-copy">
            Battle, innovate, and conquer across 10 official competitive domains at Consortium 2026.
          </p>

          {/* Responsive Category Filter Chips */}
          <div className="events-filter-bar-wrap">
            <div className="events-filter-bar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All Events' 
                  ? eventsList.length 
                  : eventsList.filter((e) => e.category === cat).length;

                return (
                  <button
                    key={cat}
                    className={`events-filter-pill ${isActive ? 'is-active' : ''}`}
                    onClick={() => {
                      sound.playClick();
                      setSelectedCategory(cat);
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <span>{cat}</span>
                    <span className="filter-count-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Responsive Events Grid (3 per row on desktop, 2 per row on tablet, 1 on mobile) */}
        <motion.div 
          className="events-boxes-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt, index) => {
              const EventIcon = evt.icon || Sparkles;

              return (
                <motion.div
                  key={evt.id}
                  className="event-box-card aura-glow-border"
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.35, 
                    delay: Math.min(index * 0.05, 0.3),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onMouseEnter={() => sound.playHover()}
                >
                  {/* Top Image Banner with Floating HUD Badges */}
                  <div 
                    className="event-box-media-wrap"
                    onClick={() => handleOpenModal(evt)}
                  >
                    {evt.image && (
                      <img 
                        src={evt.image} 
                        alt={evt.title} 
                        className="event-box-img" 
                        loading="lazy" 
                      />
                    )}
                    <div className="event-box-scrim" />

                    {/* Top Chips */}
                    <div className="event-box-top-chips">
                      <span className="event-box-code-chip">
                        {evt.eventCode || `EVENT #0${evt.sourceOrder}`}
                      </span>
                      <span className="event-box-cat-chip">
                        {evt.category}
                      </span>
                    </div>

                    {/* Floating Icon Orb */}
                    <div className="event-box-icon-orb">
                      <EventIcon size={20} className="text-cyan" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="event-box-content">
                    {/* Title & Tagline */}
                    <div className="event-box-title-group" onClick={() => handleOpenModal(evt)}>
                      <h3 className="event-box-title">{evt.title}</h3>
                      <p className="event-box-tagline">{evt.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="event-box-desc">{evt.description}</p>

                    {/* Cyber Spec Tags */}
                    {evt.cyberTags && evt.cyberTags.length > 0 && (
                      <div className="event-box-tags-row">
                        {evt.cyberTags.slice(0, 3).map((tag) => (
                          <span key={tag} className="event-box-tag-pill">{tag}</span>
                        ))}
                      </div>
                    )}

                    {/* Telemetry Specs Row */}
                    <div className="event-box-specs-bar">
                      <div className="event-box-spec-item" title="Team Structure">
                        <Users size={14} className="spec-icon text-cyan" />
                        <span>{evt.teamSize || 'Open'}</span>
                      </div>
                      <span className="event-spec-dot">•</span>
                      <div className="event-box-spec-item" title="Venue">
                        <MapPin size={14} className="spec-icon text-magenta" />
                        <span>{evt.venue ? evt.venue.split('/')[0].trim() : 'IARE'}</span>
                      </div>
                      <span className="event-spec-dot">•</span>
                      <div className="event-box-spec-item" title="Date">
                        <Calendar size={14} className="spec-icon text-cyan" />
                        <span>Oct 09-10</span>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="event-box-actions-row">
                      <button
                        type="button"
                        className="event-box-btn-details"
                        onClick={() => handleOpenModal(evt)}
                        aria-label={`View rules and info for ${evt.title}`}
                      >
                        <Info size={15} />
                        <span>DETAILS</span>
                      </button>

                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="event-box-btn-register"
                        onClick={() => sound.playClick()}
                        aria-label={`Register for ${evt.title}`}
                      >
                        <span>REGISTER</span>
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global Bottom Register Banner */}
        <div className="events-grid-bottom-bar">
          <div className="events-grid-bottom-info">
            <span className="events-bottom-pulse-dot">●</span>
            <span>All 10 events accept inter-college registrations. Early registration grants fast-track campus access.</span>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="events-grid-master-register-btn"
            onClick={() => sound.playClick()}
          >
            <span>OFFICIAL GOOGLE FORM REGISTRATION</span>
            <ExternalLink size={17} />
          </a>
        </div>

      </div>

      {/* Detail Rulebook Modal */}
      {activeModalEvent && (
        <EventDetailModal
          event={activeModalEvent}
          isOpen={Boolean(activeModalEvent)}
          onClose={handleCloseModal}
          onRegister={handleRegister}
        />
      )}
    </section>
  );
}
