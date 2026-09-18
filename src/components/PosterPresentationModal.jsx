import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ArrowRight, ArrowUpRight, Calendar, MapPin, 
  Users, Layers, Clock, Award, Building2, AlertTriangle, Lightbulb
} from 'lucide-react';
import imgPosterPresentation from '../assets/real_poster_presentation.jpg';
import { sound } from '../utils/soundEffects';
import './PosterPresentationModal.css';

const POSTER_REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSchaK7ITyJpLmpnR5xrP4tqj3GlPk9i2JV6PJW8qpLbvlap0A/viewform?usp=sharing&ouid=107083885521705451845';

/* ── POSTER THEMES with real emojis & colors ─────────────── */
const POSTER_THEMES = [
  { label: 'Emerging Technologies & Innovation',        emoji: '🚀', color: 'theme-teal'    },
  { label: 'Sustainable Technology & Green Innovation', emoji: '🌱', color: 'theme-green'   },
  { label: 'Future of Electronics & Communication',     emoji: '📡', color: 'theme-violet'  },
  { label: 'Smart Cities & Future Infrastructure',      emoji: '🏙️', color: 'theme-indigo'  },
  { label: 'Technology for Healthcare',                emoji: '🏥', color: 'theme-teal'    },
  { label: 'Cybersecurity & Digital Future',           emoji: '🛡️', color: 'theme-violet'  },
  { label: 'Space & Future Exploration',               emoji: '🌌', color: 'theme-magenta' },
  { label: 'Technology for Social Impact',             emoji: '🤝', color: 'theme-amber'   },
];

/* ── EVALUATION CRITERIA with real emojis ───────────────── */
const EVAL_CRITERIA = [
  { label: 'Originality & Innovation',            emoji: '💡' },
  { label: 'Technical Content',                   emoji: '🔬' },
  { label: 'Creativity & Visual Appeal',          emoji: '🎨' },
  { label: 'Relevance & Practical Applications',  emoji: '⚡' },
  { label: 'Presentation & Communication Skills', emoji: '🎤' },
  { label: 'Response to Q&A',                     emoji: '💬' },
];

/* ── KEY INFO ───────────────────────────────────────────── */
const KEY_INFO = [
  { label: 'TEAM SIZE',    value: '1–2 Members',  emoji: '👥', color: 'ki-violet' },
  { label: 'POSTER SIZE',  value: 'A3 Format',    emoji: '📐', color: 'ki-amber'  },
  { label: 'PRESENTATION', value: '2–3 Minutes',  emoji: '⏱️', color: 'ki-rose'   },
  { label: 'DEFENSE',      value: 'Q&A Session',  emoji: '💬', color: 'ki-green'  },
];

/* ── SECTION ANIMATION ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.36, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PosterPresentationModal({ isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleRegister = () => {
    sound.playSuccess();
    window.open(POSTER_REGISTER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="pm-backdrop" 
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="pm-split-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 22 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Poster Presentation Event Details"
          >
          {/* Top Corner Neon Accents */}
          <div className="pm-neon-corner pm-neon-tl" />
          <div className="pm-neon-corner pm-neon-br" />

          {/* Close button */}
          <button
            type="button"
            className="pm-close-btn"
            onClick={() => { sound.playClick(); onClose(); }}
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          {/* ============================================================
              LEFT SIDE: IMAGE, METADATA & REGISTER BUTTON
              ============================================================ */}
          <div className="pm-split-left">
            <div className="pm-left-card">
              <div className="pm-left-image-wrap">
                <img
                  src={imgPosterPresentation}
                  alt="Poster Presentation"
                  className="pm-left-img"
                />
                <div className="pm-left-scrim" />
                <div className="pm-left-badge-tag">
                  <span className="pm-tag-ece">ECE</span>
                  <span className="pm-tag-fest">CONSORTIUM 2026</span>
                </div>
              </div>

              <div className="pm-left-content">
                <div className="pm-left-meta-top">
                  <span className="pm-kicker-number">EVENT 02 / 10</span>
                  <span className="pm-kicker-sep">·</span>
                  <span className="pm-kicker-cat">ACADEMIC &amp; RESEARCH</span>
                </div>

                <h2 className="pm-left-title">
                  POSTER <span className="pm-title-glow">PRESENTATION</span>
                </h2>

                <p className="pm-left-tagline">
                  Visualize an idea &nbsp;·&nbsp; Explain the technology &nbsp;·&nbsp; Make an impact
                </p>

                <div className="pm-left-meta-list">
                  <div className="pm-meta-item">
                    <Calendar size={15} className="pm-meta-icon icon-violet" />
                    <span>October 9 &amp; 10, 2026</span>
                  </div>
                  <div className="pm-meta-item">
                    <MapPin size={15} className="pm-meta-icon icon-rose" />
                    <span>IARE Campus, Hyderabad</span>
                  </div>
                  <div className="pm-meta-item">
                    <Users size={15} className="pm-meta-icon icon-violet" />
                    <span>Individual or Team of 2</span>
                  </div>
                  <div className="pm-meta-item">
                    <Layers size={15} className="pm-meta-icon icon-emerald" />
                    <span>A3 Size (Oil prints preferred)</span>
                  </div>
                  <div className="pm-meta-item">
                    <Clock size={15} className="pm-meta-icon icon-amber" />
                    <span>2–3 Min Presentation + Q&amp;A</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="pm-left-register-btn"
                  onClick={handleRegister}
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT SIDE: CONDUCTED BY ECE & ALL SCROLLABLE INFORMATION
              ============================================================ */}
          <div className="pm-split-right">
            <div className="pm-right-scrollable">

              {/* 1. Conducted By Department Card */}
              <motion.div className="pm-dept-section" custom={0} variants={fadeUp} initial="hidden" animate="visible">
                <span className="pm-dept-eyebrow">🏢 CONDUCTED BY:</span>
                <div className="pm-dept-card">
                  <div className="pm-dept-icon-box">
                    <Building2 size={20} className="pm-dept-icon" />
                  </div>
                  <div className="pm-dept-info">
                    <h3 className="pm-dept-name">Department of Electronics &amp; Communication Engineering</h3>
                    <span className="pm-dept-code">ECE · IARE HYDERABAD</span>
                  </div>
                </div>
              </motion.div>

              {/* 2. Event Overview */}
              <motion.div className="pm-detail-block" custom={1} variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="pm-block-title">📌 EVENT OVERVIEW</h4>
                <div className="pm-overview-card">
                  <p className="pm-overview-lead">
                    Present your original research or innovative concept as a high-impact A3 poster before an expert jury.
                  </p>
                  <p className="pm-overview-body">
                    Open to students from all branches and academic years. Translate complex technical concepts into clear, structured visual narratives and defend your methodology, findings, and future scope in a focused 2–3 minute defense session.
                  </p>
                </div>
              </motion.div>

              {/* 3. Key Specifications Quick Cards */}
              <motion.div className="pm-key-grid" custom={2} variants={fadeUp} initial="hidden" animate="visible">
                {KEY_INFO.map(({ label, value, emoji, color }) => (
                  <div key={label} className={`pm-key-item ${color}`}>
                    <span className="pm-key-emoji">{emoji}</span>
                    <div className="pm-key-text">
                      <span className="pm-key-label">{label}</span>
                      <span className="pm-key-value">{value}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* 4. Eligibility */}
              <motion.section className="pm-detail-block" custom={3} variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="pm-block-title">🎯 ELIGIBILITY &amp; PARTICIPATION</h4>
                <div className="pm-card-surface">
                  <ul className="pm-list">
                    <li>Participation is open to students from all engineering branches and academic years.</li>
                    <li>Participants may register individually or in teams of two.</li>
                    <li>Each team shall consist of a maximum of 2 members.</li>
                  </ul>
                  <div className="pm-highlight-card pm-hl-violet">
                    <span className="pm-hl-emoji">👥</span>
                    <div>
                      <p className="pm-hl-label">MAXIMUM TEAM SIZE</p>
                      <p className="pm-hl-value">02 MEMBERS (INDIVIDUAL / TEAM)</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 5. Poster Themes */}
              <motion.section className="pm-detail-block" custom={4} variants={fadeUp} initial="hidden" animate="visible">
                <div className="pm-title-with-badge">
                  <h4 className="pm-block-title">🎨 CHOOSE YOUR THEME</h4>
                  <span className="pm-badge-count">8 OFFICIAL TRACKS</span>
                </div>
                <p className="pm-sub-helper">Select one theme that best fits your research or technological concept:</p>
                <div className="pm-themes-grid">
                  {POSTER_THEMES.map(({ label, emoji, color }) => (
                    <div key={label} className={`pm-theme-chip ${color}`}>
                      <span className="pm-theme-emoji">{emoji}</span>
                      <span className="pm-theme-label">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* 6. Poster Requirements */}
              <motion.section className="pm-detail-block" custom={5} variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="pm-block-title">📋 POSTER SPECIFICATIONS &amp; STRUCTURE</h4>
                <div className="pm-card-surface">
                  <div className="pm-highlight-card pm-hl-emerald">
                    <span className="pm-hl-emoji">📐</span>
                    <div>
                      <p className="pm-hl-label">MANDATORY POSTER SIZE</p>
                      <p className="pm-hl-value">A3 FORMAT (OIL PRINTS PREFERRED)</p>
                      <p className="pm-hl-note">Ensure high resolution printing and sharp diagrams.</p>
                    </div>
                  </div>
                  <ul className="pm-list">
                    <li>The poster must be original, innovative, and directly relevant to the selected theme.</li>
                    <li>The poster must be prepared in size <strong>A3</strong> (Oil prints are preferred for visual clarity).</li>
                    <li>The content should be technically rigorous, concise, and easy to interpret.</li>
                    <li>
                      The poster presentation should preferably cover:
                      <div className="pm-structure-grid">
                        <span className="pm-struct-pill">1. Problem Statement / Idea</span>
                        <span className="pm-struct-pill">2. Objectives</span>
                        <span className="pm-struct-pill">3. Proposed Solution / Concept</span>
                        <span className="pm-struct-pill">4. Methodology / Working Principle</span>
                        <span className="pm-struct-pill">5. Applications</span>
                        <span className="pm-struct-pill">6. Future Scope</span>
                      </div>
                    </li>
                    <li>Use high-clarity diagrams, circuit schematics, illustrations, graphs, and relevant flowcharts.</li>
                    <li>Avoid dense text paragraphs — maintain good typography hierarchy and spacing.</li>
                  </ul>
                </div>
              </motion.section>

              {/* 7. Presentation Guidelines */}
              <motion.section className="pm-detail-block" custom={6} variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="pm-block-title">⏱️ PRESENTATION &amp; DEFENSE GUIDELINES</h4>
                <div className="pm-card-surface">
                  <div className="pm-time-row">
                    <div className="pm-highlight-card pm-hl-amber pm-hl-compact">
                      <span className="pm-hl-emoji">⏱️</span>
                      <div>
                        <p className="pm-hl-label">PRESENTATION TIME</p>
                        <p className="pm-hl-value">2–3 Minutes</p>
                      </div>
                    </div>
                    <div className="pm-highlight-card pm-hl-violet pm-hl-compact">
                      <span className="pm-hl-emoji">💬</span>
                      <div>
                        <p className="pm-hl-label">JURY DEFENSE</p>
                        <p className="pm-hl-value">Interactive Q&amp;A</p>
                      </div>
                    </div>
                  </div>
                  <ul className="pm-list">
                    <li>Each participant/team will be allocated <strong>2–3 minutes</strong> to present their poster.</li>
                    <li>A brief interactive Q&amp;A session with jury members will immediately follow.</li>
                    <li>Participants should explain their concepts clearly, confidently, and technically.</li>
                    <li>In team participation, both members must actively contribute during the defense.</li>
                  </ul>
                </div>
              </motion.section>

              {/* 8. General Rules */}
              <motion.section className="pm-detail-block" custom={7} variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="pm-block-title">📜 GENERAL RULES &amp; CODE OF CONDUCT</h4>
                <div className="pm-warn-banner">
                  <AlertTriangle size={20} className="pm-warn-icon" />
                  <p><strong>Plagiarism &amp; Copied Work:</strong> The submitted poster must be the 100% original work of the participants. Any plagiarized submission will be immediately disqualified.</p>
                </div>
                <div className="pm-card-surface">
                  <ul className="pm-list">
                    <li>Posters must be submitted and mounted within the prescribed schedule.</li>
                    <li>Participants must strictly adhere to the prescribed A3 format.</li>
                    <li>Participants must report to the venue at the scheduled reporting time.</li>
                    <li>Participants are expected to maintain professional decorum throughout the event.</li>
                    <li>Participants must cooperate with student coordinators and jury faculty.</li>
                    <li>Any form of misconduct may result in prompt disqualification.</li>
                    <li>The decision of the evaluation jury will be final and binding.</li>
                  </ul>
                </div>
              </motion.section>

              {/* 9. Evaluation Criteria */}
              <motion.section className="pm-detail-block" custom={8} variants={fadeUp} initial="hidden" animate="visible">
                <div className="pm-title-with-badge">
                  <h4 className="pm-block-title">🏆 EVALUATION CRITERIA</h4>
                  <span className="pm-badge-count">6 JURY METRICS</span>
                </div>
                <div className="pm-eval-grid">
                  {EVAL_CRITERIA.map(({ label, emoji }) => (
                    <div key={label} className="pm-eval-card">
                      <span className="pm-eval-emoji">{emoji}</span>
                      <span className="pm-eval-label">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* 10. Important Note */}
              <motion.section className="pm-detail-block" custom={9} variants={fadeUp} initial="hidden" animate="visible">
                <div className="pm-note-panel">
                  <div className="pm-note-header">
                    <Lightbulb size={18} className="pm-note-icon" />
                    <span className="pm-note-label">FACULTY JURY NOTE</span>
                  </div>
                  <p className="pm-note-text">
                    "Participants are encouraged to select topics that address real-world problems and demonstrate how technology and innovation can contribute to practical, sustainable, and meaningful solutions."
                  </p>
                </div>
              </motion.section>

              {/* 11. Bottom Actions */}
              <div className="pm-right-footer-actions">
                <button
                  type="button"
                  className="pm-btn-back"
                  onClick={() => {
                    sound.playClick();
                    onClose();
                  }}
                >
                  ← Back to Events
                </button>

                <button
                  type="button"
                  className="pm-btn-register-primary"
                  onClick={handleRegister}
                >
                  <span>Register via Official Form</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
  );
}
