import React from 'react';
import { 
  ShieldCheck,
  Code2
} from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="hero-technical-composition" id="hero-technical-artifact">
      {/* 1. Header Spec Bar */}
      <div className="tech-artifact-header">
        <div className="tech-artifact-id">
          <span className="tech-status-pip" aria-hidden="true"></span>
          <span className="tech-id-text">SYSTEM TOPOLOGY // CANDIDATE SPEC</span>
        </div>
        <div className="tech-artifact-badge">
          <ShieldCheck size={12} />
          <span>VERIFIED 2026</span>
        </div>
      </div>

      {/* 2. Interactive SVG System Network Canvas */}
      <div className="tech-network-canvas" aria-label="Interactive AI and Systems Architecture Diagram">
        <svg 
          className="tech-svg-diagram" 
          viewBox="0 0 460 260" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Background Grid */}
          <defs>
            <pattern id="techGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#DDD9D0" strokeWidth="0.6" strokeOpacity="0.6" />
            </pattern>
            <linearGradient id="oxbloodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#713B42" />
              <stop offset="100%" stopColor="#9E525C" />
            </linearGradient>
            <linearGradient id="charcoalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#191919" />
              <stop offset="100%" stopColor="#2D2B28" />
            </linearGradient>
          </defs>

          <rect width="460" height="260" fill="url(#techGrid)" opacity="0.4" />

          {/* Connection Traces */}
          <g className="tech-traces" stroke="#C8C3B8" strokeWidth="1.2" strokeDasharray="3 3">
            {/* Center to Top-Left (DSA Engine) */}
            <path d="M 230 130 L 90 65" />
            {/* Center to Top-Right (AI Agents & LLMs) */}
            <path d="M 230 130 L 370 65" />
            {/* Center to Bottom-Left (Full-Stack Systems) */}
            <path d="M 230 130 L 90 200" />
            {/* Center to Bottom-Right (Data & RAG Pipeline) */}
            <path d="M 230 130 L 370 200" />
            {/* Perimeter Cross-connections */}
            <path d="M 90 65 L 370 65" strokeWidth="0.8" strokeOpacity="0.4" />
            <path d="M 90 200 L 370 200" strokeWidth="0.8" strokeOpacity="0.4" />
          </g>

          {/* Animated Data Packets traveling along traces */}
          <circle className="pulse-packet packet-1" r="3" fill="#713B42">
            <animateMotion 
              path="M 230 130 L 90 65 L 230 130" 
              dur="6s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle className="pulse-packet packet-2" r="3" fill="#713B42">
            <animateMotion 
              path="M 230 130 L 370 65 L 230 130" 
              dur="5s" 
              begin="1.5s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle className="pulse-packet packet-3" r="3" fill="#191919">
            <animateMotion 
              path="M 230 130 L 370 200 L 230 130" 
              dur="7s" 
              begin="0.8s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle className="pulse-packet packet-4" r="3" fill="#191919">
            <animateMotion 
              path="M 230 130 L 90 200 L 230 130" 
              dur="5.5s" 
              begin="2.2s" 
              repeatCount="indefinite" 
            />
          </circle>

          {/* Concentric Telemetry Orbit Rings at Center */}
          <circle 
            cx="230" 
            cy="130" 
            r="44" 
            stroke="#DDD9D0" 
            strokeWidth="1" 
            strokeDasharray="4 4" 
            className="orbit-ring-slow" 
          />
          <circle 
            cx="230" 
            cy="130" 
            r="64" 
            stroke="#DDD9D0" 
            strokeWidth="0.8" 
            strokeOpacity="0.7" 
            strokeDasharray="2 6" 
            className="orbit-ring-fast" 
          />

          {/* Center Hub Node: Core Agent & Algorithmic Runtime */}
          <g className="tech-node node-center" transform="translate(230, 130)">
            <circle r="22" fill="url(#charcoalGrad)" stroke="#713B42" strokeWidth="1.5" />
            <circle r="16" fill="none" stroke="#F7F5F0" strokeWidth="0.7" strokeOpacity="0.5" />
            <circle r="4" fill="#713B42" className="center-pulse-dot" />
          </g>

          {/* Node 1: Algorithmic Foundations (DSA / C++) */}
          <g className="tech-node node-nw" transform="translate(90, 65)">
            <rect x="-42" y="-18" width="84" height="36" rx="2" fill="#FFFFFF" stroke="#DDD9D0" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" fill="#713B42" fontSize="8" fontWeight="700" letterSpacing="0.06em">01. ALGORITHMS</text>
            <text x="0" y="9" textAnchor="middle" fill="#191919" fontSize="9.5" fontWeight="600">DSA • C++</text>
          </g>

          {/* Node 2: Applied AI & LLMs */}
          <g className="tech-node node-ne" transform="translate(370, 65)">
            <rect x="-44" y="-18" width="88" height="36" rx="2" fill="#FFFFFF" stroke="#DDD9D0" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" fill="#713B42" fontSize="8" fontWeight="700" letterSpacing="0.06em">02. APPLIED AI</text>
            <text x="0" y="9" textAnchor="middle" fill="#191919" fontSize="9.5" fontWeight="600">LLMs • Agents</text>
          </g>

          {/* Node 3: Full-Stack Systems & Architecture */}
          <g className="tech-node node-sw" transform="translate(90, 200)">
            <rect x="-46" y="-18" width="92" height="36" rx="2" fill="#FFFFFF" stroke="#DDD9D0" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" fill="#713B42" fontSize="8" fontWeight="700" letterSpacing="0.06em">03. ARCHITECTURE</text>
            <text x="0" y="9" textAnchor="middle" fill="#191919" fontSize="9.5" fontWeight="600">Full-Stack Web</text>
          </g>

          {/* Node 4: Data Engineering & RAG */}
          <g className="tech-node node-se" transform="translate(370, 200)">
            <rect x="-42" y="-18" width="84" height="36" rx="2" fill="#FFFFFF" stroke="#DDD9D0" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" fill="#713B42" fontSize="8" fontWeight="700" letterSpacing="0.06em">04. DATA PIPELINE</text>
            <text x="0" y="9" textAnchor="middle" fill="#191919" fontSize="9.5" fontWeight="600">RAG • MongoDB</text>
          </g>

          {/* Center Title Tag */}
          <rect x="180" y="162" width="100" height="18" rx="2" fill="#EFEBE3" stroke="#DDD9D0" strokeWidth="0.8" />
          <text x="230" y="174" textAnchor="middle" fill="#191919" fontSize="8.5" fontWeight="600" letterSpacing="0.04em">CORE ENGINE</text>
        </svg>
      </div>

      {/* 3. Integrated Engineering Specification HUD (Responsive & Compact) */}
      <div className="tech-specs-plate">
        <div className="spec-metric-row">
          <div className="spec-metric">
            <span className="spec-label">INSTITUTION</span>
            <span className="spec-value">BITS Pilani (Digital)</span>
          </div>
          <div className="spec-divider"></div>
          <div className="spec-metric">
            <span className="spec-label">PROGRAM</span>
            <span className="spec-value">BSc Computer Science</span>
          </div>
        </div>

        <div className="spec-metric-row secondary-spec-row">
          <div className="spec-metric">
            <span className="spec-label">FELLOWSHIP</span>
            <span className="spec-value">NIAT Engineering Fellow</span>
          </div>
          <div className="spec-divider"></div>
          <div className="spec-metric">
            <span className="spec-label">SEEKING</span>
            <span className="spec-value spec-highlight">SWE Internships (2026)</span>
          </div>
        </div>

        {/* Live System Capabilities Tagline */}
        <div className="tech-hud-footer">
          <div className="hud-code-tag">
            <Code2 size={13} className="hud-icon" />
            <span>Stack: Python • C++ • JavaScript • GenAI • RAG</span>
          </div>
          <div className="hud-status-badge">
            <span className="hud-live-pip"></span>
            <span>AVAILABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
