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
        <div className="education-split-grid">
          {education.map((item, index) => (
            <div key={index} className="education-panel">
              <div className="education-panel-header">
                <span className="education-type-tag">{item.type}</span>
                <div className="education-date">
                  <Calendar size={13} />
                  <span>{item.duration}</span>
                </div>
              </div>

              <h3 className="education-title">{item.degree}</h3>
              
              <div className="education-institution-wrap">
                <span className="timeline-institution">{item.institution}</span>
                <span className="dot-sep">•</span>
                <span className="education-location">
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>

              <p className="education-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
