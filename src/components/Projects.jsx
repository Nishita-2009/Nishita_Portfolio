import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Check, 
  Info,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedConfigProject, setSelectedConfigProject] = useState(null);

  const handleOpenConfig = (project) => {
    setSelectedConfigProject(project);
  };

  const handleCloseConfig = () => {
    setSelectedConfigProject(null);
  };

  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={12} />
            <span>03 // Selected Works</span>
          </div>
          <h2 className="section-title">
            Curated <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Substantial software engineering projects addressing real-world operational challenges in business intelligence, candidate evaluation, and e-commerce.
          </p>
        </div>

        {/* Project Case Studies Stack */}
        <div className="projects-case-stack">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              id={`project-card-${project.id}`} 
              className="project-case-card"
            >
              {/* Case Study Header */}
              <div className="project-case-header">
                <div className="project-title-group">
                  <div className="project-badge-line">
                    <span className="project-badge">{project.badge}</span>
                  </div>

                  <h3 className="project-name" id={`project-name-${project.id}`}>
                    {project.name}
                  </h3>
                  
                  <p className="project-tagline">
                    {project.tagline}
                  </p>
                </div>

                <div className="project-index-num" aria-hidden="true">
                  0{index + 1}
                </div>
              </div>

              {/* Asymmetric 2-Column Case Study Grid */}
              <div className="project-case-grid">
                
                {/* Left Column: Problem, Narrative & Implementation */}
                <div className="project-case-narrative">
                  <p className="project-overview-desc">
                    {project.description}
                  </p>

                  <div className="case-section-block">
                    <h4 className="case-block-title">
                      <span className="case-block-dot"></span>
                      The Challenge & Problem Addressed
                    </h4>
                    <p className="case-block-text">
                      {project.problemAddressed}
                    </p>
                  </div>

                  <div className="case-section-block">
                    <h4 className="case-block-title">
                      <span className="case-block-dot"></span>
                      Engineering & Solution Architecture
                    </h4>
                    <p className="case-block-text">
                      {project.whatWasBuilt}
                    </p>
                  </div>
                </div>

                {/* Right Column: Capabilities, Tech Stack & Action Buttons */}
                <div className="project-case-tech">
                  <div className="features-block">
                    <h4 className="case-block-title">
                      <span className="case-block-dot"></span>
                      Key Technical Capabilities
                    </h4>
                    <ul className="case-features-list">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="case-feature-item">
                          <Check size={14} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-stack-block">
                    <h4 className="case-block-title">
                      <span className="case-block-dot"></span>
                      Technologies & Tools
                    </h4>
                    <div className="tech-tags-plate">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="case-actions-row">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-github-btn-${project.id}`}
                        className="btn btn-secondary btn-sm"
                        title={`Open GitHub profile / repository for ${project.name}`}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                        <ArrowUpRight size={13} className="action-arrow" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        id={`project-github-btn-${project.id}`}
                        className="btn btn-secondary btn-sm disabled-btn"
                        onClick={() => handleOpenConfig(project)}
                        title="GitHub repository link configurable"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub (Configurable)</span>
                      </button>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-demo-btn-${project.id}`}
                        className="btn btn-primary btn-sm"
                        title={`View live demo for ${project.name}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        id={`project-demo-btn-${project.id}`}
                        className="btn btn-secondary btn-sm demo-status-btn"
                        onClick={() => handleOpenConfig(project)}
                        title="Click to view deployment status"
                      >
                        <Info size={13} />
                        <span>{project.statusNote || 'Deployment Status'}</span>
                      </button>
                    )}

                    <div className="project-status-note">
                      Status: {project.statusNote}
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Modal for Unverified Links */}
        {selectedConfigProject && (
          <div className="modal-backdrop" onClick={handleCloseConfig} role="dialog" aria-modal="true">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-wrap">
                  <Info size={16} />
                  <h3 className="modal-title">{selectedConfigProject.name} — Link Status</h3>
                </div>
                <button 
                  type="button" 
                  className="modal-close-btn" 
                  onClick={handleCloseConfig}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-desc">
                  To ensure authentic representation on software engineering applications, private repositories and offline prototypes are configured without dummy links.
                </p>

                <div className="modal-info-box">
                  <div className="info-row">
                    <span className="info-key">Project:</span>
                    <span className="info-val">{selectedConfigProject.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Status:</span>
                    <span className="info-val">{selectedConfigProject.statusNote}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Config:</span>
                    <code className="info-code">src/data/portfolioData.js</code>
                  </div>
                </div>

                <p className="modal-subtext">
                  You can update <code className="inline-code">githubUrl</code> or <code className="inline-code">demoUrl</code> anytime in <code className="inline-code">src/data/portfolioData.js</code>.
                </p>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedConfigProject.githubUrl || "https://github.com/Nishita-2009"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <GithubIcon size={14} />
                  <span>Visit GitHub Profile</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleCloseConfig}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
