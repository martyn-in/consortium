import { motion } from 'framer-motion';
import { ShieldCheck, Award, Cpu, Users, ChevronRight, CheckCircle2, Sparkles, Building, Globe } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import { sound } from '../utils/soundEffects';
import './About.css';

const About = ({ onOpenPassModal }) => {
  const pillars = [
    {
      idx: 'I',
      title: 'High-Stakes Hackathons',
      desc: '24-hour sprint in autonomous AI, Web3, and cloud systems with industry mentorship.',
      icon: Cpu
    },
    {
      idx: 'II',
      title: 'Autonomous Robotics & Arena',
      desc: 'RoboWars battle cages, drone obstacle racing, and automated line trackers.',
      icon: Award
    },
    {
      idx: 'III',
      title: 'Executive Masterclasses',
      desc: 'Keynotes and venture mentorship from tech leaders, researchers, and founders.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="royal-about-section">
      <div className="container">
        {/* Section Header with Reveal */}
        <Reveal direction="up" distance={30}>
          <div className="about-header-block">
            <div className="section-tagline">
              <span>ROYAL INSTITUTIONAL LEGACY</span>
            </div>
            <h2 className="section-heading">Architects of Innovation</h2>
            <div className="royal-gold-divider">
              <span className="divider-diamond">❖</span>
            </div>
          </div>
        </Reveal>

        {/* Split Layout: Left Visual Card | Right Editorial Content */}
        <div className="royal-about-split">
          {/* Left Column: Premium 3D Animated Visual / Imperial Crest Card */}
          <Reveal direction="right" distance={40} className="about-split-left">
            <motion.div 
              className="imperial-showcase-card luxury-card"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onMouseEnter={() => sound.playHover()}
            >
              <div className="imperial-glow-halo" />
              
              {/* Top Crest */}
              <div className="imperial-crest-top">
                <span className="crest-tag">
                  <ShieldCheck size={15} /> HOST HEADQUARTERS
                </span>
                <span className="imperial-star">✦</span>
              </div>

              {/* Institution Title */}
              <h3 className="imperial-inst-title">
                Institute of Aeronautical Engineering
              </h3>
              <p className="imperial-location">
                <Building size={15} className="text-gold" /> Dundigal Road, Hyderabad • Autonomous
              </p>

              {/* Golden Seals / Badges Grid */}
              <div className="imperial-badges-row">
                <div className="imperial-badge-box">
                  <strong className="badge-big-stat text-gold">A++</strong>
                  <span className="badge-sub">NAAC ACCREDITED</span>
                </div>
                <div className="imperial-badge-box">
                  <strong className="badge-big-stat text-gold">Top 150</strong>
                  <span className="badge-sub">NIRF RANKING BAND</span>
                </div>
                <div className="imperial-badge-box">
                  <strong className="badge-big-stat text-gold">10+</strong>
                  <span className="badge-sub">EXCELLENCE LABS</span>
                </div>
              </div>

              {/* Floating Orbit Graphic */}
              <div className="imperial-orbit-wrap">
                <div className="orbit-center-icon">
                  <Globe size={26} className="text-gold" />
                </div>
                <motion.div 
                  className="orbit-ring ring-1"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                />
                <motion.div 
                  className="orbit-ring ring-2"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                />
              </div>

              <div className="imperial-footer-note">
                <Sparkles size={14} className="text-gold" />
                <span>Premier Aeronautical &amp; Computing Institution in Telangana</span>
              </div>
            </motion.div>
          </Reveal>

          {/* Right Column: Editorial Narrative & Pillars */}
          <Reveal direction="left" distance={40} className="about-split-right">
            <div className="royal-narrative-content">
              <span className="editorial-eyebrow">A CENTURY OF VISION</span>
              <h3 className="royal-content-title">
                Where Academic Majesty Meets Futuristic Technology
              </h3>
              
              <div className="royal-gold-line" />

              <p className="royal-paragraph">
                CONSORTIUM is the crown jewel of national technical festivals hosted by the 
                <strong> Institute of Aeronautical Engineering (IARE)</strong>, Hyderabad. Designed as a cyber royal 
                arena, it convenes over 5,000 elite developers, autonomous robot builders, esports gladiators, 
                and creative directors from over 50 universities across the nation.
              </p>

              {/* 3 Pillars List */}
              <div className="royal-pillars-stack">
                {pillars.map((p) => {
                  const PIcon = p.icon;
                  return (
                    <motion.div 
                      key={p.idx} 
                      className="royal-pillar-row"
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    >
                      <div className="pillar-roman-num">{p.idx}</div>
                      <div className="pillar-icon-shield">
                        <PIcon size={18} className="text-gold" />
                      </div>
                      <div className="pillar-text-group">
                        <h4 className="pillar-heading">{p.title}</h4>
                        <p className="pillar-detail">{p.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Gold Action Strip */}
              <div className="royal-about-cta-bar">
                <Button
                  variant="primary"
                  onClick={() => {
                    sound.playClick();
                    onOpenPassModal();
                  }}
                >
                  <span>REGISTER FOR CONCLAVE</span>
                  <ChevronRight size={18} />
                </Button>

                <div className="about-verified-pill">
                  <CheckCircle2 size={16} className="text-gold" />
                  <span>Open for All Engineering Colleges</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
