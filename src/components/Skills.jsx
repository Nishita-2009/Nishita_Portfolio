import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Sparkles,
  Database,
  Cpu,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { coreSkills, additionalTechnologies } from '../data/portfolioData';
import AmbientField from './AmbientField';

const skillIcons = {
  code: <Code2 size={20} strokeWidth={1.65} />,
  globe: <Globe size={20} strokeWidth={1.65} />,
  sparkles: <Sparkles size={20} strokeWidth={1.65} />,
  database: <Database size={20} strokeWidth={1.65} />,
  cpu: <Cpu size={20} strokeWidth={1.65} />,
  users: <Users size={20} strokeWidth={1.65} />
};

export default function Skills() {
  const [showEcosystem, setShowEcosystem] = useState(false);

  return (
    <section
      id="skills"
      className="section skills-dark-section"
      aria-label="Technical Skills and Capabilities"
    >
      <AmbientField tone="dark" variant="dark" lights={false} />
      {/* Flowing Burgundy Silk-Wave Linework & Signal Pulses */}
      <svg
        className="dark-section-linework skills-linework"
        viewBox="0 0 1440 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="silkWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C87D82" stopOpacity="0.44" />
            <stop offset="50%" stopColor="#71303D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#171817" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Bottom-left flowing silk waves */}
        <path
          className="animated-flow-line"
          d="M-60 320C140 290 290 420 520 430C750 440 880 510 1050 530"
          stroke="url(#silkWaveGrad)"
          strokeWidth="1.5"
        />
        <path
          className="animated-signal-path"
          d="M-60 320C140 290 290 420 520 430C750 440 880 510 1050 530"
          stroke="#C87D82"
          strokeOpacity="0.6"
          strokeWidth="1.8"
          strokeDasharray="55 420"
        />
        <path
          className="animated-flow-line-slow"
          d="M-60 350C150 320 310 445 540 455C770 465 900 525 1080 545"
          stroke="url(#silkWaveGrad)"
          strokeWidth="1.1"
        />
        <path
          d="M-60 380C160 355 330 470 560 480"
          stroke="#71303D"
          strokeOpacity="0.24"
          strokeWidth="0.9"
        />
        {/* Top-right subtle wave */}
        <path
          d="M1140 -20C1250 120 1340 240 1480 340"
          stroke="url(#silkWaveGrad)"
          strokeWidth="1.3"
        />
        <circle
          cx="320"
          cy="88"
          r="2.2"
          fill="#C87D82"
          fillOpacity="0.58"
          className="ambient-node-pulse"
        />
        <circle
          cx="515"
          cy="430"
          r="2.6"
          fill="#C87D82"
          fillOpacity="0.64"
          className="ambient-node-pulse"
        />
        <circle
          cx="1285"
          cy="145"
          r="2.4"
          fill="#71303D"
          fillOpacity="0.6"
          className="ambient-node-pulse"
        />
      </svg>

      <div className="container">
        <div className="skills-split-layout">
          {/* Left Column: Editorial Heading & Summary */}
          <div className="skills-header-col">
            <div className="editorial-eyebrow-row dark-eyebrow-row">
              <span className="editorial-section-num dark-num">03</span>
              <span className="editorial-eyebrow-tag dark-eyebrow-tag">
                <span className="eyebrow-dot rose-dot"></span>
                SKILLS
              </span>
            </div>

            <h2 className="dark-editorial-title skills-main-title">
              Skills
              <br />I Work With
            </h2>

            <p className="skills-lead-copy">
              A combination of technical and professional skills that help me
              build, learn and collaborate effectively.
            </p>

            <button
              type="button"
              id="toggle-all-skills-btn"
              className="btn btn-outline-dark-pill"
              onClick={() => setShowEcosystem((prev) => !prev)}
              aria-expanded={showEcosystem}
            >
              <span>
                {showEcosystem ? 'Hide Cloud & Tools' : 'View All Skills'}
              </span>
              <ArrowUpRight size={14} className="btn-external-arrow" />
            </button>
          </div>

          {/* Right Column: 6-Card Structured Skills Matrix */}
          <div className="skills-cards-col">
            <div className="skills-six-grid">
              {coreSkills.map((item, idx) => (
                <div
                  key={item.category}
                  className={`skill-domain-card stagger-${(idx % 3) + 1}`}
                  data-glow
                  data-tilt
                >
                  <div className="skill-card-top-row">
                    <div className="skill-card-icon" aria-hidden="true">
                      {skillIcons[item.icon] || <Code2 size={20} />}
                    </div>
                    <span className="skill-card-domain-idx">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="skill-card-content">
                    <h3 className="skill-card-heading">{item.category}</h3>
                    <p className="skill-card-summary">{item.summary}</p>

                    {item.skills && (
                      <div className="skill-card-pills">
                        {item.skills.map((sk) => (
                          <span key={sk} className="skill-micro-pill">
                            {sk}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable Cloud & Tooling Strip */}
            <div
              className={`skills-ecosystem-bar ${
                showEcosystem ? 'ecosystem-expanded' : ''
              }`}
              id="additional-technologies"
            >
              <span className="ecosystem-bar-label">
                CLOUD &amp; DEV ECOSYSTEM:
              </span>
              <div className="ecosystem-chips-wrap">
                {additionalTechnologies.map((tool) => (
                  <span key={tool.name} className="ecosystem-chip">
                    {tool.name}
                    <small className="ecosystem-chip-cat">{tool.category}</small>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
