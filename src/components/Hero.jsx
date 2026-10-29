import React from 'react';
import {
  FileText,
  FileDown,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Code2,
  Box,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, credentialsStrip } from '../data/portfolioData';
import HeroVisual from './HeroVisual';

const stripIcons = {
  graduation: <GraduationCap size={22} strokeWidth={1.6} />,
  code: <Code2 size={22} strokeWidth={1.6} />,
  cube: <Box size={22} strokeWidth={1.6} />,
  bolt: <Zap size={22} strokeWidth={1.6} />
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      aria-label="Introduction and Overview"
    >
      {/* Subtle Left Decorative Arc */}
      <div className="hero-left-orbit-decor" aria-hidden="true">
        <span className="orbit-decor-node"></span>
      </div>

      <div className="container hero-container">
        {/* Left Column: Expressive Editorial Headline & Actions */}
        <div className="hero-content">
          <div className="hero-availability-tag" id="hero-status-pill">
            <span className="availability-dot" aria-hidden="true"></span>
            <span>{personalInfo.availability}</span>
          </div>

          <h1 className="hero-name" id="hero-name">
            <span className="hero-name-line">{personalInfo.firstName}</span>
            <span className="hero-name-line">{personalInfo.lastName}</span>
          </h1>

          <p className="hero-positioning" id="hero-headline">
            COMPUTER SCIENCE UNDERGRADUATE
            <br />
            AT BITS PILANI <span className="pos-dot">•</span> SOFTWARE &amp; AI
          </p>

          <p className="hero-bio" id="hero-bio">
            {personalInfo.heroIntro}
          </p>

          {/* Primary & Secondary Actions */}
          <div className="hero-actions" id="hero-cta-buttons">
            <a
              href="#projects"
              id="hero-explore-projects-btn"
              className="btn btn-burgundy"
            >
              <span>Explore My Work</span>
              <ArrowUpRight size={15} className="btn-external-arrow" />
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-view-resume-btn"
              className="btn btn-outline-light"
              title="Open Resume PDF in a new tab"
            >
              <FileText size={15} />
              <span>View Resume</span>
            </a>

            <a
              href={personalInfo.resumePath}
              download="Gottipati_Nishita_Sri_Resume.pdf"
              id="hero-download-resume-btn"
              className="btn btn-subtle-icon"
              title="Download Resume as Gottipati_Nishita_Sri_Resume.pdf"
              aria-label="Download Resume PDF"
            >
              <FileDown size={15} />
              <span className="download-label-text">PDF</span>
            </a>
          </div>

          {/* Compact Social & Email Row */}
          <div className="hero-social-strip" id="hero-social-profiles">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="hero-social-item"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <span className="hero-social-sep" aria-hidden="true"></span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin-link"
              className="hero-social-item"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>

            <span className="hero-social-sep" aria-hidden="true"></span>

            <a
              href={`mailto:${personalInfo.email}`}
              id="hero-email-link"
              className="hero-social-item"
              title={`Email ${personalInfo.email}`}
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Sunset Atmosphere, Orbit Lines & 01 Editorial Rail */}
        <div className="hero-visual" id="hero-visual-panel">
          <HeroVisual />
        </div>
      </div>

      {/* Compact Credentials Strip Below Hero */}
      <div className="credentials-strip-wrapper" aria-label="Key Credentials">
        <div className="container">
          <div className="credentials-strip-grid">
            {credentialsStrip.map((item) => (
              <div key={item.id} className="credential-strip-item">
                <div className="credential-strip-icon" aria-hidden="true">
                  {stripIcons[item.icon]}
                </div>
                <div className="credential-strip-text">
                  <span className="credential-strip-title">{item.title}</span>
                  <span className="credential-strip-sub">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
