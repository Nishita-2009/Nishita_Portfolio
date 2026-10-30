import React from 'react';
import { GraduationCap, Code2, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';
import AmbientField from './AmbientField';

export default function Education() {
  return (
    <section
      id="education"
      className="section layer-panel education-chapter-section"
      data-layer="fold"
      aria-label="Academic Education and Training"
    >
      <AmbientField tone="light" variant="light" lights={false} />
      <div className="edu-ghost-year" aria-hidden="true">
        2025
      </div>

      <div className="container">
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">04</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dot"></span>
                EDUCATION
              </span>
            </div>
            <h2 className="chapter-main-heading">
              My Academic <em className="serif-italic-accent">Journey.</em>
            </h2>
          </div>
          <p className="chapter-header-lead">
            University foundations and industry-ready training, side by side.
          </p>
        </div>

        {/* Academic journey: animated rail, nodes and stepped milestone cards */}
        <div className="edu-journey" data-draw>
          <div className="edu-rail" aria-hidden="true">
            <span className="edu-rail-line"></span>
            {education.map((item, idx) => (
              <React.Fragment key={item.id}>
                <span
                  className="edu-rail-node"
                  style={{ left: `${25 + idx * 50}%`, '--i': idx }}
                ></span>
                <span
                  className="edu-rail-label"
                  style={{ left: `${25 + idx * 50}%`, '--i': idx }}
                >
                  {item.duration}
                </span>
              </React.Fragment>
            ))}
            <span className="edu-rail-end">PRESENT</span>
          </div>

          <div className="education-chapter-grid">
            {education.map((item, idx) => (
              <article
                key={item.id}
                id={`education-card-${item.id}`}
                className={`edu-milestone-card edu-step-${idx + 1} scroll-reveal`}
                style={{ '--i': idx }}
              >
                <span className="edu-connector" aria-hidden="true"></span>

                <div className="edu-milestone-top">
                  <div className="edu-icon-medallion" aria-hidden="true">
                    {item.icon === 'graduation' ? (
                      <GraduationCap size={22} strokeWidth={1.7} />
                    ) : (
                      <Code2 size={22} strokeWidth={1.7} />
                    )}
                  </div>
                  <div className="edu-milestone-badges">
                    <span className="edu-type-pill">{item.type}</span>
                    <span className="edu-status-tag">{item.status}</span>
                  </div>
                </div>

                <div className="edu-milestone-body">
                  <h3 className="edu-milestone-degree">{item.degree}</h3>
                  <p className="edu-milestone-inst">{item.institution}</p>
                  <div className="edu-milestone-meta">
                    <span className="edu-meta-chip">
                      <Calendar size={13} />
                      <span>{item.duration}</span>
                    </span>
                    <span className="edu-meta-chip">
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {item.pillars && (
                  <div className="edu-pillars-footer">
                    {item.pillars.map((pillar, pIdx) => (
                      <span
                        key={pillar}
                        className="light-tech-chip edu-pillar-chip"
                        style={{ '--p': pIdx }}
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
