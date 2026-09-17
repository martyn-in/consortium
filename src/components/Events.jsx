import { useState } from 'react';
import { motion } from 'framer-motion';
import { eventsList } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import EventBentoGrid from './EventBentoGrid';
import EventDetailModal from './EventDetailModal';
import PaperPresentationModal from './PaperPresentationModal';
import './Events.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

export default function Events() {
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);

  const filteredEvents = eventsList;

  const handleOpenDetails = (event) => {
    sound.playClick();
    setActiveModalEvent(event);
  };

  const handleCloseDetailModal = () => {
    setActiveModalEvent(null);
  };

  const handleClosePaperModal = () => {
    setIsPaperModalOpen(false);
  };

  const handleRegister = (_event) => {
    sound.playClick();
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  // Transition variants from Hero to Events
  const sectionIntroVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="events" className="events-arena-section">
      {/* Seamless Ambient Gradient Bridge from Hero */}
      <div className="events-arena-glow-bridge" />

      <div className="events-arena-container">

        {/* 1. Section Introduction with Clean Heading */}
        <motion.div 
          className="events-arena-header"
          variants={sectionIntroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="events-arena-title">
            EVENTS
          </motion.h2>
        </motion.div>

        {/* 2. All 10 Events Grid Display (Direct Grid Format) */}
        <div className="events-grid-wrapper">
          <EventBentoGrid
            events={filteredEvents}
            onOpenDetails={handleOpenDetails}
            onRegister={handleRegister}
          />
        </div>



      </div>

      {/* Standard Detail Modal for Events */}
      {activeModalEvent && (
        <EventDetailModal
          event={activeModalEvent}
          isOpen={Boolean(activeModalEvent)}
          onClose={handleCloseDetailModal}
          onRegister={handleRegister}
        />
      )}

      {/* Special Paper Presentation Department Selector Modal */}
      <PaperPresentationModal
        isOpen={isPaperModalOpen}
        onClose={handleClosePaperModal}
        onRegister={handleRegister}
      />
    </section>
  );
}
