import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers,
  Cpu,
  Target,
  Sparkles,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, projects } from '../data/portfolioData';
import { GrowzPreview, OptHirePreview, SujalaPreview } from './ProjectPreviews';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const openerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleOpenProject = useCallback((project, event) => {
    if (event && event.currentTarget) {
      openerRef.current = event.currentTarget;
    } else {
      openerRef.current = document.activeElement;
    }
    setSelectedProject(project);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
    // Restore focus to the button/card that opened the dialog
    requestAnimationFrame(() => {
      if (openerRef.current && typeof openerRef.current.focus === 'function') {
        openerRef.current.focus();
      }
    });
  }, []);

  // Lock background scroll, handle Escape key, and trap Tab focus inside dialog
  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Move initial focus to close button
    const focusTimer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 20);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseProject();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, handleCloseProject]);

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

  const modalPortal =
    selectedProject && typeof document !== 'undefined'
      ? createPortal(
          <div
            className="project-modal-portal-overlay"
            onClick={handleCloseProject}
            role="presentation"
          >
            <div
              ref={dialogRef}
              className="project-modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-overview"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Pinned Dialog Header */}
              <div className="project-modal-header">
                <div className="modal-title-wrap">
                  <span className="modal-index-pill">
                    {selectedProject.index}
                  </span>
                  <div className="modal-title-text">
                    <h3 id="project-modal-title" className="modal-title">
                      {selectedProject.name}
                    </h3>
                    <span className="modal-badge-sub">
                      {selectedProject.badge}
                    </span>
                  </div>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  id="project-modal-close-btn"
                  className="modal-close-btn"
                  onClick={handleCloseProject}
                  aria-label="Close project overview dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Independently Scrollable Dialog Content Area */}
              <div className="project-modal-scroll-body">
                {/* Visual Preview Showcase */}
                <div className="modal-visual-stage">
                  {renderProjectVisual(selectedProject.id)}
                </div>

                {/* Concise Overview Banner */}
                <div className="modal-overview-strip" id="project-modal-overview">
                  <Sparkles size={15} className="overview-strip-icon" />
                  <p>{selectedProject.overview}</p>
                </div>

                {/* Visual 4-Step Architecture Flow */}
                {selectedProject.architectureFlow && (
                  <div className="modal-arch-block">
                    <div className="modal-block-label">
                      <Layers size={13} />
                      <span>System Architecture Flow</span>
                    </div>
                    <div className="modal-arch-pipeline">
                      {selectedProject.architectureFlow.map((node, idx) => (
                        <div key={node.step} className="modal-arch-node">
                          <div className="arch-node-top">
                            <span className="arch-step-num">{node.step}</span>
                            {idx < selectedProject.architectureFlow.length - 1 && (
                              <span className="arch-step-connector" aria-hidden="true">
                                →
                              </span>
                            )}
                          </div>
                          <span className="arch-node-title">{node.title}</span>
                          <span className="arch-node-detail">{node.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2-Column Problem vs Solution Cards */}
                <div className="modal-two-col-cards">
                  <div className="modal-info-card">
                    <div className="modal-block-label">
                      <Target size={13} />
                      <span>Problem Addressed</span>
                    </div>
                    <p className="modal-card-copy">
                      {selectedProject.problemAddressed}
                    </p>
                  </div>

                  <div className="modal-info-card">
                    <div className="modal-block-label">
                      <Cpu size={13} />
                      <span>Implementation &amp; Architecture</span>
                    </div>
                    <p className="modal-card-copy">
                      {selectedProject.whatWasBuilt}
                    </p>
                  </div>
                </div>

                {/* Key Features Visual Grid */}
                <div className="modal-features-block">
                  <div className="modal-block-label">
                    <Check size={13} />
                    <span>Key Technical Features</span>
                  </div>
                  <ul className="modal-features-grid">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="modal-feature-chip">
                        <Check size={14} className="modal-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="modal-tech-block">
                  <div className="modal-block-label">
                    <span>Technology Stack</span>
                  </div>
                  <div className="modal-tags-wrap">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="project-chip modal-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pinned Dialog Footer */}
              <div className="project-modal-footer">
                <div className="modal-footer-status">
                  <span className="status-dot-live"></span>
                  <span>{selectedProject.statusNote}</span>
                </div>

                <div className="modal-footer-actions">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-burgundy btn-sm"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub Repository</span>
                      <ArrowUpRight size={14} className="btn-external-arrow" />
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} className="btn-external-arrow" />
                    </a>
                  )}
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm"
                    onClick={handleCloseProject}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section
      id="projects"
      className="section projects-dark-section"
      aria-label="Featured Projects Showcase"
    >
      {/* Subtle Animated Burgundy Topographic Linework & Ambient Particles */}
      <svg
        className="dark-section-linework projects-linework"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="animated-flow-line"
          d="M-80 40C240 20 460 180 760 220C1060 260 1260 120 1520 180"
          stroke="#71303D"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />
        <path
          className="animated-flow-line-slow"
          d="M-80 85C220 65 450 225 750 265C1050 305 1250 165 1520 225"
          stroke="#C87D82"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        <path
          d="M150 -40C290 120 420 290 540 620"
          stroke="#71303D"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
        <circle
          cx="485"
          cy="148"
          r="2.5"
          fill="#C87D82"
          fillOpacity="0.5"
          className="ambient-node-pulse"
        />
        <circle
          cx="1160"
          cy="195"
          r="2.5"
          fill="#C87D82"
          fillOpacity="0.45"
          className="ambient-node-pulse"
        />
      </svg>

      <div className="container">
        {/* Split Editorial Header */}
        <div className="projects-header-split">
          <div className="projects-header-left">
            <div className="editorial-eyebrow-row dark-eyebrow-row">
              <span className="editorial-section-num dark-num">03</span>
              <span className="editorial-eyebrow-tag dark-eyebrow-tag">
                <span className="eyebrow-dot rose-dot"></span>
                PROJECTS
              </span>
            </div>

            <h2 className="dark-editorial-title">
              Projects
              <br />
              that <em className="serif-italic-rose">create impact.</em>
            </h2>
          </div>

          <div className="projects-header-right">
            <p className="projects-lead-copy">
              A collection of projects where I apply my skills in software
              development, AI and problem-solving to build practical and
              meaningful solutions.
            </p>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="view-all-projects-link"
              className="dark-underline-cta"
            >
              <span>View All Projects</span>
              <ArrowRight size={15} className="cta-arrow-icon" />
            </a>
          </div>
        </div>

        {/* 3-Column Balanced Project Showcase Grid */}
        <div className="projects-showcase-grid">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className={`project-showcase-card stagger-${idx + 1}`}
            >
              {/* Top Visual Frame with Number Badge & Zoom Effect */}
              <div
                className="project-preview-frame"
                onClick={(e) => handleOpenProject(project, e)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.name} detailed project overview`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenProject(project, e);
                  }
                }}
              >
                <span className="project-card-index">{project.index}</span>
                <div className="project-preview-zoom">
                  {renderProjectVisual(project.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3
                  className="project-card-title"
                  id={`project-name-${project.id}`}
                >
                  {project.name}
                </h3>

                <p className="project-card-desc">{project.tagline}</p>

                {/* Restrained Technology Tags */}
                <div className="project-card-tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer Links + Circular Arrow Action */}
                <div className="project-card-footer">
                  <div className="project-card-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-demo-btn-${project.id}`}
                        className="project-text-link"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={13} className="link-diag-arrow" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-github-btn-${project.id}`}
                        className="project-text-link"
                        title={`Open GitHub for ${project.name}`}
                      >
                        <span>GitHub</span>
                        <ArrowUpRight size={13} className="link-diag-arrow" />
                      </a>
                    )}

                    <button
                      type="button"
                      id={`project-architecture-btn-${project.id}`}
                      className="project-text-link project-case-btn"
                      onClick={(e) => handleOpenProject(project, e)}
                    >
                      <span>Project Overview</span>
                      <ArrowUpRight size={13} className="link-diag-arrow" />
                    </button>
                  </div>

                  {/* Circular Arrow Button */}
                  <button
                    type="button"
                    className="project-circle-arrow"
                    onClick={(e) => handleOpenProject(project, e)}
                    aria-label={`Open ${project.name} overview dialog`}
                    title={`Explore ${project.name} overview`}
                  >
                    <ArrowRight size={15} className="circle-arrow-svg" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Render Portal Dialog at document.body level */}
      {modalPortal}
    </section>
  );
}
