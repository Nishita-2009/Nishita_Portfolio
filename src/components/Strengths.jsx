import React from 'react';
import { 
  Brain, 
  Puzzle, 
  MessageSquare, 
  Users, 
  RefreshCw, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';
import { professionalStrengths } from '../data/portfolioData';

const iconMap = {
  brain: <Brain size={20} />,
  puzzle: <Puzzle size={20} />,
  message: <MessageSquare size={20} />,
  users: <Users size={20} />,
  refresh: <RefreshCw size={20} />,
  book: <BookOpen size={20} />
};

export default function Strengths() {
  return (
    <section id="strengths" className="section strengths-section" aria-label="Professional Strengths">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={13} />
            <span>07 // Mindset & Approach</span>
          </div>
          <h2 className="section-title">
            Engineering & Professional <span className="text-gradient">Strengths</span>
          </h2>
          <p className="section-subtitle">
            Core analytical and collaborative attributes brought to software engineering teams.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="strengths-grid">
          {professionalStrengths.map((item, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon-box">
                {iconMap[item.icon] || <Brain size={20} />}
              </div>
              
              <h3 className="strength-title">{item.title}</h3>
              
              <p className="strength-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
