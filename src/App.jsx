import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export default function App() {
  /* 1. Fresh root visit always starts at the hero (anchors/history still work) */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#hero') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  /* 2. Coordinated IntersectionObserver for fluid, stutter-free entry reveals */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = document.querySelectorAll(
      [
        '.scroll-reveal',
        '.about-split-layout',
        '.projects-header-split',
        '.projects-interactive-stage',
        '.skills-split-layout',
        '.skills-console-card',
        '.skill-domain-card',
        '.chapter-header-split',
        '.exp-showcase-card',
        '.edu-milestone-card',
        '.cert-card',
        '.contact-top-banner',
        '.contact-action-card'
      ].join(', ')
    );
    const drawEls = document.querySelectorAll('[data-draw]');
    const sections = document.querySelectorAll('section');

    if (reduced) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      drawEls.forEach((el) => el.classList.add('drawn'));
      sections.forEach((s) => s.classList.add('section-active', 'section-seen'));
      return undefined;
    }

    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.08 }
    );
    revealEls.forEach((el) => {
      el.classList.add('scroll-reveal');
      revealObs.observe(el);
    });

    const drawObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('drawn');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    drawEls.forEach((el) => drawObs.observe(el));

    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-active', 'section-seen');
          } else {
            entry.target.classList.remove('section-active');
          }
        });
      },
      { rootMargin: '60px 0px 60px 0px', threshold: 0.05 }
    );
    sections.forEach((s) => sectionObs.observe(s));

    return () => {
      revealObs.disconnect();
      drawObs.disconnect();
      sectionObs.disconnect();
    };
  }, []);

  /* 3. Smooth, GPU-friendly scroll progress for cinematic scene transformations */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const hero = document.getElementById('hero');
    const sections = Array.from(document.querySelectorAll('#main-content > section'));
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const vh = window.innerHeight;
        const scrollY = window.scrollY;

        // Hero recede progress: 0 at top, 1 when scrolled 1 viewport
        if (hero) {
          const heroProg = clamp(scrollY / vh, 0, 1);
          hero.style.setProperty('--hero-progress', heroProg.toFixed(3));
        }

        // Section scroll progress
        for (const sec of sections) {
          const rect = sec.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > vh) continue;
          const prog = clamp((vh - rect.top) / (vh * 0.9), 0, 1);
          sec.style.setProperty('--sp', prog.toFixed(3));
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* 4. Delegated pointer lighting / subtle tilt for [data-glow] and [data-tilt] */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;
    let last = null;
    let raf = null;

    const reset = (el) => {
      if (!el) return;
      ['--mx', '--my', '--rx', '--ry'].forEach((p) => el.style.removeProperty(p));
      el.classList.remove('is-hovered');
    };

    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const target = e.target.closest ? e.target.closest('[data-tilt], [data-glow]') : null;
      if (last && last !== target) reset(last);
      last = target;
      if (!target) return;
      const { clientX, clientY } = e;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = target.getBoundingClientRect();
        const x = clamp((clientX - r.left) / r.width, 0, 1);
        const y = clamp((clientY - r.top) / r.height, 0, 1);
        target.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
        target.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
        target.classList.add('is-hovered');
        if (target.hasAttribute('data-tilt')) {
          target.style.setProperty('--ry', `${((x - 0.5) * 8).toFixed(2)}deg`);
          target.style.setProperty('--rx', `${((0.5 - y) * 6).toFixed(2)}deg`);
        }
      });
    };
    const onLeave = () => {
      reset(last);
      last = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
