import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, CheckCircle2, Clock, 
  ChevronRight, Building2, FileCheck 
} from 'lucide-react';
import { paperPresentationDepartments } from '../data/eventsData';
import { sound } from '../utils/soundEffects';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

export default function PaperPresentationModal({ isOpen, onClose, onRegister }) {
  // Start with 'aero' open by default, user can click any department to toggle
  const [openDeptId, setOpenDeptId] = useState('aero');

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

  if (!isOpen) return null;

  const toggleDept = (deptId) => {
    sound.playClick();
    setOpenDeptId((prev) => (prev === deptId ? null : deptId));
  };

  const renderDeptCard = (dept) => {
    const isExpanded = openDeptId === dept.id;

    return (
      <div
        key={dept.id}
        className={`paper-dept-card ${isExpanded ? 'is-expanded' : ''}`}
      >
        {/* Clickable Header that opens / collapses details */}
        <div
          className="dept-card-header"
          onClick={() => toggleDept(dept.id)}
          onMouseEnter={() => sound.playHover()}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleDept(dept.id);
            }
          }}
        >
          <div className="dept-card-header-left">
            <span className="dept-code-tag">{dept.code}</span>
            <h4 className="dept-name">{dept.name}</h4>
          </div>

          <div className="dept-card-header-right">
            {dept.hasOfficialThemes ? (
              <span className="dept-status-live">THEMES ACTIVE</span>
            ) : (
              <span className="dept-status-soon">COMING SOON</span>
            )}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="dept-chevron-wrap"
            >
              <ChevronRight size={16} />
            </motion.div>
          </div>
        </div>

        {/* Expandable Details Accordion directly inside each department */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="dept-details"
              className="dept-card-expanded-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="dept-expanded-content">
                {dept.hasOfficialThemes ? (
                  <div className="dept-themes-block">
                    <h5 className="dept-themes-heading">OFFICIAL RESEARCH TRACKS & THEMES:</h5>
                    <div className="dept-themes-list">
                      {dept.themes.map((theme, i) => (
                        <div key={i} className="dept-theme-item">
                          <CheckCircle2 size={15} className="text-cyan flex-shrink-0" />
                          <span>{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="dept-soon-card">
                    <Clock size={18} className="text-magenta flex-shrink-0" />
                    <div>
                      <h5 className="dept-soon-title">OFFICIAL THEMES COMING SOON</h5>
                      <p className="dept-soon-desc">
                        The faculty jury is currently finalizing this year's technical sub-tracks. Registrations remain open for standard technical submissions in this discipline.
                      </p>
                    </div>
                  </div>
                )}

                {/* Protocol & Quick Register CTA inside opened department */}
                <div className="dept-card-footer-strip">
                  <div className="dept-mini-specs">
                    <span>10m Pres + 5m Defense</span>
                    <span className="dot-sep">•</span>
                    <span>Team: 1–2</span>
                    <span className="dot-sep">•</span>
                    <span>Hall Alpha</span>
                  </div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dept-quick-register-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playSuccess();
                      if (onRegister) onRegister();
                    }}
                  >
                    <span>REGISTER FOR {dept.code}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <div className="event-modal-backdrop" onClick={onClose}>
        <motion.div
          className="paper-modal-container aura-glow-border"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Paper Presentation - Choose Your Department"
        >
          {/* Neon Corner Accents */}
          <div className="modal-corner-tl" />
          <div className="modal-corner-br" />

          {/* Close Button */}
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close Department Selector"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="paper-modal-header">
            <div className="paper-header-kicker">
              <span className="paper-kicker-badge">EVENT #01 // 10</span>
              <span className="paper-kicker-tag">NATIONAL RESEARCH DEFENSE</span>
            </div>
            <h2 className="paper-modal-title">
              PAPER <span className="text-cyan">PRESENTATION</span>
            </h2>
            <p className="paper-modal-subtitle">
              CLICK ANY DEPARTMENT TO EXPAND ITS OFFICIAL RESEARCH THEMES
            </p>

            {/* Conducting Department, Rules & Coordinators Info Strip */}
            <div className="paper-modal-meta-strip">
              <div className="paper-meta-row">
                <span className="paper-meta-badge">
                  <Building2 size={12} className="inline mr-1 text-cyan" />
                  CONDUCTED BY:
                </span>
                <span className="paper-meta-text">Inter-Departmental Technical Board (Aero, CSE, IT, EEE, ECE, Mech, Civil)</span>
              </div>
              <div className="paper-meta-row">
                <span className="paper-meta-badge">
                  <FileCheck size={12} className="inline mr-1 text-cyan" />
                  RULES:
                </span>
                <span className="paper-meta-text">IEEE format (max 6 pages) • 10m presentation + 5m defense • Plagiarism strictly under 15%</span>
              </div>
            </div>
          </div>

          {/* Modal Body: Two-Column Department Layout where each opens in place */}
          <div className="paper-modal-body">
            <div className="paper-columns-grid">
              
              {/* LEFT COLUMN: AERO, CSE AI&ML, IT, EEE */}
              <div className="paper-dept-column">
                <div className="paper-dept-list">
                  {paperPresentationDepartments.left.map(renderDeptCard)}
                </div>
              </div>

              {/* RIGHT COLUMN: CSE, CSE DS, ECE, MECH, CIVIL */}
              <div className="paper-dept-column">
                <div className="paper-dept-list">
                  {paperPresentationDepartments.right.map(renderDeptCard)}
                </div>
              </div>

            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="paper-modal-footer">
            <button
              type="button"
              className="paper-modal-btn-close"
              onClick={onClose}
            >
              Back to Events
            </button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-modal-btn-register"
              onClick={() => {
                sound.playSuccess();
                if (onRegister) onRegister();
              }}
            >
              <span>REGISTER FOR PAPER PRESENTATION</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
