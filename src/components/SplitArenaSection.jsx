import { ArrowRight, Zap, Target, Shield } from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './SplitArenaSection.css';

export default function SplitArenaSection() {
  return (
    <section id="arena-experience" className="split-arena-section">
      <div className="container">
        <Reveal direction="up" distance={25}>
          <div className="split-card battle-card full-battle-card aura-glow-border">
            <div className="battle-card-content">
              <div className="battle-kicker-chip">
                <span className="battle-kicker-dot">●</span>
                <span>2 DAYS NATIONAL LEVEL FEST</span>
              </div>

              <h2 className="battle-heading">
                BATTLE <span className="battle-sub-brush">BEYOND BOUNDARIES</span>
              </h2>

              <p className="battle-copy">
                CONSORTIUM 2026 brings together the sharpest engineers, fiercest coders, 
                and boldest creators for a high-octane celebration of human innovation and competitive spirit.
              </p>

              <div className="battle-features-row">
                <div className="battle-feat-item">
                  <Target size={16} className="text-cyan" />
                  <span>10 Flagship Events</span>
                </div>
                <div className="battle-feat-item">
                  <Zap size={16} className="text-magenta" />
                  <span>Competitive Showdowns</span>
                </div>
                <div className="battle-feat-item">
                  <Shield size={16} className="text-cyan" />
                  <span>National Adjudication</span>
                </div>
              </div>

              <div className="battle-action-row">
                <a 
                  href="#events" 
                  className="battle-btn-know-more"
                  onClick={() => sound.playClick()}
                >
                  <span>EXPLORE ALL EVENTS</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
