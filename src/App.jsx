import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const revealSelectors = [
      '.hero-content',
      '.hero-visual',
      '.credential-strip-item',
      '.about-split-layout',
      '.projects-header-split',
      '.project-showcase-card',
      '.skills-split-layout',
      '.skill-domain-card',
      '.chapter-header-split',
      '.exp-showcase-card',
      '.edu-milestone-card',
      '.cert-showcase-card',
      '.contact-top-banner',
      '.contact-action-card'
    ].join(', ');

    const animatableElements = document.querySelectorAll(revealSelectors);
    const sections = document.querySelectorAll('section');

    if (prefersReducedMotion) {
      animatableElements.forEach((el) => el.classList.add('in-view'));
      sections.forEach((sec) => sec.classList.add('section-active'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -36px 0px',
        threshold: 0.08
      }
    );

    animatableElements.forEach((el) => {
      el.classList.add('scroll-reveal');
      revealObserver.observe(el);
    });

    // Pause off-screen ambient animations & trigger timeline line draw
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-active');
          } else {
            entry.target.classList.remove('section-active');
          }
        });
      },
      {
        root: null,
        rootMargin: '80px 0px 80px 0px',
        threshold: 0.02
      }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />

      <main id="main-content">
        {/* 01. Cinematic Hero & Credentials Strip */}
        <Hero />

        {/* 02. About Section — Split Visual Editorial Composition */}
        <About />

        {/* 03. Projects Showcase — Deep Charcoal Product Showcase */}
        <Projects />

        {/* 04. Technical & Professional Skills — Deep Charcoal Interactive Matrix */}
        <Skills />

        {/* 05. Experience & Internships — Dedicated Timeline Chapter (Warm Ivory) */}
        <Experience />

        {/* 06. Education — Dedicated Academic Milestone Chapter (Warm Cream) */}
        <Education />

        {/* 07. Certifications & Workshops — Dedicated Credentials Chapter (Warm Ivory) */}
        <Certifications />

        {/* 08. Contact Closing Experience — Balanced Action Grid (Warm Cream) */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
