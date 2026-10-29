import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 18);

      // Update top scroll progress bar directly via DOM ref (zero React re-renders)
      if (progressBarRef.current) {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
        progressBarRef.current.style.transform = `scaleX(${(progress / 100).toFixed(4)})`;
      }

      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const triggerLine = 160;
      let currentActive = 'hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine && rect.bottom > triggerLine) {
            currentActive = id;
          }
        }
      }

      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        currentActive = 'contact';
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="brand-logo"
          id="nav-brand-link"
          aria-label="Gottipati Nishita Sri Portfolio Home"
          onClick={closeMenu}
        >
          <div className="brand-monogram">NS</div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.shortName}</span>
            <span className="brand-title">{personalInfo.brandSub}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Prominent Resume Action + Mobile Menu Toggle */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-resume-btn"
            className="btn btn-burgundy btn-nav-resume"
            title="Open Gottipati Nishita Sri's Resume in a new tab"
          >
            <ExternalLink size={14} />
            <span>Resume</span>
            <ArrowUpRight size={14} className="btn-external-arrow" />
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            id="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Hairline */}
      <div className="nav-scroll-progress-track" aria-hidden="true">
        <div ref={progressBarRef} className="nav-scroll-progress-bar"></div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        id="mobile-nav-drawer"
        aria-hidden={!isOpen}
        onClick={closeMenu}
      >
        <div
          className="mobile-drawer-inner"
          onClick={(e) => e.stopPropagation()}
        >
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                return (
                  <li key={link.name} className="mobile-nav-item">
                    <a
                      href={link.href}
                      id={`mobile-nav-link-${link.name.toLowerCase()}`}
                      className={`mobile-nav-link ${
                        activeSection === sectionId ? 'active' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={15} className="mobile-nav-arrow" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-view-resume-btn"
              className="btn btn-burgundy btn-full"
              onClick={closeMenu}
            >
              <ExternalLink size={15} />
              <span>View Resume</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Gottipati_Nishita_Sri_Resume.pdf"
              id="mobile-nav-download-resume-btn"
              className="btn btn-outline-light btn-full"
              onClick={closeMenu}
            >
              <FileDown size={15} />
              <span>Download Resume PDF</span>
            </a>

            <div className="mobile-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                id="mobile-nav-github"
              >
                GitHub
              </a>
              <span className="dot-sep">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                id="mobile-nav-linkedin"
              >
                LinkedIn
              </a>
              <span className="dot-sep">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mobile-social-link"
                id="mobile-nav-email"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
