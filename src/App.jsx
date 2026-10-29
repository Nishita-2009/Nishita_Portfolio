import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Purposeful, gentle scroll reveal with IntersectionObserver
  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatableSections = document.querySelectorAll('section, .dark-case-card, .experience-monolith-plate');
    animatableSections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      {/* Responsive Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section (Deep Charcoal High-Contrast Showcase) */}
        <Projects />

        {/* 5. Experience & Virtual Internships */}
        <Experience />

        {/* 6. Education Timeline */}
        <Education />

        {/* 7. Certifications & Workshops */}
        <Certifications />

        {/* 8. Professional Strengths */}
        <Strengths />

        {/* 9. Contact Section (Grounding Deep Charcoal Finale) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
