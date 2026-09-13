import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Trophy, Users, MapPin, Calendar, 
  FileCheck, Shield, ArrowRight, Sparkles 
} from 'lucide-react';
import { sound } from '../utils/soundEffects';
import './EventDetailModal.css';

export default function EventDetailModal({ 
  event, 
  isOpen, 
  onClose, 
  onRegister 
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const EventIcon = event.icon || Sparkles;

  return (
    <AnimatePresence>
      <div className="event-modal-backdrop" onClick={onClose}>
        <motion.div
          className="event-modal-container aura-glow-border"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Neon Corner Accents */}
          <div className="modal-corner-tl" />
          <div className="modal-corner-br" />

          {/* Close Button */}
          <button 
            className="modal-close-btn" 
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Arena Visual Artwork Banner */}
          {event.image && (
            <div className="modal-hero-artwork-wrap">
              <img src={event.image} alt={event.title} className="modal-hero-artwork-img" />
              <div className="modal-hero-artwork-gradient" />
            </div>
          )}

          {/* Modal Header */}
          <div className="modal-header-block">
            <div className="modal-icon-badge">
              <EventIcon size={34} className="text-cyan" />
            </div>
            <div className="modal-header-text">
              <div className="modal-badge-row">
                <span className="modal-cat-pill">{event.category}</span>
                <span className="modal-order-tag">Catalog #{event.sourceOrder}</span>
              </div>
              <h2 className="modal-event-title">{event.title}</h2>
              <p className="modal-event-tagline">{event.tagline}</p>
            </div>
          </div>

          {/* Modal Body Grid */}
          <div className="modal-body-scroll">
            {/* Overview */}
            <div className="modal-section">
              <h4 className="modal-section-title">OVERVIEW & OBJECTIVE</h4>
              <p className="modal-desc-text">{event.description}</p>
            </div>

            {/* Specifications Matrix */}
            <div className="modal-specs-grid">
              <div className="spec-card">
                <Users size={16} className="text-cyan" />
                <div className="spec-info">
                  <span className="spec-label">TEAM STRUCTURE</span>
                  <span className="spec-val">{event.teamSize || 'To be announced'}</span>
                </div>
              </div>

              <div className="spec-card">
                <MapPin size={16} className="text-magenta" />
                <div className="spec-info">
                  <span className="spec-label">VENUE / LOCATION</span>
                  <span className="spec-val">{event.venue || 'Venue details coming soon'}</span>
                </div>
              </div>

              <div className="spec-card">
                <Trophy size={16} className="text-gold" />
                <div className="spec-info">
                  <span className="spec-label">AWARDS & PRIZES</span>
                  <span className="spec-val">Prize details coming soon</span>
                </div>
              </div>

              <div className="spec-card">
                <Calendar size={16} className="text-cyan" />
                <div className="spec-info">
                  <span className="spec-label">SESSION SCHEDULE</span>
                  <span className="spec-val">Schedule to be announced</span>
                </div>
              </div>
            </div>

            {/* Rules & Guidelines */}
            <div className="modal-section">
              <h4 className="modal-section-title">RULES & CRITERIA</h4>
              <div className="modal-rules-box">
                <FileCheck size={18} className="text-cyan flex-shrink-0" />
                <p>{event.rules || 'Official tournament and challenge rulebook will be published prior to festival commencement.'}</p>
              </div>
            </div>

            {/* Notice / Status */}
            <div className="modal-notice-box">
              <Shield size={16} className="text-cyan flex-shrink-0" />
              <span>
                Event guidelines are subject to coordinator review. Registrations are operating in preview mode.
              </span>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="modal-footer-bar">
            <button
              className="modal-btn-cancel"
              onClick={onClose}
            >
              Back to Catalog
            </button>
            <button
              className="modal-btn-register"
              onClick={() => {
                sound.playSuccess();
                onClose();
                onRegister(event);
              }}
            >
              <span>REGISTER FOR THIS EVENT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
