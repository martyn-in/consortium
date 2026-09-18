import { motion } from 'framer-motion';
import Reveal from './Reveal';
import './WhyConsortium.css';

const pillars = [
  {
    emoji: '⚔️',
    title: 'COMPETE',
    desc: 'Face the finest engineering minds. Test your skill & win.',
    accent: '#00e5ff'
  },
  {
    emoji: '💡',
    title: 'LEARN',
    desc: 'Gain deep practical insights from industry & jury experts.',
    accent: '#38bdf8'
  },
  {
    emoji: '🤝',
    title: 'NETWORK',
    desc: 'Connect with 5,000+ innovators, coders & creators.',
    accent: '#0ea5e9'
  },
  {
    emoji: '🚀',
    title: 'GROW',
    desc: 'Turn technical passion into career-defining opportunities.',
    accent: '#06b6d4'
  }
];

export default function WhyConsortium() {
  return (
    <section id="why-consortium" className="why-consortium-section">
      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={25}>
          <div className="why-header-block">
            <span className="why-kicker">— 🌟 WHY CONSORTIUM? —</span>
            <h2 className="why-main-title">
              IT&apos;S MORE THAN A <span className="why-title-brush">FEST</span>
            </h2>
          </div>
        </Reveal>

        {/* 4 Cards Matrix Grid */}
        <div className="why-pillars-grid">
          {pillars.map((pillar, index) => {
            return (
              <Reveal key={pillar.title} direction="up" distance={25} delay={index * 0.1}>
                <motion.div 
                  className="why-pillar-card aura-glow-border"
                  style={{ '--beam-delay': `${-(index * 0.95)}s` }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="pillar-icon-shell" style={{ borderColor: `${pillar.accent}60` }}>
                    <span className="pillar-real-emoji">{pillar.emoji}</span>
                  </div>

                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
