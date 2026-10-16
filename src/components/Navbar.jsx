import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" id="nav-brand-link" aria-label="Gottipati Nishita Sri Portfolio">
          <div className="brand-monogram">NS</div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.shortName}</span>
            <span className="brand-title">Portfolio</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumePath}
            download="Gottipati_Nishita_Sri_Resume.pdf"
            id="nav-resume-btn"
            className="btn btn-resume btn-sm"
            title="Download Gottipati Nishita Sri's Resume"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>
          
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            id="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} id="mobile-nav-drawer">
        <div className="mobile-drawer-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mobile-drawer-footer">
            <a
              href={personalInfo.resumePath}
              download="Gottipati_Nishita_Sri_Resume.pdf"
              id="mobile-nav-resume-btn"
              className="btn btn-resume btn-full"
              onClick={closeMenu}
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </a>
            <div className="mobile-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                id="mobile-nav-github"
                aria-label="GitHub Profile"
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
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
