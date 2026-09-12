import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { X, QrCode, Cpu, ShieldCheck, Download, Check, Sparkles, User, Building, Award, Crown } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import './PassModal.css';

const PassModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('KAILASH V.');
  const [college, setCollege] = useState('IARE HYDERABAD');
  const [role, setRole] = useState('Neural Hackathon 24H');
  const [theme, setTheme] = useState('gold');
  const [isCopied, setIsCopied] = useState(false);
  const badgeRef = useRef(null);

  if (!isOpen) return null;

  const handleConfettiAndSave = () => {
    sound.playSuccess();
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#fef08a', '#9333ea', '#1e3a8a', '#ffffff']
    });

    navigator.clipboard?.writeText(`CONSORTIUM-2026-PASS: ${name} | ${college} | ${role}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="modal-backdrop-wrap" onClick={onClose}>
      <div className="modal-dialog-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="modal-top-bar">
          <div>
            <div className="royal-badge-gold">
              <Crown size={13} />
              <span>IMPERIAL CREDENTIALS</span>
            </div>
            <h2 className="modal-heading-title">
              Sovereign <span className="gold-shimmer-text">Festival Pass</span>
            </h2>
          </div>
          <button 
            className="modal-dismiss-btn" 
            onClick={() => { sound.playClick(); onClose(); }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Grid */}
        <div className="modal-body-layout">
          {/* Controls Form */}
          <div className="modal-form-side">
            <div className="form-field-group">
              <label><User size={14} /> DELEGATE FULL NAME</label>
              <input 
                type="text" 
                value={name} 
                maxLength={26}
                onChange={(e) => { sound.playHover(); setName(e.target.value); }}
                placeholder="Your full name"
              />
            </div>

            <div className="form-field-group">
              <label><Building size={14} /> INSTITUTION / UNIVERSITY</label>
              <input 
                type="text" 
                value={college} 
                maxLength={32}
                onChange={(e) => { sound.playHover(); setCollege(e.target.value); }}
                placeholder="Your college or university"
              />
            </div>

            <div className="form-field-group">
              <label><Award size={14} /> CONCLAVE ARENA ENTRY</label>
              <select 
                value={role} 
                onChange={(e) => { sound.playClick(); setRole(e.target.value); }}
              >
                <option value="Neural Hackathon 24H">Neural Hackathon 24H</option>
                <option value="Titanium RoboWars">Titanium RoboWars: Battle Arena</option>
                <option value="Algorithmic Speed Duel">Algorithmic Speed Duel</option>
                <option value="Autonomous Drone Grand Prix">Autonomous Drone Grand Prix</option>
                <option value="Sovereign Esports League">Sovereign Esports League</option>
                <option value="Cinematic Short Film Showcase">Cinematic Short Film Showcase</option>
                <option value="Cyber Palace Photography">Cyber Palace Photography</option>
              </select>
            </div>

            <div className="form-field-group">
              <label><Sparkles size={14} /> HOLOGRAPHIC ROYAL FINISH</label>
              <div className="pass-theme-tabs">
                <button 
                  type="button"
                  className={`theme-tab-btn gold ${theme === 'gold' ? 'active' : ''}`}
                  onClick={() => { sound.playHover(); setTheme('gold'); }}
                >
                  Imperial Gold
                </button>
                <button 
                  type="button"
                  className={`theme-tab-btn sapphire ${theme === 'sapphire' ? 'active' : ''}`}
                  onClick={() => { sound.playHover(); setTheme('sapphire'); }}
                >
                  Royal Sapphire
                </button>
                <button 
                  type="button"
                  className={`theme-tab-btn amethyst ${theme === 'amethyst' ? 'active' : ''}`}
                  onClick={() => { sound.playHover(); setTheme('amethyst'); }}
                >
                  Palace Amethyst
                </button>
              </div>
            </div>

            <button 
              type="button" 
              className="royal-claim-btn"
              onClick={handleConfettiAndSave}
            >
              {isCopied ? (
                <>
                  <Check size={18} /> Pass Claimed & Copied to Clipboard!
                </>
              ) : (
                <>
                  <Download size={18} /> Confirm Registration & Claim Pass
                </>
              )}
            </button>
          </div>

          {/* Digital Attendee Pass Preview */}
          <div className="modal-preview-side">
            <div className={`digital-badge-ticket ${theme}`} ref={badgeRef}>
              <div className="badge-light-sweep"></div>
              
              {/* Top Row */}
              <div className="badge-top-row">
                <div className="badge-brand-mark">
                  <span className="badge-name">CONSORTIUM</span>
                  <span className="badge-year">2026</span>
                </div>
                <div className="badge-vip-pill">
                  <Crown size={11} className="crown-badge-icon" /> SOVEREIGN DELEGATE
                </div>
              </div>

              {/* Chip & Security */}
              <div className="badge-chip-row">
                <div className="badge-microchip">
                  <Cpu size={22} />
                </div>
                <div className="badge-verified-stamp">
                  <ShieldCheck size={15} /> VERIFIED AT IARE
                </div>
              </div>

              {/* Attendee Name */}
              <div className="badge-attendee-wrap">
                <span className="badge-mini-label">DELEGATE IDENTITY</span>
                <h3 className="badge-attendee-name">{name || 'STUDENT DELEGATE'}</h3>
              </div>

              {/* Institution & Arena Details */}
              <div className="badge-info-grid">
                <div>
                  <span className="badge-mini-label">COLLEGE / INSTITUTION</span>
                  <p className="badge-info-value">{college || 'IARE HYDERABAD'}</p>
                </div>
                <div>
                  <span className="badge-mini-label">REGISTERED ARENA</span>
                  <p className="badge-info-value arena-highlight">{role}</p>
                </div>
              </div>

              {/* Barcode & QR Footer */}
              <div className="badge-footer-row">
                <div className="badge-qr-container">
                  <QrCode size={42} className="qr-element" />
                </div>
                <div className="badge-barcode-container">
                  <div className="barcode-stripes">
                    {Array.from({ length: 26 }).map((_, i) => (
                      <span 
                        key={i} 
                        className="barcode-stripe-bar" 
                        style={{ height: `${(i % 5) * 4 + 18}px`, width: `${(i % 3 === 0 ? 3 : 1.5)}px` }}
                      />
                    ))}
                  </div>
                  <span className="badge-serial-code">CSRTM-ROYAL-2026-A99</span>
                </div>
              </div>

              <div className="badge-watermark-text">IARE HYD • OCT 15-16, 2026 • ROYAL PROTOCOL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassModal;
