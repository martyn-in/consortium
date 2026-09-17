import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, Target, Shield, Clock, 
  Calendar, MapPin 
} from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './SplitArenaSection.css';

// Target date: Day 1 Commencement — October 9, 2026 at 09:00 AM IST
const FESTIVAL_START_DATE = '2026-10-09T09:00:00+05:30';

function calculateTime(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', isLive: true };
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(d).padStart(2, '0'),
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
    isLive: false
  };
}

function useCountdown(targetDateStr) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTime(targetDateStr));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(targetDateStr));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDateStr]);

  return timeLeft;
}

const scheduleDay1 = [
  {
    time: '08:30 AM – 09:30 AM',
    title: 'Delegate Reporting & Registration Kit Handover',
    desc: 'Participant verification, official badge allotment, and symposium kit collection.'
  },
  {
    time: '09:30 AM – 10:30 AM',
    title: 'Grand Inaugural Ceremony & Keynote Address',
    desc: 'Welcome addresses by college leadership, keynote by distinguished guest speakers, and lighting of the lamp.'
  },
  {
    time: '10:30 AM – 04:30 PM',
    title: 'Project Expo 2026 — Live Working Model Exhibits',
    desc: 'Scholars showcase functioning prototypes, IoT systems, robotics, and hardware innovations before industry jurors.'
  },
  {
    time: '11:00 AM – 01:30 PM',
    title: 'Paper Presentation — Preliminary Tracks',
    desc: 'Research tracks across Aeronautical, CSE, IT, EEE, and Civil present 10m defense sessions.'
  },
  {
    time: '11:00 AM – 04:00 PM',
    title: 'LAN Gaming Arena — Qualifiers & Battle Royale',
    desc: 'Competitive esports showdowns featuring intense brackets, live spectator stream, and ultra-low latency rigs.'
  },
  {
    time: '01:30 PM – 02:30 PM',
    title: 'Networking & Lunch Intermission',
    desc: 'Recharge, collaborate, and exchange ideas with scholars and delegates from across the nation.'
  },
  {
    time: '02:30 PM – 05:00 PM',
    title: 'Poster Presentations — Visual Defense Exhibits',
    desc: 'A1 infographic defense of research hypotheses and methodologies before academic referees.'
  },
  {
    time: '02:30 PM – 05:00 PM',
    title: 'Short Film Contest — Cinema Screenings & Jury Review',
    desc: 'Screenings of curated student short films and cinematography evaluations by film critics.'
  },
  {
    time: '05:00 PM – 05:30 PM',
    title: 'Day 1 Wrap-up & Leaderboard Snapshot',
    desc: 'Announcement of qualifying finalists for Day 2 championships.'
  }
];

const scheduleDay2 = [
  {
    time: '09:00 AM – 11:30 AM',
    title: 'Paper Presentation — Grand Finals & Jury Cross-Exam',
    desc: 'Top shortlisted research teams from all departments defend technical papers before senior jury panels.'
  },
  {
    time: '09:30 AM – 01:00 PM',
    title: 'Bridge Architecture Challenge — Structural Load Testing',
    desc: 'Point-load destructive testing of popsicle/truss bridges to calculate maximum efficiency and load-to-weight ratios.'
  },
  {
    time: '10:00 AM – 01:00 PM',
    title: 'Flight Simulator Battle — Final Dogfight Sorties',
    desc: 'Realistic aerodrome navigation, crosswind approaches, and simulated tactical flight operations.'
  },
  {
    time: '11:00 AM – 01:30 PM',
    title: 'Death Mystery — Crime Lab Forensic Investigation',
    desc: 'Time-bound crime scene analysis, forensic deciphering, encrypted clues, and suspect cross-examination.'
  },
  {
    time: '01:30 PM – 02:30 PM',
    title: 'Networking & Lunch Intermission',
    desc: 'Campus dining and final pre-showdown preparations.'
  },
  {
    time: '02:30 PM – 03:45 PM',
    title: 'Treasure Hunt Finale — Campus-Wide Crypto Trail',
    desc: 'Multistage cryptic treasure hunt racing across 10 acres of campus to crack the master cipher.'
  },
  {
    time: '04:00 PM – 05:45 PM',
    title: 'Grand Valedictory Ceremony & National Prize Distribution',
    desc: 'Trophy awards, cash prize felicitations, jury recognitions, and celebratory closing banquet.'
  }
];

export default function SplitArenaSection() {
  const countdown = useCountdown(FESTIVAL_START_DATE);
  const [activeDay, setActiveDay] = useState(1);

  const activeSchedule = activeDay === 1 ? scheduleDay1 : scheduleDay2;

  return (
    <section id="schedule" className="split-arena-section">
      {/* Anchor for any legacy references */}
      <span id="arena-experience" style={{ position: 'absolute', top: '-80px', pointerEvents: 'none' }} />

      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={25}>
          <div className="schedule-header-block">
            <div className="schedule-kicker-chip">
              <span className="schedule-kicker-dot">●</span>
              <span>OCTOBER 9 & 10, 2026 // IARE HYDERABAD</span>
            </div>
            <h2 className="schedule-main-heading">
              FESTIVAL <span className="schedule-brush-title">SCHEDULE</span> & COUNTDOWN
            </h2>
            <p className="schedule-sub-copy">
              Prepare for two electrifying days of national-level engineering showdowns, research defenses, and creative battles.
            </p>
          </div>
        </Reveal>

        {/* Live Futuristic Countdown Card */}
        <Reveal direction="up" distance={25} delay={0.1}>
          <div className="countdown-card aura-glow-border">
            <div className="countdown-inner">
              <div className="countdown-top-banner">
                <div className="countdown-badge-left">
                  <span className="countdown-real-emoji">⏳</span>
                  <span>COUNTDOWN TO DAY 01 LAUNCH</span>
                </div>
                <div className="countdown-badge-right">
                  <span className="countdown-real-emoji">📅</span>
                  <span>OCTOBER 09, 2026 • 09:00 AM IST</span>
                </div>
              </div>

              {/* 4 Glowing Digit Modules */}
              <div className="countdown-digits-grid">
                <div className="countdown-unit-box">
                  <div className="countdown-digit-glow">{countdown.days}</div>
                  <span className="countdown-unit-label">DAYS</span>
                </div>

                <span className="countdown-colon">:</span>

                <div className="countdown-unit-box">
                  <div className="countdown-digit-glow">{countdown.hours}</div>
                  <span className="countdown-unit-label">HOURS</span>
                </div>

                <span className="countdown-colon">:</span>

                <div className="countdown-unit-box">
                  <div className="countdown-digit-glow">{countdown.minutes}</div>
                  <span className="countdown-unit-label">MINUTES</span>
                </div>

                <span className="countdown-colon">:</span>

                <div className="countdown-unit-box">
                  <div className="countdown-digit-glow text-accent-cyan">{countdown.seconds}</div>
                  <span className="countdown-unit-label">SECONDS</span>
                </div>
              </div>

              <div className="countdown-footer-note">
                <MapPin size={14} className="text-cyan" />
                <span>Institute of Aeronautical Engineering (Autonomous) — Dundigal, Hyderabad</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2-Day Interactive Schedule Timeline */}
        <div className="schedule-container-block">
          {/* Day Selector Tabs */}
          <div className="schedule-day-tabs">
            <button
              type="button"
              className={`schedule-day-btn ${activeDay === 1 ? 'is-active' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveDay(1);
              }}
            >
              <div className="day-btn-indicator" />
              <div>
                <span className="day-tab-eyebrow">DAY 01</span>
                <strong className="day-tab-title">FRIDAY, OCT 09, 2026</strong>
              </div>
            </button>

            <button
              type="button"
              className={`schedule-day-btn ${activeDay === 2 ? 'is-active' : ''}`}
              onClick={() => {
                sound.playClick();
                setActiveDay(2);
              }}
            >
              <div className="day-btn-indicator" />
              <div>
                <span className="day-tab-eyebrow">DAY 02</span>
                <strong className="day-tab-title">SATURDAY, OCT 10, 2026</strong>
              </div>
            </button>
          </div>

          {/* Timeline Track List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              className="schedule-timeline-track"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {activeSchedule.map((item, index) => (
                <div key={index} className="timeline-slot-item aura-glow-border">
                  <div className="slot-left-col">
                    <div className="slot-time-chip">
                      <span className="slot-time-emoji">⏱️</span>
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <div className="slot-content-col">
                    <h3 className="slot-event-title">{item.title}</h3>
                    <p className="slot-event-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Battle Beyond Boundaries Card */}
        <Reveal direction="up" distance={25} delay={0.15}>
          <div className="split-card battle-card full-battle-card aura-glow-border">
            <div className="battle-card-content">
              <div className="battle-kicker-chip">
                <span className="battle-kicker-dot">●</span>
                <span>2 DAYS NATIONAL LEVEL FEST</span>
              </div>

              <h2 className="battle-heading">
                BATTLE <span className="battle-sub-brush">BEYOND BOUNDARIES</span>
              </h2>

              <p className="battle-copy">
                CONSORTIUM 2026 brings together the sharpest engineers, fiercest coders, 
                and boldest creators for a high-octane celebration of human innovation and competitive spirit.
              </p>

              <div className="battle-features-row">
                <div className="battle-feat-item">
                  <Target size={16} className="text-cyan" />
                  <span>10 Flagship Events</span>
                </div>
                <div className="battle-feat-item">
                  <Zap size={16} className="text-magenta" />
                  <span>Competitive Showdowns</span>
                </div>
                <div className="battle-feat-item">
                  <Shield size={16} className="text-cyan" />
                  <span>National Adjudication</span>
                </div>
              </div>

              <div className="battle-action-row">
                <a 
                  href="#events" 
                  className="battle-btn-know-more"
                  onClick={() => sound.playClick()}
                >
                  <span>EXPLORE ALL 10 EVENTS</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
