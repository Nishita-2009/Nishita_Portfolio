import React from 'react';
import { Award, Bot, Cpu, Sparkles, ArrowUpRight, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import AmbientField from './AmbientField';

const certIconMap = {
  award: Award,
  bot: Bot,
  cpu: Cpu,
  star: Sparkles
};

export default function Certifications() {
  const [featured, ...others] = certifications;
  const FeaturedIcon = certIconMap[featured.icon] || Award;

  return (
    <section
      id="certifications"
      className="section layer-panel certifications-chapter-section"
      data-layer="tilt"
      aria-label="Certifications and Workshops"
    >
      <AmbientField tone="dark" variant="dark" />

      <div className="container">
        <div className="chapter-header-split cert-header">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row dark-eyebrow-row">
              <span className="editorial-section-num dark-num">07</span>
              <span className="editorial-eyebrow-tag dark-eyebrow-tag">
                <span className="eyebrow-dot rose-dot"></span>
                CERTIFICATIONS &amp; WORKSHOPS
              </span>
            </div>
            <h2 className="chapter-main-heading cert-heading">
              Continuous <em className="serif-italic-rose">Learning.</em>
            </h2>
          </div>
          <p className="chapter-header-lead cert-lead">
            One verified internship credential and three hands-on workshops.
          </p>
        </div>

        <div className="cert-gallery" data-draw>
          {/* Featured: IBM | 1M1B */}
          <article
            id={`certification-card-${featured.id}`}
            className="cert-card cert-card-featured scroll-reveal"
            style={{ '--i': 0 }}
          >
            <div className="cert-card-inner" data-tilt>
              <div className="cert-glare" aria-hidden="true"></div>
              <svg
                className="cert-seal"
                viewBox="0 0 120 120"
                fill="none"
                aria-hidden="true"
              >
                <circle className="seal-ring seal-ring-1" pathLength="1" cx="60" cy="60" r="52" />
                <circle className="seal-ring seal-ring-2" pathLength="1" cx="60" cy="60" r="40" />
                <path className="seal-ring seal-ring-3" pathLength="1" d="M60 14v10M60 96v10M14 60h10M96 60h10" />
              </svg>

              <div className="cert-card-top">
                <div className="cert-icon-box cert-icon-featured" aria-hidden="true">
                  <FeaturedIcon size={22} strokeWidth={1.6} />
                </div>
                <span className="cert-category-pill">
                  <BadgeCheck size={12} /> {featured.tag}
                </span>
              </div>

              <div className="cert-card-body">
                <h3 className="cert-card-title cert-title-featured">{featured.title}</h3>
                <p className="cert-card-subtitle">{featured.subtitle}</p>
                <p className="cert-card-desc">{featured.description}</p>
              </div>

              <div className="cert-card-footer">
                <span className="cert-issuer-label">{featured.issuer}</span>
                {featured.certificateUrl && (
                  <a
                    href={featured.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`cert-verify-link-${featured.id}`}
                    className="btn btn-burgundy btn-sm cert-featured-cta"
                    title={`Open verified certificate for ${featured.title}`}
                  >
                    <Award size={14} />
                    <span>View Certificate</span>
                    <ArrowUpRight size={14} className="btn-external-arrow" />
                  </a>
                )}
              </div>
            </div>
          </article>

          {/* Workshops */}
          {others.map((cert, idx) => {
            const Icon = certIconMap[cert.icon] || Award;
            return (
              <article
                key={cert.id}
                id={`certification-card-${cert.id}`}
                className={`cert-card cert-card-compact cert-variant-${idx + 1} scroll-reveal`}
                style={{ '--i': idx + 1 }}
              >
                <div className="cert-card-inner" data-tilt>
                  <div className="cert-glare" aria-hidden="true"></div>
                  <div className="cert-card-top">
                    <div className="cert-icon-box" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>
                    <span className="cert-category-pill">{cert.tag}</span>
                  </div>
                  <div className="cert-card-body">
                    <h3 className="cert-card-title">{cert.title}</h3>
                    <p className="cert-card-subtitle">{cert.subtitle}</p>
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
                      >
                        <span>View Certificate</span>
                        <ArrowUpRight size={13} className="link-diag-arrow" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
