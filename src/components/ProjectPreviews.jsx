import React from 'react';
import { 
  BarChart3, 
  Bot, 
  Workflow, 
  Database, 
  ShoppingCart, 
  MessageSquare, 
  Sparkles
} from 'lucide-react';

/* ==========================================================================
   1. GROWZ PREVIEW — AI & Business Intelligence Dashboard
   ========================================================================== */
export function GrowzPreview() {
  return (
    <div className="project-interactive-preview growz-preview">
      {/* Console Top Bar */}
      <div className="preview-top-bar">
        <div className="preview-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="preview-title-chip">
          <BarChart3 size={12} />
          <span>growz.analytics // MSME Business Intelligence</span>
        </div>
        <div className="preview-live-badge">
          <span className="live-ping"></span>
          <span>ANALYTICS ENGINE</span>
        </div>
      </div>

      {/* Console Body */}
      <div className="preview-body">
        {/* Metric Cards Row */}
        <div className="preview-metrics-grid">
          <div className="metric-cell">
            <span className="metric-label">Operational Health</span>
            <span className="metric-val text-accent">98.4%</span>
            <span className="metric-sub">Unified MSME Ledger</span>
          </div>
          <div className="metric-cell">
            <span className="metric-label">Sales Trend Velocity</span>
            <span className="metric-val text-light">+24.6%</span>
            <span className="metric-sub">Quarterly Trajectory</span>
          </div>
          <div className="metric-cell">
            <span className="metric-label">AI Alert Status</span>
            <span className="metric-val text-green">0 Bottlenecks</span>
            <span className="metric-sub">Automated Tracking</span>
          </div>
        </div>

        {/* SVG Performance Curve */}
        <div className="preview-chart-wrap">
          <div className="chart-header">
            <span className="chart-title">Sales Trajectory & Predictive Demand</span>
            <span className="chart-legend">
              <span className="legend-dot"></span> AI Forecast
            </span>
          </div>
          <svg className="preview-trend-svg" viewBox="0 0 380 90" fill="none">
            <defs>
              <linearGradient id="chartGradGrowz" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#713B42" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#713B42" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Area Fill */}
            <path 
              d="M 10 75 Q 70 65, 120 45 T 220 35 T 310 18 T 370 12 L 370 85 L 10 85 Z" 
              fill="url(#chartGradGrowz)" 
            />
            {/* Trendline */}
            <path 
              d="M 10 75 Q 70 65, 120 45 T 220 35 T 310 18 T 370 12" 
              stroke="#9E525C" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
            />
            {/* Key Data Nodes */}
            <circle cx="120" cy="45" r="3.5" fill="#F7F5F0" stroke="#713B42" strokeWidth="2" />
            <circle cx="220" cy="35" r="3.5" fill="#F7F5F0" stroke="#713B42" strokeWidth="2" />
            <circle cx="310" cy="18" r="3.5" fill="#F7F5F0" stroke="#713B42" strokeWidth="2" />
            <circle cx="370" cy="12" r="4.5" fill="#9E525C" stroke="#F7F5F0" strokeWidth="1.5" />
          </svg>
        </div>

        {/* AI Recommendation Pill */}
        <div className="preview-ai-insight">
          <Bot size={14} className="insight-icon" />
          <p className="insight-text">
            <strong>Growz AI Insight:</strong> “Inventory rebalance recommended for top 3 high-turnover product categories before peak demand cycle.”
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. OPTHIRE PREVIEW — Multi-Agent Candidate Evaluation Pipeline
   ========================================================================== */
export function OptHirePreview() {
  return (
    <div className="project-interactive-preview opthire-preview">
      {/* Console Top Bar */}
      <div className="preview-top-bar">
        <div className="preview-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="preview-title-chip">
          <Workflow size={12} />
          <span>opthire.agents // Autonomous Recruitment Pipeline</span>
        </div>
        <div className="preview-live-badge">
          <span className="live-ping"></span>
          <span>4-STAGE AGENT WORKFLOW</span>
        </div>
      </div>

      {/* Console Body */}
      <div className="preview-body">
        {/* Agent Workflow Steps */}
        <div className="agent-pipeline-flow">
          <div className="agent-stage-node completed">
            <div className="stage-num">01</div>
            <div className="stage-meta">
              <span className="stage-title">Resume Parsing</span>
              <span className="stage-status">Structured JSON</span>
            </div>
          </div>
          <div className="stage-arrow">→</div>

          <div className="agent-stage-node active">
            <div className="stage-num">02</div>
            <div className="stage-meta">
              <span className="stage-title">ATS Vector Match</span>
              <span className="stage-status text-accent">94.8% Similarity</span>
            </div>
          </div>
          <div className="stage-arrow">→</div>

          <div className="agent-stage-node">
            <div className="stage-num">03</div>
            <div className="stage-meta">
              <span className="stage-title">Skill Gap Engine</span>
              <span className="stage-status">Matrix Benchmarked</span>
            </div>
          </div>
          <div className="stage-arrow">→</div>

          <div className="agent-stage-node">
            <div className="stage-num">04</div>
            <div className="stage-meta">
              <span className="stage-title">Interview Synthesis</span>
              <span className="stage-status">Targeted Scenarios</span>
            </div>
          </div>
        </div>

        {/* Synthesized Evaluation Output Card */}
        <div className="agent-output-card">
          <div className="agent-output-header">
            <span className="eval-candidate-tag">Candidate Profile: Full-Stack & AI Aspirant</span>
            <span className="eval-score-badge">ATS MATCH: 94.8%</span>
          </div>

          <div className="eval-questions-list">
            <div className="eval-q-item">
              <span className="q-label">Generated Question 1:</span>
              <span className="q-text">“How do you design vector retrieval to minimize hallucination in domain-specific RAG pipelines?”</span>
            </div>
            <div className="eval-q-item">
              <span className="q-label">Generated Question 2:</span>
              <span className="q-text">“Explain your approach to concurrency and memory management in C++ vs Python backend services.”</span>
            </div>
          </div>
        </div>

        {/* Pipeline Architecture Indicator */}
        <div className="preview-ai-insight">
          <Sparkles size={14} className="insight-icon" />
          <p className="insight-text">
            <strong>Agent Orchestration:</strong> Modular Python agent architecture executing automated screening cycles with zero subjective drift.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. SUJALA RO PREVIEW — E-Commerce & WhatsApp Cloud Engine
   ========================================================================== */
export function SujalaPreview() {
  return (
    <div className="project-interactive-preview sujala-preview">
      {/* Console Top Bar */}
      <div className="preview-top-bar">
        <div className="preview-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="preview-title-chip">
          <ShoppingCart size={12} />
          <span>sujala.cloud.store // E-Commerce & WhatsApp Engine</span>
        </div>
        <div className="preview-live-badge">
          <span className="live-ping"></span>
          <span>FIREBASE • WHATSAPP API</span>
        </div>
      </div>

      {/* Console Body */}
      <div className="preview-body">
        {/* Multi-Stage Filtration Matrix */}
        <div className="filtration-stages-grid">
          <div className="filter-cell">
            <span className="filter-step">STAGE 1</span>
            <span className="filter-name">Spun Polypropylene</span>
            <span className="filter-desc">5 Micron Sediment Filter</span>
          </div>
          <div className="filter-cell">
            <span className="filter-step">STAGE 2</span>
            <span className="filter-name">Pre-Carbon Block</span>
            <span className="filter-desc">Chlorine & VOC Removal</span>
          </div>
          <div className="filter-cell active-filter">
            <span className="filter-step text-accent">STAGE 3 (CORE)</span>
            <span className="filter-name">80 GPD RO Membrane</span>
            <span className="filter-desc">0.0001 Micron Filtration</span>
          </div>
          <div className="filter-cell">
            <span className="filter-step">STAGE 4</span>
            <span className="filter-name">Post-Carbon / UF</span>
            <span className="filter-desc">Mineral Restorer & Taste</span>
          </div>
        </div>

        {/* Direct Order Routing Simulation */}
        <div className="order-routing-preview">
          <div className="routing-card">
            <div className="routing-header">
              <span className="routing-title">
                <MessageSquare size={13} className="text-green" />
                WhatsApp Direct Order Payload Routing
              </span>
              <span className="routing-sync">Cloud Firestore Sync: ACTIVE</span>
            </div>
            <div className="routing-payload">
              <code>
                {`POST /api/whatsapp-order
Product: "Sujala Copper Alkaline RO (80 GPD)"
Customer: Verified Auth (Firebase UID)
Action: Instant Dispatch Notification -> WhatsApp Business API`}
              </code>
            </div>
          </div>
        </div>

        {/* Technical Architecture Tagline */}
        <div className="preview-ai-insight">
          <Database size={14} className="insight-icon" />
          <p className="insight-text">
            <strong>Full-Stack Architecture:</strong> Clean vanilla client frontend paired with Cloudinary asset CDN and Firebase authentication & Firestore database.
          </p>
        </div>
      </div>
    </div>
  );
}
