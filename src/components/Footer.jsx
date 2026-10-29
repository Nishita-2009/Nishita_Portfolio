import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer" aria-label="Portfolio Footer">
      <div className="container footer-container">
        
        {/* Top Footer: Monogram & Links */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-monogram">NS</span>
              <span className="footer-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Computer Science Undergraduate • BITS Pilani (Digital) • NIAT Fellow
            </p>
          </div>

          {/* Footer Navigation */}
          <nav className="footer-nav" aria-label="Footer Quick Links">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Profiles */}
          <div className="footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              id="footer-github-link"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              id="footer-linkedin-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              id="footer-email-link"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail size={16} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              id="back-to-top-btn"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Footer: Copyright and authentic notes */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {personalInfo.name}. Built with React & Vite. All rights reserved.
          </p>
          <a
            href={personalInfo.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-portfolio-repo-link"
            className="footer-repo-link"
            title="View Portfolio source code on GitHub"
          >
            <span>Repository: Nishita-2009/Nishita_Portfolio</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
