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
            <GraduationCap size={13} />
            <span>05 // Education</span>
          </div>
          <h2 className="section-title">
            Academic & Professional <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Formal university undergraduate curriculum and intensive industry engineering preparation in Hyderabad.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-type-badge">{item.type}</div>
                  <div className="timeline-date">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="timeline-title">{item.degree}</h3>
                
                <div className="timeline-institution-wrap">
                  <span className="timeline-institution">{item.institution}</span>
                  <span className="dot-sep">•</span>
                  <span className="timeline-location">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>

                <p className="timeline-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
