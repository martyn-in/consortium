import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, ArrowUpRight, Building2, 
  FileCheck, Calendar, MapPin, Users, ChevronRight, CheckCircle2, Clock
} from 'lucide-react';
import { paperPresentationDepartments } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import './EventDetailModal.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

const EVENT_MODAL_THEMES = {
  'paper-presentation': { accent: '#3b82f6', bg: '#081329', glow: 'rgba(59, 130, 246, 0.35)' },
  'poster-presentations': { accent: '#10b981', bg: '#052219', glow: 'rgba(16, 185, 129, 0.35)' },
  'project-expo': { accent: '#06b6d4', bg: '#051f28', glow: 'rgba(6, 182, 212, 0.35)' },
  'lan-gaming': { accent: '#8b5cf6', bg: '#191030', glow: 'rgba(139, 92, 246, 0.35)' },
  'photography': { accent: '#f59e0b', bg: '#261805', glow: 'rgba(245, 158, 11, 0.35)' },
  'death-mystery': { accent: '#f43f5e', bg: '#290913', glow: 'rgba(244, 63, 94, 0.35)' },
  'treasure-hunt': { accent: '#6366f1', bg: '#10122e', glow: 'rgba(99, 102, 241, 0.35)' },
  'short-films': { accent: '#ec4899', bg: '#280a1c', glow: 'rgba(236, 72, 153, 0.35)' },
  'flight-simulator': { accent: '#0ea5e9', bg: '#061c2b', glow: 'rgba(14, 165, 233, 0.35)' },
  'bridge-mockup': { accent: '#eab308', bg: '#221903', glow: 'rgba(234, 179, 8, 0.35)' }
};

export default function EventDetailModal({ event, isOpen, onClose }) {
  const [openPaperDept, setOpenPaperDept] = useState('it');

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
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const isPaperPresentation = event.id === 'paper-presentation';
  const modalTheme = EVENT_MODAL_THEMES[event.id] || { 
    accent: '#3b82f6', 
    bg: '#081329', 
    glow: 'rgba(59, 130, 246, 0.35)' 
  };

  const handleRegister = () => {
    sound.playSuccess();
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="event-modal-backdrop" onClick={onClose}>
        <motion.div
          className="event-split-modal-container"
          style={{
            '--modal-accent': modalTheme.accent,
            '--modal-glow': modalTheme.glow,
            '--modal-bg': modalTheme.bg
          }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={`${event.title} Details`}
        >
          {/* Close Button */}
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close details"
          >
            <X size={20} />
          </button>

          {/* ============================================================
              LEFT SIDE: EVENT CARD & NAME
              ============================================================ */}
          <div className="event-split-left">
            <div className="split-left-card">
              <div className="split-left-image-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="split-left-img"
                />
                <div className="split-left-glass-scrim" />
              </div>

              <div className="split-left-content">
                <div className="split-left-meta-top">
                  <span className="split-badge-fest">CONSORTIUM 2026</span>
                </div>

                <h2 className="split-left-title">{event.title}</h2>

                <div className="split-left-meta-list">
                  <div className="split-meta-item">
                    <Calendar size={15} className="split-meta-icon" />
                    <span>October 9 & 10, 2026</span>
                  </div>
                  <div className="split-meta-item">
                    <MapPin size={15} className="split-meta-icon" />
                    <span>IARE Campus, Hyderabad</span>
                  </div>
                  {event.teamSize && (
                    <div className="split-meta-item">
                      <Users size={15} className="split-meta-icon" />
                      <span>{event.teamSize}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="split-left-register-btn"
                  onClick={handleRegister}
                >
                  <span>Register Now</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT SIDE: CONDUCTED BY SO & SO DEPARTMENT AND ALL DETAILS
              ============================================================ */}
          <div className="event-split-right">
            <div className="split-right-scrollable">

              {/* 1. Conducted By Department Banner */}
              {event.department && (
                <div className="split-dept-section">
                  <span className="split-dept-eyebrow">CONDUCTED BY:</span>
                  <div className="split-dept-card">
                    <Building2 size={18} className="split-dept-icon" />
                    <h3 className="split-dept-name">{event.department}</h3>
                  </div>
                </div>
              )}

              {/* 2. Official Event Brief / Overview */}
              <div className="split-detail-block">
                <h4 className="split-block-title">EVENT OVERVIEW</h4>
                <p className="split-block-desc">{event.description}</p>
              </div>

              {/* 3. Official Rules & Guidelines */}
              {event.rules && (
                <div className="split-detail-block">
                  <h4 className="split-block-title">RULES &amp; GUIDELINES</h4>
                  <div className="split-rules-card">
                    <FileCheck size={18} className="split-rules-icon" />
                    <p className="split-rules-text">{event.rules}</p>
                  </div>
                </div>
              )}

              {/* 4. Special Department Research Tracks (For Paper Presentation) */}
              {isPaperPresentation && paperPresentationDepartments && (
                <div className="split-detail-block">
                  <h4 className="split-block-title">OFFICIAL DEPARTMENT RESEARCH TRACKS</h4>
                  <p className="split-paper-sub">Click any department to view approved research themes:</p>

                  <div className="split-paper-tracks-list">
                    {[...paperPresentationDepartments.left, ...paperPresentationDepartments.right].map((dept) => {
                      const isExpanded = openPaperDept === dept.id;

                      return (
                        <div key={dept.id} className={`split-paper-dept-box ${isExpanded ? 'is-active' : ''}`}>
                          <div 
                            className="split-paper-dept-header"
                            onClick={() => {
                              sound.playClick();
                              setOpenPaperDept(isExpanded ? null : dept.id);
                            }}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setOpenPaperDept(isExpanded ? null : dept.id);
                              }
                            }}
                          >
                            <div className="split-paper-dept-title-row">
                              <span className="split-paper-dept-code">{dept.code}</span>
                              <strong className="split-paper-dept-name">{dept.name}</strong>
                            </div>

                            <div className="split-paper-dept-badge-row">
                              {dept.hasOfficialThemes ? (
                                <span className="split-tag-active">THEMES ACTIVE</span>
                              ) : (
                                <span className="split-tag-soon">COMING SOON</span>
                              )}
                              <ChevronRight 
                                size={16} 
                                className={`split-paper-chevron ${isExpanded ? 'is-rotated' : ''}`} 
                              />
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="split-paper-dept-body">
                              {dept.hasOfficialThemes ? (
                                <ul className="split-paper-themes">
                                  {dept.themes.map((theme, i) => (
                                    <li key={i} className="split-theme-item">
                                      <CheckCircle2 size={15} className="split-theme-icon" />
                                      <span>{theme}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <div className="split-paper-pending-box">
                                  <Clock size={16} className="split-pending-icon" />
                                  <span>Official themes are being finalized by faculty jurors. Standard submissions in this domain remain open.</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 5. Bottom Action Buttons */}
              <div className="split-right-footer-actions">
                <button
                  type="button"
                  className="split-btn-back"
                  onClick={() => {
                    sound.playClick();
                    onClose();
                  }}
                >
                  Back to Events
                </button>

                <button
                  type="button"
                  className="split-btn-register-primary"
                  onClick={handleRegister}
                >
                  <span>Register via Official Form</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
