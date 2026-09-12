import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Bot, Radio, Gamepad2, Crosshair, Clapperboard, Camera } from 'lucide-react';
import EventCard from './EventCard';
import Reveal from './common/Reveal';
import { sound } from '../utils/soundEffects';
import './Events.css';

const eventsData = [
  {
    title: 'Neural 24H Hackathon',
    category: 'Coding & AI',
    tag: 'Flagship Event',
    description: 'A 24-hour hackathon to build cutting-edge software solutions in Generative AI, Web3, or Sustainable Tech with industry mentorship.',
    prize: '₹60,000',
    team: 'Team of 2-4',
    venue: 'CSE Supercomputing Lab',
    Icon: Terminal,
    theme: 'cyan'
  },
  {
    title: 'Algorithmic Speed Duel',
    category: 'Coding & AI',
    tag: 'Competitive Coding',
    description: 'Time-bounded coding showdown testing data structures, dynamic programming algorithms, and problem-solving speed under pressure.',
    prize: '₹35,000',
    team: 'Individual',
    venue: 'Computing Wing B',
    Icon: Code,
    theme: 'purple'
  },
  {
    title: 'RoboWars: Clash of Titans',
    category: 'Robotics & Hardware',
    tag: 'Battle Arena',
    description: 'Combat robotics tournament for wired and wireless bots up to 15-30kg. Steel arena, live scoring, flip and wedge showdowns.',
    prize: '₹75,000',
    team: 'Team of 2-5',
    venue: 'Open Battle Arena',
    Icon: Bot,
    theme: 'pink'
  },
  {
    title: 'Autonomous Drone Obstacle Race',
    category: 'Robotics & Hardware',
    tag: 'Aero Track',
    description: 'Precision drone racing through high-speed illuminated obstacle courses, featuring both pilot-controlled and autonomous navigation rounds.',
    prize: '₹40,000',
    team: 'Team of 1-3',
    venue: 'IARE Flight Deck',
    Icon: Radio,
    theme: 'cyan'
  },
  {
    title: 'Valorant Championship',
    category: 'Esports',
    tag: 'LAN Tournament',
    description: '5v5 competitive LAN tournament featuring group stages and knockouts with live stage streaming and professional casting.',
    prize: '₹35,000',
    team: 'Squad of 5',
    venue: 'Auditorium Lounge',
    Icon: Gamepad2,
    theme: 'gold'
  },
  {
    title: 'BGMI Mobile Showdown',
    category: 'Esports',
    tag: 'Battle Royale',
    description: 'National college squad tournament across Erangel and Miramar. Custom rooms with strict anti-cheat and competitive scoring matrices.',
    prize: '₹25,000',
    team: 'Squad of 4',
    venue: 'Media Studio Alpha',
    Icon: Crosshair,
    theme: 'purple'
  },
  {
    title: 'Short Film Competition',
    category: 'Creative Media',
    tag: 'Film & Media',
    description: 'Screening and judging of student short films and cinematic documentaries on the main auditorium 4K screen.',
    prize: '₹25,000',
    team: 'Crew of 1-4',
    venue: 'Auditorium Cine-Hall',
    Icon: Clapperboard,
    theme: 'pink'
  },
  {
    title: 'Campus Photography Sprint',
    category: 'Creative Media',
    tag: 'Photo Contest',
    description: 'Capture the visual essence, candid emotions, and neon night atmosphere of Consortium 2026 across the IARE campus.',
    prize: '₹15,000',
    team: 'Individual',
    venue: 'Campus Wide',
    Icon: Camera,
    theme: 'cyan'
  }
];

const categories = ['All Events', 'Coding & AI', 'Robotics & Hardware', 'Esports', 'Creative Media'];

const Events = ({ onOpenPassModal }) => {
  const [activeCategory, setActiveCategory] = useState('All Events');

  const filteredEvents = activeCategory === 'All Events'
    ? eventsData
    : eventsData.filter((event) => event.category === activeCategory);

  const handleCategoryChange = (cat) => {
    sound.playHover();
    setActiveCategory(cat);
  };

  const handleSelectEvent = (_event) => {
    onOpenPassModal();
  };

  return (
    <section id="events" className="events-pro-section">
      <div className="container">
        {/* Section Header with Scroll Reveal */}
        <Reveal direction="up" distance={30}>
          <div className="events-header-block">
            <div className="section-tagline">
              <span>COMPETITIONS &amp; CHALLENGES</span>
            </div>
            <h2 className="section-heading">Featured Events</h2>
            <p className="events-subtext">
              Compete across diverse tracks spanning software engineering, robotics, gaming, and multimedia.
              Win cash prizes, merit trophies, and national recognition.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Pills */}
        <Reveal direction="up" delay={0.15} distance={20}>
          <div className="category-filter-container">
            <div className="category-filter-track">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`category-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Events Grid with Staggered Mount Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="events-cards-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredEvents.map((event, index) => (
              <EventCard 
                key={event.title}
                index={index}
                event={event}
                onSelectEvent={handleSelectEvent}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;
