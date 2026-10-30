import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HexCubeIcon, SparkleStarIcon } from './Icons';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-label="About Gottipati Nishita Sri"
    >
      {/* Subtle Bottom-Left Decorative Burgundy Wave SVG */}
      <svg
        className="about-decor-wave"
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-30 90C30 110 85 150 135 230M-30 110C25 130 75 168 120 235M-30 130C20 148 65 182 105 240"
          stroke="#71303D"
          strokeOpacity="0.18"
          strokeWidth="1.2"
        />
      </svg>

      <div className="container">
        <div className="about-split-layout">
          {/* Left Column: Concise Editorial Intro & CTA */}
          <div className="about-text-col">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">01</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dash" aria-hidden="true"></span>
                ABOUT ME
              </span>
            </div>

            <h2 className="about-heading">
              Curious Learner.
              <br />
              Relentless <em className="serif-italic-accent">Builder.</em>
            </h2>

            <p className="about-lead-copy">
              Computer Science undergraduate at <strong>BITS Pilani</strong> engineering real-world software, intelligent full-stack systems, and Generative AI applications.
            </p>

            {/* Compact Visual Fact Pills (No Wall of Text) */}
            <div className="about-quick-pills">
              {aboutData.quickFacts.map((fact) => (
                <div key={fact.label} className="about-fact-pill">
                  <span className="fact-pill-label">{fact.label}:</span>
                  <span className="fact-pill-val">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="about-cta-wrap">
              <a
                href="#projects"
                id="about-get-to-know-btn"
                className="btn btn-capsule-outline"
              >
                <span>Explore Selected Projects</span>
                <ArrowUpRight size={15} className="btn-external-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Sunlit Workspace Visual + Handwritten Notes + Floating Interests Card */}
          <div className="about-visual-col">
            <div className="about-workspace-stage">
              {/* Handwritten Callout on the Left of the Desk */}
              <div className="about-script-notes" aria-hidden="true">
                <SparkleStarIcon size={11} className="about-sparkle-1" />
                <span>Curious</span>
                <span>Learner</span>
                <span>Problem Solver</span>
                <span>Builder</span>
                <SparkleStarIcon size={9} className="about-sparkle-2" />
              </div>

              {/* Sunlit Workspace Image */}
              <div className="about-image-frame">
                <img
                  src="/images/about-workspace.jpg"
                  alt="Warm sunlit developer workspace with laptop, books, and botanical accents"
                  className="about-workspace-img"
                  loading="lazy"
                />
              </div>

              {/* Refined Interests Card */}
              <div
                className="about-interests-card"
                aria-label="Core Focus Areas and Interests"
              >
                <ul className="about-interests-list">
                  {aboutData.interests.map((interest) => (
                    <li key={interest} className="about-interest-item">
                      <span className="interest-icon-wrap" aria-hidden="true">
                        <HexCubeIcon size={18} />
                      </span>
                      <span className="interest-label">{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
