import { motion } from 'framer-motion';
import Reveal from './Reveal';
import './WhyConsortium.css';

const pillars = [
  {
    emoji: '⚔️',
    title: 'COMPETE',
    desc: 'Face the finest engineering minds. Test your skill & win.',
    accent: '#E5092E',
    deep: '#8B0018',
    bg: 'rgba(255, 241, 242, 0.95)',
    border: 'rgba(229, 9, 46, 0.28)',
    glow: 'rgba(229, 9, 46, 0.18)'
  },
  {
    emoji: '💡',
    title: 'LEARN',
    desc: 'Gain deep practical insights from industry & jury experts.',
    accent: '#10b981',
    deep: '#047857',
    bg: 'rgba(240, 253, 244, 0.95)',
    border: 'rgba(16, 185, 129, 0.28)',
    glow: 'rgba(16, 185, 129, 0.18)'
  },
  {
    emoji: '🤝',
    title: 'NETWORK',
    desc: 'Connect with 5,000+ innovators, coders & creators.',
    accent: '#f59e0b',
    deep: '#b45309',
    bg: 'rgba(255, 251, 235, 0.95)',
    border: 'rgba(245, 158, 11, 0.3)',
    glow: 'rgba(245, 158, 11, 0.18)'
  },
  {
    emoji: '🚀',
    title: 'GROW',
    desc: 'Turn technical passion into career-defining opportunities.',
    accent: '#8b5cf6',
    deep: '#6d28d9',
    bg: 'rgba(245, 243, 255, 0.95)',
    border: 'rgba(124, 58, 237, 0.28)',
    glow: 'rgba(124, 58, 237, 0.18)'
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
                  style={{ 
                    '--beam-delay': `${-(index * 0.95)}s`,
                    '--pillar-accent': pillar.accent,
                    '--pillar-deep': pillar.deep,
                    '--pillar-bg': pillar.bg,
                    '--pillar-border': pillar.border,
                    '--pillar-glow': pillar.glow
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="pillar-icon-shell">
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
