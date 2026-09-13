import { motion } from 'framer-motion';
import { Gamepad2, Lightbulb, Users, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import './WhyConsortium.css';

const pillars = [
  {
    icon: Gamepad2,
    title: 'COMPETE',
    desc: 'Face the best. Prove your skill.',
    accent: '#ef24ff'
  },
  {
    icon: Lightbulb,
    title: 'LEARN',
    desc: 'Gain insights from industry experts.',
    accent: '#00eaff'
  },
  {
    icon: Users,
    title: 'NETWORK',
    desc: 'Connect with like-minded peers.',
    accent: '#8a36ff'
  },
  {
    icon: Rocket,
    title: 'GROW',
    desc: 'Turn your passion into opportunities.',
    accent: '#00eaff'
  }
];

export default function WhyConsortium() {
  return (
    <section id="about" className="why-consortium-section">
      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={25}>
          <div className="why-header-block">
            <span className="why-kicker">— WHY CONSORTIUM? —</span>
            <h2 className="why-main-title">
              IT&apos;S MORE THAN A <span className="why-title-brush">FEST</span>
            </h2>
          </div>
        </Reveal>

        {/* 4 Cards Matrix Grid */}
        <div className="why-pillars-grid">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <Reveal key={pillar.title} direction="up" distance={25} delay={index * 0.1}>
                <motion.div 
                  className="why-pillar-card aura-glow-border"
                  style={{ '--beam-delay': `${-(index * 0.95)}s` }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="pillar-corner-tl" />
                  <div className="pillar-corner-br" />

                  <div className="pillar-icon-shell" style={{ borderColor: `${pillar.accent}60` }}>
                    <PillarIcon size={26} style={{ color: pillar.accent }} />
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
