import { useState } from 'react';
import { motion } from 'framer-motion';
import { eventsList } from '../data/eventsData';
import { sound } from '../utils/soundEffects';
import EventBentoGrid from './EventBentoGrid';
import EventDetailModal from './EventDetailModal';
import PaperPresentationModal from './PaperPresentationModal';
import PosterPresentationModal from './PosterPresentationModal';
import './Events.css';

const GOOGLE_FORM_URL = 'https://forms.gle/consortium2026';

export default function Events() {
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const filteredEvents = eventsList;

  const handleOpenDetails = (event) => {
    sound.playClick();
    // Route poster-presentations to its dedicated premium modal
    if (event.isSpecialPosterFlow) {
      setIsPosterModalOpen(true);
    } else {
      setActiveModalEvent(event);
    }
  };

  const handleCloseDetailModal = () => {
    setActiveModalEvent(null);
  };

  const handleClosePaperModal = () => {
    setIsPaperModalOpen(false);
  };

  const handleClosePosterModal = () => {
    setIsPosterModalOpen(false);
  };

  const handleRegister = (event) => {
    sound.playClick();
    const url = event?.registrationUrl || GOOGLE_FORM_URL;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Snappy transition variants for Events Section (Zero lag, no blur)
  const sectionIntroVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="events" className="events-arena-section">
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
      <EventDetailModal
        event={activeModalEvent}
        isOpen={Boolean(activeModalEvent)}
        onClose={handleCloseDetailModal}
        onRegister={handleRegister}
      />

      {/* Special Paper Presentation Department Selector Modal */}
      <PaperPresentationModal
        isOpen={isPaperModalOpen}
        onClose={handleClosePaperModal}
        onRegister={handleRegister}
      />

      {/* Special Poster Presentation Modal (ECE) */}
      <PosterPresentationModal
        isOpen={isPosterModalOpen}
        onClose={handleClosePosterModal}
      />
    </section>
  );
}
