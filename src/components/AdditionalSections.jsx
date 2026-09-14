import { MapPin, ExternalLink, Navigation, Calendar } from 'lucide-react';
import Reveal from './Reveal';
import { sound } from '../utils/soundEffects';
import './AdditionalSections.css';

export default function AdditionalSections() {
  const iareMapsUrl = "https://maps.google.com/?q=Institute+of+Aeronautical+Engineering+Hyderabad";

  return (
    <div className="additional-sections-root">
      {/* VENUE (#venue) */}
      <section id="venue" className="content-panel-section">
        <div className="container">
          <Reveal direction="up" distance={25}>
            <div className="section-panel-header">
              <span className="section-kicker">✦ FESTIVAL LOCATION ✦</span>
              <h2 className="section-panel-title">CAMPUS VENUE</h2>
              <p className="section-panel-desc">
                Institute of Aeronautical Engineering (Autonomous) — Hyderabad
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" distance={20} delay={0.15}>
            <div className="venue-details-card aura-glow-border">
              <div className="venue-info-side">
                <div className="venue-badge-row">
                  <span className="venue-status-chip">
                    <MapPin size={13} className="text-cyan inline mr-1" />
                    OFFICIAL HOST CAMPUS
                  </span>
                  <span className="venue-status-chip venue-timeline-chip">
                    <Calendar size={13} className="text-magenta inline mr-1" />
                    OCTOBER 9 & 10, 2026
                  </span>
                </div>

                <h3 className="venue-campus-title">IARE Campus, Hyderabad</h3>
                <p className="venue-address-text">
                  Institute of Aeronautical Engineering (Autonomous)<br />
                  Dundigal, Hyderabad, Telangana 500043, India
                </p>

                <div className="venue-action-box">
                  <a
                    href={iareMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venue-btn-view-map"
                    onClick={() => sound.playClick()}
                  >
                    <Navigation size={16} />
                    <span>VIEW MAP</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="venue-map-embed-side">
                <iframe
                  title="IARE Campus Location Map"
                  src="https://maps.google.com/maps?q=Institute%20of%20Aeronautical%20Engineering%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="venue-google-map-iframe"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
