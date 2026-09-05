/**
 * ANIFOWOSHE OLAMIDE — PORTFOLIO UI COMPONENTS
 * Multi-page architecture, teaser landing page, and branded footer
 */

import {
  PROFILE,
  SKILL_GROUPS,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  PROJECT_ORDER
} from './data.js';

/* ─── Helpers ───────────────────────────────────────────── */

function initials(title) {
  const clean = title.replace(/[()]/g, '').trim();
  const words = clean.split(/[\s\-\/_]+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  const capitals = clean.match(/[A-Z]/g);
  if (capitals && capitals.length >= 2) {
    return capitals.slice(0, 2).join('').toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase();
}

function techChips(arr, max = 4) {
  return arr.slice(0, max)
    .map(t => `<span class="proj-tech-chip">${t}</span>`)
    .join('');
}

function techTags(arr) {
  return arr.map(t => `<span class="tech-tag">${t}</span>`).join('');
}

/* ─── Social Icons ──────────────────────────────────────── */

const GH_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

const LI_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

/* ─── Global Branded Footer: Olamide Anifowose ──────────── */

export function renderFooter() {
  return `
    <footer class="site-footer wrap">
      <div class="footer-divider"></div>
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="#/" class="footer-name">Olamide Anifowose</a>
          <p class="footer-role">Backend Developer &middot; APIs, Systems &amp; Architecture</p>
          <p class="footer-bio-short">
            Specializing in high-concurrency API design, atomic escrow transactions, and robust database architecture.
          </p>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-col">
            <span class="footer-col-title">Navigation</span>
            <a href="#/">Home</a>
            <a href="#/about">About</a>
            <a href="#/projects">Projects</a>
            <a href="#/experience">Experience</a>
            <a href="#/contact">Contact</a>
          </div>
          <div class="footer-nav-col">
            <span class="footer-col-title">Connect</span>
            <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/anifowoshe-olamide" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:${PROFILE.email}">Email</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; ${new Date().getFullYear()} Olamide Anifowose. All rights reserved.</span>
        <span class="footer-location">Lagos, Nigeria &middot; Available Worldwide</span>
      </div>
    </footer>
  `;
}

/* ─── Hero Component ────────────────────────────────────── */

export function renderHeroSection() {
  return `
    <section id="home-hero" class="wrap fade-in">
      <div class="hero-avatar">
        <img src="images/avatar.jpg" alt="Anifowoshe Olamide" width="80" height="80" />
      </div>

      <h1 class="hero-name">Backend Developer,<br>Builder, Problem Solver.</h1>

      <p class="hero-role">
        Hi, I'm Olamide. 👋<br>
        ${PROFILE.roleHeadline}
      </p>

      <div class="hero-social">
        <a href="${PROFILE.github}" target="_blank" rel="noopener" aria-label="GitHub">${GH_ICON}</a>
        <a href="https://www.linkedin.com/in/anifowoshe-olamide" target="_blank" rel="noopener" aria-label="LinkedIn">${LI_ICON}</a>
        <a href="mailto:${PROFILE.email}" aria-label="Email" style="font-size:13px; color:var(--text-muted); font-weight:500; transition:color 0.2s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">${PROFILE.email}</a>
      </div>

      <!-- 3-Photo Showcase Grid matching Screenshot 365 -->
      <div class="hero-photo-showcase">
        <div class="showcase-card tilt-left">
          <img src="images/showcase1.jpg" alt="Olamide Anifowoshe - Tech & Community" loading="lazy" />
        </div>
        <div class="showcase-card tilt-center">
          <img src="images/showcase2.jpg" alt="Anifowoshe Olamide - Backend Systems" loading="lazy" />
        </div>
        <div class="showcase-card tilt-right">
          <img src="images/showcase3.jpg" alt="Olamide Anifowoshe - Builder & Problem Solver" loading="lazy" />
        </div>
      </div>
    </section>
  `;
}

/* ─── Project Cards ─────────────────────────────────────── */

export function renderFeaturedCard(p) {
  return `
    <a class="project-featured fade-in" href="#/project/${p.slug}">
      <div class="featured-badge">★ Featured Project</div>
      <h3>${p.title} — ${p.subtitle}</h3>
      <p>${p.tagline}</p>
      <div class="proj-tech-chips" style="margin-bottom:16px;">
        ${techChips(p.tech, 6)}
      </div>
      <span class="proj-arrow-link">Explore architecture &amp; docs →</span>
    </a>
  `;
}

export function renderProjectCard(p) {
  return `
    <a class="project-card fade-in" href="#/project/${p.slug}" data-category="${p.category || 'All'}">
      <div class="proj-initials">${initials(p.title)}</div>
      <h4>${p.title}</h4>
      <p>${p.tagline}</p>
      <div class="proj-tech-chips">${techChips(p.tech, 3)}</div>
      <span class="proj-arrow-link">View Project →</span>
    </a>
  `;
}

/* ─── Skills Component ──────────────────────────────────── */

const SKILL_CATEGORIES = [
  { label: 'Languages',          skills: ['Python', 'SQL', 'JavaScript', 'VB.NET'] },
  { label: 'Frameworks & APIs',  skills: ['Django', 'Django REST Framework', 'Django Channels', 'WebSockets', 'SimpleJWT', 'API Design'] },
  { label: 'Databases & Concurrency', skills: ['PostgreSQL', 'Select For Update', 'Relational Schema Design', 'Query Optimization', 'Database Migrations'] },
  { label: 'AI, Biometrics & Security', skills: ['AI Biometrics (Face++ / CompreFace)', 'Atomic Escrow Transactions', 'Celery', 'LLM Grading', 'RBAC'] },
  { label: 'Infrastructure & DevOps', skills: ['Docker', 'Cloudinary', 'Render', 'Git', 'GitHub Actions', 'Linux / Bash'] },
];

export function renderSkillsSection() {
  return `
    <div class="skills-block fade-in">
      <p class="section-label">Technical Skills</p>
      <div class="skills-table">
        ${SKILL_CATEGORIES.map(cat => `
          <div class="skills-row">
            <span class="skills-row-label">${cat.label}</span>
            <div class="skills-chips">
              ${cat.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ─── Education Component ───────────────────────────────── */

export function renderEducationBlock() {
  return `
    <div class="education-block fade-in">
      <p class="section-label">Education &amp; Credentials</p>
      <div class="edu-list">
        ${EDUCATION.map(item => `
          <div class="edu-item">
            <div class="edu-role">${item.role}</div>
            <div class="edu-org">${item.org} &mdash; ${item.dates}</div>
            ${item.note ? `<p class="edu-note">${item.note}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ─── 1. LANDING PAGE TEMPLATE (#/) ─────────────────────── */

export function renderLandingPageTemplate() {
  const flagship = PROJECTS['lagoscp'];
  const previewProjects = ['rideshare', 'tidal'].map(slug => PROJECTS[slug]);

  return `
    ${renderHeroSection()}

    <!-- Teaser: About -->
    <section class="wrap teaser-section fade-in">
      <div class="teaser-header">
        <p class="section-label">About</p>
        <h2 class="teaser-title">Architecting for resilience behind the scenes.</h2>
      </div>
      <div class="teaser-body">
        <p class="teaser-desc">
          I care deeply about the parts of a system users never see directly — API design, data integrity, and making sure money and state don't get lost between requests. Currently engineering backend features at <strong>Ndara.ai</strong>.
        </p>
        <div class="teaser-link-wrap">
          <a href="#/about" class="btn btn-ghost">Read Full Story &amp; Skills &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Teaser: Selected Work -->
    <section class="wrap teaser-section fade-in">
      <div class="teaser-header">
        <p class="section-label">Selected Work</p>
        <h2 class="teaser-title">Featured Systems &amp; APIs</h2>
      </div>

      ${renderFeaturedCard(flagship)}

      <div class="project-grid" style="margin-top: 36px;">
        ${previewProjects.map(p => renderProjectCard(p)).join('')}
      </div>

      <div class="teaser-action">
        <a href="#/projects" class="btn btn-ghost">Explore All Projects (${PROJECT_ORDER.length}) &rarr;</a>
      </div>
    </section>

    <!-- Teaser: Experience -->
    <section class="wrap teaser-section fade-in">
      <div class="teaser-header">
        <p class="section-label">Experience</p>
        <h2 class="teaser-title">Recent Roles &amp; Competitions</h2>
      </div>

      <div class="exp-list">
        ${EXPERIENCE.slice(0, 2).map(item => `
          <div class="exp-item">
            <div class="exp-left">
              <span class="exp-org">${item.org}</span>
              <span class="exp-role">${item.role}</span>
              <span class="exp-status ${item.status === 'ACTIVE' ? 'active' : 'complete'}">
                <span class="exp-status-dot"></span>
                ${item.status === 'ACTIVE' ? 'Present' : item.status}
              </span>
            </div>
            <span class="exp-dates">${item.dates}</span>
            <ul class="exp-bullets">
              ${item.items.slice(0, 2).map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="teaser-action">
        <a href="#/experience" class="btn btn-ghost">View Full Experience &amp; Education &rarr;</a>
      </div>
    </section>

    <!-- Callout Banner: Collaborate -->
    <section class="wrap fade-in">
      <div class="cta-banner">
        <p class="section-label">Collaborate</p>
        <h2>Have a system challenge or project in mind?</h2>
        <p>Available for full-time backend engineering roles, API architecture consultations, and select engineering contracts.</p>
        <div class="cta-actions">
          <a href="#/contact" class="btn btn-primary">Get In Touch &rarr;</a>
          <a href="#/projects" class="btn btn-ghost">Browse Architecture &rarr;</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
}

/* ─── 2. DEDICATED ABOUT PAGE TEMPLATE (#/about) ────────── */

export function renderAboutPageTemplate() {
  return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">PROFILE &amp; BACKGROUND</span>
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">
          Backend Developer with a deep focus on API design, atomic transactions, and scalable data layers.
        </p>
      </header>

      <div class="about-grid">
        <div class="about-body">
          <p>
            I'm a backend developer based in Lagos, Nigeria with a Computer Science degree from Lagos State University. My focus is on the foundational architecture of digital products — the parts users never see directly, but feel immediately when they fail: API design, data integrity, and making sure money, state, and concurrency don't get lost between requests.
          </p>
          <p>
            I currently serve as a <strong>Backend Developer at Ndara.ai</strong>, engineering scalable backend services and AI-driven automation workflows integrated with WhatsApp APIs. Before and alongside this, I've architected backend engines under high-stakes hackathon environments — leading backend development for <strong>Tidal (Scriva)</strong> at the 2026 OPay Hackathon and winning 2nd Place at the Nexus Hackathon Epe with <strong>PetrolLink</strong>.
          </p>
          <p>
            When building systems, my core priority is transaction safety. Whether it's row-level locking with <code>select_for_update()</code> to eliminate wallet double-spending or designing async Celery workers for OCR transcription, I strive to make distributed workflows predictable, auditable, and resilient to failure.
          </p>
          <p>
            I believe that great backend systems are easy for other developers to integrate with and hard for bad actors or concurrent requests to break.
          </p>
        </div>

        <div class="about-portrait-col">
          <div class="about-photo-card">
            <img src="images/about_portrait.jpg" alt="Anifowoshe Olamide" loading="lazy" />
          </div>
          <div class="about-portrait-meta">
            <div class="portrait-badge">
              <span class="portrait-dot"></span>
              <span>Lagos, Nigeria &middot; WAT (UTC+1)</span>
            </div>
            <p class="portrait-note">Available for full-time backend roles &amp; contracts</p>
          </div>
        </div>
      </div>

      <div class="about-divider"></div>

      ${renderSkillsSection()}

      <div class="about-divider"></div>

      ${renderEducationBlock()}

      <div class="page-ctas">
        <a href="#/projects" class="btn btn-primary">See What I've Built &rarr;</a>
        <a href="#/contact" class="btn btn-ghost">Get In Touch &rarr;</a>
      </div>
    </div>

    ${renderFooter()}
  `;
}

/* ─── 3. DEDICATED EXPERIENCE PAGE TEMPLATE (#/experience) ── */

export function renderExperiencePageTemplate() {
  return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">CAREER &amp; TRACK RECORD</span>
        <h1 class="page-title">Experience &amp; Leadership</h1>
        <p class="page-subtitle">
          Engineering high-concurrency APIs, hackathon-winning architectures, and production systems.
        </p>
      </header>

      <div class="exp-list">
        ${EXPERIENCE.map(item => `
          <div class="exp-item">
            <div class="exp-left">
              <span class="exp-org">${item.org}</span>
              <span class="exp-role">${item.role}</span>
              <span class="exp-status ${item.status === 'ACTIVE' ? 'active' : 'complete'}">
                <span class="exp-status-dot"></span>
                ${item.status === 'ACTIVE' ? 'Present' : item.status}
              </span>
            </div>
            <span class="exp-dates">${item.dates}</span>
            <ul class="exp-bullets">
              ${item.items.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="about-divider"></div>

      ${renderEducationBlock()}

      <div class="page-ctas">
        <a href="#/projects" class="btn btn-primary">Explore Project Details &rarr;</a>
        <a href="#/contact" class="btn btn-ghost">Contact Me &rarr;</a>
      </div>
    </div>

    ${renderFooter()}
  `;
}

/* ─── 4. DEDICATED PROJECTS PAGE TEMPLATE (#/projects) ──── */

export function renderProjectsPageTemplate(activeFilter = 'All') {
  const flagship = PROJECTS['lagoscp'];
  const restSlugs = PROJECT_ORDER.filter(slug => slug !== 'lagoscp');
  const restProjects = restSlugs.map(slug => PROJECTS[slug]).filter(p => !p.inProgress);
  const inProgressProjects = restSlugs.map(slug => PROJECTS[slug]).filter(p => p.inProgress);

  const filtered = activeFilter === 'All'
    ? restProjects
    : restProjects.filter(p => p.category === activeFilter || p.tech.includes(activeFilter));

  const filteredInProgress = activeFilter === 'All'
    ? inProgressProjects
    : inProgressProjects.filter(p => p.category === activeFilter || p.tech.includes(activeFilter));

  const showFlagship = activeFilter === 'All' || activeFilter === 'Django REST';

  return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">PORTFOLIO OF WORK</span>
        <h1 class="page-title">Projects &amp; Systems Architecture</h1>
        <p class="page-subtitle">
          Deep dives into production APIs, escrow transaction engines, biometric verification backends, and fullstack platforms.
        </p>
      </header>

      <div class="filter-row" id="projectFilter">
        <button class="filter-btn ${activeFilter === 'All' ? 'active' : ''}" data-filter="All">All</button>
        <button class="filter-btn ${activeFilter === 'Django REST' ? 'active' : ''}" data-filter="Django REST">Django REST</button>
        <button class="filter-btn ${activeFilter === 'Django Fullstack' ? 'active' : ''}" data-filter="Django Fullstack">Django Fullstack</button>
      </div>

      ${showFlagship ? renderFeaturedCard(flagship) : ''}

      <div class="project-grid" id="projectGrid" style="margin-top: 36px;">
        ${filtered.map(p => renderProjectCard(p)).join('')}
      </div>

      ${filteredInProgress.length > 0 ? `
        <div style="margin-top: 64px;">
          <p class="section-sublabel">In Active Development</p>
          <div class="project-grid">
            ${filteredInProgress.map(p => renderProjectCard(p)).join('')}
          </div>
        </div>
      ` : ''}
    </div>

    ${renderFooter()}
  `;
}

/* ─── 5. DEDICATED CONTACT PAGE TEMPLATE (#/contact) ────── */

export function renderContactPageTemplate() {
  return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">LET'S CONNECT</span>
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Have an engineering challenge, an open backend role, or a project in mind? I'd love to hear from you.
        </p>
      </header>

      <div class="contact-cards-grid">
        <div class="contact-card">
          <span class="contact-card-label">Direct Email</span>
          <a class="contact-card-val" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
          <button id="copyEmailBtn" class="contact-copy-btn" type="button" data-email="${PROFILE.email}">
            Copy Email
          </button>
        </div>

        <div class="contact-card">
          <span class="contact-card-label">Phone &amp; WhatsApp</span>
          <a class="contact-card-val" href="tel:${PROFILE.phone}">${PROFILE.phone}</a>
          <span class="contact-card-hint">Available for calls &amp; WhatsApp</span>
        </div>

        <div class="contact-card">
          <span class="contact-card-label">Location &amp; Timezone</span>
          <p class="contact-card-val">Lagos, Nigeria</p>
          <span class="contact-card-hint">WAT (UTC+1) &middot; Remote Worldwide</span>
        </div>

        <div class="contact-card">
          <span class="contact-card-label">Engineering Profiles</span>
          <div class="contact-links-row">
            <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
            <span>&middot;</span>
            <a href="https://www.linkedin.com/in/anifowoshe-olamide" target="_blank" rel="noopener">LinkedIn</a>
          </div>
          <span class="contact-card-hint">Open-source &amp; professional updates</span>
        </div>
      </div>

      <!-- Interactive Contact Message Form -->
      <div class="contact-form-block">
        <h3 class="contact-form-title">Send a Direct Message</h3>
        <p class="contact-form-desc">
          Drop your details and project overview below. This will prepare a direct email to my inbox.
        </p>

        <form id="contactForm" class="contact-form" onsubmit="return false;">
          <div class="form-row">
            <div class="form-group">
              <label for="contactName">Your Name</label>
              <input type="text" id="contactName" name="name" placeholder="Alex Rivers" required />
            </div>
            <div class="form-group">
              <label for="contactEmail">Your Email</label>
              <input type="email" id="contactEmail" name="email" placeholder="alex@company.com" required />
            </div>
          </div>

          <div class="form-group">
            <label for="contactSubject">Subject</label>
            <input type="text" id="contactSubject" name="subject" placeholder="Backend Engineer Role / Project Consultation" required />
          </div>

          <div class="form-group">
            <label for="contactMessage">Message</label>
            <textarea id="contactMessage" name="message" rows="5" placeholder="Tell me about your team, system requirements, or project scope..." required></textarea>
          </div>

          <div class="form-submit-row">
            <button type="submit" class="btn btn-primary" id="sendMessageBtn">
              Send Message &rarr;
            </button>
            <span id="formFeedback" class="form-feedback"></span>
          </div>
        </form>
      </div>
    </div>

    ${renderFooter()}
  `;
}

/* ─── 6. PROJECT DETAIL PAGE TEMPLATE ───────────────────── */

function renderDetailSection(s) {
  const flowHTML = s.flow ? `
    <div class="flow">
      ${s.flow.map((f, i) => `
        <span class="flow-step"><span class="flow-dot ${f.dot}"></span>${f.label}</span>
        ${i < s.flow.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
      `).join('')}
    </div>
    ${s.flowCaption ? `<p class="flow-caption">${s.flowCaption}</p>` : ''}
  ` : '';

  const itemsHTML = s.items ? `
    <ul class="detail-list">
      ${s.items.map(i => `<li>${i}</li>`).join('')}
    </ul>
  ` : '';

  return `
    <div class="detail-section">
      <h2>${s.h}</h2>
      ${s.p ? `<p>${s.p}</p>` : ''}
      ${flowHTML}
      ${itemsHTML}
    </div>
  `;
}

export function renderProjectDetailTemplate(p) {
  const statusClass = p.status ? p.status.cls : '';
  const statusPill = p.status ? `
    <span class="detail-pill ${statusClass}">
      <span class="detail-pill-dot"></span>
      ${p.status.label}
    </span>
  ` : '';

  const endpointPill = p.endpoint ? `
    <span class="detail-pill">
      <span class="detail-pill-dot" style="background:var(--status-active)"></span>
      ${p.httpMethod || 'GET'} ${p.endpoint}
    </span>
  ` : '';

  return `
    <div class="detail-wrap wrap fade-in">
      <a class="back-link" href="#/projects">
        <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        Back to projects
      </a>

      <div class="detail-head">
        <h1>${p.title} <span style="color:var(--text-faint); font-weight:400">— ${p.subtitle}</span></h1>
        <p class="detail-tagline">${p.tagline}</p>
        <div class="detail-meta">
          ${statusPill}
          ${endpointPill}
        </div>
        <p class="detail-overview">${p.overview}</p>
      </div>

      ${p.gallery ? `
        <div class="detail-section">
          <h2>System Previews</h2>
          <div class="project-gallery">
            ${p.gallery.map(img => `
              <div class="gallery-card">
                <div class="gallery-img-wrap">
                  <img src="${img.src}" alt="${img.caption}" loading="lazy" />
                </div>
                <div class="gallery-caption">${img.caption}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${p.sections.map(renderDetailSection).join('')}

      <div class="tech-block">
        <h2>Tech Stack</h2>
        <div class="tech-tags">${techTags(p.tech)}</div>
        <div class="detail-links">
          ${p.github ? `<a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">View Source</a>` : ''}
          <a class="btn btn-ghost" href="#/projects">← All Projects</a>
          <a class="btn btn-ghost" href="#/">← Home</a>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;
}
