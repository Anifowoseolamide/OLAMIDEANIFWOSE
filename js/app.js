/**
 * ANIFOWOSHE OLAMIDE — PORTFOLIO APPLICATION LOGIC
 * Dedicated multi-page hash routing, fluid liquid bouncy nav, theme persistence, and interactive events
 */

import { PROJECTS, PROFILE } from './data.js';
import {
  renderLandingPageTemplate,
  renderAboutPageTemplate,
  renderExperiencePageTemplate,
  renderProjectsPageTemplate,
  renderContactPageTemplate,
  renderProjectDetailTemplate
} from './components.js';

class PortfolioApp {
  constructor() {
    this.appEl = document.getElementById('app');
    this.pillNav = document.getElementById('pill-nav');
    this.currentFilter = 'All';

    this.init();
  }

  init() {
    this.initTheme();
    this.initLiquidNav();
    this.bindEvents();
    this.render();
  }

  /* ─── Theme Management ────────────────────────────────── */

  initTheme() {
    const savedTheme = localStorage.getItem('olamide_portfolio_theme');
    const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');

    this.applyTheme(initialTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(nextTheme);
      });
    }
  }

  applyTheme(theme) {
    const moonIcon = document.querySelector('.theme-icon-moon');
    const sunIcon = document.querySelector('.theme-icon-sun');

    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (moonIcon) moonIcon.style.display = 'none';
      if (sunIcon) sunIcon.style.display = 'block';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (moonIcon) moonIcon.style.display = 'block';
      if (sunIcon) sunIcon.style.display = 'none';
    }
    localStorage.setItem('olamide_portfolio_theme', theme);
  }

  /* ─── Liquid Bouncy Water Navigation ──────────────────── */

  initLiquidNav() {
    if (!this.pillNav) return;
    const items = [...this.pillNav.querySelectorAll('.nav-item')];

    let rafId = null;
    let leaveTimeout = null;

    const onMouseEnter = () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
        leaveTimeout = null;
      }
      this.pillNav.classList.add('is-expanded');
    };

    const onMouseMove = (e) => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
        leaveTimeout = null;
      }
      this.pillNav.classList.add('is-expanded');

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const mouseX = e.clientX;
        const maxDist = 160; // Influence radius across dynamically spaced items

        items.forEach(item => {
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + rect.width / 2;
          const dx = mouseX - itemCenterX;
          const dist = Math.abs(dx);

          if (dist < maxDist) {
            // Smooth cosine water-swell curve (1 at center -> 0 at edges)
            const norm = dist / maxDist;
            const curve = Math.cos(norm * Math.PI) * 0.5 + 0.5;

            // Dramatic magnification: up to 1.58x (~75px bubble)
            const scale = 1 + curve * 0.58;

            // Prominently floats bubble upwards out of the pill (-22px)
            const translateY = -curve * 22;

            // Fluid water displacement: gently parts neighboring items to sides
            const pushX = Math.sin(norm * Math.PI) * (dx < 0 ? 12 : -12) * curve;

            item.style.transform = `translate3d(${pushX}px, ${translateY}px, 0) scale(${scale})`;
            item.style.zIndex = Math.round(curve * 40) + 2;

            if (curve > 0.25) {
              item.classList.add('in-bubble');
            } else {
              item.classList.remove('in-bubble');
            }
          } else {
            item.style.transform = '';
            item.style.zIndex = '';
            item.classList.remove('in-bubble');
          }
        });
      });
    };

    const onMouseLeave = () => {
      leaveTimeout = setTimeout(() => {
        if (rafId) cancelAnimationFrame(rafId);
        this.pillNav.classList.remove('is-expanded');
        items.forEach(item => {
          item.style.transform = '';
          item.style.zIndex = '';
          item.classList.remove('in-bubble');
        });
      }, 80); // Debounce ensures cursor moving into rising bubble never drops hover
    };

    this.pillNav.addEventListener('mouseenter', onMouseEnter);
    this.pillNav.addEventListener('mousemove', onMouseMove);
    this.pillNav.addEventListener('mouseleave', onMouseLeave);
  }

  /* ─── Routing ─────────────────────────────────────────── */

  parseRoute() {
    const hash = window.location.hash.trim();
    const slugMatch = hash.match(/^#\/project\/([a-z]+)/);
    if (slugMatch) {
      return { type: 'project', slug: slugMatch[1] };
    }

    const clean = hash.replace(/^#\/?/, '').toLowerCase();
    if (clean === 'about') return { type: 'about' };
    if (clean === 'experience') return { type: 'experience' };
    if (clean === 'projects' || clean === 'work') return { type: 'projects' };
    if (clean === 'contact') return { type: 'contact' };
    return { type: 'home' };
  }

  render() {
    const route = this.parseRoute();

    window.scrollTo({ top: 0, behavior: 'instant' });

    switch (route.type) {
      case 'project': {
        const project = PROJECTS[route.slug];
        if (project) {
          this.appEl.innerHTML = renderProjectDetailTemplate(project);
          document.title = `${project.title} — System Architecture & Details`;
          this.updateNavActive('projects');
        } else {
          this.appEl.innerHTML = renderProjectsPageTemplate(this.currentFilter);
          document.title = 'Projects & Systems Architecture — Anifowoshe Olamide';
          this.updateNavActive('projects');
        }
        break;
      }
      case 'about': {
        this.appEl.innerHTML = renderAboutPageTemplate();
        document.title = 'About Me — Anifowoshe Olamide';
        this.updateNavActive('about');
        break;
      }
      case 'experience': {
        this.appEl.innerHTML = renderExperiencePageTemplate();
        document.title = 'Experience & Leadership — Anifowoshe Olamide';
        this.updateNavActive('experience');
        break;
      }
      case 'projects': {
        this.appEl.innerHTML = renderProjectsPageTemplate(this.currentFilter);
        document.title = 'Projects & Systems Architecture — Anifowoshe Olamide';
        this.updateNavActive('projects');
        break;
      }
      case 'contact': {
        this.appEl.innerHTML = renderContactPageTemplate();
        document.title = 'Get In Touch — Anifowoshe Olamide';
        this.updateNavActive('contact');
        break;
      }
      case 'home':
      default: {
        this.appEl.innerHTML = renderLandingPageTemplate();
        document.title = 'Anifowoshe Olamide — Backend Developer';
        this.updateNavActive('home');
        break;
      }
    }

    this.bindDynamicEvents();
    this.initFadeIns();
  }

  /* ─── Event Binding ───────────────────────────────────── */

  bindEvents() {
    window.addEventListener('hashchange', () => this.render());
  }

  bindDynamicEvents() {
    // Project filter buttons
    const filterContainer = document.getElementById('projectFilter');
    if (filterContainer) {
      filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          const filterVal = e.currentTarget.getAttribute('data-filter');
          if (filterVal) {
            this.currentFilter = filterVal;
            this.appEl.innerHTML = renderProjectsPageTemplate(this.currentFilter);
            this.bindDynamicEvents();
            this.initFadeIns();
          }
        });
      });
    }

    // Copy Email button on Contact page
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const email = copyBtn.getAttribute('data-email') || PROFILE.email;
        navigator.clipboard.writeText(email).then(() => {
          copyBtn.textContent = '✓ Copied to Clipboard!';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = 'Copy Email';
            copyBtn.classList.remove('copied');
          }, 2500);
        }).catch(() => {
          copyBtn.textContent = 'Email: ' + email;
        });
      });
    }

    // Contact form submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName')?.value || '';
        const email = document.getElementById('contactEmail')?.value || '';
        const subject = document.getElementById('contactSubject')?.value || 'Backend Engineer Inquiry';
        const message = document.getElementById('contactMessage')?.value || '';

        const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(message + '\n\n---\nFrom: ' + name + ' (' + email + ')')}`;

        const feedback = document.getElementById('formFeedback');
        if (feedback) {
          feedback.textContent = 'Opening your email client...';
          feedback.style.color = 'var(--accent)';
        }

        window.location.href = mailtoUrl;
      });
    }
  }

  /* ─── Pill Nav Active State ───────────────────────────── */

  updateNavActive(routeName) {
    if (!this.pillNav) return;
    this.pillNav.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!routeName) return;

    const navId = `nav-${routeName}`;
    const activeItem = document.getElementById(navId);
    if (activeItem) {
      activeItem.classList.add('active');
    }
  }

  /* ─── Fade-in Animations ──────────────────────────────── */

  initFadeIns() {
    const fadeEls = this.appEl.querySelectorAll('.fade-in, .project-card, .exp-item, .contact-card');

    if (!fadeEls.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblings = parent
            ? [...parent.querySelectorAll('.project-card, .exp-item, .contact-card, .fade-in')]
            : [];
          const index = siblings.indexOf(entry.target);
          const delay = Math.min(index * 60, 300);

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(el => observer.observe(el));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
  });
} else {
  new PortfolioApp();
}
