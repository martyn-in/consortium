import { useState, useMemo } from 'react';
import { Phone, Search, X, Building2, UserCheck, PhoneCall, Code2, ExternalLink } from 'lucide-react';
import { facultyCoordinators, departmentsList } from '../data/facultyData';
import { sound } from '../utils/soundEffects';
import Reveal from './Reveal';
import './FacultyContact.css';

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function FacultyContact() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCoordinators = useMemo(() => {
    return facultyCoordinators.filter((coord) => {
      const matchesDept = selectedDept === 'All' || coord.deptCode === selectedDept;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !q || 
        coord.name.toLowerCase().includes(q) || 
        coord.deptCode.toLowerCase().includes(q) || 
        coord.department.toLowerCase().includes(q) ||
        coord.phone.includes(q);

      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <section id="contact" className="faculty-contact-section">
      <div className="container">
        {/* Section Header */}
        <Reveal direction="up" distance={25}>
          <div className="section-panel-header">
            <span className="section-kicker">GET IN TOUCH // DIRECTORY</span>
            <h2 className="section-panel-title">FACULTY COORDINATORS</h2>
            <p className="section-panel-desc">
              Connect directly with official departmental faculty coordinators for event guidance, registration assistance, and queries.
            </p>
          </div>
        </Reveal>

        {/* Filter Controls: Department Pills & Search */}
        <Reveal direction="up" distance={20} delay={0.1}>
          <div className="faculty-controls-bar">
            {/* Search Input */}
            <div className="faculty-search-box">
              <Search size={16} className="faculty-search-icon" />
              <input
                type="text"
                placeholder="Search coordinator or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faculty-search-input"
                aria-label="Search faculty coordinators"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faculty-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Department Pills */}
            <div className="faculty-dept-pills" role="tablist" aria-label="Filter by department">
              {departmentsList.map((dept) => {
                const count = dept === 'All'
                  ? facultyCoordinators.length
                  : facultyCoordinators.filter((c) => c.deptCode === dept).length;
                const isActive = selectedDept === dept;

                return (
                  <button
                    key={dept}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`faculty-dept-pill ${isActive ? 'is-active' : ''}`}
                    onClick={() => {
                      sound.playClick();
                      setSelectedDept(dept);
                    }}
                  >
                    <span>{dept}</span>
                    <span className="dept-pill-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Coordinators Grid */}
        <div className="faculty-grid">
          {filteredCoordinators.length > 0 ? (
            filteredCoordinators.map((coord) => (
              <div key={coord.id} className="faculty-card aura-glow-border">
                <div className="faculty-card-top">
                  <div className="faculty-dept-badge">
                    <span className="dept-badge-code">{coord.deptCode}</span>
                  </div>
                  <span className="faculty-dept-name">{coord.department}</span>
                </div>

                <div className="faculty-card-body">
                  <div className="faculty-avatar-row">
                    <div className="faculty-avatar-box">
                      <UserCheck size={18} className="faculty-avatar-icon" />
                    </div>
                    <div className="faculty-name-wrap">
                      <h3 className="faculty-name">{coord.name}</h3>
                      <span className="faculty-role">Faculty Coordinator</span>
                    </div>
                  </div>
                </div>

                <div className="faculty-card-footer">
                  <a
                    href={`tel:+91${coord.phone}`}
                    className="faculty-phone-link"
                    onClick={() => sound.playClick()}
                    title={`Call ${coord.name}`}
                  >
                    <div className="phone-icon-circle">
                      <Phone size={14} />
                    </div>
                    <span className="phone-number-text">+91 {coord.phone}</span>
                  </a>

                  <a
                    href={`tel:+91${coord.phone}`}
                    className="faculty-call-action-btn"
                    onClick={() => sound.playClick()}
                    aria-label={`Call ${coord.name} now`}
                  >
                    <PhoneCall size={13} />
                    <span>CALL</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="faculty-empty-state">
              <Building2 size={32} className="empty-state-icon" />
              <p>No faculty coordinators match "{searchQuery}"</p>
              <button
                type="button"
                className="empty-state-reset"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDept('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Website Developers Contact Card */}
        <div className="faculty-dev-support-card aura-glow-border">
          <div className="dev-support-info">
            <div className="dev-support-badge">
              <Code2 size={15} className="dev-support-badge-icon" />
              <span>DIGITAL &amp; TECHNICAL SUPPORT</span>
            </div>
            <h4 className="dev-support-title">Website Developers</h4>
            <p className="dev-support-desc">
              For technical assistance, portal issues, or web inquiries, reach out directly:
            </p>
          </div>

          <div className="dev-support-contacts">
            <div className="dev-contact-card">
              <div className="dev-contact-main">
                <div className="dev-chip-icon-box">
                  <Phone size={14} />
                </div>
                <div className="dev-chip-text">
                  <span className="dev-chip-label">PULIVARTHI MARTYN</span>
                  <a 
                    href="tel:+918555877044" 
                    className="dev-phone-num"
                    onClick={() => sound.playClick()}
                    title="Call Pulivarthi Martyn"
                  >
                    +91 85558 77044
                  </a>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/pulivarthi-martyn-16a74b3a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-linkedin-btn"
                onClick={() => sound.playClick()}
                title="Pulivarthi Martyn LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
                <span>LINKEDIN</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="dev-contact-card">
              <div className="dev-contact-main">
                <div className="dev-chip-icon-box">
                  <Phone size={14} />
                </div>
                <div className="dev-chip-text">
                  <span className="dev-chip-label">ASHWATH AMARCHINTA</span>
                  <a 
                    href="tel:+919177591324" 
                    className="dev-phone-num"
                    onClick={() => sound.playClick()}
                    title="Call Ashwath Amarchinta"
                  >
                    +91 91775 91324
                  </a>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/ashwath-amarchinta-2b9905430"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-linkedin-btn"
                onClick={() => sound.playClick()}
                title="Ashwath Amarchinta LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
                <span>LINKEDIN</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Simple Institutional Note */}
        <div className="faculty-footer-note">
          <p>
            For urgent college inquiries, report to the <strong>IARE Central Registration Desk</strong> on fest days. Official updates on Instagram:&nbsp;
            <a 
              href="https://www.instagram.com/iareconsortium2026?stkn=bHpncG9tNTluYXZw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="faculty-insta-link"
              onClick={() => sound.playClick()}
            >
              @iareconsortium2026 ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
