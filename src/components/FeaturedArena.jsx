import { motion } from 'framer-motion';
import { Bot, Terminal, Trophy, Users, MapPin, ArrowRight, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import { sound } from '../utils/soundEffects';
import './FeaturedArena.css';

const FeaturedArena = ({ onOpenPassModal }) => {
  const arenas = [
    {
      id: 'neural-hackathon',
      badge: 'FLAGSHIP 24H SPRINT',
      title: 'Neural 24H AI & Autonomous Systems Hackathon',
      tagline: 'All-India Inter-University Software Warfare',
      prize: '₹1,50,000',
      team: 'Squad of 2-4',
      venue: 'CSE Supercomputing Lab',
      desc: 'Build frontier autonomous agent architectures, multi-modal generative models, or decentralized cyber protocols under strict 24-hour evaluation by Silicon Valley founders.',
      icon: Terminal,
      themeColor: '#00eaff',
      accentGlow: 'rgba(0, 234, 255, 0.4)'
    },
    {
      id: 'robowars-titanium',
      badge: 'COMBAT ARENA',
      title: 'Titanium RoboWars: Heavyweight Clash',
      tagline: '30KG Pneumatic Flippers & High-RPM Spinners',
      prize: '₹1,00,000',
      team: 'Pit Crew of 3-5',
      venue: 'Open Armored Battle Arena',
      desc: 'The ultimate battleground of reinforced steel, hardened tungsten bars, and custom radio controllers. High-impact cage matches with live arena hazard traps.',
      icon: Bot,
      themeColor: '#7b4dff',
      accentGlow: 'rgba(123, 77, 255, 0.4)'
    }
  ];

  return (
    <section id="arena" className="featured-arena-section">
      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={30}>
          <div className="arena-header-block">
            <div className="futuristic-tagline-badge">
              <Flame size={13} className="text-cyan" />
              <span>FLAGSHIP COMBAT ARENA</span>
            </div>
            <h2 className="section-heading">Featured Arenas</h2>
            <div className="futuristic-divider">
              <span className="divider-diamond-cyan">❖</span>
            </div>
            <p className="arena-subtext">
              Consortium 2026 convenes the nation&apos;s fiercest programmers and roboticists in two headline arenas
              with over ₹2,50,000 in immediate cash prizes and venture grant opportunities.
            </p>
          </div>
        </Reveal>

        {/* Dual Arena Cockpit Cards */}
        <div className="arena-dual-grid">
          {arenas.map((arena, index) => {
            const ArenaIcon = arena.icon;
            return (
              <Reveal key={arena.id} direction={index === 0 ? 'right' : 'left'} delay={index * 0.15}>
                <motion.div 
                  className="arena-cockpit-card"
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onMouseEnter={() => sound.playHover()}
                >
                  {/* Glowing Edge Gradient */}
                  <div 
                    className="arena-glow-rim" 
                    style={{ background: `radial-gradient(350px circle at 50% 0%, ${arena.accentGlow}, transparent 70%)` }}
                  />

                  {/* Top Badge & Telemetry */}
                  <div className="arena-cockpit-top">
                    <div className="arena-badge-pill">
                      <Sparkles size={12} style={{ color: arena.themeColor }} />
                      <span>{arena.badge}</span>
                    </div>
                    <div className="arena-telemetry">
                      <span className="telemetry-dot" /> LIVE ARENA
                    </div>
                  </div>

                  {/* Main Icon & Title */}
                  <div className="arena-icon-header">
                    <div className="arena-icon-shell" style={{ borderColor: arena.themeColor }}>
                      <ArenaIcon size={28} style={{ color: arena.themeColor }} />
                    </div>
                    <div>
                      <h3 className="arena-title">{arena.title}</h3>
                      <span className="arena-tagline" style={{ color: arena.themeColor }}>{arena.tagline}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="arena-desc">{arena.desc}</p>

                  {/* Prize & Meta Specs Row */}
                  <div className="arena-specs-cockpit">
                    <div className="arena-prize-box">
                      <span className="arena-spec-lbl">ARENA PRIZE POOL</span>
                      <strong className="arena-prize-num" style={{ color: arena.themeColor }}>
                        <Trophy size={16} /> {arena.prize}
                      </strong>
                    </div>

                    <div className="arena-sub-specs">
                      <div className="spec-bullet">
                        <Users size={13} className="text-cyan" />
                        <span>{arena.team}</span>
                      </div>
                      <div className="spec-bullet">
                        <MapPin size={13} className="text-cyan" />
                        <span>{arena.venue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="arena-action-footer">
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={() => {
                        sound.playClick();
                        onOpenPassModal();
                      }}
                    >
                      <ShieldAlert size={15} />
                      <span>CLAIM ARENA ENTRY PASS</span>
                      <ArrowRight size={15} />
                    </Button>
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

export default FeaturedArena;
