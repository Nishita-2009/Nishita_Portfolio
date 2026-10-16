import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section" aria-label="Certifications and Workshops">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials & Learning</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Workshops</span>
          </h2>
          <p className="section-subtitle">
            Verified workshops and technology credentials completed alongside academic studies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className="cert-top">
                <div className="cert-icon-box">
                  <Award size={22} className="cert-icon text-indigo" />
                </div>
                <span className="cert-tag">{cert.tag}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              
              <div className="cert-issuer">
                <CheckCircle2 size={14} className="text-violet" />
                <span>{cert.issuer}</span>
              </div>

              <p className="cert-description">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
