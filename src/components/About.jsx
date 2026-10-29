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
            <Sparkles size={12} />
            <span>01 // Background & Philosophy</span>
          </div>
          <h2 className="section-title">
            Academic Foundation & <span className="text-gradient">Engineering Focus</span>
          </h2>
          <p className="section-subtitle">
            An authentic overview of my undergraduate education, technical focus, and approach to software development.
          </p>
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="about-editorial-grid">
          
          {/* Left Column: Thesis Quote & Focus Tags */}
          <div className="about-lead-col">
            <blockquote className="about-pull-quote">
              “Turning core computer science principles into working software, from MSME intelligence platforms to specialized AI agent workflows.”
            </blockquote>

            <div className="narrative-tags">
              <span className="tech-tag">BITS Pilani (Digital)</span>
              <span className="tech-tag">NIAT Fellow</span>
              <span className="tech-tag">DSA & Problem Solving</span>
              <span className="tech-tag">Full-Stack Web</span>
              <span className="tech-tag">Generative AI & LLMs</span>
              <span className="tech-tag">RAG Fundamentals</span>
            </div>
          </div>

          {/* Right Column: Full Narrative & 2x2 Quad Pillars */}
          <div className="about-narrative-col">
            <div className="narrative-paragraphs">
              {aboutData.paragraphs.map((para, idx) => (
                <p key={idx} className="narrative-p">
                  {para}
                </p>
              ))}
            </div>

            {/* 4 Core Pillars in a 2x2 Architectural Quad-Grid (Hairline cross, no boxes) */}
            <div className="about-pillars-grid">
              <div className="pillar-cell">
                <div className="pillar-cell-header">
                  <GraduationCap size={18} className="pillar-icon" />
                  <h4 className="pillar-cell-title">BITS Pilani (Digital)</h4>
                </div>
                <p className="pillar-cell-desc">
                  Pursuing a BSc in Computer Science, building robust foundations in algorithms, system architecture, database theory, and core computer science mathematics.
                </p>
              </div>

              <div className="pillar-cell">
                <div className="pillar-cell-header">
                  <Layers size={18} className="pillar-icon" />
                  <h4 className="pillar-cell-title">Industry Training at NIAT</h4>
                </div>
                <p className="pillar-cell-desc">
                  Undergoing hands-on engineering training with NxtWave of Innovation in Advanced Technologies (NIAT), mastering full-stack web engineering and practical software development.
                </p>
              </div>

              <div className="pillar-cell">
                <div className="pillar-cell-header">
                  <Sparkles size={18} className="pillar-icon" />
                  <h4 className="pillar-cell-title">Generative AI & Practical RAG</h4>
                </div>
                <p className="pillar-cell-desc">
                  Exploring LLM integration, agentic workflows, prompt engineering, and retrieval-augmented generation to create functional, intelligent solutions for real-world scenarios.
                </p>
              </div>

              <div className="pillar-cell">
                <div className="pillar-cell-header">
                  <Target size={18} className="pillar-icon" />
                  <h4 className="pillar-cell-title">Growth Through Practical Building</h4>
                </div>
                <p className="pillar-cell-desc">
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
