import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer" aria-label="Portfolio Footer">
      <div className="container footer-minimal-bar">
        <div className="footer-brand-left">
          <span className="footer-monogram">NS</span>
          <span className="footer-copy-text">
            © {CURRENT_YEAR} {personalInfo.name} • BITS Pilani (Digital) &amp; NIAT
          </span>
        </div>

        <nav className="footer-mini-nav" aria-label="Footer Quick Navigation">
          <ul className="footer-mini-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-mini-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-right-actions">
          <a
            href={personalInfo.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-portfolio-repo-link"
            className="footer-source-link"
          >
            Source
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="footer-top-btn"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
