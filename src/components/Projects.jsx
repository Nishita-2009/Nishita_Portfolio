import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft,
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
import AmbientField from './AmbientField';

const TOTAL = projects.length;
const clampIdx = (i) => Math.max(0, Math.min(TOTAL - 1, i));

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const openerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const viewportRef = useRef(null);
  const stageRef = useRef(null);
  const indexRef = useRef(0);

  const activeProject = projects[activeIndex];

  const goTo = useCallback((i) => {
    const next = clampIdx(i);
    if (next === indexRef.current) return;
    indexRef.current = next;
    setActiveIndex(next);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedProject) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(indexRef.current + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(indexRef.current - 1);
      }
    },
    [goTo, selectedProject]
  );

  /* ------------------------------------------------------------------
     Horizontal trackpad / two-finger swipe & touch navigation
     - ONLY activates when horizontal movement clearly dominates
     - Vertical page scrolling is 100% preserved with zero interception
     - One deliberate swipe = one project transition (inertia-protected)
     ------------------------------------------------------------------ */
  useEffect(() => {
    const el = stageRef.current || viewportRef.current;
    if (!el) return undefined;

    let deltaXAcc = 0;
    let isLocked = false;
    let lockTimer = null;
    let quietTimer = null;

    const SWIPE_THRESHOLD = 38;

    const onWheel = (e) => {
      let dx = e.deltaX;
      let dy = e.deltaY;

      // Normalize lines to pixels if needed
      if (e.deltaMode === 1) {
        dx *= 16;
        dy *= 16;
      }

      // Shift + mouse wheel turns vertical wheel into horizontal
      if (e.shiftKey && dx === 0 && dy !== 0) {
        dx = dy;
        dy = 0;
      }

      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      // If vertical scroll intent dominates or movement is tiny, let it pass through immediately!
      if (absX < 12 || absX <= absY * 1.25) {
        deltaXAcc = 0;
        return;
      }

      // User is deliberately swiping horizontally with 2 fingers
      // Prevent browser back/forward history navigation gesture on horizontal swipe
      if (e.cancelable) {
        e.preventDefault();
      }

      clearTimeout(quietTimer);
      quietTimer = setTimeout(() => {
        deltaXAcc = 0;
        isLocked = false;
      }, 140);

      if (isLocked) return;

      deltaXAcc += dx;

      if (Math.abs(deltaXAcc) >= SWIPE_THRESHOLD) {
        const direction = deltaXAcc > 0 ? 1 : -1;
        goTo(indexRef.current + direction);
        deltaXAcc = 0;
        isLocked = true;

        clearTimeout(lockTimer);
        lockTimer = setTimeout(() => {
          isLocked = false;
          deltaXAcc = 0;
        }, 420);
      }
    };

    /* Native touch swipe (mobile) */
    let tx = 0;
    let ty = 0;
    let tracking = false;
    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      tx = e.touches[0].clientX;
      ty = e.touches[0].clientY;
      tracking = true;
    };
    const onTouchEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - tx;
      const dy = t.clientY - ty;
      if (Math.abs(dx) > 38 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        goTo(indexRef.current + (dx < 0 ? 1 : -1));
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      clearTimeout(lockTimer);
      clearTimeout(quietTimer);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [goTo]);

  /* ------------------------------ Modal ------------------------------ */
  const handleOpenProject = useCallback((project, event) => {
    openerRef.current =
      event && event.currentTarget ? event.currentTarget : document.activeElement;
    setSelectedProject(project);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
    requestAnimationFrame(() => {
      if (openerRef.current && typeof openerRef.current.focus === 'function') {
        openerRef.current.focus();
      }
    });
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 20);

    const onKey = (e) => {
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

    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', onKey);
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
              <div className="project-modal-header">
                <div className="modal-title-wrap">
                  <span className="modal-index-pill">{selectedProject.index}</span>
                  <div className="modal-title-text">
                    <h3 id="project-modal-title" className="modal-title">
                      {selectedProject.name}
                    </h3>
                    <span className="modal-badge-sub">{selectedProject.badge}</span>
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

              <div className="project-modal-scroll-body">
                <div className="modal-visual-stage">
                  {renderProjectVisual(selectedProject.id)}
                </div>

                <div className="modal-overview-strip" id="project-modal-overview">
                  <Sparkles size={15} className="overview-strip-icon" />
                  <p>{selectedProject.overview}</p>
                </div>

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

                <div className="modal-two-col-cards">
                  <div className="modal-info-card">
                    <div className="modal-block-label">
                      <Target size={13} />
                      <span>Problem Addressed</span>
                    </div>
                    <p className="modal-card-copy">{selectedProject.problemAddressed}</p>
                  </div>
                  <div className="modal-info-card">
                    <div className="modal-block-label">
                      <Cpu size={13} />
                      <span>Implementation &amp; Architecture</span>
                    </div>
                    <p className="modal-card-copy">{selectedProject.whatWasBuilt}</p>
                  </div>
                </div>

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
      data-active-project={activeProject.id}
      aria-label="Featured Projects Showcase"
    >
      <div
        className={`projects-ambient-spotlight spotlight-${activeProject.id}`}
        aria-hidden="true"
      ></div>
      <AmbientField tone="dark" variant="dark" lights={false} />

      <div className="container">
        <div className="projects-header-split">
          <div className="projects-header-left">
            <div className="editorial-eyebrow-row dark-eyebrow-row">
              <span className="editorial-section-num dark-num">02</span>
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
              Swipe sideways with two fingers, use the arrows, or pick a project
              below.
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

        <div ref={stageRef} className="projects-interactive-stage" onKeyDown={handleKeyDown}>
          <div className="projects-story-toolbar">
            <div
              className="projects-selector-tabs"
              role="tablist"
              aria-label="Select featured project"
            >
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  role="tab"
                  id={`project-tab-${proj.id}`}
                  aria-selected={idx === activeIndex}
                  aria-controls={`project-story-panel-${proj.id}`}
                  className={`project-selector-tab ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(idx)}
                >
                  <span className="selector-tab-index">{proj.index}</span>
                  <span className="selector-tab-name">{proj.name}</span>
                </button>
              ))}
            </div>

            <div className="projects-toolbar-controls">
              <div
                className="projects-progress-indicator"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="progress-fraction">
                  <strong>{activeProject.index}</strong>
                  <span className="progress-slash">/</span>
                  <span>0{TOTAL}</span>
                </span>
                <div className="progress-track-bar" aria-hidden="true">
                  <div
                    className="progress-track-fill"
                    style={{ width: `${((activeIndex + 1) / TOTAL) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="projects-arrow-group">
                <button
                  type="button"
                  id="project-prev-btn"
                  className="project-nav-arrow-btn"
                  onClick={() => goTo(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  aria-label="Previous project"
                  title="Previous project (Left Arrow)"
                >
                  <ArrowLeft size={16} className="nav-arrow-icon-left" />
                </button>
                <button
                  type="button"
                  id="project-next-btn"
                  className="project-nav-arrow-btn"
                  onClick={() => goTo(activeIndex + 1)}
                  disabled={activeIndex === TOTAL - 1}
                  aria-label="Next project"
                  title="Next project (Right Arrow)"
                >
                  <ArrowRight size={16} className="nav-arrow-icon-right" />
                </button>
              </div>
            </div>
          </div>

          {/* Real horizontal track: trackpad, touch, keyboard and buttons all drive it */}
          <div
            ref={viewportRef}
            className="projects-viewport"
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Featured projects. Swipe horizontally with two fingers or use the left and right arrow keys."
          >
            <div className="projects-track" style={{ '--idx': activeIndex }}>
              {projects.map((project, i) => {
                const isActive = i === activeIndex;
                const pos = isActive ? 'active' : i < activeIndex ? 'prev' : 'next';
                return (
                  <div
                    key={project.id}
                    id={`project-story-panel-${project.id}`}
                    className={`project-slide ${isActive ? 'is-active' : ''}`}
                    data-pos={pos}
                    role="tabpanel"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${TOTAL}: ${project.name}`}
                    aria-labelledby={`project-tab-${project.id}`}
                    aria-hidden={!isActive}
                    inert={!isActive}
                  >
                    <div className="project-spotlight-grid">
                      <div className="project-info-panel">
                        <div className="info-panel-top-meta">
                          <span className="info-panel-index">{project.index}</span>
                          <span className="info-panel-badge">{project.badge}</span>
                        </div>

                        <h3 className="info-panel-title">{project.name}</h3>
                        <p className="info-panel-tagline">{project.tagline || project.overview}</p>

                        {project.architectureFlow && (
                          <div className="info-panel-arch-strip" aria-label="System Architecture Pipeline">
                            {project.architectureFlow.map((node) => (
                              <div key={node.step} className="info-arch-step">
                                <span className="info-arch-num">{node.step}</span>
                                <span className="info-arch-name">{node.title}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="info-panel-tech-tags" aria-label="Project Technologies">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="project-chip">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="info-panel-actions">
                          <button
                            type="button"
                            id={`project-spotlight-overview-btn-${project.id}`}
                            className="btn btn-burgundy"
                            onClick={(e) => handleOpenProject(project, e)}
                          >
                            <span>Explore Complete Details</span>
                            <ArrowUpRight size={15} className="btn-external-arrow" />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              id={`project-spotlight-github-${project.id}`}
                              className="btn btn-outline-dark"
                            >
                              <GithubIcon size={15} />
                              <span>GitHub Repo</span>
                              <ArrowUpRight size={14} className="btn-external-arrow" />
                            </a>
                          )}

                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-dark"
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight size={14} className="btn-external-arrow" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="project-active-visual-stage">
                        <div
                          className="active-visual-frame"
                          onClick={(e) => handleOpenProject(project, e)}
                          role="button"
                          tabIndex={isActive ? 0 : -1}
                          aria-label={`Open ${project.name} complete project overview`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleOpenProject(project, e);
                            }
                          }}
                        >
                          <div className="active-stage-topbar">
                            <span className="stage-index-badge">
                              PROJECT {project.index} // INTERACTIVE PREVIEW
                            </span>
                            <span className="stage-open-hint">Inspect architecture ↗</span>
                          </div>
                          <div className="active-stage-canvas">
                            {renderProjectVisual(project.id)}
                          </div>
                          <div className="active-stage-capabilities">
                            {project.keyFeatures.slice(0, 2).map((feat, k) => (
                              <div key={k} className="stage-capability-item">
                                <Check size={13} className="stage-cap-check" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="projects-gesture-hint" aria-hidden="true">
            <span className="hint-dot"></span>
            Two-finger swipe &nbsp;·&nbsp; ← → keys &nbsp;·&nbsp; tap arrows
          </p>
        </div>
      </div>

      {modalPortal}
    </section>
  );
}
