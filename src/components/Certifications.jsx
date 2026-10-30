import React from 'react';
import { Award, Bot, Cpu, Sparkles, ArrowUpRight, BadgeCheck, ShieldCheck } from 'lucide-react';
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
      className="section certifications-dark-section cert-scene-section"
      aria-label="Certifications and Workshops"
    >
      <AmbientField tone="dark" variant="dark" />

      <div className="container">
        {/* Editorial Eyebrow */}
        <div className="chapter-header-split cert-header">
          <div className="chapter-header-left">
            <div className="editorial-eyebrow-row dark-eyebrow-row">
              <span className="editorial-section-num dark-num">05</span>
              <span className="editorial-eyebrow-tag dark-eyebrow-tag">
                <span className="eyebrow-dot rose-dot"></span>
                CERTIFICATIONS // CREDENTIAL VAULT &amp; ARCHIVE
              </span>
            </div>
            <h2 className="chapter-main-heading cert-heading">
              Verified Credentials
              <br />
              <em className="serif-italic-rose">&amp; Practical Workshops.</em>
            </h2>
          </div>
          <p className="chapter-header-lead cert-lead">
            Virtual internship credentials and specialized technical workshops in AI agents,
            gesture-based computing, and modern full-stack development.
          </p>
        </div>

        {/* Credential Vault Stage */}
        <div className="vault-stage-layout">
          {/* Featured Monument: IBM | 1M1B AI for Sustainability */}
          <article
            id={`certification-card-${featured.id}`}
            className="vault-featured-card"
            data-glow
            data-tilt
          >
            <div className="vault-card-inner">
              {/* Rotating Holographic Seal */}
              <div className="vault-seal-halo" aria-hidden="true">
                <svg className="vault-seal-svg" viewBox="0 0 140 140" fill="none">
                  <circle className="seal-orbit orbit-outer" cx="70" cy="70" r="62" stroke="#C87D82" strokeWidth="1" strokeDasharray="4 6" />
                  <circle className="seal-orbit orbit-mid" cx="70" cy="70" r="48" stroke="#762B3D" strokeWidth="1.5" />
                  <circle className="seal-orbit orbit-inner" cx="70" cy="70" r="34" stroke="#C87D82" strokeWidth="1" strokeDasharray="8 4" />
                </svg>
              </div>

              <div className="vault-featured-top">
                <div className="vault-badge-stack">
                  <div className="vault-featured-icon" aria-hidden="true">
                    <FeaturedIcon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="vault-issuer-chip">{featured.issuer}</span>
                  <span className="vault-category-pill">
                    <BadgeCheck size={13} /> {featured.tag}
                  </span>
                </div>
                <div className="vault-plan-id">
                  <ShieldCheck size={14} className="shield-icon" />
                  <span>PLAN ID: {featured.planId}</span>
                </div>
              </div>

              <div className="vault-featured-body">
                <h3 className="vault-featured-title">{featured.title}</h3>
                <h4 className="vault-featured-subtitle">{featured.subtitle}</h4>

                <div className="vault-meta-bar">
                  <span className="meta-badge">Completed: {featured.completionDate}</span>
                  <span className="meta-dot">•</span>
                  <span className="meta-badge status-verified">Verified Credential</span>
                </div>

                <p className="vault-featured-desc">{featured.description}</p>

                {featured.highlights && (
                  <ul className="vault-highlights-grid" aria-label="Internship Highlights">
                    {featured.highlights.map((h, i) => (
                      <li key={i} className="vault-highlight-chip">
                        <span className="highlight-bullet" aria-hidden="true">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="vault-featured-footer">
                <div className="vault-footer-telemetry">
                  <span className="telemetry-dot-live"></span>
                  <span>SkillsBuild Verified Record</span>
                </div>

                {featured.certificateUrl && (
                  <a
                    href={featured.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`cert-verify-link-${featured.id}`}
                    className="btn btn-burgundy btn-sm vault-cta-btn"
                    title={`Open verified certificate for ${featured.title}`}
                  >
                    <Award size={15} />
                    <span>View Verified Certificate</span>
                    <ArrowUpRight size={15} className="btn-external-arrow" />
                  </a>
                )}
              </div>
            </div>
          </article>

          {/* Workshop Archive Grid: 4 Cards */}
          <div className="vault-workshops-grid">
            {others.map((cert) => {
              const Icon = certIconMap[cert.icon] || Award;
              return (
                <article
                  key={cert.id}
                  id={`certification-card-${cert.id}`}
                  className="vault-workshop-card"
                  data-glow
                  data-tilt
                >
                  <div className="workshop-card-top">
                    <div className="workshop-icon-box" aria-hidden="true">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                    <span className="workshop-category-tag">{cert.tag}</span>
                  </div>

                  <div className="workshop-card-body">
                    <h3 className="workshop-title">{cert.title}</h3>
                    <h4 className="workshop-issuer">{cert.subtitle}</h4>
                    <p className="workshop-desc">{cert.description}</p>
                  </div>

                  <div className="workshop-card-footer">
                    <span className="workshop-issuer-badge">{cert.issuer}</span>
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`cert-verify-link-${cert.id}`}
                        className="workshop-verify-link"
                        title={`View Certificate for ${cert.title}`}
                      >
                        <Award size={13} />
                        <span>View Certificate</span>
                        <ArrowUpRight size={13} className="link-arrow" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
