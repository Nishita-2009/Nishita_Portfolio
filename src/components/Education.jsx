import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-label="Education & Training">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={12} />
            <span>05 // Education & Training</span>
          </div>
          <h2 className="section-title">
            Academic & Professional <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Formal university undergraduate curriculum and intensive industry engineering preparation in Hyderabad.
          </p>
        </div>

        {/* Education Architectural Split Grid */}
        <div className="education-timeline-grid">
          {education.map((item, index) => (
            <div key={index} className="education-panel">
              <div className="edu-header">
                <span className="edu-type-badge">{item.type}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <div className="edu-institution">{item.institution}</div>
                <div className="edu-meta-line">
                  <span>
                    <Calendar size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                    {item.duration}
                  </span>
                  <span>•</span>
                  <span>
                    <MapPin size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="edu-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
