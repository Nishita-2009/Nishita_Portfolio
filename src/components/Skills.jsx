import React, { useState } from 'react';
import {
  Globe,
  Sparkles,
  Cpu,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { additionalTechnologies } from '../data/portfolioData';
import AmbientField from './AmbientField';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTags = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ai', label: 'AI & LLMs' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'core', label: 'Core CS' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  return (
    <section
      id="skills"
      className="section skills-dark-section skills-scene-section"
      aria-label="Technical Skills and Architecture Matrix"
    >
      <AmbientField tone="dark" variant="dark" lights={false} />

      <div className="container">
        {/* Editorial Eyebrow */}
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row dark-eyebrow-row">
              <span className="editorial-section-num dark-num">03</span>
              <span className="editorial-eyebrow-tag dark-eyebrow-tag">
                <span className="eyebrow-dot rose-dot"></span>
                SKILLS // TECHNICAL ARCHITECTURE MATRIX
              </span>
            </div>

            <h2 className="dark-editorial-title">
              Engineering
              <br />
              <em className="serif-italic-rose">Capabilities &amp; Stack.</em>
            </h2>
          </div>

          <div className="chapter-header-right">
            <p className="skills-lead-copy">
              A structured technical ecosystem spanning Artificial Intelligence,
              modern full-stack systems, and core computer science fundamentals.
            </p>

            {/* Interactive Domain Filter Tabs */}
            <div className="skills-filter-pills" role="tablist" aria-label="Filter skill domains">
              {filterTags.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === t.id}
                  className={`skills-filter-btn ${activeFilter === t.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetrical Architecture Matrix */}
        <div className="skills-matrix-layout">
          {/* Level 1: Panoramic Feature Card — AI & Intelligent Systems */}
          {(activeFilter === 'all' || activeFilter === 'ai') && (
            <div className="matrix-hero-card" data-glow data-tilt>
              <div className="matrix-card-header">
                <div className="matrix-icon-badge badge-ai">
                  <Sparkles size={22} />
                </div>
                <div className="matrix-title-group">
                  <span className="matrix-eyebrow">PRIMARY SPECIALIZATION</span>
                  <h3 className="matrix-title">AI &amp; Intelligent Systems</h3>
                </div>
                <span className="matrix-status-pill">ACTIVE RESEARCH &amp; APPLICATION</span>
              </div>

              <p className="matrix-desc">
                Engineering applications powered by Generative AI, foundational Large Language Models,
                and Retrieval-Augmented Generation (RAG). Connecting intelligent models to deterministic software.
              </p>

              <div className="matrix-tech-row">
                <div className="tech-chip-group">
                  <span className="tech-chip-pill chip-highlight">Generative AI</span>
                  <span className="tech-chip-pill chip-highlight">Large Language Models (LLMs)</span>
                  <span className="tech-chip-pill chip-highlight">RAG Architecture</span>
                  <span className="tech-chip-pill">Prompt Engineering</span>
                  <span className="tech-chip-pill">Agentic Workflows</span>
                  <span className="tech-chip-pill">AI Ethics &amp; Sustainability</span>
                </div>
              </div>
            </div>
          )}

          {/* Level 2: Two Structural Architectural Columns */}
          <div className="matrix-two-col-grid">
            {/* Column A: Full-Stack Systems & Web Engineering */}
            {(activeFilter === 'all' || activeFilter === 'fullstack') && (
              <div className="matrix-col-card" data-glow data-tilt>
                <div className="matrix-card-header">
                  <div className="matrix-icon-badge badge-fullstack">
                    <Globe size={20} />
                  </div>
                  <div className="matrix-title-group">
                    <span className="matrix-eyebrow">ARCHITECTURE &amp; INTERFACES</span>
                    <h3 className="matrix-title">Full-Stack Systems</h3>
                  </div>
                </div>

                <p className="matrix-col-desc">
                  Building responsive, accessible user interfaces in React coupled with modular backend services and REST APIs in Node.js and Express.
                </p>

                <div className="matrix-sub-stack">
                  <div className="sub-stack-section">
                    <span className="sub-stack-label">Frontend Ecosystem</span>
                    <div className="tech-chip-group">
                      <span className="tech-chip-pill">React.js</span>
                      <span className="tech-chip-pill">JavaScript (ES6+)</span>
                      <span className="tech-chip-pill">HTML5 / Semantic Web</span>
                      <span className="tech-chip-pill">Modern CSS / Responsive UX</span>
                    </div>
                  </div>

                  <div className="sub-stack-section">
                    <span className="sub-stack-label">Backend &amp; Data Services</span>
                    <div className="tech-chip-group">
                      <span className="tech-chip-pill">Node.js</span>
                      <span className="tech-chip-pill">Express.js</span>
                      <span className="tech-chip-pill">RESTful API Design</span>
                      <span className="tech-chip-pill">SQLite / Relational DBs</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Column B: Core Computer Science & Algorithmic Rigor */}
            {(activeFilter === 'all' || activeFilter === 'core') && (
              <div className="matrix-col-card" data-glow data-tilt>
                <div className="matrix-card-header">
                  <div className="matrix-icon-badge badge-core">
                    <Cpu size={20} />
                  </div>
                  <div className="matrix-title-group">
                    <span className="matrix-eyebrow">FOUNDATIONS &amp; COMPUTATION</span>
                    <h3 className="matrix-title">Core Computer Science</h3>
                  </div>
                </div>

                <p className="matrix-col-desc">
                  Rigorous academic computer science foundations from BITS Pilani: computational thinking, efficient data structures, and object-oriented software engineering.
                </p>

                <div className="matrix-sub-stack">
                  <div className="sub-stack-section">
                    <span className="sub-stack-label">Core Languages</span>
                    <div className="tech-chip-group">
                      <span className="tech-chip-pill">Python</span>
                      <span className="tech-chip-pill">C++</span>
                    </div>
                  </div>

                  <div className="sub-stack-section">
                    <span className="sub-stack-label">Foundational Principles</span>
                    <div className="tech-chip-group">
                      <span className="tech-chip-pill">Data Structures</span>
                      <span className="tech-chip-pill">Algorithms &amp; Complexity</span>
                      <span className="tech-chip-pill">Object-Oriented Design (OOP)</span>
                      <span className="tech-chip-pill">Clean Code Practices</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Level 3: Developer Toolchain & Cloud Ecosystem Dock */}
          {(activeFilter === 'all' || activeFilter === 'tools') && (
            <div className="matrix-dock-card" data-glow>
              <div className="dock-header">
                <div className="dock-title-row">
                  <Terminal size={17} className="dock-icon" />
                  <span className="dock-heading">DEVELOPER WORKFLOW &amp; INFRASTRUCTURE</span>
                </div>
                <span className="dock-telemetry">PRODUCTION TOOLCHAIN</span>
              </div>

              <div className="dock-chips-grid">
                {additionalTechnologies.map((tech) => (
                  <div key={tech.name} className="dock-chip-item">
                    <CheckCircle2 size={13} className="dock-check-icon" />
                    <span className="dock-chip-name">{tech.name}</span>
                    <span className="dock-chip-category">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
