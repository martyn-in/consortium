import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, Sparkles, Trophy } from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './Schedule.css';

const scheduleData = {
  day1: [
    { 
      time: '09:00 AM - 10:30 AM', 
      title: 'Grand Inaugural Ceremony & Presidential Address', 
      location: 'IARE Grand Imperial Auditorium', 
      tag: 'Royal Protocol', 
      badge: 'Inaugural Gala' 
    },
    { 
      time: '11:00 AM', 
      title: 'Neural 24H AI Hackathon: Problem Statements Released', 
      location: 'CSE Supercomputing Sovereign Lab', 
      tag: 'National Hackathon', 
      badge: '₹1.5 Lakh Track' 
    },
    { 
      time: '01:00 PM - 02:00 PM', 
      title: 'Royal Luncheon & High-Tech Project Exposition', 
      location: 'Palace Courtyard & Tech Atrium', 
      tag: 'Networking Banquet', 
      badge: 'VIP Showcase' 
    },
    { 
      time: '02:30 PM - 05:00 PM', 
      title: 'Titanium RoboWars: Heavyweight Knockout Rounds', 
      location: 'Imperial Colosseum Arena', 
      tag: 'Combat Robotics', 
      badge: '₹1.0 Lakh Arena' 
    },
    { 
      time: '03:30 PM - 05:30 PM', 
      title: 'Algorithmic Speed Duel: High-Frequency Coding Trials', 
      location: 'Supercomputing Wing', 
      tag: 'Competitive Dev', 
      badge: 'Grand Trial' 
    },
    { 
      time: '07:00 PM - 09:30 PM', 
      title: 'Celebrity Symphony, EDM Pro-Show & Cultural Extravaganza', 
      location: 'IARE Royal Open Grounds', 
      tag: 'Star Night', 
      badge: 'Pro-Show Gala' 
    },
  ],
  day2: [
    { 
      time: '09:00 AM - 11:00 AM', 
      title: 'Hackathon Grand Jury Pitching & Venture Evaluations', 
      location: 'Executive Boardroom & Hall 1', 
      tag: 'Venture Pitch', 
      badge: 'Jury Review' 
    },
    { 
      time: '10:30 AM - 01:00 PM', 
      title: 'Autonomous Drone Grand Prix: Obstacle Supremacy', 
      location: 'IARE Aerial Flight Deck', 
      tag: 'Aero Robotics', 
      badge: 'Grand Finals' 
    },
    { 
      time: '11:30 AM - 02:30 PM', 
      title: 'Valorant & BGMI Sovereign Esports Finale', 
      location: 'Esports Cyber Coliseum Stage', 
      tag: 'Cyber League', 
      badge: 'National Title' 
    },
    { 
      time: '02:30 PM - 04:30 PM', 
      title: 'RoboWars Grand Championship Deathmatch', 
      location: 'Imperial Colosseum Arena', 
      tag: 'Championship', 
      badge: 'The Final Clash' 
    },
    { 
      time: '04:30 PM - 05:30 PM', 
      title: 'Cinematic Short Film Premiere & Director Honors', 
      location: 'Auditorium Cine-Palace', 
      tag: 'Cine Arts', 
      badge: 'Gold Laurels' 
    },
    { 
      time: '06:00 PM - 08:00 PM', 
      title: 'Valedictory Gala & ₹10,00,000 Total Prize Investiture', 
      location: 'IARE Grand Imperial Auditorium', 
      tag: 'Investiture', 
      badge: '₹10L Prize Pool' 
    },
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const handleTabChange = (day) => {
    sound.playClick();
    setActiveDay(day);
  };

  return (
    <section id="schedule" className="schedule-pro-section">
      <div className="container">
        {/* Section Header with Reveal */}
        <Reveal direction="up" duration={0.8}>
          <div className="schedule-header-block">
            <div className="royal-badge-gold">
              <Sparkles size={13} />
              <span>IMPERIAL CONCLAVE TIMELINE</span>
            </div>
            <h2 className="schedule-main-heading">
              Festival <span className="gold-shimmer-text">Itinerary</span>
            </h2>
            <p className="schedule-subtext">
              Two days of unrelenting technological combat, venture pitch competitions, 
              heavyweight robotics clash, and prestigious national investiture ceremonies.
            </p>
          </div>
        </Reveal>

        {/* Phase Tabs */}
        <Reveal direction="up" delay={0.15}>
          <div className="schedule-tabs-container">
            <motion.button 
              className={`schedule-tab-btn ${activeDay === 'day1' ? 'active' : ''}`}
              onClick={() => handleTabChange('day1')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar size={16} /> Day 1 • October 15 (Thursday)
            </motion.button>
            <motion.button 
              className={`schedule-tab-btn ${activeDay === 'day2' ? 'active' : ''}`}
              onClick={() => handleTabChange('day2')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar size={16} /> Day 2 • October 16 (Friday)
            </motion.button>
          </div>
        </Reveal>

        {/* Timeline Grid with AnimatePresence */}
        <div className="pro-timeline-container">
          <div className="timeline-center-spine" />

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeDay}
              className="timeline-flow-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {scheduleData[activeDay].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="timeline-flow-item"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onMouseEnter={() => sound.playHover()}
                >
                  {/* Center Node Pin */}
                  <div className="timeline-node-pin">
                    <div className="node-inner-dot"></div>
                  </div>

                  {/* Card */}
                  <div className="timeline-entry-card luxury-glass-card">
                    <div className="entry-card-header">
                      <span className="entry-time">
                        <Clock size={13} className="time-clock-icon" /> {item.time}
                      </span>
                      <span className="entry-status-badge">
                        <Trophy size={11} className="badge-icon-trophy" />
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="entry-title">{item.title}</h3>

                    <div className="entry-card-footer">
                      <div className="entry-location">
                        <MapPin size={13} className="loc-icon" />
                        <span>{item.location}</span>
                      </div>
                      <span className="entry-tag-label">{item.tag}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
