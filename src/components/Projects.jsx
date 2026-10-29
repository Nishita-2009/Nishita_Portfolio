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
import { GrowzPreview, OptHirePreview, SujalaPreview } from './ProjectPreviews';

export default function Projects() {
  const [selectedConfigProject, setSelectedConfigProject] = useState(null);

  const handleOpenConfig = (project) => {
    setSelectedConfigProject(project);
  };

  const handleCloseConfig = () => {
    setSelectedConfigProject(null);
  };

  const renderProjectVisual = (projectId) => {
    switch (projectId) {
      case 'growz':
        return <GrowzPreview />;
      case 'opthire':
        return <OptHirePreview />;
      case 'sujala-ro-purifiers':
        return <SujalaPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section projects-dark-section" aria-label="Featured Projects Showcase">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header dark-section-header">
          <div className="section-badge dark-badge">
            <FolderGit2 size={12} />
            <span>03 // Selected Software Works</span>
          </div>
          <h2 className="section-title dark-title">
            Engineered <span className="dark-title-accent">Systems & Case Studies</span>
          </h2>
          <p className="section-subtitle dark-subtitle">
            Substantial software engineering projects addressing real-world operational challenges in business intelligence, candidate evaluation pipelines, and cloud e-commerce.
          </p>
        </div>

        {/* Project Case Studies Stack */}
        <div className="projects-case-stack">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              id={`project-card-${project.id}`} 
              className={`project-case-card dark-case-card ${index % 2 === 1 ? 'case-reverse' : ''}`}
            >
              {/* Asymmetric 2-Column Case Study Grid */}
              <div className="project-case-grid">
                
                {/* Left/Showcase Column: Custom Interactive System Preview */}
                <div className="project-case-visual-col">
                  <div className="project-visual-wrapper">
                    {renderProjectVisual(project.id)}
                  </div>
                </div>

                {/* Right/Narrative Column: Problem, Architecture, Capabilities, Tech & CTAs */}
                <div className="project-case-narrative-col">
                  {/* Case Study Header Line */}
                  <div className="project-case-header">
                    <div className="project-title-group">
                      <div className="project-badge-line">
                        <span className="project-badge dark-tag">{project.badge}</span>
                        <span className="project-status-dot"></span>
                        <span className="project-status-text">{project.statusNote}</span>
                      </div>

                      <h3 className="project-name dark-project-name" id={`project-name-${project.id}`}>
                        {project.name}
                      </h3>
                      
                      <p className="project-tagline dark-project-tagline">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="project-index-num dark-index-num" aria-hidden="true">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Narrative Blocks */}
                  <div className="case-content-blocks">
                    <div className="case-section-block">
                      <h4 className="case-block-title dark-block-title">
                        <span className="case-block-dot"></span>
                        The Problem Addressed
                      </h4>
                      <p className="case-block-text dark-block-text">
                        {project.problemAddressed}
                      </p>
                    </div>

                    <div className="case-section-block">
                      <h4 className="case-block-title dark-block-title">
                        <span className="case-block-dot"></span>
                        Engineering & System Architecture
                      </h4>
                      <p className="case-block-text dark-block-text">
                        {project.whatWasBuilt}
                      </p>
                    </div>
                  </div>

                  {/* Capabilities Checklist */}
                  <div className="features-block">
                    <h4 className="case-block-title dark-block-title">
                      <span className="case-block-dot"></span>
                      Key Technical Capabilities
                    </h4>
                    <ul className="case-features-list dark-features-list">
                      {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="case-feature-item dark-feature-item">
                          <Check size={14} className="feature-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="tech-stack-block">
                    <div className="tech-tags-plate dark-tags-plate">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag dark-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="case-actions-row">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-github-btn-${project.id}`}
                        className="btn btn-primary dark-btn-primary btn-sm"
                        title={`Open GitHub repository for ${project.name}`}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Repository</span>
                        <ArrowUpRight size={13} className="btn-arrow" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        id={`project-github-btn-${project.id}`}
                        className="btn btn-secondary dark-btn-secondary btn-sm disabled-btn"
                        onClick={() => handleOpenConfig(project)}
                        title="GitHub repository link configurable"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Profile</span>
                        <ArrowUpRight size={13} className="btn-arrow" />
                      </button>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-demo-btn-${project.id}`}
                        className="btn btn-secondary dark-btn-secondary btn-sm"
                        title={`View live demo for ${project.name}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        id={`project-demo-btn-${project.id}`}
                        className="btn btn-secondary dark-btn-secondary btn-sm demo-status-btn"
                        onClick={() => handleOpenConfig(project)}
                        title="Click to view deployment architecture notes"
                      >
                        <Info size={13} />
                        <span>{project.statusNote || 'Architecture Status'}</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Modal for Architecture Status & Links */}
        {selectedConfigProject && (
          <div className="modal-backdrop" onClick={handleCloseConfig} role="dialog" aria-modal="true">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-wrap">
                  <Info size={16} />
                  <h3 className="modal-title">{selectedConfigProject.name} — Architecture & Repository Status</h3>
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
