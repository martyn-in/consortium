import { useState, useEffect } from 'react';
import './TopCountdownOverlay.css';

// Target date: Day 1 Commencement — October 9, 2026 at 09:00 AM IST
const FESTIVAL_START_DATE = '2026-10-09T09:00:00+05:30';

function calculateTime(targetDateStr) {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(d).padStart(2, '0'),
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0')
  };
}

export default function TopCountdownOverlay() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTime(FESTIVAL_START_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(FESTIVAL_START_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="top-countdown-overlay" aria-label="Festival Countdown">
      <div className="top-countdown-metallic-bar">
        <div className="top-countdown-track">
          <div className="top-countdown-slot top-slot--blue">
            <span className="top-countdown-digit">{timeLeft.days}</span>
            <span className="top-countdown-unit-full">DAYS</span>
            <span className="top-countdown-unit-short">D</span>
          </div>

          <span className="top-countdown-divider top-divider--blue">:</span>

          <div className="top-countdown-slot top-slot--emerald">
            <span className="top-countdown-digit">{timeLeft.hours}</span>
            <span className="top-countdown-unit-full">HOURS</span>
            <span className="top-countdown-unit-short">H</span>
          </div>

          <span className="top-countdown-divider top-divider--emerald">:</span>

          <div className="top-countdown-slot top-slot--amber">
            <span className="top-countdown-digit">{timeLeft.minutes}</span>
            <span className="top-countdown-unit-full">MINUTES</span>
            <span className="top-countdown-unit-short">M</span>
          </div>

          <span className="top-countdown-divider top-divider--amber">:</span>

          <div className="top-countdown-slot top-slot--purple">
            <span className="top-countdown-digit top-countdown-sec">{timeLeft.seconds}</span>
            <span className="top-countdown-unit-full">SECONDS</span>
            <span className="top-countdown-unit-short">S</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
