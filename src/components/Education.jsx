import React from 'react';
import { GraduationCap, Code2, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="section education-chapter-section"
      aria-label="Academic Education and Training"
    >
      <div className="container">
        {/* Chapter Header */}
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">06</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dot"></span>
                EDUCATION
              </span>
            </div>

            <h2 className="chapter-main-heading">
              My Academic{' '}
              <em className="serif-italic-accent">Journey.</em>
            </h2>
          </div>

          <p className="chapter-header-lead">
            Combining formal university computer science foundations with
            project-intensive industry engineering training.
          </p>
        </div>

        {/* 2-Column Architectural Education Grid */}
        <div className="education-chapter-grid">
          {education.map((item, idx) => (
            <article
              key={item.id}
              id={`education-card-${item.id}`}
              className={`edu-milestone-card stagger-${idx + 1}`}
            >
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

                <p className="edu-milestone-desc">{item.description}</p>
              </div>

              {item.pillars && (
                <div className="edu-pillars-footer">
                  {item.pillars.map((pillar) => (
                    <span key={pillar} className="light-tech-chip">
                      {pillar}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
