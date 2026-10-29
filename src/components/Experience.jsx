import React from 'react';
import { ArrowUpRight, Code2, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-chapter-section"
      aria-label="Experience and Internships"
    >
      <div className="container">
        {/* Chapter Header */}
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">05</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dot"></span>
                EXPERIENCE &amp; INTERNSHIPS
              </span>
            </div>

            <h2 className="chapter-main-heading">
              Learning Through{' '}
              <em className="serif-italic-accent">Real Experiences.</em>
            </h2>
          </div>

          <p className="chapter-header-lead">
            Verified virtual internship credentials and intensive hands-on
            software engineering preparation.
          </p>
        </div>

        {/* Animated Vertical Timeline Showcase */}
        <div className="exp-showcase-timeline">
          <div className="exp-timeline-spine" aria-hidden="true"></div>

          {experiences.map((exp, idx) => (
            <article
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className={`exp-showcase-card stagger-${idx + 1}`}
            >
              {/* Timeline Node Marker */}
              <div className="exp-spine-node" aria-hidden="true">
                <span className="exp-node-core"></span>
              </div>

              {/* Card Inner Layout */}
              <div className="exp-card-grid">
                {/* Left Brand & Meta Column */}
                <div className="exp-brand-column">
                  <div className="exp-brand-header">
                    <div
                      className={`exp-logo-badge ${
                        exp.badgeText === 'IBM' ? 'badge-ibm' : 'badge-code'
                      }`}
                      aria-hidden="true"
                    >
                      {exp.badgeText === 'IBM' ? (
                        <span className="ibm-text-mark">IBM</span>
                      ) : (
                        <Code2 size={20} strokeWidth={2} />
                      )}
                    </div>

                    <div className="exp-org-titles">
                      <span
                        className={`exp-status-pill ${
                          exp.status === 'Completed'
                            ? 'status-completed'
                            : 'status-ongoing'
                        }`}
                      >
                        {exp.status}
                      </span>
                      <h3 className="exp-org-heading">{exp.organization}</h3>
                      <p className="exp-role-sub">{exp.role}</p>
                    </div>
                  </div>

                  <div className="exp-date-meta">
                    <Calendar size={13} />
                    <span>{exp.completionDate}</span>
                    {exp.credentialId && (
                      <>
                        <span className="meta-dot">•</span>
                        <span className="exp-plan-code">{exp.credentialId}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Content, Highlights & Certificate CTA */}
                <div className="exp-details-column">
                  <p className="exp-concise-desc">{exp.description}</p>

                  {exp.highlights && (
                    <ul className="exp-highlights-row">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="exp-highlight-pill">
                          <CheckCircle2 size={13} className="exp-check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="exp-card-footer">
                    <div className="exp-tags-list">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="light-tech-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`exp-certificate-btn-${exp.id}`}
                        className="btn btn-burgundy btn-sm exp-cert-btn"
                        title="Open verified IBM SkillsBuild Certificate in Google Drive"
                      >
                        <Award size={14} />
                        <span>View Certificate</span>
                        <ArrowUpRight size={14} className="btn-external-arrow" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
