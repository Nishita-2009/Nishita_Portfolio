import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Target, 
  Layers 
} from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about-section" aria-label="About Gottipati Nishita Sri">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Background & Journey</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            An authentic, student-focused overview of my academic background, technical focus, and passion for software engineering.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          
          {/* Detailed Narrative */}
          <div className="about-narrative glass-card">
            <h3 className="narrative-heading">
              Computer Science Undergraduate & Aspiring Software Engineer
            </h3>

            <div className="narrative-body">
              {aboutData.paragraphs.map((para, idx) => (
                <p key={idx} className="narrative-paragraph">
                  {para}
                </p>
              ))}
            </div>

            <div className="narrative-tags">
              <span className="tech-tag">BITS Pilani (Digital)</span>
              <span className="tech-tag">NIAT Fellow</span>
              <span className="tech-tag">DSA & Problem Solving</span>
              <span className="tech-tag">Full-Stack Web</span>
              <span className="tech-tag">Generative AI & LLMs</span>
              <span className="tech-tag">RAG Fundamentals</span>
            </div>
          </div>

          {/* Core Pillars / Value Proposition */}
          <div className="about-pillars">
            <div className="pillar-card glass-card">
              <div className="pillar-icon-box">
                <GraduationCap size={22} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">BITS Pilani (Digital)</h4>
                <p className="pillar-desc">
                  Pursuing a BSc in Computer Science, building robust foundations in algorithms, system architecture, database theory, and core computer science mathematics.
                </p>
              </div>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-icon-box">
                <Layers size={22} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Industry Training at NIAT</h4>
                <p className="pillar-desc">
                  Undergoing hands-on engineering training with NxtWave of Innovation in Advanced Technologies (NIAT), mastering full-stack web engineering and practical software development.
                </p>
              </div>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-icon-box">
                <Sparkles size={22} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Generative AI & Practical RAG</h4>
                <p className="pillar-desc">
                  Exploring LLM integration, agentic workflows, prompt engineering, and retrieval-augmented generation to create functional, intelligent solutions for real-world scenarios.
                </p>
              </div>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-icon-box">
                <Target size={22} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4 className="pillar-title">Growth Through Practical Building</h4>
                <p className="pillar-desc">
                  Believer in experiential learning: turning conceptual knowledge into working software, from MSME analytics platforms to specialized AI recruitment tools.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
