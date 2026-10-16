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
  code: <Code2 size={20} className="skill-cat-icon text-indigo" />,
  globe: <Globe size={20} className="skill-cat-icon text-blue" />,
  cpu: <Cpu size={20} className="skill-cat-icon text-violet" />,
  sparkles: <Sparkles size={20} className="skill-cat-icon text-cyan" />,
  database: <Database size={20} className="skill-cat-icon text-indigo" />,
  users: <Users size={20} className="skill-cat-icon text-violet" />
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills and Technologies">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core competencies from my academic foundation and hands-on software development projects.
          </p>
        </div>

        {/* Part 1: Core Skills from Resume */}
        <div className="core-skills-wrapper">
          <div className="skills-subheading-group">
            <h3 className="skills-group-title">
              Core Skills from Resume
            </h3>
            <p className="skills-group-desc">
              Fundamental programming languages, web technologies, and computational concepts practiced in coursework and software builds.
            </p>
          </div>

          <div className="core-skills-grid">
            {coreSkills.map((cat, idx) => (
              <div key={idx} className="skill-card glass-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrap">
                    {iconMap[cat.icon] || <Code2 size={20} />}
                  </div>
                  <h4 className="skill-card-title">{cat.category}</h4>
                </div>
                
                <div className="skill-card-body">
                  <ul className="skill-tags-list">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="skill-tag-item">
                        <span className="skill-bullet"></span>
                        <span className="skill-name">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Additional Technologies & Practical Experience (Separated as requested) */}
        <div className="additional-tech-wrapper" id="additional-technologies">
          <div className="additional-tech-card glass-card">
            <div className="additional-tech-header">
              <div className="additional-tech-icon-box">
                <Wrench size={22} className="text-violet" />
              </div>
              <div>
                <h3 className="additional-tech-title">
                  Additional Technologies & Practical Experience
                </h3>
                <p className="additional-tech-desc">
                  Tools, libraries, and cloud services utilized in hands-on practical project implementations (such as e-commerce platforms and AI applications).
                </p>
              </div>
            </div>

            <div className="additional-tech-grid">
              {additionalTechnologies.map((item, idx) => (
                <div key={idx} className="tool-card">
                  <div className="tool-bullet"></div>
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
