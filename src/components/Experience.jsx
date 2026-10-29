import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Check, 
  Calendar, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-label="Experience & Virtual Internships">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={13} />
            <span>04 // Industry Experience</span>
          </div>
          <h2 className="section-title">
            Virtual Internship & <span className="text-gradient">Applied Learning</span>
          </h2>
          <p className="section-subtitle">
            Structured industry learning programs, corporate virtual internships, and verified credentials.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div className="experience-container">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              id={`experience-card-${exp.id}`} 
              className="experience-card"
            >
              {/* Card Header */}
              <div className="exp-top-row">
                <div className="exp-org-wrap">
                  <div className="exp-icon-box" aria-hidden="true">
                    <Building2 size={22} />
                  </div>
                  <div className="exp-org-info">
                    <div className="exp-org-line">
                      <span className="exp-organization">{exp.organization}</span>
                      <span className="dot-sep">•</span>
                      <span className="exp-issuer">{exp.issuer}</span>
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    {exp.programTrack && (
                      <div className="exp-track-line">
                        <span className="exp-track-label">Platform & Track:</span>
                        <span className="exp-track-value">{exp.programTrack}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="exp-meta-pills">
                  <div className="status-badge exp-status-badge" title="Internship Completed">
                    <Check size={13} />
                    <span>Status: {exp.status}</span>
                  </div>
                  <div className="exp-date-pill">
                    <Calendar size={13} />
                    <span>{exp.completionDate}</span>
                  </div>
                </div>
              </div>

              {/* Subtle Section Divider */}
              <div className="exp-divider"></div>

              {/* Factual Description */}
              <p className="exp-description">
                {exp.description}
              </p>

              {/* Verified Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="exp-highlights-wrap">
                  <h4 className="exp-highlights-heading">Program Highlights & Details:</h4>
                  <ul className="exp-highlights-list">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="exp-highlight-item">
                        <Check size={14} className="exp-check-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tag Badges */}
              {exp.tags && exp.tags.length > 0 && (
                <div className="exp-tags-row">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer with Verification ID & View Certificate Action */}
              <div className="exp-footer">
                <div className="exp-cred-info">
                  <ShieldCheck size={16} />
                  <span>Credential Plan ID: <code>{exp.credentialId}</code></span>
                </div>

                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`exp-certificate-btn-${exp.id}`}
                  className="btn btn-primary exp-cert-btn btn-sm"
                  title={`Open verified ${exp.organization} certificate in a new browser tab`}
                >
                  <span>View Verified Certificate</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
