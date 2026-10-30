import React from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';
import { SparkleStarIcon } from './Icons';

export default function About() {
  return (
    <section
      id="about"
      className="section about-scene-section"
      aria-label="About Gottipati Nishita Sri"
    >
      <div className="about-wide-container">
        {/* Editorial Eyebrow */}
        <div className="editorial-eyebrow-row">
          <span className="editorial-section-num">01</span>
          <span className="editorial-eyebrow-tag">
            <span className="eyebrow-dot"></span>
            ABOUT // THE MANIFESTO &amp; THE MIND
          </span>
        </div>

        {/* Magazine Dossier Spread */}
        <div className="about-dossier-grid">
          {/* Left Column: Manifesto & Architectural Specs */}
          <div className="dossier-narrative-col">
            <h2 className="dossier-main-title">
              Curious Learner.
              <br />
              Relentless <em className="serif-italic-accent">Builder.</em>
            </h2>

            <p className="dossier-lead-text">
              Computer Science undergraduate at <strong>BITS Pilani</strong> engineering
              practical software, intelligent full-stack systems, and Generative AI applications
              grounded in algorithmic rigor.
            </p>

            <p className="dossier-sub-text">
              Bridging academic computer science foundations with industry-driven training from NIAT (NxtWave).
              Focused on turning conceptual code into dependable, user-facing digital products that solve real-world problems.
            </p>

            {/* Architectural Dossier Spec Sheet */}
            <div className="dossier-spec-sheet">
              <div className="spec-row">
                <span className="spec-label">UNIVERSITY</span>
                <span className="spec-value">BITS Pilani (Digital) · BSc CS</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">INDUSTRY TRAINING</span>
                <span className="spec-value">NIAT (NxtWave) · Full-Stack &amp; AI</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CORE DOMAIN</span>
                <span className="spec-value">Software Engineering · AI Solutions</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CURRENT AVAILABILITY</span>
                <span className="spec-value status-available">Open to Internships</span>
              </div>
            </div>

            <div className="dossier-action-wrap">
              <a
                href="#projects"
                id="about-get-to-know-btn"
                className="btn btn-burgundy"
              >
                <span>Explore Selected Projects</span>
                <ArrowUpRight size={15} className="btn-external-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Spatial Visual Stage & Technical Focus Matrix */}
          <div className="dossier-visual-col">
            <div className="dossier-spatial-stage">
              {/* Handwritten Editorial Callout */}
              <div className="dossier-script-notes" aria-hidden="true">
                <SparkleStarIcon size={12} className="script-sparkle-top" />
                <span>Turning Ideas</span>
                <span>Into Impact</span>
                <SparkleStarIcon size={10} className="script-sparkle-bottom" />
              </div>

              {/* Sunlit Developer Workspace Artwork Frame */}
              <div className="dossier-image-frame">
                <img
                  src="/images/about-workspace.jpg"
                  alt="Warm sunlit developer workspace with laptop, books, and botanical accents"
                  className="dossier-workspace-img"
                  loading="lazy"
                />
                <div className="image-frame-telemetry">
                  <span className="telemetry-coord">WORKSPACE // HYD</span>
                  <span className="telemetry-tag">ACTIVE LAB</span>
                </div>
              </div>

              {/* Core Focus Matrix Grid */}
              <div className="dossier-focus-matrix" aria-label="Core Engineering Pillars">
                <div className="focus-matrix-item">
                  <div className="focus-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="focus-item-text">
                    <span className="focus-item-title">Intelligent Systems</span>
                    <span className="focus-item-desc">Generative AI, LLM prompting &amp; agentic workflows</span>
                  </div>
                </div>

                <div className="focus-matrix-item">
                  <div className="focus-icon-box">
                    <Layers size={16} />
                  </div>
                  <div className="focus-item-text">
                    <span className="focus-item-title">Full-Stack Engineering</span>
                    <span className="focus-item-desc">Responsive React, modular Node/Express &amp; clean APIs</span>
                  </div>
                </div>

                <div className="focus-matrix-item">
                  <div className="focus-icon-box">
                    <Cpu size={16} />
                  </div>
                  <div className="focus-item-text">
                    <span className="focus-item-title">Algorithmic Rigor</span>
                    <span className="focus-item-desc">Data structures, OOP principles &amp; efficient computation</span>
                  </div>
                </div>

                <div className="focus-matrix-item">
                  <div className="focus-icon-box">
                    <Terminal size={16} />
                  </div>
                  <div className="focus-item-text">
                    <span className="focus-item-title">Modern Tooling</span>
                    <span className="focus-item-desc">Git version control, Linux environments &amp; cloud deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
