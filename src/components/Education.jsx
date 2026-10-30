import React from 'react';
import { GraduationCap, Code2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { education } from '../data/portfolioData';
import AmbientField from './AmbientField';

export default function Education() {
  return (
    <section
      id="education"
      className="section education-scene-section"
      aria-label="Academic Education and Technical Training"
    >
      <AmbientField tone="light" variant="light" lights={false} />

      <div className="container">
        {/* Editorial Eyebrow */}
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">04</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dot"></span>
                EDUCATION // ACADEMIC EXPEDITION &amp; FOUNDATIONS
              </span>
            </div>
            <h2 className="chapter-main-heading">
              Academic Foundations
              <br />
              <em className="serif-italic-accent">&amp; Technical Training.</em>
            </h2>
          </div>
          <p className="chapter-header-lead">
            Dual-pillar education uniting university computer science rigor from BITS Pilani
            with hands-on software development training from NIAT.
          </p>
        </div>

        {/* Monumental Dual-Pillar Exhibition Stage */}
        <div className="education-monumental-grid">
          {education.map((item, idx) => (
            <article
              key={item.id}
              id={`education-card-${item.id}`}
              className={`edu-monumental-card edu-pillar-${idx + 1}`}
              data-glow
              data-tilt
            >
              <div className="pillar-header">
                <div className="pillar-index-badge">
                  <span>0{idx + 1}</span>
                </div>
                <div className="pillar-type-tag">
                  <span>{item.type}</span>
                </div>
                <span className="pillar-status-chip">{item.status}</span>
              </div>

              <div className="pillar-body">
                <div className="pillar-icon-box" aria-hidden="true">
                  {item.icon === 'graduation' ? (
                    <GraduationCap size={28} strokeWidth={1.6} />
                  ) : (
                    <Code2 size={28} strokeWidth={1.6} />
                  )}
                </div>

                <h3 className="pillar-degree-title">{item.degree}</h3>
                <h4 className="pillar-institution-name">{item.institution}</h4>

                <div className="pillar-meta-row">
                  <span className="pillar-meta-item">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </span>
                  <span className="pillar-meta-sep">•</span>
                  <span className="pillar-meta-item">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </span>
                </div>

                <div className="pillar-divider"></div>

                <div className="pillar-pillars-section">
                  <span className="pillar-section-heading">CURRICULAR PILLARS &amp; FOCUS</span>
                  <div className="pillar-tags-wrap">
                    {item.pillars &&
                      item.pillars.map((pillar) => (
                        <span key={pillar} className="pillar-tag-pill">
                          <CheckCircle size={12} className="tag-check-icon" />
                          <span>{pillar}</span>
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="pillar-footer">
                <span className="pillar-verification-tag">
                  {item.icon === 'graduation' ? 'DEGREE CANDIDATE' : 'INDUSTRY IMMERSION'}
                </span>
                <span className="pillar-year-badge">2025 – PRESENT</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
