import React from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Sparkles, 
  Database, 
  Users 
} from 'lucide-react';
import { coreSkills, additionalTechnologies } from '../data/portfolioData';

// Map category icons
const iconMap = {
  code: <Code2 size={16} />,
  globe: <Globe size={16} />,
  cpu: <Cpu size={16} />,
  sparkles: <Sparkles size={16} />,
  database: <Database size={16} />,
  users: <Users size={16} />
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
            Core Competencies & <span className="text-gradient">Technical Domains</span>
          </h2>
          <p className="section-subtitle">
            Cultivated through academic rigor at BITS Pilani and applied software engineering projects.
          </p>
        </div>

        {/* Part 1: Core Skills Architectural Matrix Plate */}
        <div className="skills-matrix-wrap">
          <div className="skills-domain-grid">
            {coreSkills.map((cat, idx) => (
              <div key={idx} className="domain-col">
                <div className="domain-header">
                  <div className="domain-icon-box">
                    {iconMap[cat.icon] || <Code2 size={16} />}
                  </div>
                  <h3 className="domain-title">{cat.category}</h3>
                </div>
                
                <ul className="domain-skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="domain-skill-item">
                      <span className="skill-bullet"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Part 2: Additional Technologies & Tools Plate */}
          <div className="skills-tools-plate" id="additional-technologies">
            <div className="tools-plate-header">
              <h3 className="tools-plate-title">
                Integrated Frameworks, Tools & Cloud Infrastructure
              </h3>
            </div>

            <div className="tools-tags-flex">
              {additionalTechnologies.map((item, idx) => (
                <div key={idx} className="tool-chip">
                  <span>{item.name}</span>
                  <span className="tool-category">{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
