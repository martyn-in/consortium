import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Countdown.css';

export default function Countdown({ targetDate = '2026-10-15T09:00:00+05:30' }) {
  const targetTimestamp = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetTimestamp - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : `${d}`,
          hours: h < 10 ? `0${h}` : `${h}`,
          minutes: m < 10 ? `0${m}` : `${m}`,
          seconds: s < 10 ? `0${s}` : `${s}`
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTimestamp]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="countdown-pill-bar">
      {units.map((unit, index) => (
        <div key={unit.label} className="countdown-unit-wrap">
          <div className="countdown-glass-box">
            <div className="countdown-digit-viewport">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: -14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 14, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="countdown-number"
                >
                  {unit.value}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="countdown-label">{unit.label}</span>
          </div>

          {index < units.length - 1 && (
            <span className="countdown-separator">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
