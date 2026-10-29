import React from 'react';
import { SparkleStarIcon } from './Icons';

export default function HeroVisual() {
  return (
    <div className="hero-editorial-stage" id="hero-technical-artifact">
      {/* Main Sunset & Orbit Composition */}
      <div className="hero-sunset-canvas">
        {/* Warm Atmospheric Glow Layers */}
        <div className="sunset-glow-outer" aria-hidden="true"></div>
        <div className="sunset-glow-inner" aria-hidden="true"></div>
        <div className="sunset-sun-disc" aria-hidden="true"></div>

        {/* Delicate Orbital SVG Linework & Nodes */}
        <svg
          className="hero-orbit-svg"
          viewBox="0 0 540 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbitRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#71303D" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#C87D82" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#DED5CA" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="sunBurst" cx="38%" cy="46%" r="48%">
              <stop offset="0%" stopColor="#FFF6EB" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#E8A598" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#71303D" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F7F3EC" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle Warm Sun Halo */}
          <circle cx="240" cy="220" r="190" fill="url(#sunBurst)" />

          {/* Outer Orbit Arc */}
          <circle
            cx="275"
            cy="235"
            r="195"
            stroke="url(#orbitRoseGrad)"
            strokeWidth="1.1"
            className="hero-orbit-ring-slow"
          />

          {/* Secondary Tilted Elliptical Orbit */}
          <ellipse
            cx="265"
            cy="235"
            rx="225"
            ry="155"
            transform="rotate(-14 265 235)"
            stroke="#71303D"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="3 5"
          />

          {/* Inner Delicate Ring */}
          <circle
            cx="270"
            cy="225"
            r="138"
            stroke="#C87D82"
            strokeOpacity="0.32"
            strokeWidth="0.9"
          />

          {/* Connecting Diagonal Technical Hairline */}
          <line
            x1="70"
            y1="305"
            x2="205"
            y2="215"
            stroke="#71303D"
            strokeOpacity="0.28"
            strokeWidth="0.9"
          />
          <line
            x1="355"
            y1="150"
            x2="455"
            y2="95"
            stroke="#71303D"
            strokeOpacity="0.25"
            strokeWidth="0.9"
          />

          {/* Orbiting Nodes */}
          <circle cx="82" cy="212" r="4" fill="#191817" />
          <circle cx="82" cy="212" r="9" stroke="#71303D" strokeOpacity="0.3" strokeWidth="1" />

          <circle cx="142" cy="108" r="3" fill="#C87D82" />
          <circle cx="398" cy="222" r="4.5" fill="#191817" />
          <circle cx="398" cy="222" r="10" stroke="#71303D" strokeOpacity="0.3" strokeWidth="1" />

          <circle cx="445" cy="148" r="3" fill="#71303D" />
          <circle cx="115" cy="335" r="2.5" fill="#71303D" fillOpacity="0.6" />
        </svg>

        {/* Stylized Editorial Portrait/Horizon Artwork */}
        <div className="hero-portrait-frame">
          <img
            src="/images/hero-atmosphere.jpg"
            alt="Editorial illustration looking toward a warm sunset horizon"
            className="hero-atmosphere-img"
            loading="eager"
          />
        </div>

        {/* Handwritten Calligraphic Note: "Turning Ideas Into Impact" */}
        <div className="hero-script-callout" aria-hidden="true">
          <SparkleStarIcon size={11} className="script-sparkle sparkle-top" />
          <span className="script-line">Turning</span>
          <span className="script-line">Ideas</span>
          <span className="script-line">Into</span>
          <span className="script-line">Impact</span>
          <SparkleStarIcon size={9} className="script-sparkle sparkle-bottom" />
        </div>
      </div>

      {/* Right-Side Editorial Technical Rail (01 // DEVELOP EXPLORE LEARN BUILD REPEAT) */}
      <aside className="hero-editorial-rail" aria-label="Engineering Philosophy">
        <div className="rail-index-num">01</div>

        <ul className="rail-mantra-list">
          <li>DEVELOP</li>
          <li>EXPLORE</li>
          <li>LEARN</li>
          <li>BUILD</li>
          <li>REPEAT</li>
        </ul>

        <div className="rail-vertical-line" aria-hidden="true">
          <span className="rail-line-node"></span>
        </div>

        <div className="rail-domain-caption">
          <span>SOFTWARE</span>
          <span>AI</span>
          <span>REAL-WORLD</span>
          <span>SOLUTIONS</span>
        </div>
      </aside>
    </div>
  );
}
