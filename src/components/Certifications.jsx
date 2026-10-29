import React from 'react';
import { Award, Check } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section" aria-label="Certifications and Workshops">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={12} />
            <span>06 // Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Workshops</span>
          </h2>
          <p className="section-subtitle">
            Industry workshops and specialized credentials completed alongside computer science undergraduate studies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-panel">
              <div className="cert-panel-header">
                <span className="cert-index">0{index + 1}</span>
                <span className="cert-tag">{cert.tag}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              
              <div className="cert-issuer">
                <Check size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle', color: 'var(--accent)' }} />
                <span>{cert.issuer}</span>
              </div>

              <p className="cert-desc">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
