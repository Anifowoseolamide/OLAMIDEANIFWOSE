/**
 * OLAMIDE ANIFOWOSHE — PORTFOLIO APPLICATION LOGIC
 * Modular entry point handling routing, live telemetry, and interactions
 */

import { PROJECTS } from './data.js';
import {
  renderTelemetryBar,
  renderHomeTemplate,
  renderProjectDetailTemplate
} from './components.js';

class PortfolioApp {
  constructor() {
    this.appEl = document.getElementById('app');
    this.telemetryEl = document.getElementById('telemetry-bar');
    this.navEl = document.getElementById('nav');
    this.navLinksEl = document.getElementById('navLinks');
    this.navToggleBtn = document.getElementById('navToggle');
    this.currentFilter = 'All';

    this.init();
  }

  init() {
    this.renderHeaderTelemetry();
    this.startLiveClock();
    this.bindEvents();
    this.render();
  }

  renderHeaderTelemetry() {
    if (this.telemetryEl) {
      this.telemetryEl.innerHTML = renderTelemetryBar();
    }
  }

  startLiveClock() {
    const updateClock = () => {
      const clockEl = document.getElementById('liveClock');
      if (clockEl) {
        const now = new Date();
        const timeStr = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
        clockEl.textContent = timeStr;
      }
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  parseSlug() {
    const m = window.location.hash.match(/^#\/project\/([a-z]+)/);
    return m ? m[1] : null;
  }

  render() {
    const slug = this.parseSlug();

    if (slug && PROJECTS[slug]) {
      this.appEl.innerHTML = renderProjectDetailTemplate(PROJECTS[slug]);
      document.title = `${PROJECTS[slug].title} — System Architecture & Details`;
      window.scrollTo(0, 0);
    } else {
      this.appEl.innerHTML = renderHomeTemplate(this.currentFilter);
      document.title = 'Olamide Anifowoshe — Backend Developer';

      const h = window.location.hash.replace('#', '');
      const knownSections = ['about', 'skills', 'experience', 'projects', 'contact'];

      if (knownSections.includes(h)) {
        requestAnimationFrame(() => {
          const el = document.getElementById(h);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      } else if (!window.location.hash || window.location.hash === '#/') {
        window.scrollTo(0, 0);
      }
    }

    if (this.navLinksEl) {
      this.navLinksEl.classList.remove('open');
    }

    this.bindDynamicEvents();
  }

  bindEvents() {
    window.addEventListener('hashchange', () => this.render());

    window.addEventListener('scroll', () => {
      if (this.navEl) {
        this.navEl.classList.toggle('scrolled', window.scrollY > 8);
      }
    });

    if (this.navToggleBtn) {
      this.navToggleBtn.addEventListener('click', () => {
        this.navLinksEl?.classList.toggle('open');
      });
    }
  }

  bindDynamicEvents() {
    const filterContainer = document.getElementById('projectFilter');
    if (filterContainer) {
      const filterButtons = filterContainer.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const filterVal = e.currentTarget.getAttribute('data-filter');
          if (filterVal) {
            this.currentFilter = filterVal;
            this.appEl.innerHTML = renderHomeTemplate(this.currentFilter);
            this.bindDynamicEvents();
          }
        });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();

  const bootLoader = document.getElementById('bootLoader');
  if (bootLoader) {
    if (sessionStorage.getItem('booted_v1')) {
      bootLoader.classList.add('loaded');
    } else {
      const lines = bootLoader.querySelectorAll('.boot-line');
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('visible');
        }, 820 * (index + 1));
      });

      const finishBoot = () => {
        bootLoader.classList.add('loaded');
        sessionStorage.setItem('booted_v1', 'true');
      };

      const bootTimer = setTimeout(finishBoot, 6000);

      bootLoader.addEventListener('click', () => {
        clearTimeout(bootTimer);
        finishBoot();
      });
      window.addEventListener('keydown', () => {
        clearTimeout(bootTimer);
        finishBoot();
      }, { once: true });
    }
  }
});
