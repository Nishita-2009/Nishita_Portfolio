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
  brain: <Brain size={24} className="text-violet" />,
  puzzle: <Puzzle size={24} className="text-indigo" />,
  message: <MessageSquare size={24} className="text-blue" />,
  users: <Users size={24} className="text-violet" />,
  refresh: <RefreshCw size={24} className="text-indigo" />,
  book: <BookOpen size={24} className="text-blue" />
};

export default function Strengths() {
  return (
    <section id="strengths" className="section strengths-section" aria-label="Professional Strengths">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>Work Ethic & Mindset</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Strengths</span>
          </h2>
          <p className="section-subtitle">
            Core interpersonal and cognitive attributes brought to software teams and collaborative engineering environments.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="strengths-grid">
          {professionalStrengths.map((item, index) => (
            <div key={index} className="strength-card glass-card">
              <div className="strength-icon-box">
                {iconMap[item.icon] || <Brain size={24} />}
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
