import React from 'react';
import { SparkleStarIcon } from './Icons';

export default function HeroVisual() {
  return (
    <div className="hero-editorial-stage" id="hero-technical-artifact">
      {/* Main Sunset, Live Orbital Geometry & Parallax Composition */}
      <div className="hero-sunset-canvas">
        {/* Multi-Layered Warm Atmospheric Glows (Parallax Depth Layer 1) */}
        <div className="sunset-glow-outer" aria-hidden="true"></div>
        <div className="sunset-glow-inner" aria-hidden="true"></div>
        <div className="sunset-sun-disc" aria-hidden="true"></div>

        {/* Live Orbital SVG Linework, Connected Constellation & Travelling Pulses (Parallax Layer 2) */}
        <svg
          className="hero-orbit-svg"
          viewBox="0 0 540 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbitRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#71303D" stopOpacity="0.52" />
              <stop offset="50%" stopColor="#C87D82" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#DED5CA" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="orbitPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#71303D" stopOpacity="0" />
              <stop offset="50%" stopColor="#71303D" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C87D82" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="sunBurst" cx="38%" cy="46%" r="48%">
              <stop offset="0%" stopColor="#FFF6EB" stopOpacity="0.88" />
              <stop offset="40%" stopColor="#E8A598" stopOpacity="0.46" />
              <stop offset="75%" stopColor="#71303D" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F7F3EC" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle Warm Sun Halo */}
          <circle cx="240" cy="220" r="192" fill="url(#sunBurst)" />

          {/* Outer Rotating Orbit Arc */}
          <circle
            cx="275"
            cy="235"
            r="196"
            stroke="url(#orbitRoseGrad)"
            strokeWidth="1.15"
            className="hero-orbit-ring-slow"
          />

          {/* Travelling Signal Arc on Outer Ring */}
          <circle
            cx="275"
            cy="235"
            r="196"
            stroke="url(#orbitPulseGrad)"
            strokeWidth="1.8"
            strokeDasharray="90 540"
            strokeLinecap="round"
            className="hero-orbit-ring-slow"
          />

          {/* Secondary Tilted Elliptical Orbit (Counter-Rotating) */}
          <g className="hero-orbit-ellipse-group">
            <ellipse
              cx="265"
              cy="235"
              rx="225"
              ry="155"
              transform="rotate(-14 265 235)"
              stroke="#71303D"
              strokeOpacity="0.26"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
          </g>

          {/* Inner Delicate Ring */}
          <circle
            cx="270"
            cy="225"
            r="140"
            stroke="#C87D82"
            strokeOpacity="0.36"
            strokeWidth="0.95"
            className="hero-orbit-ring-reverse"
          />

          {/* Connected Constellation Vectors */}
          <polyline
            points="70,305 142,108 270,85 398,222 455,95"
            stroke="#71303D"
            strokeOpacity="0.16"
            strokeWidth="0.85"
            strokeDasharray="2 4"
          />

          {/* Connecting Diagonal Technical Hairlines */}
          <line
            x1="70"
            y1="305"
            x2="205"
            y2="215"
            stroke="#71303D"
            strokeOpacity="0.3"
            strokeWidth="0.9"
          />
          <line
            x1="355"
            y1="150"
            x2="455"
            y2="95"
            stroke="#71303D"
            strokeOpacity="0.28"
            strokeWidth="0.9"
          />

          {/* Precision Crosshair Markers */}
          <g stroke="#71303D" strokeOpacity="0.4" strokeWidth="0.9">
            <line x1="138" y1="108" x2="146" y2="108" />
            <line x1="142" y1="104" x2="142" y2="112" />
            <line x1="451" y1="95" x2="459" y2="95" />
            <line x1="455" y1="91" x2="455" y2="99" />
          </g>

          {/* Orbiting & Pulsing Constellation Nodes */}
          <circle cx="82" cy="212" r="4" fill="#191817" />
          <circle
            cx="82"
            cy="212"
            r="9.5"
            stroke="#71303D"
            strokeOpacity="0.36"
            strokeWidth="1"
            className="ambient-node-pulse"
          />

          <circle cx="142" cy="108" r="3.2" fill="#C87D82" className="ambient-node-pulse" />
          <circle cx="270" cy="85" r="2.6" fill="#71303D" fillOpacity="0.7" />

          <circle cx="398" cy="222" r="4.5" fill="#191817" />
          <circle
            cx="398"
            cy="222"
            r="10.5"
            stroke="#71303D"
            strokeOpacity="0.35"
            strokeWidth="1"
            className="ambient-node-pulse"
          />

          <circle cx="445" cy="148" r="3" fill="#71303D" className="ambient-node-pulse" />
          <circle cx="115" cy="335" r="2.8" fill="#71303D" fillOpacity="0.65" />
        </svg>

        {/* Subtle Floating Technical Telemetry Labels */}
        <div className="hero-telemetry-tag telemetry-top-left" aria-hidden="true">
          <span className="telemetry-dot"></span>
          <span>CS &amp; AI // BITS PILANI</span>
        </div>

        <div className="hero-telemetry-tag telemetry-bottom-left" aria-hidden="true">
          <span>FULL-STACK • GEN-AI</span>
        </div>

        {/* Stylized Editorial Horizon Artwork (Parallax Layer 3) */}
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
