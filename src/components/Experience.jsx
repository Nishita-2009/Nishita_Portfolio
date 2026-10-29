import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Check, 
  Calendar, 
  ExternalLink, 
  Award
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-label="Experience & Virtual Internships">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={12} />
            <span>04 // Industry Experience</span>
          </div>
          <h2 className="section-title">
            Virtual Internship & <span className="text-gradient">Applied Credentials</span>
          </h2>
          <p className="section-subtitle">
            Structured corporate virtual internships, learning programs, and verified technical credentials.
          </p>
        </div>

        {/* Experience Monolith Plate */}
        <div className="experience-container">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              id={`experience-card-${exp.id}`} 
              className="experience-monolith-plate"
            >
              {/* Top Header Row */}
              <div className="experience-header-row">
                <div className="exp-org-wrap">
                  <div className="exp-icon-box" aria-hidden="true">
                    <Building2 size={22} />
                  </div>
                  <div className="exp-org-info">
                    <div className="exp-org-line">
                      <span className="exp-organization">{exp.organization}</span>
                      <span className="headline-sep">•</span>
                      <span className="exp-issuer">{exp.issuer}</span>
                    </div>
                    <h3 className="exp-role-title">{exp.role}</h3>
                    {exp.programTrack && (
                      <p className="exp-track-line">
                        Track: <strong>{exp.programTrack}</strong>
                      </p>
                    )}
                  </div>
                </div>

                <div className="exp-period-badge">
                  <Calendar size={13} />
                  <span>{exp.completionDate}</span>
                </div>
              </div>

              {/* 2-Column Split: Narrative on Left, Verification & Actions on Right */}
              <div className="experience-body-grid">
                
                {/* Left Column: Factual Description & Highlights */}
                <div className="exp-narrative-col">
                  <p className="exp-desc">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="exp-learnings-wrap">
                      <h4 className="exp-subheading">Core Competencies & Key Areas:</h4>
                      <ul className="exp-learnings-list">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="exp-learning-item">
                            <Check size={14} className="check-icon" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="narrative-tags">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Verification Metadata Box & CTA */}
                <div className="exp-sidebar-col">
                  <div className="credential-meta-box">
                    <div className="cred-row">
                      <span className="cred-label">Credential Status</span>
                      <span className="cred-val highlight-val">Completed & Verified</span>
                    </div>

                    <div className="cred-row">
                      <span className="cred-label">Issuer Organization</span>
                      <span className="cred-val">{exp.organization}</span>
                    </div>

                    <div className="cred-row">
                      <span className="cred-label">Plan ID / Reference</span>
                      <code className="cred-code">{exp.credentialId}</code>
                    </div>

                    <div className="cred-row">
                      <span className="cred-label">Hosting Platform</span>
                      <span className="cred-val">{exp.issuer}</span>
                    </div>

                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`exp-certificate-btn-${exp.id}`}
                      className="btn btn-primary btn-sm btn-full"
                      title={`Open verified ${exp.organization} certificate in Google Drive`}
                    >
                      <Award size={14} />
                      <span>View Verified Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
