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
    <div className="royal-countdown-wrapper">
      <div className="countdown-royal-heading">
        <span className="gold-ornament">❖</span>
        <span>ROYAL CONVERGENCE COMMENCES IN</span>
        <span className="gold-ornament">❖</span>
      </div>

      <div className="countdown-dials-flex">
        {units.map((unit, index) => (
          <div key={unit.label} className="dial-unit-pair">
            <motion.div 
              className="royal-glass-dial"
              animate={{
                scale: [1, 1.025, 1],
                boxShadow: [
                  '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.15)',
                  '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.35)',
                  '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.15)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                ease: 'easeInOut',
                delay: index * 0.2
              }}
            >
              <div className="dial-shine-line" />
              <div className="dial-digit-container">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="royal-dial-number"
                  >
                    {unit.value}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="royal-dial-label">{unit.label}</span>
            </motion.div>

            {index < units.length - 1 && (
              <span className="royal-dial-separator">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
