import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import c26Logo from '../assets/consortium_c26_logo_clean.png';
import './Footer.css';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const TwitterXIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mockup-footer-section">
      <div className="footer-cyan-horizon" />

      <div className="container footer-main-inner">
        {/* Top Wordmark & Links Row */}
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <div className="footer-logo-row">
              <img src={c26Logo} alt="Consortium 2026" className="footer-c26-logo-img" />
            </div>
            <p className="footer-brand-motto">Innovate Today. Impact Tomorrow.</p>
            <p className="footer-brand-dates">OCTOBER 9 & 10, 2026 • IARE HYDERABAD</p>
          </div>

          {/* Links to Active Sections */}
          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <span className="footer-nav-heading">NAVIGATION</span>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#events">Events (10 Flagships)</a></li>
                <li><a href="#schedule">Live Countdown</a></li>
                <li><a href="#about">About IARE &amp; Consortium</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-heading">CAMPUS &amp; CONTACT</span>
              <ul>
                <li><a href="#contact">Faculty Coordinators</a></li>
                <li><a href="#venue">IARE Hyderabad</a></li>
                <li><a href="#events">Registration</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons matching mockup */}
          <div className="footer-social-side">
            <span className="footer-nav-heading">CONNECT</span>
            <div className="footer-social-icons">
              <a 
                href="https://www.instagram.com/iareconsortium2026?stkn=bHpncG9tNTluYXZw" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram @iareconsortium2026" 
                className="footer-social-link"
                title="Consortium 2026 on Instagram (@iareconsortium2026)"
              >
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/pulivarthi-martyn-16a74b3a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="footer-social-link" title="Pulivarthi Martyn on LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-link">
                <YoutubeIcon size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="footer-social-link">
                <TwitterXIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Developers & Back to Top */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-meta">
            <span className="footer-copyright-text">
              © 2026 CONSORTIUM. All Rights Reserved.
            </span>
            <span className="footer-meta-sep">·</span>
            <span className="footer-devs-meta">
              Website Developers:&nbsp;
              <a 
                href="https://www.linkedin.com/in/pulivarthi-martyn-16a74b3a8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-dev-call-link footer-dev-name"
                title="Pulivarthi Martyn LinkedIn Profile"
              >
                Pulivarthi Martyn
              </a>
              &nbsp;(<a href="tel:+918555877044" className="footer-dev-call-link">+91 85558 77044</a>)
              ,&nbsp;
              <a 
                href="https://www.linkedin.com/in/ashwath-amarchinta-2b9905430" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-dev-call-link footer-dev-name"
                title="Ashwath Amarchinta LinkedIn Profile"
              >
                Ashwath Amarchinta
              </a>
              &nbsp;(<a href="tel:+919177591324" className="footer-dev-call-link">+91 91775 91324</a>)
            </span>
          </div>

          <button 
            className="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
