import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  FileDown, 
  Send, 
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.displayPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact and Connect">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={12} />
            <span>08 // Inquiries</span>
          </div>
          <h2 className="section-title">
            Initiate a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Open to software development internships, engineering collaborations, and learning opportunities.
          </p>
        </div>

        {/* Contact Plate */}
        <div className="contact-plate">
          <div className="contact-grid">
            
            {/* Left: Message & Contact Items */}
            <div className="contact-info">
              <h3 className="contact-heading">
                Ready to contribute to practical software solutions
              </h3>
              
              <p className="contact-message" id="contact-message-text">
                {personalInfo.contactMessage}
              </p>

              <div className="contact-details-list">
                {/* Email Item */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={16} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Email</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      id="contact-email-link"
                      className="contact-value-link"
                      title="Send email via default client"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    id="copy-email-btn"
                    className="copy-btn"
                    title="Copy email address"
                    aria-label="Copy email address to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone Item from verified resume */}
                {personalInfo.displayPhone && (
                  <div className="contact-item">
                    <div className="contact-icon-box">
                      <Phone size={16} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-label">Phone</span>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        id="contact-phone-link"
                        className="contact-value-link"
                        title="Call directly"
                      >
                        {personalInfo.displayPhone}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      id="copy-phone-btn"
                      className="copy-btn"
                      title="Copy phone number"
                      aria-label="Copy phone number to clipboard"
                    >
                      {copiedPhone ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                    </button>
                  </div>
                )}

                {/* Location Item */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={16} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Location</span>
                    <span className="contact-value" id="contact-location-display">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Mail & Resume Action Buttons */}
              <div className="contact-actions">
                <a
                  href={`mailto:${personalInfo.email}`}
                  id="contact-compose-email-btn"
                  className="btn btn-primary"
                >
                  <Send size={14} />
                  <span>Compose Email</span>
                </a>

                {/* View Resume button opens in a new tab */}
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-view-resume-btn"
                  className="btn btn-resume"
                  title="Open Resume in a new browser tab"
                >
                  <ExternalLink size={14} />
                  <span>View Resume</span>
                </a>

                {/* Download Resume button downloads the PDF as Gottipati_Nishita_Sri_Resume.pdf */}
                <a
                  href={personalInfo.resumePath}
                  download="Gottipati_Nishita_Sri_Resume.pdf"
                  id="contact-download-resume-btn"
                  className="btn btn-secondary"
                  title="Download Resume as Gottipati_Nishita_Sri_Resume.pdf"
                >
                  <FileDown size={14} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right: Verified Profiles Panel */}
            <div className="contact-social-panel">
              <h4 className="social-panel-title">Verified Profiles & Repositories</h4>
              <p className="social-panel-desc">
                Connect or review my project repositories and professional background:
              </p>

              <div className="social-links-list">
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-github-link"
                  className="social-profile-cell"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <div className="social-icon-box">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="social-info">
                    <span className="social-platform">GitHub</span>
                    <span className="social-handle">@Nishita-2009</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="social-profile-cell"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <div className="social-icon-box">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="social-info">
                    <span className="social-platform">LinkedIn</span>
                    <span className="social-handle">nishita-sri-gottipati</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>

                {/* Portfolio Repository Link */}
                <a
                  href={personalInfo.portfolioRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-portfolio-repo-link"
                  className="social-profile-cell"
                  aria-label="Portfolio Source Repository on GitHub"
                >
                  <div className="social-icon-box">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="social-info">
                    <span className="social-platform">Portfolio Repository</span>
                    <span className="social-handle">Nishita-2009/Nishita_Portfolio</span>
                  </div>
                  <ArrowUpRight size={15} className="social-arrow" />
                </a>
              </div>

              <div className="contact-status-box">
                <span className="pulsing-dot-green"></span>
                <span>Active applicant for Software Development Internships</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
