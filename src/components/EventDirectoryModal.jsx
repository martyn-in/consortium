import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, RotateCcw, Sparkles } from 'lucide-react';
import { eventsList, categories } from '../data/eventsData';
import AuraEventCard from './AuraEventCard';
import { sound } from '../utils/soundEffects';
import './EventDirectoryModal.css';

export default function EventDirectoryModal({ 
  isOpen, 
  onClose, 
  onSelectEvent, 
  onViewDetails 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Events');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter events based on search and category
  const filteredEvents = eventsList.filter((event) => {
    const matchesCategory = 
      selectedCategory === 'All Events' || event.category === selectedCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    sound.playClick();
    setSearchQuery('');
    setSelectedCategory('All Events');
  };

  return (
    <AnimatePresence>
      <div className="directory-modal-overlay">
        <motion.div 
          className="directory-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
        />

        <motion.div 
          className="directory-modal-window"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="directory-modal-header">
            <div className="directory-title-area">
              <span className="directory-kicker">✦ COMPLETE EVENT DIRECTORY</span>
              <h2 className="directory-main-title">ALL 10 FESTIVAL EVENTS</h2>
              <p className="directory-subtext">
                Explore the complete authoritative event lineup for CONSORTIUM 2026.
              </p>
            </div>

            <button 
              className="directory-close-btn"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              aria-label="Close directory"
            >
              <X size={22} />
            </button>
          </div>

          {/* Search & Filter Controls Bar */}
          <div className="directory-controls-bar">
            {/* Search Input */}
            <div className="directory-search-input-wrap">
              <Search size={16} className="search-icon text-cyan" />
              <input
                type="text"
                placeholder="Search events by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="directory-search-input"
              />
              {searchQuery && (
                <button 
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="directory-category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`dir-cat-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    sound.playHover();
                    setSelectedCategory(cat);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reset Button */}
            {(searchQuery || selectedCategory !== 'All Events') && (
              <button 
                className="directory-reset-btn"
                onClick={handleResetFilters}
                title="Reset all filters"
              >
                <RotateCcw size={14} />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Directory Grid */}
          <div className="directory-grid-scroll">
            {filteredEvents.length > 0 ? (
              <div className="directory-cards-grid">
                {filteredEvents.map((event, index) => (
                  <AuraEventCard
                    key={event.id}
                    event={event}
                    index={index}
                    onSelectEvent={(evt) => {
                      onClose();
                      onSelectEvent(evt);
                    }}
                    onViewDetails={(evt) => {
                      onViewDetails(evt);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="directory-empty-state">
                <Sparkles size={36} className="text-cyan mb-2" />
                <h3>NO EVENTS MATCH YOUR SEARCH</h3>
                <p>Try adjusting your search terms or category filter to discover all 10 events.</p>
                <button 
                  className="dir-empty-reset-btn"
                  onClick={handleResetFilters}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
