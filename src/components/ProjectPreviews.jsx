import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Droplets,
  CheckCircle2,
  ShoppingCart
} from 'lucide-react';

/* ==========================================================================
   1. GROWZ PREVIEW — Emerald & Charcoal MSME Business Intelligence Showcase
   ========================================================================== */
export function GrowzPreview() {
  return (
    <div className="project-card-banner banner-growz" aria-hidden="true">
      <div className="banner-ambient-glow glow-emerald"></div>

      {/* Left Brand Lockup */}
      <div className="banner-brand-col">
        <div className="banner-brand-lockup">
          <div className="brand-emblem emblem-growz">
            <TrendingUp size={18} />
          </div>
          <div className="brand-title-stack">
            <span className="banner-app-name">Growz</span>
            <span className="banner-app-sub">MSME Intelligence</span>
          </div>
        </div>
        <div className="banner-mini-stat">
          <span className="mini-stat-dot dot-emerald"></span>
          <span>AI Sales &amp; Growth Insights</span>
        </div>
      </div>

      {/* Right Floating UI Mockup */}
      <div className="banner-ui-mockup mockup-growz">
        <div className="mockup-window-bar">
          <span className="win-dot"></span>
          <span className="win-dot"></span>
          <span className="win-dot"></span>
          <span className="win-url">growz.ai // dashboard</span>
        </div>
        <div className="mockup-window-body">
          <div className="mockup-kpi-row">
            <div className="mockup-kpi-box">
              <span className="kpi-lbl">Revenue Velocity</span>
              <span className="kpi-num text-emerald">+24.6%</span>
            </div>
            <div className="mockup-kpi-box">
              <span className="kpi-lbl">Health Score</span>
              <span className="kpi-num">98.4%</span>
            </div>
          </div>

          {/* Mini SVG Area Chart */}
          <div className="mockup-chart-box">
            <svg viewBox="0 0 180 48" className="mockup-svg-chart" fill="none">
              <defs>
                <linearGradient id="growzFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M4 40 Q 40 34, 72 22 T 135 14 T 176 6 L 176 46 L 4 46 Z"
                fill="url(#growzFill)"
              />
              <path
                d="M4 40 Q 40 34, 72 22 T 135 14 T 176 6"
                stroke="#34D399"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="72" cy="22" r="2.5" fill="#10B981" />
              <circle cx="135" cy="14" r="2.5" fill="#10B981" />
              <circle cx="176" cy="6" r="3" fill="#A7F3D0" />
            </svg>
          </div>

          <div className="mockup-ai-bar">
            <Sparkles size={10} className="text-emerald" />
            <span>AI: Rebalance Q4 high-turnover stock</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. OPTHIRE PREVIEW — Violet & Midnight Multi-Agent Recruitment Showcase
   ========================================================================== */
export function OptHirePreview() {
  return (
    <div className="project-card-banner banner-opthire" aria-hidden="true">
      <div className="banner-ambient-glow glow-violet"></div>

      {/* Left Brand Lockup */}
      <div className="banner-brand-col">
        <div className="banner-brand-lockup">
          <div className="brand-emblem emblem-opthire">
            <Sparkles size={18} />
          </div>
          <div className="brand-title-stack">
            <span className="banner-app-name">OptHire</span>
            <span className="banner-app-sub">AI Recruitment Agents</span>
          </div>
        </div>
        <div className="banner-mini-stat">
          <span className="mini-stat-dot dot-violet"></span>
          <span>ATS Scoring &amp; Skill Gap AI</span>
        </div>
      </div>

      {/* Right Floating UI Mockup */}
      <div className="banner-ui-mockup mockup-opthire">
        <div className="mockup-window-bar">
          <span className="win-dot"></span>
          <span className="win-dot"></span>
          <span className="win-dot"></span>
          <span className="win-url">opthire.agent // pipeline</span>
        </div>
        <div className="mockup-window-body">
          <div className="mockup-ats-header">
            <span className="ats-role">SWE Candidate Match</span>
            <span className="ats-score-pill">ATS: 94.8%</span>
          </div>

          <div className="mockup-agent-bars">
            <div className="agent-bar-row">
              <span className="bar-name">Resume Parser</span>
              <div className="bar-track">
                <div className="bar-fill fill-96"></div>
              </div>
            </div>
            <div className="agent-bar-row">
              <span className="bar-name">Skill Alignment</span>
              <div className="bar-track">
                <div className="bar-fill fill-92"></div>
              </div>
            </div>
          </div>

          <div className="mockup-ai-bar violet-bar">
            <CheckCircle2 size={10} className="text-violet" />
            <span>Generated 5 targeted interview prompts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. SUJALA RO PURIFIERS PREVIEW — Crisp E-Commerce & Cloud Store Showcase
   ========================================================================== */
export function SujalaPreview() {
  return (
    <div className="project-card-banner banner-sujala" aria-hidden="true">
      <div className="banner-ambient-glow glow-sky"></div>

      {/* Left Brand Lockup */}
      <div className="banner-brand-col sujala-brand-col">
        <div className="banner-brand-lockup">
          <div className="brand-emblem emblem-sujala">
            <Droplets size={18} />
          </div>
          <div className="brand-title-stack">
            <span className="banner-app-name sujala-title-dark">Sujala</span>
            <span className="banner-app-sub sujala-sub-dark">RO Purifiers</span>
          </div>
        </div>
        <div className="banner-mini-stat sujala-stat-dark">
          <span className="mini-stat-dot dot-sky"></span>
          <span>Firebase &amp; WhatsApp Store</span>
        </div>
      </div>

      {/* Right Floating E-Commerce Storefront Mockup */}
      <div className="banner-ui-mockup mockup-sujala">
        <div className="mockup-window-bar sujala-win-bar">
          <span className="win-dot"></span>
          <span className="win-dot"></span>
          <span className="win-dot"></span>
          <span className="win-url sujala-win-url">sujala.store // catalog</span>
        </div>
        <div className="mockup-window-body sujala-win-body">
          <div className="sujala-hero-card">
            <div className="sujala-copy">
              <span className="sujala-tag">80 GPD RO + UV + UF</span>
              <span className="sujala-headline">Pure Water Every Day</span>
              <span className="sujala-btn-chip">
                <ShoppingCart size={9} /> Order via WhatsApp
              </span>
            </div>

            {/* Stylized RO Purifier Cylindrical Graphic */}
            <div className="sujala-device-illustration">
              <div className="ro-unit-cap"></div>
              <div className="ro-unit-body">
                <div className="ro-indicator-ring"></div>
                <div className="ro-water-level"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
