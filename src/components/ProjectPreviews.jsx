import React from 'react';
import {
  TrendingUp,
  Sparkles,
  Droplets,
  CheckCircle2,
  ShoppingCart,
  BarChart3,
  Cpu,
  ShieldCheck,
  SlidersHorizontal
} from 'lucide-react';

/* ==========================================================================
   1. GROWZ PREVIEW — Emerald & Charcoal MSME Business Intelligence Interface
   ========================================================================== */
export function GrowzPreview() {
  return (
    <div className="project-card-banner banner-growz" aria-hidden="true">
      <div className="banner-ambient-glow glow-emerald"></div>
      <div className="banner-grid-overlay"></div>

      {/* Left Brand & Live Telemetry Column */}
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

        <div className="banner-feature-pills">
          <span className="banner-micro-pill pill-emerald">
            <BarChart3 size={10} /> Sales Ledger
          </span>
          <span className="banner-micro-pill pill-emerald">
            <Sparkles size={10} /> LLM Advisor
          </span>
        </div>

        <div className="banner-mini-stat">
          <span className="mini-stat-dot dot-emerald"></span>
          <span>AI Sales &amp; Growth Insights</span>
        </div>
      </div>

      {/* Right Floating Interactive-Style Analytics UI Mockup */}
      <div className="banner-ui-mockup mockup-growz">
        <div className="mockup-window-bar">
          <span className="win-dot dot-red"></span>
          <span className="win-dot dot-amber"></span>
          <span className="win-dot dot-green"></span>
          <span className="win-url">growz.app // msme-analytics</span>
          <span className="win-live-tag tag-emerald">LIVE</span>
        </div>
        <div className="mockup-window-body">
          <div className="mockup-kpi-row">
            <div className="mockup-kpi-box">
              <span className="kpi-lbl">Revenue Trend</span>
              <span className="kpi-num text-emerald">Active Ledger</span>
            </div>
            <div className="mockup-kpi-box">
              <span className="kpi-lbl">Inventory Sync</span>
              <span className="kpi-num">MongoDB + AI</span>
            </div>
          </div>

          {/* Animated SVG Area & Trend Chart */}
          <div className="mockup-chart-box">
            <svg viewBox="0 0 180 50" className="mockup-svg-chart" fill="none">
              <defs>
                <linearGradient id="growzFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="4" y1="14" x2="176" y2="14" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 3" />
              <line x1="4" y1="28" x2="176" y2="28" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 3" />
              <path
                d="M4 42 Q 38 35, 72 23 T 135 15 T 174 7 L 174 48 L 4 48 Z"
                fill="url(#growzFill)"
              />
              <path
                className="chart-animated-stroke"
                d="M4 42 Q 38 35, 72 23 T 135 15 T 174 7"
                stroke="#34D399"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="72" cy="23" r="2.5" fill="#10B981" />
              <circle cx="135" cy="15" r="2.5" fill="#10B981" />
              <circle cx="174" cy="7" r="3.2" fill="#A7F3D0" className="ambient-node-pulse" />
            </svg>
          </div>

          <div className="mockup-ai-bar">
            <Sparkles size={10} className="text-emerald" />
            <span>AI Insight: Prioritize high-turnover SKU restock</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. OPTHIRE PREVIEW — Violet & Midnight Multi-Agent Recruitment Interface
   ========================================================================== */
export function OptHirePreview() {
  return (
    <div className="project-card-banner banner-opthire" aria-hidden="true">
      <div className="banner-ambient-glow glow-violet"></div>
      <div className="banner-grid-overlay"></div>

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

        <div className="banner-feature-pills">
          <span className="banner-micro-pill pill-violet">
            <Cpu size={10} /> Multi-Agent
          </span>
          <span className="banner-micro-pill pill-violet">
            <SlidersHorizontal size={10} /> Gap Matrix
          </span>
        </div>

        <div className="banner-mini-stat">
          <span className="mini-stat-dot dot-violet"></span>
          <span>ATS Scoring &amp; Skill Gap AI</span>
        </div>
      </div>

      {/* Right Floating UI Mockup */}
      <div className="banner-ui-mockup mockup-opthire">
        <div className="mockup-window-bar">
          <span className="win-dot dot-red"></span>
          <span className="win-dot dot-amber"></span>
          <span className="win-dot dot-green"></span>
          <span className="win-url">opthire.ai // agent-pipeline</span>
          <span className="win-live-tag tag-violet">AGENTS</span>
        </div>
        <div className="mockup-window-body">
          <div className="mockup-ats-header">
            <span className="ats-role">Resume vs. Role Alignment</span>
            <span className="ats-score-pill">ATS Engine</span>
          </div>

          <div className="mockup-agent-bars">
            <div className="agent-bar-row">
              <div className="agent-bar-labels">
                <span className="bar-name">01. Resume Parser</span>
                <span className="bar-state">Structured</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill fill-96"></div>
              </div>
            </div>
            <div className="agent-bar-row">
              <div className="agent-bar-labels">
                <span className="bar-name">02. Skill Gap Analysis</span>
                <span className="bar-state">Mapped</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill fill-92"></div>
              </div>
            </div>
          </div>

          <div className="mockup-ai-bar violet-bar">
            <CheckCircle2 size={10} className="text-violet" />
            <span>Synthesized tailored technical interview prompts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. SUJALA RO PURIFIERS PREVIEW — Crisp E-Commerce & Cloud Store Interface
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

        <div className="banner-feature-pills">
          <span className="banner-micro-pill pill-sky">
            <ShieldCheck size={10} /> Firebase Auth
          </span>
          <span className="banner-micro-pill pill-sky">
            <ShoppingCart size={10} /> Cloud Cart
          </span>
        </div>

        <div className="banner-mini-stat sujala-stat-dark">
          <span className="mini-stat-dot dot-sky"></span>
          <span>Firebase &amp; WhatsApp Store</span>
        </div>
      </div>

      {/* Right Floating E-Commerce Storefront Mockup */}
      <div className="banner-ui-mockup mockup-sujala">
        <div className="mockup-window-bar sujala-win-bar">
          <span className="win-dot dot-red"></span>
          <span className="win-dot dot-amber"></span>
          <span className="win-dot dot-green"></span>
          <span className="win-url sujala-win-url">sujala.store // catalog</span>
          <span className="win-live-tag tag-sky">STORE</span>
        </div>
        <div className="mockup-window-body sujala-win-body">
          <div className="sujala-hero-card">
            <div className="sujala-copy">
              <span className="sujala-tag">RO + UV + UF FILTRATION</span>
              <span className="sujala-headline">Pure Water Every Day</span>
              <span className="sujala-sub-specs">Firestore Catalog • Admin Panel</span>
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
