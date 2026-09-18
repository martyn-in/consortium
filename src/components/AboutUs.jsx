import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Award, GraduationCap, Building2, 
  FlaskConical, Briefcase, Trophy, Home, 
  CheckCircle2, ExternalLink, ChevronDown, Zap
} from 'lucide-react';
import Reveal from './Reveal';
import iareLogo from '../assets/iare_logo_white_text.png';
import { sound } from '../utils/soundEffects';
import './AboutUs.css';

const stats = [
  { label: 'ESTABLISHED', value: '2000', sub: '25 Years of Excellence' },
  { label: 'NAAC ACCREDITATION', value: 'A++', sub: 'Highest Grade Awarded' },
  { label: 'NIRF RANKING', value: '151–200', sub: '8x in a Row across 10 Editions' },
  { label: 'STUDENTS & FACULTY', value: '6337 / 345', sub: '138 Ph.D. Faculty (40%)' },
  { label: 'PLACEMENTS', value: '700+', sub: '62+ Core & Tech MNCs' },
  { label: 'RESEARCH & PATENTS', value: '₹925.59L', sub: '720 Patents & 3100+ Papers' },
];

const sectionsData = [
  {
    id: 'what-is-consortium',
    title: 'What is Consortium 2026?',
    icon: Sparkles,
    badge: 'ANNUAL NATIONAL LEVEL FEST // OCT 09–10',
    content: [
      "CONSORTIUM 2026 is the premier annual 2-Day National-Level Technical, Engineering, and Innovation Fest hosted by the Institute of Aeronautical Engineering (Autonomous), Hyderabad on October 09 & 10, 2026. Designed as South India's premier multi-disciplinary battleground, Consortium brings together over 5,000+ ambitious student engineers, researchers, innovators, developers, gamers, and filmmakers from 100+ prestigious institutions across India.",
      "The festival bridges hardcore academic research with bleeding-edge applied engineering, competitive esports, and cinematic arts across 10 specialized arenas. Participants compete before distinguished academic and industry juries, defend IEEE research, pilot authentic aeronautical flight simulators, test structural limits in bridge mockup battles, build disruptive project prototypes, and challenge their reflexes in high-stakes esports.",
      "With ₹2,00,000+ in awards and prize pools, hands-on experiential zones, national certificates, and an electric atmosphere, Consortium 2026 is more than a fest — it is a career-defining launchpad for tomorrow's technology leaders."
    ],
    festPillars: [
      { title: '2 Days National Fest', desc: 'October 09 & 10, 2026' },
      { title: '10 Flagship Arenas', desc: 'Research, Tech, Esports & Arts' },
      { title: '₹2,00,000+ Prize Pool', desc: 'Cash Awards & Trophies' },
      { title: '5,000+ Innovators', desc: '100+ Engineering Colleges' },
      { title: 'Autonomous Campus', desc: '10 Acres at IARE Hyderabad' },
      { title: 'National Recognition', desc: 'Official Merit Certificates' }
    ],
    arenaHighlights: [
      { num: '01', name: 'Paper Presentation', dept: 'Inter-Departmental Technical Board' },
      { num: '02', name: 'Poster Presentation', dept: 'Dept. of ECE' },
      { num: '03', name: 'Project Expo', dept: 'Dept. of IT' },
      { num: '04', name: 'LAN Gaming', dept: 'Mobile Esports Arena' },
      { num: '05', name: 'CINEVO Photography', dept: 'Dept. of CSE' },
      { num: '06', name: 'Magic Witch', dept: 'Mystic Quest Arena' },
      { num: '07', name: 'Treasure Hunt', dept: 'Dept. of EEE' },
      { num: '08', name: 'CINEVO Short Films', dept: 'Cinematic Storytelling' },
      { num: '09', name: 'Flight Simulator', dept: 'Dept. of Aeronautical' },
      { num: '10', name: 'Bridge Mockup', dept: 'Dept. of Civil Engineering' }
    ]
  },
  {
    id: 'overview',
    title: 'Host Institution: IARE',
    icon: GraduationCap,
    badge: 'EST. 2000 // AUTONOMOUS',
    content: [
      "Institute of Aeronautical Engineering (IARE), Hyderabad was established in the year 2000 and is run by Maruthi Educational Society founded by a devoted group of eminent professional and industrialists having a long and outstanding experience in educational system with a mission ‘Education for Liberation’. It is the first institute to start B.Tech program in Aeronautical Engineering in the state of Telangana and has gradually transformed itself into an integrated multi-disciplinary technological institute. It is the most preferred institute with 100% admissions in the state of Telangana.",
      "IARE is a prestigious Autonomous engineering college offering nine B.Tech programs Computer Science and Engineering (CSE), CSE (Artificial Intelligence and Machine Learning), CSE (Data Science), Information Technology, Electronics and Communication Engineering, Electrical and Electronics Engineering, Aeronautical Engineering, Mechanical Engineering, Civil Engineering and five M.Tech programs in engineering and MBA (Master of Business Administration) with 25 years of rich standing in the educational sphere. The institute is approved by AICTE, New Delhi; recognized by Govt. of Telangana; affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH); and accredited by National Assessment and Accreditation Council (NAAC) with ‘A++’ Grade. 100% Eligible B.Tech programs, 85% M.Tech programs and MBA program are accredited by National Board of Accreditation (NBA), New Delhi since 2008. The institute also received UGC recognition under Sections 2(f) and 12(B) of the UGC Act."
    ]
  },
  {
    id: 'rankings',
    title: 'NIRF & National Rankings',
    icon: Award,
    badge: 'NATIONAL RECOGNITION',
    content: [
      "It is a matter of great pride that the Institute of Aeronautical Engineering has been ranked in the 151–200 band in the Engineering category by the National Institutional Ranking Framework (NIRF) - 2025, Ministry of Education, Govt. of India. It has sustained its rank in the 151–200 band for the EIGHT time in a row across TEN editions of NIRF. This reflects our commitment to excellence and the high standards we uphold in teaching, research, employability, and innovation.",
      "Besides the institute has been ranked by different independent national agencies which include Careers 360 (AAAA), India Today (54), The Week (60), Times of India (64), Competition Success Review (16), Outlook (50), Data Quest (78), BW Business World (60)."
    ],
    rankingsList: [
      { name: 'NIRF Engineering (Govt. of India)', rank: 'Rank-Band 151–200 (8 Consecutive Times)' },
      { name: 'Careers 360', rank: 'AAAA Rating' },
      { name: 'India Today', rank: 'Rank 54' },
      { name: 'The Week', rank: 'Rank 60' },
      { name: 'Times of India', rank: 'Rank 64' },
      { name: 'Competition Success Review', rank: 'Rank 16' },
      { name: 'Outlook Magazine', rank: 'Rank 50' },
      { name: 'Data Quest', rank: 'Rank 78' },
      { name: 'BW Business World', rank: 'Rank 60' },
    ]
  },
  {
    id: 'research',
    title: 'Research, Grants & Patents',
    icon: FlaskConical,
    badge: 'INNOVATION ECOSYSTEM',
    content: [
      "The total number of students is 6337 and that of faculty is 345, out of which, 138 are Ph.D’s (40%) ensuring healthy faculty student ratio. The research activity on campus is woven in pursuance of its vision & mission statements around the philosophy of Inspire, Innovate and Implement to benefit the contemporary society. It unwinds itself into different fields such as environment, aerospace, PLC, CAD/CAM, CNC machining, tool design, welding, embedded systems, and low power VLSI digital system design. Emphasis is also being laid on manufacturing, automation, business analytics, big data, cloud computing, wireless technology, image processing, and next generation networks.",
      "IARE has fourteen sponsored research projects, and has received grants of worth Rs. 925.59 lakhs for research and other activities by different agencies including DST, AICTE, UGC etc. The institute has a record of intellectual property with 3100+ research paper publications by faculty as well as students and 23000+ citations, 72 h-index, 720 patents published and 45 patents granted. Internal revenue generation through consultancy facilitates and promotes activities pertaining to energy audit, mobile apps, drones in agriculture, agricultural tools, and material testing."
    ]
  },
  {
    id: 'placements',
    title: 'Placements & Industry MoUs',
    icon: Briefcase,
    badge: 'CAREER EXCELLENCE',
    content: [
      "Big placements greet our students with ample opportunities with around 62 core and software companies visiting the institute every year with 700+ Placements. Placement and training centre is instrumental in signing the Memorandum of Understanding (MOU) with many reputed organizations including Microsoft, Zscaler, JPMorgan Chase & Co, Amazon, Juspay, Amadeus, EPAM, ZeroCodeHR, Sears, DBS, Accolite Digital, ARCADIS IBI, Capgemini, Lumen, IBM, Accenture, Virtusa, Cognizant, UST, Byteridge, JSW, LTIMindtree, Ernst & Young, Wiley Edge, TATA Consultancy Services, TATA Technologies, TATA Advanced Systems, Infosys, Wipro, MPhasis, Quest Global, NTT Data, Hexaware, Optum, JBM, Tech Mahindra and so on."
    ],
    recruiters: [
      'Microsoft', 'Amazon', 'JPMorgan Chase & Co', 'Zscaler', 'Juspay', 'Amadeus', 'EPAM',
      'IBM', 'Accenture', 'TCS', 'Infosys', 'Capgemini', 'Virtusa', 'Cognizant', 'LTIMindtree',
      'Ernst & Young', 'TATA Advanced Systems', 'Wipro', 'Tech Mahindra', 'Optum', 'Hexaware'
    ]
  },
  {
    id: 'competitions',
    title: 'Student Innovation & Competitions',
    icon: Trophy,
    badge: 'GLOBAL COMPETITIVENESS',
    content: [
      "The students are provided with avenues to showcase their talents and innovative skills. They also participate in various national level engineering competitions like Baja SAEINDIA, Supra SAEINDIA, Go-kart, ADC championships to name a few and have made their mark by winning prizes and ranks. They participate in national and state level project competitions as well as conferences to share their research findings. Students have represented the institute at international level as well."
    ]
  },
  {
    id: 'infrastructure',
    title: 'Library & Smart Campus',
    icon: Building2,
    badge: '10 ACRES // 3,90,837 SQ.FT',
    content: [
      "The central library houses a rich collection of books for all subjects with recent publications. There are about 56,862 books, 7998 individual titles, nearly 132 National / International Journals, 2715 back volumes, and e-journals from IEEE, ASME and ASCE . Apart from this, the students have an exclusive access to DELNET for resource sharing. The library is open for 10 hours on weekdays and even on Sundays. Book distribution process has been automated for quick and easy access. For circulation of library books ‘Automated Self Service Kiosk’ has been installed, which enables users to issue, return and renew books by themselves.",
      "Institute has state of art infrastructural facilities to support teaching-learning, research and administrative services. The institute is spread over 10 acres with built up area of 3,90,837 sft. housing 72+ smart class rooms, 3 ICT studio rooms, 4 flipped classrooms, 4 conference halls,760 seating capacity auditorium, 10 research laboratories, 103 academic laboratories, science and technology startup park, technology innovation and incubation center, open air amphitheater, makerspace, community facilitation center, skill development center and library. Campus-wide networking with 2000 Mbps internet connectivity, Wi-Fi and CCTV facility is available. To reduce the consumption of electricity efficient lightings are used with solar electric energy of 160 KW on the grid. A captive power of 480 KVA is provided to ensure smooth working of the institute in times of power outage. The institute operates 32 buses for the benefit of students and staff."
    ]
  },
  {
    id: 'campus-life',
    title: 'Hostels, Sports & Life',
    icon: Home,
    badge: 'CAMPUS LIVING & CULTURE',
    content: [
      "IARE has a home away from home with the best amenities for the students to provide them a comfortable lifestyle within a vicinity of 1 km of the campus. The institute provides separate hostels for boys and girls, made to grow as places to support learning not only academics but also life skills in a multi-cultural and multi-lingual environment.",
      "Students are encouraged to participate as actively in sports and other extracurricular activities as in academics. The institute maintains a separate unoccupied open area of 4 acres for the play fields in any time fit condition. Apart from this, the institute also has several sports rooms where students can play and revive their energies and be mentally and physically fit.",
      "With its belief in holistic approach to excellence, the institute offers distinct Teaching-Learning Process to push the boundaries of skill and knowledge. The Institute excels in supporting “Research initiatives among students and faculty members” and “Entrepreneurship drive among students” which makes IARE as one of the best institutions to enhance the performance of the students."
    ]
  }
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('what-is-consortium');
  const [showAllSections, setShowAllSections] = useState(false);

  const currentSection = sectionsData.find((s) => s.id === activeTab) || sectionsData[0];
  const CurrentIcon = currentSection.icon;

  return (
    <section id="about" className="about-us-section">
      <div className="about-glow-orb about-glow-orb-1" />
      <div className="about-glow-orb about-glow-orb-2" />

      <div className="container">
        {/* Section Title & Header */}
        <Reveal direction="up" distance={25}>
          <div className="about-header-block">
            <div className="about-eyebrow-pill">
              <Sparkles size={14} className="text-cyan inline mr-1" />
              <span>ABOUT // CONSORTIUM 2026</span>
            </div>
            <h2 className="about-main-title">
              APEX OF <span className="about-title-highlight">ENGINEERING &amp; INNOVATION</span>
            </h2>
            <p className="about-lead-kicker">
              Consortium 2026 • 2 Days National Level Fest • October 09 &amp; 10, 2026 • Hosted by IARE Hyderabad
            </p>
          </div>
        </Reveal>

        {/* Dedicated Consortium 2026 Feature Spotlight Card */}
        <Reveal direction="up" distance={20} delay={0.05}>
          <div className="about-consortium-spotlight aura-glow-border">
            <div className="spotlight-header-row">
              <div className="spotlight-badge-row">
                <span className="spotlight-tag">
                  <Zap size={13} className="text-cyan inline mr-1" />
                  NATIONAL LEVEL TECHNICAL SYMPOSIUM
                </span>
                <span className="spotlight-dates">OCTOBER 09 – 10, 2026</span>
              </div>
              <span className="spotlight-pill-live">2 DAYS NATIONAL FEST</span>
            </div>

            <h3 className="spotlight-title">
              WHAT IS <span className="spotlight-title-cyan">CONSORTIUM 2026</span>?
            </h3>

            <p className="spotlight-desc">
              <strong>CONSORTIUM 2026</strong> is the premier annual 2-day national level engineering, technology, and innovation festival hosted by the <strong>Institute of Aeronautical Engineering (Autonomous), Hyderabad</strong>. Uniting over <strong>5,000+</strong> student innovators, technical researchers, programmers, gamers, and filmmakers from across India, Consortium serves as a high-intensity battleground designed to challenge convention, defend original research, pilot flight simulators, construct load-bearing structures, and compete for excellence across <strong>10 flagship arenas</strong>.
            </p>

            <div className="spotlight-metrics-row">
              <div className="spotlight-metric-item">
                <span className="spotlight-metric-val">10</span>
                <span className="spotlight-metric-lbl">Flagship Arenas</span>
              </div>
              <div className="spotlight-metric-div" />
              <div className="spotlight-metric-item">
                <span className="spotlight-metric-val">5000+</span>
                <span className="spotlight-metric-lbl">Participants</span>
              </div>
              <div className="spotlight-metric-div" />
              <div className="spotlight-metric-item">
                <span className="spotlight-metric-val">100+</span>
                <span className="spotlight-metric-lbl">Colleges Pan-India</span>
              </div>
              <div className="spotlight-metric-div" />
              <div className="spotlight-metric-item">
                <span className="spotlight-metric-val">₹2,00,000+</span>
                <span className="spotlight-metric-lbl">Prize Pool &amp; Awards</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Institutional Identity Card */}
        <Reveal direction="up" distance={20} delay={0.1}>
          <div className="about-institution-card aura-glow-border">
            <div className="about-institution-inner">
              <div className="about-brand-row">
                <img 
                  src={iareLogo} 
                  alt="Institute of Aeronautical Engineering Logo" 
                  className="about-iare-logo" 
                />
                <div className="about-brand-creds">
                  <span className="about-cred-badge text-cyan">NAAC &apos;A++&apos; GRADE</span>
                  <span className="about-cred-badge text-magenta">NIRF 151–200 BAND</span>
                  <span className="about-cred-badge text-amber">UGC 2(f) &amp; 12(B)</span>
                  <span className="about-cred-badge text-green">NBA ACCREDITED</span>
                </div>
              </div>

              <div className="about-mission-quote">
                <span className="mission-label">HOST INSTITUTION &amp; MISSION:</span>
                <p className="mission-quote-text">
                  &ldquo;Education for Liberation&rdquo; — Run by Maruthi Educational Society founded by eminent professionals and industrialists. Autonomous Engineering College established in 2000.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats Grid Matrix */}
        <Reveal direction="up" distance={20} delay={0.15}>
          <div className="about-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat-box aura-glow-border">
                <span className="stat-box-label">{stat.label}</span>
                <span className="stat-box-val">{stat.value}</span>
                <span className="stat-box-sub">{stat.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Interactive Explorer / Tab Navigation */}
        <div className="about-content-explorer">
          <div className="about-nav-row">
            <div className="about-tabs-scroll">
              {sectionsData.map((sec) => {
                const TabIcon = sec.icon;
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
                    <TabIcon size={16} />
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
              <span>{showAllSections ? 'SHOW TABBED VIEW' : 'EXPAND ALL SECTIONS'}</span>
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
                      <CurrentIcon size={20} className="text-cyan" />
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

                  {/* Fest Pillars highlight matrix */}
                  {currentSection.festPillars && (
                    <div className="about-sub-matrix">
                      <h4 className="sub-matrix-heading">CONSORTIUM 2026 KEY HIGHLIGHTS:</h4>
                      <div className="fest-pillars-grid">
                        {currentSection.festPillars.map((pillar, i) => (
                          <div key={i} className="fest-pillar-box aura-glow-border">
                            <span className="fest-pillar-title">{pillar.title}</span>
                            <span className="fest-pillar-desc">{pillar.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 10 Arenas quick overview */}
                  {currentSection.arenaHighlights && (
                    <div className="about-sub-matrix">
                      <h4 className="sub-matrix-heading">10 OFFICIAL FLAGSHIP COMPETITION ARENAS:</h4>
                      <div className="arena-highlights-grid">
                        {currentSection.arenaHighlights.map((arena, i) => (
                          <div key={i} className="arena-highlight-chip">
                            <span className="arena-chip-num">{arena.num}</span>
                            <div className="arena-chip-info">
                              <span className="arena-chip-name">{arena.name}</span>
                              <span className="arena-chip-dept">{arena.dept}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rankings highlight list */}
                  {currentSection.rankingsList && (
                    <div className="about-sub-matrix">
                      <h4 className="sub-matrix-heading">INDEPENDENT NATIONAL RANKINGS:</h4>
                      <div className="rankings-grid">
                        {currentSection.rankingsList.map((item, i) => (
                          <div key={i} className="ranking-badge-item">
                            <span className="ranking-agency">{item.name}</span>
                            <span className="ranking-score">{item.rank}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recruiters pill grid */}
                  {currentSection.recruiters && (
                    <div className="about-sub-matrix">
                      <h4 className="sub-matrix-heading">REPUTED RECRUITERS &amp; CORPORATE PARTNERS:</h4>
                      <div className="recruiters-chips-wrap">
                        {currentSection.recruiters.map((rec, i) => (
                          <span key={i} className="recruiter-chip">
                            <CheckCircle2 size={12} className="text-cyan" />
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
                  const SecIcon = sec.icon;
                  return (
                    <div key={sec.id} className="about-single-card aura-glow-border">
                      <div className="panel-header-row">
                        <div className="panel-title-wrap">
                          <div className="panel-icon-orb">
                            <SecIcon size={18} className="text-cyan" />
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

                        {sec.festPillars && (
                          <div className="about-sub-matrix">
                            <h4 className="sub-matrix-heading">CONSORTIUM 2026 KEY HIGHLIGHTS:</h4>
                            <div className="fest-pillars-grid">
                              {sec.festPillars.map((pillar, i) => (
                                <div key={i} className="fest-pillar-box aura-glow-border">
                                  <span className="fest-pillar-title">{pillar.title}</span>
                                  <span className="fest-pillar-desc">{pillar.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {sec.arenaHighlights && (
                          <div className="about-sub-matrix">
                            <h4 className="sub-matrix-heading">10 OFFICIAL FLAGSHIP COMPETITION ARENAS:</h4>
                            <div className="arena-highlights-grid">
                              {sec.arenaHighlights.map((arena, i) => (
                                <div key={i} className="arena-highlight-chip">
                                  <span className="arena-chip-num">{arena.num}</span>
                                  <div className="arena-chip-info">
                                    <span className="arena-chip-name">{arena.name}</span>
                                    <span className="arena-chip-dept">{arena.dept}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {sec.rankingsList && (
                          <div className="about-sub-matrix">
                            <h4 className="sub-matrix-heading">INDEPENDENT NATIONAL RANKINGS:</h4>
                            <div className="rankings-grid">
                              {sec.rankingsList.map((item, i) => (
                                <div key={i} className="ranking-badge-item">
                                  <span className="ranking-agency">{item.name}</span>
                                  <span className="ranking-score">{item.rank}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {sec.recruiters && (
                          <div className="about-sub-matrix">
                            <h4 className="sub-matrix-heading">REPUTED RECRUITERS &amp; CORPORATE PARTNERS:</h4>
                            <div className="recruiters-chips-wrap">
                              {sec.recruiters.map((rec, i) => (
                                <span key={i} className="recruiter-chip">
                                  <CheckCircle2 size={12} className="text-cyan" />
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
            <span className="portal-badge">OFFICIAL PORTAL</span>
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
