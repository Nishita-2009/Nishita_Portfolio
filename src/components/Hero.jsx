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
import { personalInfo, credentialsStrip } from '../data/portfolioData';
import HeroVisual from './HeroVisual';
import AmbientField from './AmbientField';

const stripIcons = {
  graduation: <GraduationCap size={22} strokeWidth={1.6} />,
  code: <Code2 size={22} strokeWidth={1.6} />,
  cube: <Box size={22} strokeWidth={1.6} />,
  bolt: <Zap size={22} strokeWidth={1.6} />
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

  // Coordinated 3-stage cinematic entrance: pill -> staggered letters -> copy & CTAs -> live telemetry
  useEffect(() => {
    if (reduced) return undefined;
    const timers = [];

    timers.push(setTimeout(() => setStage(1), 60));
    timers.push(setTimeout(() => setStage(2), 420));
    timers.push(setTimeout(() => setStage(3), 750));

    // Failsafe: never leave essential content hidden
    timers.push(setTimeout(() => setStage(3), 1600));

    return () => {
      timers.forEach(clearTimeout);
    };
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
      className="hero-section section-active"
      data-stage={stage}
      aria-label="Introduction and Overview"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Live ambient hero background (appears with stage 1, fully on at stage 3) */}
      <div className="hero-live-bg" aria-hidden="true">
        <div className="hero-ambient-aura aura-burgundy"></div>
        <div className="hero-ambient-aura aura-rose"></div>
        <AmbientField tone="light" variant="hero" lights={false} />
        <div className="hero-left-orbit-decor">
          <span className="orbit-decor-node"></span>
          <span className="orbit-decor-node-secondary"></span>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className={`hs ${on(1)}`} id="hero-status-pill">
            <div className="hero-availability-tag">
              <span className="availability-dot" aria-hidden="true"></span>
              <span>{personalInfo.availability}</span>
            </div>
          </div>

          {/* Accessible name for screen readers; the staggered letters are visual */}
          <h1 className="hero-name" id="hero-name">
            <span className="sr-only">{personalInfo.name}</span>
            <span aria-hidden="true" className="hero-name-stagger">
              <span className="hero-name-line">
                <StaggeredWord word={FIRST} startIdx={0} />
              </span>
              <span className="hero-name-line">
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

          <p
            className={`hero-positioning ${stage >= 2 ? 'caret-done' : ''}`}
            id="hero-headline"
          >
            <span className="mask-line">
              <span className={`mask-line-inner ${on(2)}`} style={{ '--d': '0ms' }}>
                COMPUTER SCIENCE UNDERGRADUATE
              </span>
            </span>
            <span className="mask-line">
              <span className={`mask-line-inner ${on(2)}`} style={{ '--d': '90ms' }}>
                AT BITS PILANI <span className="pos-dot">•</span> SOFTWARE &amp; AI
              </span>
            </span>
          </p>

          <div className="mask-line hero-bio-mask">
            <p
              className={`hero-bio mask-line-inner ${on(2)}`}
              id="hero-bio"
              style={{ '--d': '190ms' }}
            >
              {personalInfo.heroIntro}
            </p>
          </div>

          <div
            className={`hero-actions hs ${on(2)}`}
            id="hero-cta-buttons"
            style={{ '--d': '300ms' }}
          >
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

          <div
            className={`hero-social-strip hs ${on(2)}`}
            id="hero-social-profiles"
            style={{ '--d': '400ms' }}
          >
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

        {/* Stage 3: geometry & composition settle into place */}
        <div
          className={`hero-visual hero-visual-reveal ${on(3)}`}
          id="hero-visual-panel"
        >
          <HeroVisual />
        </div>
      </div>

      <div className={`hero-scroll-indicator hs ${on(3)}`} aria-hidden="true">
        <a href="#about" className="hero-scroll-pill" aria-label="Scroll to About section">
          <span className="scroll-mouse-track">
            <span className="scroll-mouse-wheel"></span>
          </span>
          <span className="scroll-indicator-label">SCROLL</span>
        </a>
      </div>

      <div className="credentials-strip-wrapper" aria-label="Key Credentials">
        <div className="container">
          <div className="credentials-strip-grid">
            {credentialsStrip.map((item, idx) => (
              <div
                key={item.id}
                className={`credential-strip-item hs ${on(3)}`}
                style={{ '--d': `${idx * 80}ms` }}
              >
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
