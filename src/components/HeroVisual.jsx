import React, { useMemo } from 'react';
import { Brain, BarChart3, Code2 } from 'lucide-react';

export default function HeroVisual() {
  // Generate multi-line fluid ribbon wave paths for bottom-right corner
  const wavePaths = useMemo(() => {
    const paths = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const yStart = 430 + i * 8;
      const yMid = 390 + i * 9;
      const yEnd = 470 + i * 5;
      const opacity = (0.15 + (i / count) * 0.45).toFixed(2);
      paths.push({
        d: `M 320 ${yStart} C 440 ${yMid - 35}, 540 ${yStart + 40}, 690 ${yEnd}`,
        opacity,
        width: (1.1 + (i % 3) * 0.35).toFixed(1)
      });
    }
    return paths;
  }, []);

  // Internal fine wireframe wave paths inside the 3D sphere
  const sphereInternalWaves = useMemo(() => {
    const waves = [];
    for (let i = 0; i < 18; i++) {
      const yBase = 250 + i * 5;
      const arc = 15 - Math.abs(i - 9) * 1.2;
      waves.push({
        d: `M 290 ${yBase + 15} Q 360 ${yBase - arc}, 410 ${yBase + 5} T 530 ${yBase - 10}`,
        opacity: (0.12 + Math.sin((i / 18) * Math.PI) * 0.32).toFixed(2)
      });
    }
    return waves;
  }, []);

  return (
    <div className="hero-editorial-stage" id="hero-technical-artifact">
      {/* Background Subtle Technical Grid & Ambient Lighting */}
      <div className="hero-atmosphere-backdrop" aria-hidden="true">
        <div className="hero-radial-glow hero-glow-primary"></div>
        <div className="hero-radial-glow hero-glow-secondary"></div>
      </div>

      {/* Main Vector Orbital Stage Canvas */}
      <div className="hero-orbital-canvas">
        <svg
          className="hero-orbital-svg"
          viewBox="0 0 680 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Ambient Backlight Radiance */}
            <radialGradient id="ambientBacklight" cx="60%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#F7DDD8" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#F5E4DC" stopOpacity="0.45" />
              <stop offset="85%" stopColor="#FBF3ED" stopOpacity="0" />
            </radialGradient>

            {/* Central 3D Burgundy Velvet Sphere Shader */}
            <radialGradient id="sphereCoreShader" cx="36%" cy="30%" r="68%">
              <stop offset="0%" stopColor="#FFA6B8" stopOpacity="0.95" />
              <stop offset="14%" stopColor="#C93F5E" />
              <stop offset="40%" stopColor="#78182F" />
              <stop offset="72%" stopColor="#4A0E1B" />
              <stop offset="100%" stopColor="#24050D" />
            </radialGradient>

            {/* Specular Rim Light Mask for Sphere */}
            <linearGradient id="sphereRimGrad" x1="20%" y1="10%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#FFE6EC" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#FFA6B8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#78182F" stopOpacity="0" />
            </linearGradient>

            {/* Satellite 3D Bead Shader */}
            <radialGradient id="beadShader" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FFC2CE" />
              <stop offset="35%" stopColor="#A82845" />
              <stop offset="80%" stopColor="#5C1021" />
              <stop offset="100%" stopColor="#24050D" />
            </radialGradient>

            {/* Flowing Wave Ribbon Gradient */}
            <linearGradient id="waveRibbonGrad" x1="0%" y1="30%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#78182F" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#C77F89" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E5B2B9" stopOpacity="0.2" />
            </linearGradient>

            {/* Circular Clip Path for Central Sphere Texture */}
            <clipPath id="sphereClip">
              <circle cx="410" cy="260" r="140" />
            </clipPath>

            {/* Technical Grid Pattern */}
            <pattern id="techGridPattern" width="38" height="38" patternUnits="userSpaceOnUse">
              <path d="M 38 0 L 0 0 0 38" fill="none" stroke="rgba(120, 24, 47, 0.045)" strokeWidth="0.75" />
            </pattern>
          </defs>

          {/* Background Grid Pattern */}
          <rect width="680" height="580" fill="url(#techGridPattern)" />

          {/* Ambient Warm Sun Halo behind Sphere */}
          <circle cx="410" cy="260" r="230" fill="url(#ambientBacklight)" />

          {/* Precision 4-Point Star Sparkles */}
          <g className="hero-sparkles-group" fill="#78182F">
            {/* Sparkle Top-Left */}
            <path
              d="M 245 105 Q 245 115 235 115 Q 245 115 245 125 Q 245 115 255 115 Q 245 115 245 105 Z"
              opacity="0.65"
              className="sparkle-pulse-slow"
            />
            {/* Sparkle Far Top-Right */}
            <path
              d="M 605 115 Q 605 123 597 123 Q 605 123 605 131 Q 605 123 613 123 Q 605 123 605 115 Z"
              opacity="0.75"
              className="sparkle-pulse-fast"
            />
            {/* Sparkle Bottom-Left */}
            <path
              d="M 285 450 Q 285 457 278 457 Q 285 457 285 464 Q 285 457 292 457 Q 285 457 285 450 Z"
              opacity="0.6"
              className="sparkle-pulse-slow"
            />
          </g>

          {/* Outer Rotating Orbital Ring 1: Tilted Ellipse -20° */}
          <g className="hero-orbit-group orbit-counter-clockwise">
            <ellipse
              cx="410"
              cy="260"
              rx="240"
              ry="115"
              transform="rotate(-21 410 260)"
              stroke="#78182F"
              strokeWidth="1.25"
              strokeOpacity="0.45"
            />
          </g>

          {/* Secondary Orbit 2: Tilted Ellipse +32° (Dashed) */}
          <g className="hero-orbit-group orbit-clockwise">
            <ellipse
              cx="410"
              cy="260"
              rx="225"
              ry="125"
              transform="rotate(33 410 260)"
              stroke="#78182F"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.5"
            />
          </g>

          {/* Wide Dotted Circumference Orbit */}
          <ellipse
            cx="410"
            cy="260"
            rx="275"
            ry="165"
            transform="rotate(-8 410 260)"
            stroke="#C77F89"
            strokeWidth="1"
            strokeDasharray="2 6"
            strokeOpacity="0.38"
          />

          {/* Connecting Tangent Linework */}
          <line
            x1="180"
            y1="340"
            x2="245"
            y2="340"
            stroke="#78182F"
            strokeWidth="0.8"
            strokeDasharray="2 4"
            strokeOpacity="0.3"
          />

          {/* Flowing Ribbon Waves in Bottom-Right Corner */}
          <g className="hero-flowing-ribbons" stroke="url(#waveRibbonGrad)">
            {wavePaths.map((p, idx) => (
              <path
                key={idx}
                d={p.d}
                strokeWidth={p.width}
                strokeOpacity={p.opacity}
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Central 3D Velvet Burgundy Sphere */}
          <g className="hero-central-sphere-group">
            {/* Soft Ambient Depth Glow behind sphere */}
            <circle
              cx="410"
              cy="260"
              r="144"
              fill="#78182F"
              opacity="0.16"
              filter="blur(16px)"
            />

            {/* Core 3D Sphere Body */}
            <circle
              cx="410"
              cy="260"
              r="140"
              fill="url(#sphereCoreShader)"
              className="sphere-core-disc"
            />

            {/* Delicate Wave Lines Inside Sphere Body */}
            <g clipPath="url(#sphereClip)" className="sphere-internal-texture">
              {sphereInternalWaves.map((w, idx) => (
                <path
                  key={idx}
                  d={w.d}
                  stroke="#FFEBF0"
                  strokeWidth="0.85"
                  strokeOpacity={w.opacity}
                  fill="none"
                />
              ))}
            </g>

            {/* Specular Edge Rim Light */}
            <circle
              cx="410"
              cy="260"
              r="139"
              stroke="url(#sphereRimGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="280 600"
              transform="rotate(-75 410 260)"
            />

            {/* Central Typographic Statement inside Sphere: "BUILD WHAT'S NEXT" */}
            <g className="sphere-statement-typography" textAnchor="middle">
              {/* BUILD */}
              <text
                x="410"
                y="226"
                className="svg-sphere-label-build"
                fill="rgba(255, 240, 243, 0.88)"
              >
                BUILD
              </text>

              {/* WHAT'S */}
              <text
                x="410"
                y="256"
                className="svg-sphere-title-whats"
                fill="#FFFFFF"
              >
                WHAT’S
              </text>

              {/* NEXT */}
              <text
                x="410"
                y="286"
                className="svg-sphere-title-next"
                fill="#FFFFFF"
              >
                NEXT
              </text>

              {/* Elegant Divider Rule */}
              <line
                x1="392"
                y1="303"
                x2="428"
                y2="303"
                stroke="rgba(255, 255, 255, 0.65)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* 3D Glossy Orbiting Satellite Beads */}
          {/* Bead 1: Top-Right on Ellipse */}
          <g className="hero-bead bead-tr">
            <circle cx="585" cy="192" r="9.5" fill="url(#beadShader)" />
            <circle cx="583" cy="189" r="2.2" fill="#FFFFFF" opacity="0.85" />
          </g>

          {/* Bead 2: Bottom-Right on Secondary Orbit */}
          <g className="hero-bead bead-br">
            <circle cx="536" cy="378" r="8.5" fill="url(#beadShader)" />
            <circle cx="534" cy="375" r="2" fill="#FFFFFF" opacity="0.85" />
          </g>

          {/* Bead 3: Left side on orbit */}
          <g className="hero-bead bead-left">
            <circle cx="215" cy="326" r="7.5" fill="url(#beadShader)" />
            <circle cx="213" cy="323" r="1.8" fill="#FFFFFF" opacity="0.85" />
          </g>
        </svg>

        {/* Floating Frosted Glass Technical Badges (Real React HTML Elements) */}
        {/* Badge 1: Top-Left AI & LLMs */}
        <div className="hero-float-glass-badge badge-pos-ai" aria-hidden="true">
          <div className="badge-glass-icon-box">
            <Brain size={18} strokeWidth={2} className="badge-lucide-icon" />
          </div>
          <span className="badge-glass-label">AI &amp; LLMs</span>
        </div>

        {/* Badge 2: Bottom-Left Data & AI */}
        <div className="hero-float-glass-badge badge-pos-data" aria-hidden="true">
          <div className="badge-glass-icon-box">
            <BarChart3 size={18} strokeWidth={2} className="badge-lucide-icon" />
          </div>
          <span className="badge-glass-label">Data &amp; AI</span>
        </div>

        {/* Badge 3: Right Full-Stack */}
        <div className="hero-float-glass-badge badge-pos-fullstack" aria-hidden="true">
          <div className="badge-glass-icon-box">
            <Code2 size={18} strokeWidth={2} className="badge-lucide-icon" />
          </div>
          <span className="badge-glass-label">Full-Stack</span>
        </div>
      </div>
    </div>
  );
}
