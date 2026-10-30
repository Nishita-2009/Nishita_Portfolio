import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  FileDown,
  Phone,
  MapPin,
  ArrowUpRight
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
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="contact"
      className="section contact-cream-section"
      aria-label="Contact and Connect"
    >
      {/* Subtle Animated Burgundy Orbit Arcs & Warm Rose Glow */}
      <AmbientField tone="light" variant="contact" nodes={false} />
      <div className="contact-rings" aria-hidden="true">
        <span className="contact-ring ring-1"></span>
        <span className="contact-ring ring-2"></span>
        <span className="contact-ring ring-3"></span>
      </div>
      <div className="contact-rose-glow" aria-hidden="true"></div>
      <svg
        className="contact-orbit-svg"
        viewBox="0 0 600 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="animated-flow-line"
          d="M110 280C170 115 335 20 530 45"
          stroke="#71303D"
          strokeOpacity="0.22"
          strokeWidth="1.1"
        />
        <path
          className="animated-flow-line-slow"
          d="M230 280C285 145 415 75 585 95"
          stroke="#C87D82"
          strokeOpacity="0.24"
          strokeWidth="1"
        />
        <circle
          cx="293"
          cy="68"
          r="3"
          fill="#71303D"
          fillOpacity="0.5"
          className="ambient-node-pulse"
        />
        <circle
          cx="440"
          cy="38"
          r="2.5"
          fill="#C87D82"
          fillOpacity="0.6"
          className="ambient-node-pulse"
        />
      </svg>

      <div className="container contact-container">
        <div className="editorial-eyebrow-row">
          <span className="editorial-section-num">06</span>
          <span className="editorial-eyebrow-tag">
            <span className="eyebrow-dot"></span>
            CONTACT
          </span>
        </div>

        {/* Tier 1: Balanced Editorial Closing Statement & Primary Action */}
        <div className="contact-top-banner">
          <div className="contact-headline-block">
            <h2 className="contact-closing-title" data-draw>
              <span className="cw" style={{ '--w': 0 }}>Let’s</span>{' '}
              <span className="cw" style={{ '--w': 1 }}>Build</span>{' '}
              <span className="cw" style={{ '--w': 2 }}>Something</span>
              <br />
              <em className="serif-italic-accent cw" style={{ '--w': 3 }}>Meaningful</em>{' '}
              <span className="cw" style={{ '--w': 4 }}>Together.</span>
            </h2>
          </div>

          <div className="contact-invite-block">
            <p className="contact-invite-text" id="contact-message-text">
              {personalInfo.contactMessage}
            </p>
            <div className="contact-location-meta">
              <span className="location-pill-item">
                <MapPin size={13} />
                <span>{personalInfo.location}</span>
              </span>
              <span className="meta-dot">•</span>
              <a
                href={`tel:${personalInfo.phone}`}
                id="contact-phone-link"
                className="location-pill-item contact-phone-inline"
                title={`Call ${personalInfo.phone}`}
              >
                <Phone size={13} />
                <span>{personalInfo.displayPhone}</span>
              </a>
            </div>
          </div>

          <div className="contact-send-cta-wrap">
            <a
              href={`mailto:${personalInfo.email}`}
              id="contact-compose-email-btn"
              className="contact-circle-send"
              aria-label="Compose an email to Gottipati Nishita Sri"
              title="Send Email"
            >
              <Send size={20} className="send-plane-icon" />
            </a>
          </div>
        </div>

        {/* Tier 2: Spacious, Independent 3-Column Contact Action Grid */}
        <div
          className="contact-cards-grid"
          aria-label="Direct Contact and Social Profiles"
        >
          {/* 1. Email Card */}
          <div className="contact-action-card" data-glow data-tilt>
            <a
              href={`mailto:${personalInfo.email}`}
              id="contact-email-link"
              className="contact-card-primary-zone"
              title={`Send email to ${personalInfo.email}`}
            >
              <div className="contact-card-icon" aria-hidden="true">
                <Mail size={19} strokeWidth={1.7} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-title">Email</span>
                <span className="contact-card-url">{personalInfo.email}</span>
              </div>
            </a>

            <div className="contact-card-controls">
              <button
                type="button"
                onClick={handleCopyEmail}
                id="copy-email-btn"
                className="contact-icon-action"
                title={copiedEmail ? 'Email copied!' : 'Copy email address'}
                aria-label={
                  copiedEmail
                    ? 'Email address copied to clipboard'
                    : 'Copy email address to clipboard'
                }
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-icon-action"
                aria-label="Open email client"
                title="Compose email"
              >
                <ArrowUpRight size={15} className="contact-action-arrow" />
              </a>
            </div>
          </div>

          {/* 2. LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin-link"
            className="contact-action-card contact-card-link"
            aria-label="LinkedIn Profile (opens in new tab)"
            data-glow
            data-tilt
          >
            <div className="contact-card-primary-zone">
              <div className="contact-card-icon" aria-hidden="true">
                <LinkedinIcon size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-title">LinkedIn</span>
                <span className="contact-card-url">
                  {personalInfo.linkedinDisplay}
                </span>
              </div>
            </div>

            <div className="contact-card-controls" aria-hidden="true">
              <span className="contact-icon-action">
                <ArrowUpRight size={15} className="contact-action-arrow" />
              </span>
            </div>
          </a>

          {/* 3. GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-github-link"
            className="contact-action-card contact-card-link"
            aria-label="GitHub Profile (opens in new tab)"
            data-glow
            data-tilt
          >
            <div className="contact-card-primary-zone">
              <div className="contact-card-icon" aria-hidden="true">
                <GithubIcon size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-title">GitHub</span>
                <span className="contact-card-url">
                  {personalInfo.githubDisplay}
                </span>
              </div>
            </div>

            <div className="contact-card-controls" aria-hidden="true">
              <span className="contact-icon-action">
                <ArrowUpRight size={15} className="contact-action-arrow" />
              </span>
            </div>
          </a>
        </div>

        {/* Tier 3: Subtle Resume Action Bar */}
        <div className="contact-resume-strip">
          <div className="resume-strip-left">
            <span className="resume-strip-dot" aria-hidden="true"></span>
            <span>
              Review or download my complete academic &amp; project curriculum
              vitae:
            </span>
          </div>

          <div className="resume-strip-actions">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-view-resume-btn"
              className="btn btn-outline-light btn-sm"
            >
              <ExternalLink size={14} />
              <span>View Resume</span>
            </a>

            <a
              href={personalInfo.resumePath}
              download="Gottipati_Nishita_Sri_Resume.pdf"
              id="contact-download-resume-btn"
              className="btn btn-burgundy btn-sm"
            >
              <FileDown size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
