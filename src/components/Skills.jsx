import React from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Sparkles, 
  Database, 
  Users, 
  Wrench
} from 'lucide-react';
import { coreSkills, additionalTechnologies } from '../data/portfolioData';

// Map category icons
const iconMap = {
  code: <Code2 size={16} className="domain-icon" />,
  globe: <Globe size={16} className="domain-icon" />,
  cpu: <Cpu size={16} className="domain-icon" />,
  sparkles: <Sparkles size={16} className="domain-icon" />,
  database: <Database size={16} className="domain-icon" />,
  users: <Users size={16} className="domain-icon" />
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills and Technologies">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={12} />
            <span>02 // Capabilities</span>
          </div>
          <h2 className="section-title">
            Core Competencies & <span className="text-gradient">Stack</span>
          </h2>
          <p className="section-subtitle">
            Cultivated through academic rigor at BITS Pilani and applied software engineering projects.
          </p>
        </div>

        {/* Part 1: Core Skills Architectural Matrix */}
        <div className="skills-matrix-grid">
          {coreSkills.map((cat, idx) => (
            <div key={idx} className="skill-domain-col">
              <div className="domain-header">
                {iconMap[cat.icon] || <Code2 size={16} className="domain-icon" />}
                <h3 className="domain-title">{cat.category}</h3>
              </div>
              
              <ul className="domain-skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="domain-skill-item">
                    <span className="skill-bullet"></span>
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Part 2: Additional Technologies & Practical Implementation */}
        <div className="additional-tech-wrapper" id="additional-technologies">
          <div className="additional-tech-plate">
            <div className="additional-tech-header">
              <Wrench size={22} className="additional-tech-icon" />
              <div>
                <h3 className="additional-tech-title">
                  Additional Technologies & Practical Implementation
                </h3>
                <p className="additional-tech-desc">
                  Tools, libraries, and cloud infrastructure directly integrated into hands-on practical project builds.
                </p>
              </div>
            </div>

            <div className="additional-tech-grid">
              {additionalTechnologies.map((item, idx) => (
                <div key={idx} className="tool-cell">
                  <span className="skill-bullet"></span>
                  <div className="tool-details">
                    <span className="tool-name">{item.name}</span>
                    <span className="tool-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="additional-tech-footer">
              <p className="additional-tech-note">
                <span className="note-label">Practical Note:</span> These technologies represent tools directly integrated into real projects (like Sujala RO Purifiers and Growz), used without assigning artificial percentage scores or years of experience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
