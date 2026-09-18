import { Trophy, ArrowRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './FinalCTA.css';

export default function FinalCTA({ onNavigateToEvents }) {
  const handleRegister = () => {
    sound.playSuccess();
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.72 },
      colors: ['#00e5ff', '#38bdf8', '#0ea5e9', '#ffffff']
    });
    if (onNavigateToEvents) {
      onNavigateToEvents();
    } else {
      const el = document.getElementById('events');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="register" className="mockup-cta-banner-section">
      <div className="container">
        <Reveal direction="up" distance={25}>
          <div className="mockup-trophy-banner aura-glow-border">
            {/* Left Trophy Art & Chevrons */}
            <div className="trophy-banner-left">
              <ChevronsLeft size={24} className="banner-chevron text-cyan" />
              <div className="trophy-cup-halo">
                <Trophy size={42} className="trophy-cup-icon" />
              </div>
            </div>

            {/* Center Content */}
            <div className="trophy-banner-center">
              <h2 className="trophy-banner-title">READY TO MAKE YOUR MARK?</h2>
              <p className="trophy-banner-subtitle">
                Join the battle on October 9 & 10, 2026 at IARE Hyderabad. Explore the events and register your team now.
              </p>
            </div>

            {/* Right Action Button & Chevrons */}
            <div className="trophy-banner-right">
              <button
                className="trophy-btn-register"
                onClick={handleRegister}
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={17} />
              </button>
              <ChevronsRight size={24} className="banner-chevron text-cyan" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
