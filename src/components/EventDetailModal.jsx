import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, Building2, 
  FileCheck, Calendar, MapPin, Users, ChevronRight, CheckCircle2, Clock,
  Award, Sparkles, IndianRupee, ShieldAlert
} from 'lucide-react';
import { paperPresentationDepartments } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import './EventDetailModal.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

const UNIFIED_MODAL_THEME = {
  accent: '#00e5ff',
  accent2: '#0ea5e9',
  bg: 'radial-gradient(circle at 85% 15%, rgba(4, 28, 68, 0.98) 0%, rgba(2, 14, 38, 0.98) 45%, rgba(2, 8, 23, 0.99) 100%)',
  glow: 'rgba(0, 229, 255, 0.35)',
  border: 'rgba(0, 229, 255, 0.3)'
};

const EVENT_MODAL_THEMES = {
  'paper-presentation': { ...UNIFIED_MODAL_THEME, deptCode: 'MULTI-DEPT' },
  'poster-presentations': { ...UNIFIED_MODAL_THEME, deptCode: 'ECE' },
  'project-expo': { ...UNIFIED_MODAL_THEME, deptCode: 'ECE' },
  'lan-gaming': { ...UNIFIED_MODAL_THEME, deptCode: 'IT' },
  'photography': { ...UNIFIED_MODAL_THEME, deptCode: 'CSE' },
  'death-mystery': { ...UNIFIED_MODAL_THEME, deptCode: 'EEE' },
  'treasure-hunt': { ...UNIFIED_MODAL_THEME, deptCode: 'EEE' },
  'short-films': { ...UNIFIED_MODAL_THEME, deptCode: 'CSE' },
  'flight-simulator': { ...UNIFIED_MODAL_THEME, deptCode: 'AERO' },
  'bridge-mockup': { ...UNIFIED_MODAL_THEME, deptCode: 'CIVIL' }
};

export default function EventDetailModal({ event: propEvent, isOpen, onClose, onRegister }) {
  const [cachedEvent, setCachedEvent] = useState(propEvent);

  if (propEvent && propEvent !== cachedEvent) {
    setCachedEvent(propEvent);
  }

  const event = propEvent || cachedEvent;
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

  const isPaperPresentation = event?.id === 'paper-presentation';
  const modalTheme = (event && EVENT_MODAL_THEMES[event.id]) || { 
    ...UNIFIED_MODAL_THEME,
    deptCode: 'C26'
  };

  const handleRegister = () => {
    sound.playSuccess();
    if (event?.registrationUrl) {
      window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
    } else if (onRegister) {
      onRegister(event);
    } else {
      window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && event && (
        <motion.div 
          className="event-modal-backdrop" 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="event-split-modal-container"
            style={{
            '--modal-accent': modalTheme.accent,
            '--modal-accent2': modalTheme.accent2,
            '--modal-glow': modalTheme.glow,
            '--modal-border': modalTheme.border,
            '--modal-bg': modalTheme.bg
          }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label={`${event.title} Details`}
        >
          {/* Cyber Neon Corners */}
          <div className="edm-neon-corner edm-neon-tl" />
          <div className="edm-neon-corner edm-neon-br" />

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
            <X size={19} />
          </button>

          {/* ============================================================
              LEFT SIDE: EVENT CARD & REGISTER
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
                <div className="split-left-badge-tag">
                  <span className="split-tag-dept">{modalTheme.deptCode}</span>
                  <span className="split-tag-fest">CONSORTIUM 2026</span>
                </div>
              </div>

              <div className="split-left-content">
                <div className="split-left-meta-top">
                  <span className="split-meta-number">EVENT {event.number || event.displayNumber || '01'} / 10</span>
                  <span className="split-meta-sep">·</span>
                  <span className="split-meta-type">{event.type || event.category}</span>
                </div>

                <h2 className="split-left-title">
                  {event.title}
                </h2>

                {event.tagline && (
                  <p className="split-left-tagline">{event.tagline}</p>
                )}

                <div className="split-left-meta-list">
                  <div className="split-meta-item">
                    <Calendar size={15} className="split-meta-icon" />
                    <span>October 9 &amp; 10, 2026</span>
                  </div>
                  <div className="split-meta-item">
                    <MapPin size={15} className="split-meta-icon" />
                    <span>{event.venue || 'IARE Campus, Hyderabad'}</span>
                  </div>
                  {event.teamSize && (
                    <div className="split-meta-item">
                      <Users size={15} className="split-meta-icon" />
                      <span>{event.teamSize}</span>
                    </div>
                  )}
                  {event.fee && (
                    <div className="split-meta-item split-meta-fee-item">
                      <IndianRupee size={15} className="split-meta-icon split-meta-fee-icon" />
                      <span className="split-meta-fee-val">{event.fee}</span>
                    </div>
                  )}
                  {event.category && (
                    <div className="split-meta-item">
                      <Award size={15} className="split-meta-icon" />
                      <span>Category: {event.category}</span>
                    </div>
                  )}
                </div>

                {event.feeNote && (
                  <div className="split-left-fee-note">
                    <span className="split-fee-note-badge">NOTE</span>
                    <p className="split-fee-note-text">{event.feeNote}</p>
                  </div>
                )}

                {event.registrationUrl ? (
                  <div className="split-register-action-wrap">
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="split-left-register-btn"
                      onClick={() => sound.playSuccess()}
                    >
                      <span>REGISTER NOW</span>
                      <ArrowRight size={17} />
                    </a>
                    <span className="split-register-subtext">Official Registration Form ↗</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="split-left-register-btn"
                    onClick={handleRegister}
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight size={17} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT SIDE: CONDUCTED BY & ALL DETAILS
              ============================================================ */}
          <div className="event-split-right">
            <div className="split-right-scrollable">

              {/* 1. Conducted By Department Banner */}
              {event.department && (
                <div className="split-dept-section">
                  <span className="split-dept-eyebrow">🏢 CONDUCTED BY:</span>
                  <div className="split-dept-card">
                    <div className="split-dept-icon-box">
                      <Building2 size={20} className="split-dept-icon" />
                    </div>
                    <div className="split-dept-info">
                      <h3 className="split-dept-name">{event.department}</h3>
                      <span className="split-dept-meta">{modalTheme.deptCode} · IARE HYDERABAD</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Official Event Brief / Overview */}
              <div className="split-detail-block">
                <h4 className="split-block-title">📌 EVENT OVERVIEW</h4>
                <div className="split-overview-card">
                  {event.tagline && (
                    <p className="split-overview-tagline">"{event.tagline}"</p>
                  )}
                  <p className="split-block-desc">{event.description}</p>
                </div>
              </div>

              {/* 2.5 Lore / Game Story (e.g. Magic Witch) */}
              {event.gameStory && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">🧙‍♂️ GAME DESCRIPTION &amp; STORY</h4>
                    <span className="split-badge-count">OFFICIAL LORE</span>
                  </div>
                  <div className="split-story-card">
                    <div className="split-story-decor" />
                    <p className="split-story-lead">
                      {event.gameStory}
                    </p>
                  </div>
                </div>
              )}

              {/* 3. Quick Key Highlights Grid */}
              <div className="split-spec-grid">
                <div className="split-spec-card spec-accent">
                  <span className="split-spec-emoji">👥</span>
                  <div className="split-spec-text">
                    <span className="split-spec-label">TEAM FORMAT</span>
                    <span className="split-spec-value">{event.teamSize || 'Open'}</span>
                  </div>
                </div>
                <div className="split-spec-card spec-blue">
                  <span className="split-spec-emoji">📍</span>
                  <div className="split-spec-text">
                    <span className="split-spec-label">CAMPUS VENUE</span>
                    <span className="split-spec-value">IARE Hyderabad</span>
                  </div>
                </div>
                <div className="split-spec-card spec-purple">
                  <span className="split-spec-emoji">{event.fee ? '💳' : '📅'}</span>
                  <div className="split-spec-text">
                    <span className="split-spec-label">{event.fee ? 'REGISTRATION FEE' : 'FEST DATES'}</span>
                    <span className="split-spec-value">{event.fee || 'Oct 9 & 10, 2026'}</span>
                  </div>
                </div>
                <div className="split-spec-card spec-green">
                  <span className="split-spec-emoji">⚡</span>
                  <div className="split-spec-text">
                    <span className="split-spec-label">DOMAIN</span>
                    <span className="split-spec-value">{event.category || 'National Fest'}</span>
                  </div>
                </div>
              </div>

              {/* 3.5 Prominent Fee & Team Pricing Note Banner (e.g. Magic Witch) */}
              {event.feeNote && (
                <div className="split-fee-highlight-card">
                  <div className="split-fee-highlight-icon-box">
                    <IndianRupee size={20} className="split-fee-highlight-icon" />
                  </div>
                  <div className="split-fee-highlight-info">
                    <span className="split-fee-highlight-eyebrow">REGISTRATION &amp; TEAM PRICING</span>
                    <p className="split-fee-highlight-lead">
                      <strong>{event.fee}</strong> &nbsp;—&nbsp; {event.feeNote}
                    </p>
                  </div>
                </div>
              )}

              {/* 4. Structured Guidelines List (e.g. Short Films, Photography) */}
              {event.guidelinesList && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">📋 OFFICIAL GUIDELINES</h4>
                    <span className="split-badge-count">{event.guidelinesList.length} CLAUSES</span>
                  </div>
                  <div className="split-guidelines-grid">
                    {event.guidelinesList.map((g, idx) => (
                      <div key={idx} className="split-guideline-card">
                        <span className="split-guideline-label">{g.label}</span>
                        <p className="split-guideline-detail">{g.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4.5 Judging Criteria (e.g. Short Films, Photography) */}
              {event.judgingCriteria && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">🏆 JUDGING CRITERIA</h4>
                    <span className="split-badge-count">OFFICIAL RUBRIC</span>
                  </div>
                  <div className="split-criteria-grid">
                    {event.judgingCriteria.map((crit, idx) => (
                      <div key={idx} className="split-criteria-card">
                        <span className="split-criteria-num">0{idx + 1}</span>
                        <span className="split-criteria-text">{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4.6 Numbered Rules (e.g. LAN Gaming 15 Rules) */}
              {event.numberedRules && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">📜 RULES &amp; REGULATIONS</h4>
                    <span className="split-badge-count">{event.numberedRules.length} MANDATORY RULES</span>
                  </div>
                  <div className="split-numbered-rules-card">
                    <ol className="split-numbered-rules-list">
                      {event.numberedRules.map((rule, idx) => (
                        <li key={idx} className="split-numbered-rule-item">
                          <span className="split-rule-idx">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                          <span className="split-rule-text">{rule}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* 4.7 Categorized Rule Sections (e.g. Magic Witch 7 Sections) */}
              {event.ruleSections && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">📜 RULES &amp; REGULATIONS</h4>
                    <span className="split-badge-count">{event.ruleSections.length} CATEGORIES</span>
                  </div>
                  <div className="split-rule-sections-list">
                    {event.ruleSections.map((sec, idx) => (
                      <div 
                        key={idx} 
                        className={`split-rule-section-card ${sec.isDisqualification ? 'is-disqualification-section' : ''}`}
                      >
                        <div className="split-rule-sec-header">
                          {sec.isDisqualification ? (
                            <ShieldAlert size={18} className="split-rule-sec-icon icon-danger" />
                          ) : (
                            <CheckCircle2 size={18} className="split-rule-sec-icon" />
                          )}
                          <span className="split-rule-sec-title">{sec.title}</span>
                        </div>
                        <ul className="split-rule-sec-points">
                          {sec.points.map((pt, pIdx) => (
                            <li key={pIdx} className="split-sec-point">
                              <span className="split-sec-bullet">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4.8 General Instructions (e.g. Short Films) */}
              {event.generalInstructions && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">⚠️ GENERAL INSTRUCTIONS</h4>
                    <span className="split-badge-count">DISCIPLINE &amp; ETHICS</span>
                  </div>
                  <div className="split-instructions-card">
                    <ul className="split-instructions-list">
                      {event.generalInstructions.map((inst, idx) => (
                        <li key={idx} className="split-instruction-item">
                          <CheckCircle2 size={16} className="split-instruction-icon" />
                          <span>{inst}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 4.9 Fallback Standard Rules & Guidelines */}
              {event.rules && !event.numberedRules && !event.ruleSections && !event.guidelinesList && (
                <div className="split-detail-block">
                  <h4 className="split-block-title">📜 RULES &amp; GUIDELINES</h4>
                  <div className="split-rules-card">
                    <div className="split-rules-icon-box">
                      <FileCheck size={20} className="split-rules-icon" />
                    </div>
                    <div className="split-rules-content">
                      <p className="split-rules-text">{event.rules}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Special Department Research Tracks (For Paper Presentation) */}
              {isPaperPresentation && paperPresentationDepartments && (
                <div className="split-detail-block">
                  <div className="split-title-with-badge">
                    <h4 className="split-block-title">🔬 OFFICIAL DEPARTMENT RESEARCH TRACKS</h4>
                    <span className="split-badge-count">INTER-DEPARTMENTAL</span>
                  </div>
                  <p className="split-paper-sub">Select any engineering department to view approved research themes:</p>

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
                                      <CheckCircle2 size={16} className="split-theme-icon" />
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

              {/* 6. Jury & Fair Play Note */}
              <div className="split-detail-block">
                <div className="split-note-panel">
                  <div className="split-note-header">
                    <Sparkles size={17} className="split-note-icon" />
                    <span className="split-note-label">FACULTY JURY &amp; FAIR PLAY NOTE</span>
                  </div>
                  <p className="split-note-text">
                    "Participants are expected to uphold the highest standards of academic integrity and festival sportsmanship. Decisions rendered by the evaluation jury are final and binding."
                  </p>
                </div>
              </div>

              {/* 7. Bottom Action Buttons */}
              <div className="split-right-footer-actions">
                <button
                  type="button"
                  className="split-btn-back"
                  onClick={() => {
                    sound.playClick();
                    onClose();
                  }}
                >
                  ← Back to Events
                </button>

                {event.registrationUrl ? (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="split-btn-register-primary"
                    onClick={() => sound.playSuccess()}
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="split-btn-register-primary"
                    onClick={handleRegister}
                  >
                    <span>Register via Official Form</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

            </div>
          </div>

        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
  );
}
