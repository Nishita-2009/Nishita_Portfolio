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

  /* 2. Reveals, draw-in triggers and section activity (IntersectionObserver) */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = document.querySelectorAll(
      [
        '.credential-strip-item-x',
        '.about-split-layout',
        '.projects-header-split',
        '.projects-interactive-stage',
        '.skills-split-layout',
        '.skill-domain-card',
        '.chapter-header-split',
        '.edu-milestone-card',
        '.cert-card',
        '.contact-top-banner',
        '.contact-action-card'
      ].join(', ')
    );
    const drawEls = document.querySelectorAll('[data-draw]');
    const sections = document.querySelectorAll('section');

    sections.forEach((s) => s.classList.add('section-seen'));

    if (reduced) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      drawEls.forEach((el) => el.classList.add('drawn'));
      sections.forEach((s) => s.classList.add('section-active'));
      return undefined;
    }
    // section-seen is re-evaluated below by the observer (added on first sight only)
    sections.forEach((s) => s.classList.remove('section-seen'));

    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -32px 0px', threshold: 0.06 }
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
      { threshold: 0.25 }
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
      { rootMargin: '90px 0px 90px 0px', threshold: 0.02 }
    );
    sections.forEach((s) => sectionObs.observe(s));

    return () => {
      revealObs.disconnect();
      drawObs.disconnect();
      sectionObs.disconnect();
    };
  }, []);

  /* 3. Scroll-progress driven layering (writes CSS variables only, no React renders) */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const narrow = window.matchMedia('(max-width: 980px)');
    const hero = document.getElementById('hero');
    const layers = Array.from(document.querySelectorAll('.layer-panel'));
    const sections = Array.from(document.querySelectorAll('#main-content > section'));
    const cache = new WeakMap();
    let ticking = false;

    const setVar = (el, name, val) => {
      const key = name + val;
      const prev = cache.get(el) || {};
      if (prev[name] === key) return;
      prev[name] = key;
      cache.set(el, prev);
      if (val === null) el.style.removeProperty(name);
      else el.style.setProperty(name, val);
    };

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const off = reduced.matches;
      const layered = !off && !narrow.matches;

      if (hero) {
        setVar(
          hero,
          '--hero-recede',
          off ? null : clamp(window.scrollY / (vh * 0.9), 0, 1).toFixed(3)
        );
      }

      layers.forEach((el) => {
        if (!layered) {
          setVar(el, '--enter', null);
          return;
        }
        const r = el.getBoundingClientRect();
        let e = clamp((vh - r.top) / (vh * 0.8), 0, 1);
        e = 1 - Math.pow(1 - e, 3);
        setVar(el, '--enter', e.toFixed(3));
      });

      sections.forEach((el) => {
        if (off) {
          setVar(el, '--sp', null);
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const sp = clamp((r.top + r.height / 2 - vh / 2) / (vh + r.height), -0.6, 0.6);
        setVar(el, '--sp', sp.toFixed(3));
      });
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    narrow.addEventListener('change', schedule);
    reduced.addEventListener('change', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      narrow.removeEventListener('change', schedule);
      reduced.removeEventListener('change', schedule);
    };
  }, []);

  /* 4. Delegated pointer lighting / subtle tilt for [data-glow] and [data-tilt] */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
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
          target.style.setProperty('--ry', `${((x - 0.5) * 9).toFixed(2)}deg`);
          target.style.setProperty('--rx', `${((0.5 - y) * 7).toFixed(2)}deg`);
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
