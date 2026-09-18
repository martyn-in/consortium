import { useState, useEffect } from 'react';
import { 
  ArrowRight, Zap, Target, Shield, 
  MapPin 
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

export default function SplitArenaSection() {
  const countdown = useCountdown(FESTIVAL_START_DATE);

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
              <span>🗓️ OCTOBER 9 &amp; 10, 2026 // IARE HYDERABAD</span>
            </div>
            <h2 className="schedule-main-heading">
              LIVE FESTIVAL <span className="schedule-brush-title">COUNTDOWN</span>
            </h2>
            <p className="schedule-sub-copy">
              The clock is ticking. Prepare for two electrifying days of national-level engineering showdowns, innovation, and competitive brilliance.
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
                  <div className="countdown-digit-glow text-accent-violet">{countdown.seconds}</div>
                  <span className="countdown-unit-label">SECONDS</span>
                </div>
              </div>

              <div className="countdown-footer-note">
                <MapPin size={14} className="text-violet" />
                <span>📍 Institute of Aeronautical Engineering (Autonomous) — Dundigal, Hyderabad</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Battle Beyond Boundaries Card */}
        <Reveal direction="up" distance={25} delay={0.15}>
          <div className="split-card battle-card full-battle-card aura-glow-border">
            <div className="battle-card-content">
              <div className="battle-kicker-chip">
                <span className="battle-kicker-dot">●</span>
                <span>⚡ 2 DAYS NATIONAL LEVEL FEST</span>
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
                  <span>🎯 10 Flagship Events</span>
                </div>
                <div className="battle-feat-item">
                  <Zap size={16} className="text-magenta" />
                  <span>🔥 Competitive Showdowns</span>
                </div>
                <div className="battle-feat-item">
                  <Shield size={16} className="text-cyan" />
                  <span>🛡️ National Adjudication</span>
                </div>
              </div>

              <div className="battle-action-row">
                <a 
                  href="#events" 
                  className="battle-btn-know-more"
                  onClick={() => sound.playClick()}
                >
                  <span>🚀 EXPLORE ALL 10 EVENTS</span>
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
