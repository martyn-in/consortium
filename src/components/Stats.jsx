import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, Building2, Gamepad2, Zap } from 'lucide-react';
import './Stats.css';

const statsData = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'PARTICIPANTS',
    isNumber: true,
    color: '#00eaff'
  },
  {
    icon: Trophy,
    value: 10,
    suffix: '+',
    label: 'EVENTS',
    isNumber: true,
    color: '#ef24ff'
  },
  {
    icon: Building2,
    value: 100,
    suffix: '+',
    label: 'COLLEGES',
    isNumber: true,
    color: '#00eaff'
  },
  {
    icon: Gamepad2,
    value: 2,
    suffix: '',
    label: 'DAYS',
    isNumber: true,
    color: '#b34eff'
  },
  {
    icon: Zap,
    textValue: 'COUNTLESS',
    label: 'MEMORIES',
    isNumber: false,
    color: '#00eaff'
  }
];

function StatPill({ item, index }) {
  const [displayCount, setDisplayCount] = useState(0);
  const pillRef = useRef(null);
  const isInView = useInView(pillRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView || !item.isNumber) return;

    let start = 0;
    const end = item.value;
    const duration = 1600;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, item.isNumber, item.value]);

  const IconComponent = item.icon;

  return (
    <motion.div
      ref={pillRef}
      className="mockup-stat-pill"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="stat-pill-icon-halo">
        <IconComponent size={20} style={{ color: item.color }} />
      </div>

      <div className="stat-pill-text-wrap">
        <span className="stat-pill-num" style={{ color: item.color }}>
          {item.isNumber ? `${displayCount}${item.suffix}` : item.textValue}
        </span>
        <span className="stat-pill-label">{item.label}</span>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="stats-pill-strip-section" aria-label="Festival Statistics">
      <div className="container">
        <div className="stats-pills-row">
          {statsData.map((stat, idx) => (
            <StatPill key={stat.label} item={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
