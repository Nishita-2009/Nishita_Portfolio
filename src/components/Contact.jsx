import React, { useState } from 'react';
import {
  Send,
  Copy,
  Check,
  FileDown,
  ArrowUpRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import AmbientField from './AmbientField';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section
      id="contact"
      className="section contact-scene-section"
      aria-label="Contact and Connect"
    >
      <AmbientField tone="light" variant="contact" nodes={false} />

      <div className="container contact-scene-container">
        {/* Editorial Eyebrow */}
        <div className="editorial-eyebrow-row">
          <span className="editorial-section-num">06</span>
          <span className="editorial-eyebrow-tag">
            <span className="eyebrow-dot"></span>
            CONTACT // THE FINAL HORIZON
          </span>
        </div>

        {/* Monumental Outro Invitation Arena */}
        <div className="contact-outro-arena">
          <div className="outro-headline-wrap">
            <h2 className="outro-monumental-title">
              Let’s Build
              <br />
              <em className="serif-italic-accent">Something Meaningful</em>
              <br />
              Together.
            </h2>
            <p className="outro-lead-copy">
              Whether you are looking for a dedicated software engineering intern,
              an AI collaborator, or want to discuss a compelling project — my inbox is open.
            </p>
          </div>

          {/* Interactive Direct Communication Portals */}
          <div className="contact-portals-grid">
            {/* Primary Action Card: Direct Email & Instant Copy */}
            <div className="contact-portal-card card-primary-email" data-glow>
              <div className="portal-card-top">
                <span className="portal-label">PRIMARY INBOX</span>
                <span className="portal-status-live">
                  <span className="pulse-dot"></span> ACTIVE
                </span>
              </div>

              <div className="portal-email-display">
                <span className="email-address-text">{personalInfo.email}</span>
              </div>

              <div className="portal-actions-row">
                <a
                  href={`mailto:${personalInfo.email}`}
                  id="contact-send-email-btn"
                  className="btn btn-burgundy"
                >
                  <Send size={15} />
                  <span>Send Direct Email</span>
                  <ArrowUpRight size={15} className="btn-external-arrow" />
                </a>

                <button
                  type="button"
                  id="contact-copy-email-btn"
                  className={`btn btn-outline-light ${copiedEmail ? 'btn-copied' : ''}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Quick-Access Portals: LinkedIn, GitHub, Resume PDF */}
            <div className="contact-portals-sidebar">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-portal"
                className="portal-link-item"
                data-glow
              >
                <div className="portal-link-left">
                  <LinkedinIcon size={20} />
                  <div>
                    <span className="portal-link-title">LinkedIn</span>
                    <span className="portal-link-sub">{personalInfo.linkedinDisplay}</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="portal-arrow" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-portal"
                className="portal-link-item"
                data-glow
              >
                <div className="portal-link-left">
                  <GithubIcon size={20} />
                  <div>
                    <span className="portal-link-title">GitHub</span>
                    <span className="portal-link-sub">{personalInfo.githubDisplay}</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="portal-arrow" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-resume-portal"
                className="portal-link-item"
                data-glow
              >
                <div className="portal-link-left">
                  <FileDown size={20} />
                  <div>
                    <span className="portal-link-title">Curriculum Vitae</span>
                    <span className="portal-link-sub">Official Resume PDF</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="portal-arrow" />
              </a>
            </div>
          </div>

          {/* Location & Status Footer Bar */}
          <div className="contact-outro-footer">
            <div className="outro-meta-item">
              <MapPin size={14} />
              <span>Hyderabad, India · Remote &amp; Hybrid Ready</span>
            </div>
            <div className="outro-meta-sep">•</div>
            <div className="outro-meta-item">
              <Sparkles size={14} />
              <span>Available for 2025/2026 Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
