import React from 'react';
import { GraduationCap, Code2, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import AmbientField from './AmbientField';

export default function Education() {
  const [bits, niat] = education;

  return (
    <section
      id="education"
      className="section education-scene-section"
      aria-label="Academic Education and Technical Training"
    >
      <AmbientField tone="light" variant="light" lights={false} />

      <div className="education-wide-container">
        {/* Editorial Eyebrow */}
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">04</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dot"></span>
                EDUCATION // ACADEMIC EXPEDITION &amp; RIGOR
              </span>
            </div>
            <h2 className="chapter-main-heading">
              Computer Science Rigor
              <br />
              <em className="serif-italic-accent">&amp; Industrial Immersion.</em>
            </h2>
          </div>
          <p className="chapter-header-lead">
            An asymmetric academic journey uniting foundational university computer science
            from BITS Pilani with production-grade engineering at NIAT.
          </p>
        </div>

        {/* Asymmetrical Academic Journey Grid (60% / 40%) */}
        <div className="education-journey-asymmetric">
          {/* Primary Dominant Milestone: BITS Pilani (60%) */}
          {bits && (
            <article
              id={`education-card-${bits.id}`}
              className="edu-pillar-card edu-pillar-primary"
              data-glow
              data-tilt
            >
              <div className="edu-corner-badge">PRIMARY UNIVERSITY DEGREE</div>

              <div className="pillar-header">
                <div className="pillar-icon-box" aria-hidden="true">
                  <GraduationCap size={32} strokeWidth={1.6} />
                </div>
                <div className="pillar-header-meta">
                  <span className="pillar-type-label">{bits.type}</span>
                  <span className="pillar-status-live">
                    <span className="live-dot"></span> {bits.status}
                  </span>
                </div>
              </div>

              <div className="pillar-content">
                <h3 className="pillar-degree-title">{bits.degree}</h3>
                <h4 className="pillar-institution-name">{bits.institution}</h4>

                <div className="pillar-meta-bar">
                  <span className="meta-pill">
                    <Calendar size={13} /> {bits.duration}
                  </span>
                  <span className="meta-pill">
                    <MapPin size={13} /> {bits.location}
                  </span>
                  <span className="meta-pill pill-highlight">
                    <Award size={13} /> Formal CS Curriculum
                  </span>
                </div>

                <p className="pillar-narrative">
                  Pursuing rigorous undergraduate coursework in foundational computer science, discrete mathematics,
                  data structures, computational thinking, and software engineering principles at Birla Institute of Technology and Science, Pilani.
                </p>

                <div className="pillar-pillars-section">
                  <span className="pillar-section-heading">CURRICULAR FOUNDATIONS</span>
                  <div className="pillar-tags-wrap">
                    {bits.pillars &&
                      bits.pillars.map((pillar) => (
                        <span key={pillar} className="pillar-tag-pill">
                          <CheckCircle size={12} className="tag-check-icon" />
                          <span>{pillar}</span>
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="pillar-footer">
                <span className="pillar-coord">BITS PILANI // DEGREE TRACK</span>
                <span className="pillar-year-badge">2025 – PRESENT</span>
              </div>
            </article>
          )}

          {/* Secondary Industry Milestone: NIAT (NxtWave) (40%) */}
          {niat && (
            <article
              id={`education-card-${niat.id}`}
              className="edu-pillar-card edu-pillar-secondary"
              data-glow
              data-tilt
            >
              <div className="edu-corner-badge badge-industry">PRACTICAL TRAINING</div>

              <div className="pillar-header">
                <div className="pillar-icon-box icon-code" aria-hidden="true">
                  <Code2 size={26} strokeWidth={1.7} />
                </div>
                <div className="pillar-header-meta">
                  <span className="pillar-type-label">{niat.type}</span>
                  <span className="pillar-status-chip">{niat.status}</span>
                </div>
              </div>

              <div className="pillar-content">
                <h3 className="pillar-degree-title title-secondary">{niat.degree}</h3>
                <h4 className="pillar-institution-name">{niat.institution}</h4>

                <div className="pillar-meta-bar">
                  <span className="meta-pill">
                    <Calendar size={13} /> {niat.duration}
                  </span>
                  <span className="meta-pill">
                    <MapPin size={13} /> {niat.location}
                  </span>
                </div>

                <p className="pillar-narrative">
                  Hands-on software development program emphasizing scalable full-stack engineering,
                  API integration, modern developer workflows, code reviews, and industry readiness.
                </p>

                <div className="pillar-pillars-section">
                  <span className="pillar-section-heading">ENGINEERING FOCUS</span>
                  <div className="pillar-tags-wrap">
                    {niat.pillars &&
                      niat.pillars.map((pillar) => (
                        <span key={pillar} className="pillar-tag-pill">
                          <CheckCircle size={12} className="tag-check-icon" />
                          <span>{pillar}</span>
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="pillar-footer">
                <span className="pillar-coord">NIAT // INDUSTRY TRAINING</span>
                <span className="pillar-year-badge">ACTIVE</span>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
