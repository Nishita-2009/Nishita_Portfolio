import React from 'react';

export default function HeroVisual() {
  return (
    <div className="hero-editorial-stage" id="hero-technical-artifact">
      {/* Main 3D Developer Workspace, Live Orbital Linework & Parallax Composition */}
      <div className="hero-sunset-canvas">
        {/* Multi-Layered Warm Atmospheric Glows */}
        <div className="sunset-glow-outer" aria-hidden="true"></div>
        <div className="sunset-glow-inner" aria-hidden="true"></div>
        <div className="sunset-sun-disc" aria-hidden="true"></div>

        {/* Live Orbital SVG Linework, Connected Constellation & Orbiting Particles */}
        <svg
          className="hero-orbit-svg"
          viewBox="0 0 540 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbitRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#762B3D" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#C87D82" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#DED1C5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="orbitPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#762B3D" stopOpacity="0" />
              <stop offset="50%" stopColor="#762B3D" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#C87D82" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="sunBurst" cx="38%" cy="46%" r="48%">
              <stop offset="0%" stopColor="#FFF8F0" stopOpacity="0.88" />
              <stop offset="42%" stopColor="#EBD0CA" stopOpacity="0.45" />
              <stop offset="78%" stopColor="#762B3D" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F8F3EC" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle Warm Sunrise Halo */}
          <circle cx="270" cy="235" r="200" fill="url(#sunBurst)" />

          {/* Outer Rotating Orbit Arc */}
          <circle
            cx="270"
            cy="235"
            r="205"
            stroke="url(#orbitRoseGrad)"
            strokeWidth="1.15"
            className="hero-orbit-ring-slow"
          />

          {/* Travelling Signal Arc on Outer Ring */}
          <circle
            cx="270"
            cy="235"
            r="205"
            stroke="url(#orbitPulseGrad)"
            strokeWidth="1.8"
            strokeDasharray="90 540"
            strokeLinecap="round"
            className="hero-orbit-ring-slow"
          />

          {/* Secondary Tilted Elliptical Orbit */}
          <ellipse
            cx="270"
            cy="235"
            rx="235"
            ry="145"
            transform="rotate(-15 270 235)"
            stroke="#762B3D"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="3 5"
          />

          {/* Third Tilted Ellipse Counter-Angle */}
          <ellipse
            cx="270"
            cy="235"
            rx="210"
            ry="125"
            transform="rotate(25 270 235)"
            stroke="#762B3D"
            strokeOpacity="0.22"
            strokeWidth="0.85"
          />

          {/* Precision Star Sparkles matching Image 2 */}
          <g fill="#762B3D">
            <path
              d="M 125 150 Q 125 158 118 158 Q 125 158 125 166 Q 125 158 132 158 Q 125 158 125 150 Z"
              opacity="0.75"
              className="ambient-node-pulse"
            />
            <path
              d="M 470 120 Q 470 127 464 127 Q 470 127 470 134 Q 470 127 476 127 Q 470 127 470 120 Z"
              opacity="0.8"
              className="ambient-node-pulse"
            />
            <path
              d="M 505 320 Q 505 326 500 326 Q 505 326 505 332 Q 505 326 510 326 Q 505 326 505 320 Z"
              opacity="0.7"
              className="ambient-node-pulse"
            />
          </g>

          {/* Orbiting Satellite Nodes */}
          <circle cx="82" cy="225" r="4" fill="#191716" />
          <circle
            cx="82"
            cy="225"
            r="9.5"
            stroke="#762B3D"
            strokeOpacity="0.36"
            strokeWidth="1"
            className="ambient-node-pulse"
          />
          <circle cx="485" cy="345" r="3.5" fill="#762B3D" className="ambient-node-pulse" />
        </svg>

        {/* 3D Floating Laptop Workspace, Sculptural Backdrop & Illuminated Pedestal */}
        <div className="hero-workspace-3d-stage">
          <img
            src="/images/workspace-hero-3d.jpg"
            alt="Premium 3D illustration of stacked books with glowing AI lightbulb, neural network brain filament, green sprout, and burgundy code mug on illuminated circular pedestal"
            width={1200}
            height={896}
            className="hero-workspace-3d-img"
            loading="eager"
          />
        </div>
      </div>

      {/* Right-Side Editorial Technical Rail (01 // DEVELOP EXPLORE LEARN BUILD REPEAT) */}
      <aside className="hero-editorial-rail" aria-label="Engineering Philosophy">
        <div className="rail-index-num">01</div>

        <ul className="rail-mantra-list">
          <li className="rail-mantra-item is-active">
            <span className="rail-dot-active" aria-hidden="true"></span>
            <span>DEVELOP</span>
          </li>
          <li className="rail-mantra-item">
            <span className="rail-dot-ring" aria-hidden="true"></span>
            <span>EXPLORE</span>
          </li>
          <li className="rail-mantra-item">
            <span className="rail-dot-ring" aria-hidden="true"></span>
            <span>LEARN</span>
          </li>
          <li className="rail-mantra-item">
            <span className="rail-dot-ring" aria-hidden="true"></span>
            <span>BUILD</span>
          </li>
          <li className="rail-mantra-item">
            <span className="rail-dot-ring" aria-hidden="true"></span>
            <span>REPEAT</span>
          </li>
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
