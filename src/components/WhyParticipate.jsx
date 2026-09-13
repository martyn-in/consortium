import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './WhyParticipate.css';

const WhyParticipate = () => {
  const reasons = [
    {
      idx: '01',
      title: 'National Prestige & Credentials',
      highlight: 'IARE NAAC A++ Seal',
      desc: 'Compete on an all-India stage against 5,000+ elite engineers. Earn verified credentials endorsed by autonomous accreditation boards.',
      icon: ShieldCheck,
      color: '#00eaff'
    },
    {
      idx: '02',
      title: '₹10,00,000 Total Prize Purse',
      highlight: 'Direct Cash & Grants',
      desc: 'Immediate cash disbursements across 30+ competitive tracks, custom titanium trophies, and fast-tracked hardware incubation grants.',
      icon: Award,
      color: '#7b4dff'
    },
    {
      idx: '03',
      title: 'Venture Incubation & VCs',
      highlight: 'Direct Investor Pitches',
      desc: 'Top projects from the Neural Hackathon are pitched directly before angel investors and venture funds for seed acceleration.',
      icon: Briefcase,
      color: '#67f2ff'
    },
    {
      idx: '04',
      title: 'Celebrity EDM Pro-Show',
      highlight: 'Star Night Gala',
      desc: 'Full access to Consortium’s evening star concert, high-voltage lighting spectacles, DJ performances, and campus networking banquets.',
      icon: Zap,
      color: '#635bff'
    }
  ];

  return (
    <section id="why" className="why-participate-section">
      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={30}>
          <div className="why-header-block">
            <div className="futuristic-tagline-badge">
              <Zap size={13} className="text-cyan" />
              <span>THE CONSORTIUM ADVANTAGE</span>
            </div>
            <h2 className="section-heading">Why Compete At Consortium?</h2>
            <div className="futuristic-divider">
              <span className="divider-diamond-cyan">❖</span>
            </div>
            <p className="why-subtext">
              Engineered as the apex collegiate technical conclave in South India, offering an unparalleled
              fusion of high-stakes technological combat, venture recognition, and star entertainment.
            </p>
          </div>
        </Reveal>

        {/* 4 Value Proposition Cards Grid */}
        <div className="why-cards-grid">
          {reasons.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <Reveal key={item.idx} direction="up" delay={idx * 0.1}>
                <motion.div
                  className="why-panel-card future-card"
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="why-card-top-row">
                    <span className="why-idx-label" style={{ color: item.color }}>{item.idx}</span>
                    <div className="why-icon-halo" style={{ borderColor: item.color }}>
                      <ItemIcon size={20} style={{ color: item.color }} />
                    </div>
                  </div>

                  <span className="why-highlight-pill" style={{ color: item.color, borderColor: `${item.color}40` }}>
                    {item.highlight}
                  </span>

                  <h3 className="why-panel-title">{item.title}</h3>
                  <p className="why-panel-desc">{item.desc}</p>

                  <div className="why-panel-check">
                    <CheckCircle2 size={14} style={{ color: item.color }} />
                    <span>Open to All University Students</span>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
