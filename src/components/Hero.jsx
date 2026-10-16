import React from 'react';
import { 
  ExternalLink,
  FolderGit2, 
  Mail, 
  MapPin, 
  Terminal, 
  Code2, 
  GraduationCap 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Introduction and Overview">
      <div className="container hero-container">
        
        {/* Left Column: Bio and CTA buttons */}
        <div className="hero-content">
          <div className="hero-status-pill" id="hero-status-pill">
            <span className="pulsing-dot" aria-hidden="true"></span>
            <span>Available for Software Development Internships</span>
          </div>

          <h1 className="hero-name" id="hero-name">
            {personalInfo.name}
          </h1>

          <p className="hero-headline" id="hero-headline">
            {personalInfo.headline}
          </p>

          <p className="hero-bio" id="hero-bio">
            {personalInfo.bio}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-actions" id="hero-cta-buttons">
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className="btn btn-primary"
            >
              <FolderGit2 size={18} />
              <span>Explore My Projects</span>
            </a>

            {/* View Resume button opens /resume.pdf in a new browser tab */}
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-view-resume-btn"
              className="btn btn-resume"
              title="Open Resume in a new browser tab"
            >
              <ExternalLink size={18} />
              <span>View Resume</span>
            </a>

            <a
              href="#contact"
              id="hero-contact-btn"
              className="btn btn-secondary"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Profiles & Location */}
          <div className="hero-meta" id="hero-social-profiles">
            <span className="hero-meta-label">Connect:</span>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="meta-link"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <svg className="meta-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="meta-link"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <svg className="meta-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
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

            <div className="meta-divider" aria-hidden="true">•</div>

            <div className="meta-location">
              <MapPin size={16} className="text-muted" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Developer Card */}
        <div className="hero-visual">
          <div className="terminal-card glass-card" id="hero-interactive-card">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>nishita_profile.py</span>
              </div>
              <div className="terminal-badge">Active</div>
            </div>

            <div className="terminal-body">
              <div className="code-line">
                <span className="token-keyword">class</span>{' '}
                <span className="token-class">SoftwareEngineerCandidate</span>:
              </div>
              <div className="code-line indent-1">
                <span className="token-property">name</span> ={' '}
                <span className="token-string">"{personalInfo.name}"</span>
              </div>
              <div className="code-line indent-1">
                <span className="token-property">education</span> ={' '}
                <span className="token-string">"BITS Pilani (Digital)"</span>
              </div>
              <div className="code-line indent-1">
                <span className="token-property">program</span> ={' '}
                <span className="token-string">"BSc Computer Science"</span>
              </div>
              <div className="code-line indent-1">
                <span className="token-property">industry_training</span> ={' '}
                <span className="token-string">"NIAT Fellow"</span>
              </div>
              <div className="code-line indent-1">
                <span className="token-property">core_focus</span> = [
              </div>
              <div className="code-line indent-2">
                <span className="token-string">"Software Development"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="token-string">"Data Structures & Algorithms"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="token-string">"Generative AI & LLMs"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="token-string">"RAG Fundamentals"</span>
              </div>
              <div className="code-line indent-1">]</div>
              <div className="code-line indent-1">
                <span className="token-property">seeking</span> ={' '}
                <span className="token-string">"Software Development Internship"</span>
              </div>
            </div>

            <div className="terminal-footer">
              <div className="terminal-stat">
                <GraduationCap size={15} className="stat-icon" />
                <div className="stat-text">
                  <span className="stat-label">University</span>
                  <span className="stat-val">BITS Pilani (Digital)</span>
                </div>
              </div>
              <div className="terminal-stat">
                <Code2 size={15} className="stat-icon" />
                <div className="stat-text">
                  <span className="stat-label">Core Tech</span>
                  <span className="stat-val">Python • C++ • Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
