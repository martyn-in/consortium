import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, ExternalLink, ChevronDown
} from 'lucide-react';
import Reveal from './Reveal';
import { useTheme } from '../context/ThemeContext';
import iareLogoDark from '../assets/iare_logo_dark_text.png';
import iareLogoWhite from '../assets/iare_logo_white_text.png';
import { sound } from '../utils/soundEffects';
import './AboutUs.css';

const stats = [
  { emoji: '🏛️', label: 'ESTABLISHED', value: '2000', sub: '25 Years of Excellence' },
  { emoji: '⭐', label: 'NAAC ACCREDITATION', value: 'A++', sub: 'Highest Grade Awarded' },
  { emoji: '🏆', label: 'NIRF RANKING', value: '151–200', sub: '8x in a Row across 10 Editions' },
  { emoji: '🎓', label: 'STUDENTS & FACULTY', value: '6337 / 345', sub: '138 Ph.D. Faculty (40%)' },
  { emoji: '💼', label: 'PLACEMENTS', value: '700+', sub: '62+ Core & Tech MNCs' },
  { emoji: '🔬', label: 'RESEARCH & PATENTS', value: '₹925.59L', sub: '720 Patents & 3100+ Papers' },
];

const sectionsData = [
  {
    id: 'overview',
    title: 'Host Institution & Legacy',
    emoji: '🏛️',
    badge: 'EST. 2000 // AUTONOMOUS',
    content: [
      "Institute of Aeronautical Engineering (IARE), Hyderabad was established in the year 2000 with a mission 'Education for Liberation'. As the premier autonomous technical institution in Telangana, IARE is celebrated for 25 years of relentless excellence in technology, engineering, and innovation.",
      "Approved by AICTE and accredited with NAAC 'A++' Grade, IARE is the home of Consortium 2026—a grand confluence of national engineering talent, autonomous AI, combat robotics, and cutting-edge research."
    ]
  },
  {
    id: 'rankings',
    title: 'NIRF & National Rankings',
    emoji: '🏆',
    badge: 'NATIONAL RECOGNITION',
    content: [
      "Ranked in the prestigious 151–200 band in Engineering by NIRF (Ministry of Education, Govt. of India) for the eighth time in a row, demonstrating continuous excellence in education, employability, and innovation.",
      "Consistently recognized among top engineering hubs across India by India Today, Careers360 (AAAA), and The Week."
    ],
    rankingsList: [
      { name: 'NIRF Engineering (Govt. of India)', rank: 'Rank-Band 151–200 (8x in a row)' },
      { name: 'Careers 360', rank: 'AAAA Rating' },
      { name: 'India Today', rank: 'Rank 54' },
      { name: 'The Week', rank: 'Rank 60' },
      { name: 'Times of India', rank: 'Rank 64' },
    ]
  },
  {
    id: 'infrastructure',
    title: 'Smart Campus & Tech Arena',
    emoji: '🚀',
    badge: '10 ACRES // INNOVATION HUB',
    content: [
      "IARE's lush 10-acre campus features world-class technology infrastructure: 103 high-tech laboratories, state-of-the-art incubation centres, robotics maker-spaces, and a 760-seater air-conditioned auditorium.",
      "Equipped with gigabit internet connectivity, smart stages, and dynamic arena facilities designed to stage high-intensity national tech competitions."
    ]
  }
];

export default function AboutUs() {
  const { theme } = useTheme();
  const iareLogo = theme === 'dark' ? iareLogoWhite : iareLogoDark;
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllSections, setShowAllSections] = useState(false);

  const currentSection = sectionsData.find((s) => s.id === activeTab) || sectionsData[0];

  return (
    <section id="about" className="about-us-section">
      <div className="about-glow-orb about-glow-orb-1" />
      <div className="about-glow-orb about-glow-orb-2" />

      <div className="container">
        {/* Section Title & Header */}
        <Reveal direction="up" distance={25}>
          <div className="about-header-block">
            <div className="about-eyebrow-pill">
              <span className="about-pill-emoji">🏛️</span>
              <span>ABOUT US // HOST INSTITUTION</span>
            </div>
            <h2 className="about-main-title">
              WELCOME FROM <span className="about-title-highlight">INSTITUTE OF AERONAUTICAL ENGINEERING</span>
            </h2>
            <p className="about-lead-kicker">
              Autonomous College • Hyderabad, Telangana • Established 2000 • NAAC &apos;A++&apos; Grade • NBA Accredited
            </p>
          </div>
        </Reveal>

        {/* Institutional Identity Card */}
        <Reveal direction="up" distance={20} delay={0.1}>
          <div className="about-institution-card aura-glow-border">
            <div className="about-institution-inner">
              <div className="about-brand-row">
                <div className="about-brand-left">
                  <a
                    href="https://www.iare.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-iare-logo-wrap"
                    title="Visit Institute of Aeronautical Engineering Official Portal (iare.ac.in)"
                  >
                    <img
                      src={iareLogo}
                      alt="Institute of Aeronautical Engineering Logo"
                      className="about-iare-logo"
                      decoding="async"
                    />
                  </a>
                  <div className="about-brand-text-block">
                    <h3 className="about-college-heading">INSTITUTE OF AERONAUTICAL ENGINEERING</h3>
                    <p className="about-college-sub">Autonomous Institution • Hyderabad, Telangana • Estd. 2000</p>
                  </div>
                </div>
                <div className="about-brand-creds">
                  <span className="about-cred-badge cred-naac">⭐ NAAC &apos;A++&apos; GRADE</span>
                  <span className="about-cred-badge cred-nirf">🏆 NIRF 151-200 BAND</span>
                  <span className="about-cred-badge cred-ugc">📜 UGC 2(f) &amp; 12(B)</span>
                  <span className="about-cred-badge cred-nba">✅ NBA ACCREDITED</span>
                  <span className="about-cred-badge cred-estd">🎓 ESTD. 2000</span>
                </div>
              </div>

              <div className="about-mission-quote">
                <div className="mission-label-row">
                  <span className="mission-emoji">🎯</span>
                  <span className="mission-label">HOST INSTITUTION &amp; MISSION:</span>
                </div>
                <p className="mission-quote-text">
                  &ldquo;Education for Liberation&rdquo; — Run by Maruthi Educational Society founded by eminent professionals and industrialists. Autonomous Engineering College established in 2000.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 6 High-Impact Stat Tiles Grid */}
        <Reveal direction="up" distance={20} delay={0.15}>
          <div className="about-stats-grid">
            {stats.map((st, i) => (
              <div key={i} className="about-stat-box aura-glow-border">
                <span className="stat-box-emoji">{st.emoji}</span>
                <span className="stat-box-val">{st.value}</span>
                <span className="stat-box-label">{st.label}</span>
                <span className="stat-box-sub">{st.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Interactive Tabs / Expandable Container */}
        <div className="about-content-explorer">
          <div className="about-nav-row">
            <div className="about-tabs-scroll">
              {sectionsData.map((sec) => {
                const isActive = activeTab === sec.id && !showAllSections;

                return (
                  <button
                    key={sec.id}
                    type="button"
                    className={`about-tab-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => {
                      sound.playClick();
                      setActiveTab(sec.id);
                      setShowAllSections(false);
                    }}
                    onMouseEnter={() => sound.playHover()}
                  >
                    <span className="tab-btn-emoji">{sec.emoji}</span>
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className={`about-view-all-toggle ${showAllSections ? 'is-active' : ''}`}
              onClick={() => {
                sound.playClick();
                setShowAllSections((prev) => !prev);
              }}
            >
              <span>{showAllSections ? '📋 SHOW TABBED VIEW' : '📊 EXPAND ALL SECTIONS'}</span>
              <ChevronDown
                size={16}
                style={{ transform: showAllSections ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
              />
            </button>
          </div>

          {/* Tabbed View vs Full View */}
          <AnimatePresence mode="wait">
            {!showAllSections ? (
              <motion.div
                key={currentSection.id}
                className="about-active-panel aura-glow-border"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="panel-header-row">
                  <div className="panel-title-wrap">
                    <div className="panel-icon-orb">
                      <span className="panel-emoji">{currentSection.emoji}</span>
                    </div>
                    <div>
                      <span className="panel-badge">{currentSection.badge}</span>
                      <h3 className="panel-title">{currentSection.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="panel-body">
                  {currentSection.content.map((paragraph, idx) => (
                    <p key={idx} className="panel-paragraph">
                      {paragraph}
                    </p>
                  ))}

                  {/* Rankings highlight list */}
                  {currentSection.rankingsList && (
                    <div className="about-sub-matrix">
                      <h4 className="sub-matrix-heading">🏆 INDEPENDENT NATIONAL RANKINGS:</h4>
                      <div className="rankings-grid">
                        {currentSection.rankingsList.map((item, i) => (
                          <div key={i} className="ranking-badge-item">
                            <span className="ranking-agency">🏅 {item.name}</span>
                            <span className="ranking-score">{item.rank}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recruiters pill grid */}
                  {currentSection.recruiters && (
                    <div className="about-sub-matrix">
                      <h4 className="sub-matrix-heading">💼 REPUTED RECRUITERS &amp; CORPORATE PARTNERS:</h4>
                      <div className="recruiters-chips-wrap">
                        {currentSection.recruiters.map((rec, i) => (
                          <span key={i} className="recruiter-chip">
                            <CheckCircle2 size={13} className="text-cyan" />
                            <span>{rec}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="all-sections"
                className="about-all-sections-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {sectionsData.map((sec, secIdx) => {
                  return (
                    <div key={sec.id} className="about-single-card aura-glow-border">
                      <div className="panel-header-row">
                        <div className="panel-title-wrap">
                          <div className="panel-icon-orb">
                            <span className="panel-emoji">{sec.emoji}</span>
                          </div>
                          <div>
                            <span className="panel-badge">{sec.badge}</span>
                            <h3 className="panel-title">0{secIdx + 1} — {sec.title}</h3>
                          </div>
                        </div>
                      </div>

                      <div className="panel-body">
                        {sec.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="panel-paragraph">
                            {paragraph}
                          </p>
                        ))}

                        {sec.rankingsList && (
                          <div className="about-sub-matrix">
                            <h4 className="sub-matrix-heading">🏆 INDEPENDENT NATIONAL RANKINGS:</h4>
                            <div className="rankings-grid">
                              {sec.rankingsList.map((item, i) => (
                                <div key={i} className="ranking-badge-item">
                                  <span className="ranking-agency">🏅 {item.name}</span>
                                  <span className="ranking-score">{item.rank}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {sec.recruiters && (
                          <div className="about-sub-matrix">
                            <h4 className="sub-matrix-heading">💼 REPUTED RECRUITERS &amp; CORPORATE PARTNERS:</h4>
                            <div className="recruiters-chips-wrap">
                              {sec.recruiters.map((rec, i) => (
                                <span key={i} className="recruiter-chip">
                                  <CheckCircle2 size={13} className="text-cyan" />
                                  <span>{rec}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Quick Link to Official Portal */}
        <div className="about-official-portal-banner">
          <div className="portal-banner-left">
            <span className="portal-badge">🌐 OFFICIAL PORTAL</span>
            <p className="portal-text">Explore detailed faculty directories, R&amp;D publications, syllabus regulations &amp; campus life on the official IARE portal.</p>
          </div>
          <a
            href="https://www.iare.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="portal-external-btn"
            onClick={() => sound.playClick()}
          >
            <span>VISIT IARE.AC.IN</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
