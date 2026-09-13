import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './Schedule.css';

const scheduleData = {
  day1: [
    { 
      time: '09:30 AM - 10:30 AM', 
      title: 'Inaugural Keynote & Summit Kickoff', 
      location: 'Main Auditorium', 
      tag: 'Keynote'
    },
    { 
      time: '11:00 AM', 
      title: 'Neural 24H AI Hackathon Commences', 
      location: 'Computing Lab 01', 
      tag: 'Hackathon'
    },
    { 
      time: '02:00 PM - 05:00 PM', 
      title: 'RoboWars Heavyweight Knockout Prelims', 
      location: 'Battle Arena Alpha', 
      tag: 'Robotics'
    },
    { 
      time: '03:30 PM - 05:30 PM', 
      title: 'Algorithmic Speed Duel Round 1', 
      location: 'Computing Lab 02', 
      tag: 'Coding'
    },
    { 
      time: '07:30 PM - 10:00 PM', 
      title: 'Tech Expo & Live EDM Concert', 
      location: 'Campus Open Grounds', 
      tag: 'Pro-Show'
    }
  ],
  day2: [
    { 
      time: '09:30 AM - 11:30 AM', 
      title: 'Hackathon Grand Jury Demos & VC Pitches', 
      location: 'Main Auditorium', 
      tag: 'Demos'
    },
    { 
      time: '11:30 AM - 01:30 PM', 
      title: 'Autonomous Drone Grand Prix Finals', 
      location: 'Flight Test Deck', 
      tag: 'Robotics'
    },
    { 
      time: '02:00 PM - 04:00 PM', 
      title: 'RoboWars Grand Championship Deathmatch', 
      location: 'Battle Arena Alpha', 
      tag: 'Championship'
    },
    { 
      time: '04:00 PM - 06:00 PM', 
      title: 'Esports LAN Finals: Valorant & BGMI', 
      location: 'Esports Mainstage', 
      tag: 'Esports'
    },
    { 
      time: '06:30 PM - 08:30 PM', 
      title: 'Grand Valedictory & ₹10,00,000 Prize Ceremony', 
      location: 'Main Auditorium', 
      tag: 'Awards'
    }
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const handleDayChange = (day) => {
    sound.playHover();
    setActiveDay(day);
  };

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <Reveal direction="up" distance={30}>
          <div className="schedule-header-block">
            <span className="schedule-kicker">SUMMIT TIMELINE</span>
            <h2 className="schedule-title">Event Schedule</h2>
            <p className="schedule-lead">
              Two action-packed days of non-stop hacking, combat robotics, and national championship showcases.
            </p>
          </div>
        </Reveal>

        {/* Day Switcher */}
        <div className="schedule-tabs-wrap">
          <div className="schedule-tabs-pill">
            <button
              className={`schedule-day-btn ${activeDay === 'day1' ? 'active' : ''}`}
              onClick={() => handleDayChange('day1')}
            >
              DAY 01 • OCT 15
            </button>
            <button
              className={`schedule-day-btn ${activeDay === 'day2' ? 'active' : ''}`}
              onClick={() => handleDayChange('day2')}
            >
              DAY 02 • OCT 16
            </button>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="schedule-timeline-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="schedule-items-list"
            >
              {scheduleData[activeDay].map((item, idx) => (
                <div key={idx} className="timeline-glass-card">
                  <div className="timeline-time-col">
                    <Clock size={14} className="timeline-clock-icon" />
                    <span>{item.time}</span>
                  </div>

                  <div className="timeline-main-col">
                    <div className="timeline-title-row">
                      <h4 className="timeline-item-title">{item.title}</h4>
                      <span className="timeline-tag">{item.tag}</span>
                    </div>

                    <div className="timeline-loc-row">
                      <MapPin size={13} className="timeline-loc-icon" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
