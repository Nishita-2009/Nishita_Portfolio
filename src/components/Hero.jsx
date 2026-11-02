import React, { useRef, useCallback, useEffect, useState } from 'react';
import {
  FileText,
  FileDown,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Code2,
  Box,
  Zap,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, credentialsStrip } from '../data/portfolioData';
import HeroVisual from './HeroVisual';
import AmbientField from './AmbientField';

const stripIcons = {
  graduation: <GraduationCap size={18} strokeWidth={1.8} />,
  code: <Code2 size={18} strokeWidth={1.8} />,
  cube: <Box size={18} strokeWidth={1.8} />,
  bolt: <Zap size={18} strokeWidth={1.8} />
};

const FIRST = personalInfo.firstName;
const LAST_PARTS = personalInfo.lastName.split(' ');

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function StaggeredWord({ word, startIdx }) {
  return (
    <span className="hero-word">
      {word.split('').map((char, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{ '--char-i': startIdx + i }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const rafRef = useRef(null);

  const [reduced] = useState(prefersReduced);
  const [stage, setStage] = useState(reduced ? 3 : 0);

  // Coordinated 3-stage cinematic entrance
  useEffect(() => {
    if (reduced) return undefined;
    const timers = [];

    timers.push(setTimeout(() => setStage(1), 60));
    timers.push(setTimeout(() => setStage(2), 350));
    timers.push(setTimeout(() => setStage(3), 680));
    timers.push(setTimeout(() => setStage(3), 1500));

    return () => timers.forEach(clearTimeout);
  }, [reduced]);

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
      heroRef.current.style.setProperty('--hero-px', nx.toFixed(3));
      heroRef.current.style.setProperty('--hero-py', ny.toFixed(3));
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (heroRef.current) {
      heroRef.current.style.setProperty('--hero-px', '0');
      heroRef.current.style.setProperty('--hero-py', '0');
    }
  }, []);

  const on = (n) => (stage >= n ? 'is-on' : '');

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section hero-cinematic-scene section-active"
      data-stage={stage}
      aria-label="Introduction and Overview"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Live ambient atmospheric field */}
      <div className="hero-live-bg" aria-hidden="true">
        <div className="hero-ambient-aura aura-burgundy"></div>
        <div className="hero-ambient-aura aura-rose"></div>
        <AmbientField tone="light" variant="hero" lights={false} />
      </div>

      <div className="hero-wide-container hero-cinematic-container">
        {/* Top Floating Telemetry & Availability Ribbon */}
        <div className={`hero-top-telemetry hs ${on(1)}`}>
          <div className="hero-availability-tag">
            <span className="availability-dot" aria-hidden="true"></span>
            <span>{personalInfo.availability}</span>
          </div>

          <div className="hero-location-beacon" aria-hidden="true">
            <span className="beacon-coord">17.3850° N, 78.4867° E</span>
            <span className="beacon-sep">/</span>
            <span className="beacon-program">BITS PILANI CS &amp; AI</span>
          </div>
        </div>

        {/* Monumental Editorial Presentation Arena */}
        <div className="hero-monumental-stage">
          {/* Left Column: Monumental Name & Positioning */}
          <div className="hero-lead-col">
            <div className={`hero-eyebrow-mark hs ${on(1)}`}>
              <Sparkles size={13} className="eyebrow-sparkle" />
              <span>SOFTWARE ENGINEER &amp; AI BUILDER</span>
            </div>

            <h1 className="hero-name hero-monumental-title" id="hero-name">
              <span className="sr-only">{personalInfo.name}</span>
              <span aria-hidden="true" className="hero-name-stagger">
                <span className="hero-name-line title-first">
                  <StaggeredWord word={FIRST} startIdx={0} />
                </span>
                <span className="hero-name-line title-last">
                  {LAST_PARTS.map((part, pIdx) => (
                    <React.Fragment key={part}>
                      {pIdx > 0 && <span className="hero-word-space">&nbsp;</span>}
                      <StaggeredWord
                        word={part}
                        startIdx={FIRST.length + pIdx * 8}
                      />
                    </React.Fragment>
                  ))}
                </span>
              </span>
            </h1>

            <p className={`hero-statement hs ${on(2)}`} id="hero-headline">
              <span className="statement-line">Computer Science Undergraduate at <strong>BITS Pilani</strong>.</span>
              <span className="statement-line">Engineering real-world software, intelligent full-stack systems, and practical AI.</span>
            </p>

            {/* Primary Action Command Dock */}
            <div className={`hero-action-dock hs ${on(2)}`} id="hero-cta-buttons">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="btn btn-burgundy btn-glow"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight size={16} className="btn-external-arrow" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-view-resume-btn"
                className="btn btn-outline-light"
                title="Open Resume PDF in new tab"
              >
                <FileText size={15} />
                <span>View Resume</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Gottipati_Nishita_Sri_Resume.pdf"
                id="hero-download-resume-btn"
                className="btn btn-subtle-icon"
                title="Download Resume as PDF"
                aria-label="Download Resume PDF"
              >
                <FileDown size={15} />
                <span className="download-label-text">PDF</span>
              </a>
            </div>

            {/* Direct Social Channels */}
            <div className={`hero-channels-row hs ${on(2)}`} id="hero-social-profiles">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="channel-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
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
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <span className="channel-sep" aria-hidden="true">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                id="hero-email-link"
                className="channel-link"
                title={`Email ${personalInfo.email}`}
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Expansive Workspace Visual Canvas & Parallax Stage */}
          <div className={`hero-visual-col hs ${on(2)}`} id="hero-visual-panel">
            <HeroVisual />
          </div>
        </div>

        {/* Floating Telemetry Metric Ribbon */}
        <div className={`hero-telemetry-ribbon hs ${on(3)}`} aria-label="Key Credentials Overview">
          {credentialsStrip.map((item) => (
            <div key={item.id} className="telemetry-node">
              <div className="telemetry-node-icon" aria-hidden="true">
                {stripIcons[item.icon]}
              </div>
              <div className="telemetry-node-content">
                <span className="telemetry-node-title">{item.title}</span>
                <span className="telemetry-node-sub">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className={`hero-scroll-prompt hs ${on(3)}`} aria-hidden="true">
        <a href="#about" className="scroll-prompt-link" aria-label="Scroll to About section">
          <span className="prompt-text">EXPLORE</span>
          <ChevronDown size={14} className="prompt-chevron" />
        </a>
      </div>
    </section>
  );
}
