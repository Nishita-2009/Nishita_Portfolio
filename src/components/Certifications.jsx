import React from 'react';
import { Award, Bot, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';
import { BotanicalAccentSvg } from './Icons';
import { certifications } from '../data/portfolioData';

const certIconMap = {
  award: <Award size={20} strokeWidth={1.7} />,
  bot: <Bot size={20} strokeWidth={1.7} />,
  cpu: <Cpu size={20} strokeWidth={1.7} />,
  star: <Sparkles size={20} strokeWidth={1.7} />
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-chapter-section"
      aria-label="Certifications and Workshops"
    >
      {/* Delicate Botanical Burgundy Leaf Accent */}
      <div className="cert-chapter-botanical" aria-hidden="true">
        <BotanicalAccentSvg className="cert-botanical-svg" />
      </div>

      <div className="container">
        {/* Chapter Header */}
        <div className="chapter-header-split">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row">
              <span className="editorial-section-num">07</span>
              <span className="editorial-eyebrow-tag">
                <span className="eyebrow-dot"></span>
                CERTIFICATIONS &amp; WORKSHOPS
              </span>
            </div>

            <h2 className="chapter-main-heading">
              Continuous{' '}
              <em className="serif-italic-accent">Learning.</em>
            </h2>
          </div>

          <p className="chapter-header-lead">
            Specialized workshops and verified credentials in Artificial
            Intelligence, multi-agent systems, and interactive computing.
          </p>
        </div>

        {/* 2x2 Visual Credential Cards Grid */}
        <div className="certifications-chapter-grid">
          {certifications.map((cert, idx) => (
            <article
              key={cert.id}
              id={`certification-card-${cert.id}`}
              className={`cert-showcase-card stagger-${(idx % 4) + 1}`}
            >
              <div className="cert-card-top">
                <div className="cert-icon-box" aria-hidden="true">
                  {certIconMap[cert.icon] || <Award size={20} />}
                </div>
                <span className="cert-category-pill">{cert.tag}</span>
              </div>

              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-subtitle">{cert.subtitle}</p>
                <p className="cert-card-desc">{cert.description}</p>
              </div>

              <div className="cert-card-footer">
                <span className="cert-issuer-label">{cert.issuer}</span>

                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`cert-verify-link-${cert.id}`}
                    className="cert-verify-action"
                    title={`Open verified certificate for ${cert.title}`}
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight size={13} className="link-diag-arrow" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
