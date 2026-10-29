import React from 'react';
import { 
  ExternalLink,
  FileDown,
  FolderGit2, 
  Mail, 
  MapPin, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction and Overview">
      <div className="container hero-container">
        
        {/* Left Column: Direct Editorial Bio and Primary CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill" id="hero-status-pill">
            <span className="pulsing-dot" aria-hidden="true"></span>
            <span>Available for Software Engineering Internships</span>
          </div>

          <h1 className="hero-name" id="hero-name">
            {personalInfo.name}
          </h1>

          <p className="hero-headline" id="hero-headline">
            Computer Science Undergraduate @ BITS Pilani <span className="headline-sep">•</span> Software Engineering & AI Applications
          </p>

          <p className="hero-bio" id="hero-bio">
            I build practical software systems and applied AI workflows with algorithmic rigor. From MSME business intelligence platforms to multi-agent recruitment pipelines, I focus on turning complex computational principles into reliable, production-ready software.
          </p>

          {/* Action Buttons: 2px Radius, Confident Dark Treatments & Microinteractions */}
          <div className="hero-actions" id="hero-cta-buttons">
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className="btn btn-primary"
            >
              <FolderGit2 size={16} />
              <span>Explore Selected Works</span>
              <ArrowRight size={14} className="btn-arrow" />
            </a>

            {/* View Resume: Opens /resume.pdf in a new tab */}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-view-resume-btn"
              className="btn btn-resume"
              title="Open Resume PDF in a new tab"
            >
              <ExternalLink size={15} />
              <span>View Resume</span>
              <ArrowUpRight size={13} className="btn-external-arrow" />
            </a>

            {/* Download Resume: Downloads Gottipati_Nishita_Sri_Resume.pdf */}
            <a
              href={personalInfo.resumePath}
              download="Gottipati_Nishita_Sri_Resume.pdf"
              id="hero-download-resume-btn"
              className="btn btn-secondary"
              title="Download Resume as Gottipati_Nishita_Sri_Resume.pdf"
            >
              <FileDown size={15} />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              id="hero-contact-btn"
              className="btn btn-secondary"
            >
              <Mail size={15} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Right Column: Custom Animated Technical AI & Systems Composition (Never Clipped) */}
        <div className="hero-visual" id="hero-visual-panel">
          <HeroVisual />
        </div>

        {/* Full-Width Architectural Meta Baseline */}
        <div className="hero-meta" id="hero-social-profiles">
          <div className="hero-meta-left">
            <span className="hero-meta-label">Connect:</span>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="meta-link"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <svg className="meta-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <div className="meta-divider" aria-hidden="true">•</div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="meta-link"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <svg className="meta-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <div className="meta-divider" aria-hidden="true">•</div>

            <a
              href={`mailto:${personalInfo.email}`}
              id="hero-email-link"
              className="meta-link"
              title="Send email"
            >
              <Mail size={14} className="meta-icon" />
              <span>{personalInfo.email}</span>
            </a>

            <div className="meta-divider" aria-hidden="true">•</div>

            <a
              href={`tel:${personalInfo.phone}`}
              id="hero-phone-link"
              className="meta-link"
              title="Call directly"
            >
              <span>{personalInfo.displayPhone}</span>
            </a>
          </div>

          <div className="hero-meta-right">
            <div className="meta-location">
              <MapPin size={14} className="meta-icon" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
