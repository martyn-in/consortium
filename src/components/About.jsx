import { motion } from 'framer-motion';
import { Cpu, Bot, Rocket, ShieldCheck, Activity, Terminal, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import { sound } from '../utils/soundEffects';
import './About.css';

const pillars = [
  {
    title: 'Autonomous AI & Generative Agents',
    desc: '48-hour continuous build sprint pushing frontier LLM agents, multi-modal frameworks, and high-throughput systems evaluated by Silicon Valley engineers.',
    icon: Cpu,
    tag: 'FLAGSHIP TRACK',
    color: '#00eaff'
  },
  {
    title: 'Titanium Combat Robotics & Drones',
    desc: 'High-kinetic pneumatic flippers and 30KG steel spinners in armored battle cages, alongside precision autonomous FPV obstacle flight circuits.',
    icon: Bot,
    tag: 'HARDWARE TRACK',
    color: '#7b4dff'
  },
  {
    title: 'VC Grants & Fast-Track Incubation',
    desc: 'Showcase functioning prototypes directly to active tech founders, angel syndicates, and national accelerators with ₹10L+ in immediate prizes.',
    icon: Rocket,
    tag: 'VENTURE TRACK',
    color: '#67f2ff'
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={30}>
          <div className="about-header-block">
            <div className="futuristic-tagline-badge">
              <Activity size={13} className="text-cyan" />
              <span>THE ARCHITECTURE OF INNOVATION</span>
            </div>
            <h2 className="section-heading">About Consortium</h2>
            <div className="futuristic-divider">
              <span className="divider-diamond-cyan">❖</span>
            </div>
            <p className="about-subtext">
              Where India&apos;s most relentless engineers, developers, and makers converge to turn speculative concepts into production-grade systems.
            </p>
          </div>
        </Reveal>

        {/* Split Layout: Left Visual HUD Panel + Right Content */}
        <div className="about-split-layout">
          {/* LEFT: Premium Holographic Visual Panel */}
          <Reveal direction="right" distance={40} className="about-visual-column">
            <div className="about-holographic-panel aura-glow-border">
              {/* Animated Light Sweep & Radar Scanline */}
              <div className="hud-scanline" />

              {/* Top Telemetry Header */}
              <div className="hud-top-bar">
                <div className="hud-terminal-pill">
                  <Terminal size={13} className="text-cyan" />
                  <span>CONSORTIUM_CORE_V2.6</span>
                </div>
                <div className="hud-status-badge">
                  <span className="status-ping-dot" />
                  <span>ONLINE // 142.8 THz</span>
                </div>
              </div>

              {/* Center Holographic Reactor Orb */}
              <div className="hud-reactor-center">
                <div className="hud-ring ring-outer" />
                <div className="hud-ring ring-mid" />
                <div className="hud-ring ring-inner" />
                <div className="hud-core-orb">
                  <Cpu size={36} className="text-cyan" />
                </div>
                <div className="hud-rotating-beam" />
              </div>

              {/* Telemetry Diagnostics Grid */}
              <div className="hud-diagnostics-grid">
                <div className="hud-diag-box">
                  <span className="diag-label">SYSTEM LATENCY</span>
                  <span className="diag-val text-cyan">&lt; 0.42 ms</span>
                </div>
                <div className="hud-diag-box">
                  <span className="diag-label">CONCURRENCY</span>
                  <span className="diag-val text-violet">5,000+ NODES</span>
                </div>
                <div className="hud-diag-box">
                  <span className="diag-label">CAMPUS SEAL</span>
                  <span className="diag-val text-cyan">NAAC A++</span>
                </div>
                <div className="hud-diag-box">
                  <span className="diag-label">INTEGRITY</span>
                  <span className="diag-val text-silver">99.98% OPT</span>
                </div>
              </div>

              {/* Bottom Security / Accreditation Chip */}
              <div className="hud-seal-bar">
                <ShieldCheck size={16} className="text-cyan flex-shrink-0" />
                <span>Hosted at Institute of Aeronautical Engineering, Hyderabad</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Content & Structured Glass Containers */}
          <div className="about-content-column">
            <Reveal direction="left" distance={30} delay={0.1}>
              <div className="about-manifesto-box aura-glow-border" style={{ padding: '1.8rem 2rem' }}>
                <h3 className="about-manifesto-title">
                  Engineered for the Uncompromising
                </h3>
                <p className="about-manifesto-lead">
                  Consortium is not just a campus fest — it is a national proving ground. Over two intensive days, teams battle through sleepless algorithmic sprints, high-voltage robotic combat arenas, and high-impact venture pitches.
                </p>
              </div>
            </Reveal>

            {/* 3 Structured Glass Containers */}
            <div className="about-pillars-stack">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} direction="up" delay={0.2 + idx * 0.1} distance={25}>
                    <motion.div 
                      className="about-glass-card aura-glow-border"
                      style={{ '--beam-delay': `${-(idx * 1.1)}s` }}
                      whileHover={{ x: 6, transition: { duration: 0.25 } }}
                      onMouseEnter={() => sound.playHover()}
                    >
                      <div className="card-accent-strip" style={{ backgroundColor: pillar.color }} />
                      <div className="glass-card-inner">
                        <div className="glass-card-header">
                          <div className="pillar-icon-shell" style={{ borderColor: `${pillar.color}50` }}>
                            <Icon size={20} style={{ color: pillar.color }} />
                          </div>
                          <div>
                            <span className="glass-pillar-tag" style={{ color: pillar.color }}>{pillar.tag}</span>
                            <h4 className="glass-pillar-title">{pillar.title}</h4>
                          </div>
                        </div>
                        <p className="glass-pillar-desc">{pillar.desc}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

            {/* Action Button */}
            <Reveal direction="up" delay={0.5} distance={20}>
              <div className="about-cta-action">
                <Button
                  variant="secondary"
                  href="#events"
                  onClick={() => sound.playClick()}
                >
                  <span>EXPLORE ALL EVENT TRACKS</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
