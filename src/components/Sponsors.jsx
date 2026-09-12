import { motion } from 'framer-motion';
import { Sparkles, Building2, Mail, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import { sound } from '../utils/soundEffects';
import './Sponsors.css';

const Sponsors = () => {
  const titlePartner = {
    name: 'AWS Cloud & AI Academy',
    tier: 'ROYAL TITLE ALLIANCE',
    desc: 'Empowering Consortium 2026 participants with high-performance cloud compute, AI acceleration, and jury mentorship.',
    domain: 'Cloud Architecture & Applied Machine Learning'
  };

  const majorPartners = [
    { name: 'GitHub Campus', role: 'Official Developer Platform', domain: 'Student Developer Pack & Hackathons' },
    { name: 'Intel Student Community', role: 'Hardware & AI Partner', domain: 'Edge Computing & AI Accelerators' },
    { name: 'Red Bull', role: 'Official Energy Partner', domain: 'Battle Arena & Esports Energy' }
  ];

  const marqueePartners = [
    'MongoDB Atlas',
    'Postman',
    'Devpost',
    'HackerEarth',
    'Polygon Labs',
    'GeeksforGeeks',
    'Replit',
    'Unstop',
    'Vercel Edge',
    'Taskade AI'
  ];

  return (
    <section id="sponsors" className="royal-sponsors-section">
      <div className="container">
        {/* Section Header with Reveal */}
        <Reveal direction="up" distance={30}>
          <div className="sponsors-header-block">
            <div className="section-tagline">
              <span>IMPERIAL INDUSTRY PATRONS</span>
            </div>
            <h2 className="section-heading">Strategic Alliances</h2>
            <div className="royal-gold-divider">
              <span className="divider-diamond">❖</span>
            </div>
            <p className="sponsors-subtext">
              Consortium 2026 is championed by global technology corporations and developer ecosystems 
              committed to accelerating exceptional student ingenuity.
            </p>
          </div>
        </Reveal>

        {/* Title Partner Spotlight Glass Showcase Card */}
        <Reveal direction="up" delay={0.15} distance={40}>
          <motion.div 
            className="royal-title-spotlight luxury-card"
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            onMouseEnter={() => sound.playHover()}
          >
            <div className="title-tier-badge">
              <Sparkles size={14} className="text-gold" />
              <span>{titlePartner.tier}</span>
            </div>

            <h3 className="title-partner-heading text-gold">{titlePartner.name}</h3>
            <p className="title-partner-summary">{titlePartner.desc}</p>
            <span className="title-partner-tag">{titlePartner.domain}</span>
          </motion.div>
        </Reveal>

        {/* Major Partners Grid with Glass Containers */}
        <div className="royal-alliances-row">
          {majorPartners.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="royal-partner-card luxury-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onMouseEnter={() => sound.playHover()}
            >
              <span className="alliance-role">{item.role}</span>
              <h4 className="alliance-company">{item.name}</h4>
              <span className="alliance-domain">{item.domain}</span>
            </motion.div>
          ))}
        </div>

        {/* Infinite Smooth Logo Marquee with Glass Containers */}
        <Reveal direction="up" delay={0.2} distance={30}>
          <div className="royal-marquee-wrap">
            <div className="marquee-label-row">
              <Building2 size={15} className="text-gold" />
              <span>ECOSYSTEM &amp; PLATFORM PARTNERS</span>
            </div>

            <div className="marquee-track-container">
              {[1, 2, 3].map((set) => (
                <div key={set} className="marquee-items-stream">
                  {marqueePartners.map((company, index) => (
                    <div 
                      key={`${set}-${index}`} 
                      className="royal-marquee-chip luxury-card"
                      onMouseEnter={() => sound.playHover()}
                    >
                      <span className="marquee-gold-bullet">✦</span>
                      <span className="marquee-chip-name">{company}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Royal Partnership Outreach Banner */}
        <Reveal direction="up" delay={0.25} distance={30}>
          <div className="royal-sponsor-cta luxury-card">
            <div className="sponsor-cta-text">
              <h4>Partner with CONSORTIUM 2026</h4>
              <p>Connect with 5,000+ top engineers, showcase platforms, and discover elite technical talent.</p>
            </div>
            <Button
              variant="primary"
              href="mailto:consortium@iare.ac.in"
              onClick={() => sound.playClick()}
            >
              <Mail size={16} />
              <span>sponsor@iare.ac.in</span>
              <ExternalLink size={14} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sponsors;
