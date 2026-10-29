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
            <FolderGit2 size={13} />
            <span>03 // Case Studies</span>
          </div>
          <h2 className="section-title">
            Curated <span className="text-gradient">Software Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered applications addressing authentic real-world needs in business intelligence, recruitment automation, and e-commerce.
          </p>
        </div>

        {/* Project Cards Stack / Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              id={`project-card-${project.id}`} 
              className="project-card"
            >
              <div className="project-header">
                <div className="project-meta-top">
                  <span className="project-badge">{project.badge}</span>
                  <span className="project-index">0{index + 1}</span>
                </div>

                <h3 className="project-name" id={`project-name-${project.id}`}>
                  {project.name}
                </h3>
                
                <p className="project-tagline">
                  {project.tagline}
                </p>
              </div>

              {/* Main Description */}
              <div className="project-body">
                <p className="project-description">
                  {project.description}
                </p>

                {/* Problem Addressed */}
                <div className="project-section-block">
                  <h4 className="block-title">
                    <span className="block-icon-dot"></span>
                    The Challenge & Problem Addressed
                  </h4>
                  <p className="block-text">
                    {project.problemAddressed}
                  </p>
                </div>

                {/* What I Built */}
                <div className="project-section-block">
                  <h4 className="block-title">
                    <span className="block-icon-dot"></span>
                    Engineering & Implementation
                  </h4>
                  <p className="block-text">
                    {project.whatWasBuilt}
                  </p>
                </div>

                {/* Key Features */}
                <div className="project-section-block">
                  <h4 className="block-title">
                    <span className="block-icon-dot"></span>
                    Key Capabilities & Architecture
                  </h4>
                  <ul className="project-features-list">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <Check size={14} className="feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="project-tech-stack">
                  <h4 className="block-title">
                    <span className="block-icon-dot"></span>
                    Technologies & Tools Used
                  </h4>
                  <div className="tech-tags-wrap">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Card Footer: Configurable Actions */}
              <div className="project-footer">
                <div className="project-actions">
                  {/* GitHub Button */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-github-btn-${project.id}`}
                      className="btn btn-secondary btn-sm"
                      title={`Open GitHub profile / repository for ${project.name}`}
                    >
                      <GithubIcon size={15} />
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
                      <GithubIcon size={15} />
                      <span>GitHub (Configurable)</span>
                    </button>
                  )}

                  {/* Live Demo Button */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-demo-btn-${project.id}`}
                      className="btn btn-primary btn-sm"
                      title={`View live demo for ${project.name}`}
                    >
                      <ExternalLink size={15} />
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
                      <Info size={14} />
                      <span>{project.statusNote || 'Demo Details'}</span>
                    </button>
                  )}
                </div>

                <div className="project-status-hint">
                  <span className="status-dot"></span>
                  <span className="status-text">{project.statusNote}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Config / Link Guidance Modal */}
        {selectedConfigProject && (
          <div className="modal-backdrop" onClick={handleCloseConfig} role="dialog" aria-modal="true">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-wrap">
                  <Info size={18} />
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
                  To ensure authentic representation on software development applications, unverified demo URLs and private repositories are configured without fake links.
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
                    <span className="info-key">Config File:</span>
                    <code className="info-code">src/data/portfolioData.js</code>
                  </div>
                </div>

                <p className="modal-subtext">
                  You can update <code className="inline-code">githubUrl</code> or <code className="inline-code">demoUrl</code> anytime in <code className="inline-code">src/data/portfolioData.js</code> to link directly to your repository or live site.
                </p>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedConfigProject.githubUrl || "https://github.com/Nishita-2009"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <GithubIcon size={15} />
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
