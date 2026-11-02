import React, { useRef, useCallback, useEffect, useState } from 'react';
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
import { personalInfo } from '../data/portfolioData';
import HeroVisual from './HeroVisual';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Hero() {
  const heroRef = useRef(null);
  const rafRef = useRef(null);

  const [reduced] = useState(prefersReduced);
  const [stage, setStage] = useState(reduced ? 3 : 0);

  // Coordinated staggered entrance
  useEffect(() => {
    if (reduced) return undefined;
    const timers = [];

    timers.push(setTimeout(() => setStage(1), 60));
    timers.push(setTimeout(() => setStage(2), 320));
    timers.push(setTimeout(() => setStage(3), 640));

    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  // Subtle interactive pointer movement
  const handlePointerMove = useCallback((e) => {
    if (!heroRef.current) return;
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const { clientX, clientY } = e;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((clientY - rect.top) / rect.height - 0.5) * 2;
      heroRef.current.style.setProperty('--mouse-px', nx.toFixed(3));
      heroRef.current.style.setProperty('--mouse-py', ny.toFixed(3));
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (heroRef.current) {
      heroRef.current.style.setProperty('--mouse-px', '0');
      heroRef.current.style.setProperty('--mouse-py', '0');
    }
  }, []);

  const on = (n) => (stage >= n ? 'is-on' : '');

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section hero-photo-free-scene section-active"
      data-stage={stage}
      aria-label="Introduction and Overview"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Ambient Atmospheric Field */}
      <div className="hero-atmosphere-layer" aria-hidden="true">
        <div className="hero-ambient-spot spot-burgundy"></div>
        <div className="hero-ambient-spot spot-rose"></div>
      </div>

      <div className="hero-wide-container hero-editorial-container">
        {/* Main Two-Column Editorial Arena */}
        <div className="hero-editorial-grid">
          {/* Left Column: Editorial Presentation */}
          <div className="hero-narrative-column">
            {/* Top Availability Badge Pill */}
            <div className={`hero-availability-row hs ${on(1)}`}>
              <div className="hero-availability-pill">
                <span className="pill-dot-wrapper" aria-hidden="true">
                  <span className="pill-dot-core"></span>
                  <span className="pill-dot-aura"></span>
                </span>
                <span className="pill-label">{personalInfo.availability}</span>
              </div>
            </div>

            {/* Eyebrow Label with Horizontal Accent Line */}
            <div className={`hero-eyebrow-container hs ${on(1)}`}>
              <span className="hero-eyebrow-text">SOFTWARE ENGINEER &amp; AI BUILDER</span>
              <span className="hero-eyebrow-rule" aria-hidden="true"></span>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="hero-monumental-heading" id="hero-name">
              <span className="sr-only">{personalInfo.name}</span>
              <span aria-hidden="true" className="heading-lines-stack">
                <span className="heading-line line-first">Gottipati</span>
                <span className="heading-line line-second">
                  <span className="heading-italic-name">Nishita Sri.</span>
                  {/* Delicate Calligraphy Underline Flourish */}
                  <svg
                    className="heading-flourish-svg"
                    viewBox="0 0 240 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 14C45 28 140 28 230 8C195 24 120 28 65 24C125 31 190 22 236 12"
                      stroke="#78182F"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subhead Narrative Statement */}
            <p className={`hero-lead-statement hs ${on(2)}`} id="hero-headline">
              <span className="statement-row">Computer Science Undergraduate at <strong>BITS Pilani</strong>.</span>
              <span className="statement-row">Engineering real-world software, intelligent full-stack systems, and practical AI.</span>
            </p>

            {/* Action Command Buttons */}
            <div className={`hero-actions-row hs ${on(2)}`} id="hero-cta-buttons">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="btn btn-hero-burgundy"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={16} className="btn-icon-right" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-view-resume-btn"
                className="btn btn-hero-glass"
                title="Open Gottipati Nishita Sri's Resume in a new tab"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Gottipati_Nishita_Sri_Resume.pdf"
                id="hero-download-resume-btn"
                className="btn btn-hero-glass-compact"
                title="Download Resume PDF"
                aria-label="Download Resume PDF"
              >
                <FileDown size={15} />
                <span>PDF</span>
              </a>
            </div>

            {/* Direct Social Channels Row */}
            <div className={`hero-channels-row hs ${on(2)}`} id="hero-social-profiles">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="channel-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <span className="channel-sep" aria-hidden="true">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                className="channel-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <span className="channel-sep" aria-hidden="true">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-email-link"
                className="channel-link"
                title={`Email ${personalInfo.email}`}
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Orbital Artwork */}
          <div className={`hero-artwork-column hs ${on(2)}`} id="hero-visual-panel">
            <HeroVisual />
          </div>
        </div>

        {/* Bottom Credentials Strip Card (Reference Matched) */}
        <div className={`hero-credentials-card hs ${on(3)}`} aria-label="Key Credentials Overview">
          {/* 1: BITS Pilani */}
          <div className="credential-segment">
            <div className="credential-icon-box" aria-hidden="true">
              <GraduationCap size={19} strokeWidth={1.8} />
            </div>
            <div className="credential-text-block">
              <span className="credential-main-title">BITS Pilani (Digital)</span>
              <span className="credential-sub-title">BSc Computer Science</span>
            </div>
          </div>

          <div className="credential-hairline-sep" aria-hidden="true"></div>

          {/* 2: NIAT Training */}
          <div className="credential-segment">
            <div className="credential-icon-box" aria-hidden="true">
              <Code2 size={19} strokeWidth={1.8} />
            </div>
            <div className="credential-text-block">
              <span className="credential-main-title">NIAT (NxtWave)</span>
              <span className="credential-sub-title">Industry Ready Training</span>
            </div>
          </div>

          <div className="credential-hairline-sep" aria-hidden="true"></div>

          {/* 3: 3+ Projects */}
          <div className="credential-segment">
            <div className="credential-icon-box" aria-hidden="true">
              <Box size={19} strokeWidth={1.8} />
            </div>
            <div className="credential-text-block">
              <span className="credential-main-title">3+ Projects</span>
              <span className="credential-sub-title">Practical Applications</span>
            </div>
          </div>

          <div className="credential-hairline-sep" aria-hidden="true"></div>

          {/* 4: Open to Internships */}
          <div className="credential-segment">
            <div className="credential-icon-box" aria-hidden="true">
              <Zap size={19} strokeWidth={1.8} />
            </div>
            <div className="credential-text-block">
              <span className="credential-main-title">Open</span>
              <span className="credential-sub-title">To Internships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
