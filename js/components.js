/**
 * OLAMIDE ANIFOWOSHE — PORTFOLIO UI COMPONENTS
 * Modular renderer functions with backend aesthetic and subtle animations
 */

import {
  PROFILE,
  TELEMETRY_METADATA,
  SKILL_GROUPS,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  PROJECT_ORDER
} from './data.js';

import { getLangDict } from './i18n.js';

export function renderPill(label, state = 'active') {
  return `<span class="pill pill-${state}"><span class="dot dot-${state}"></span>${label}</span>`;
}

export function renderTagList(arr, cls = 'tag') {
  return arr.map(t => `<span class="${cls}">${t}</span>`).join('');
}

export function renderTelemetryBar() {
  return `
    <div class="telemetry-row">
      <div class="telemetry-item">
        <span>SYS.STATUS:</span>
        <span class="highlight" style="color:var(--state-http200)">● ${TELEMETRY_METADATA.status}</span>
      </div>
      <div class="telemetry-item telemetry-hide-mobile">
        <span>ENV:</span>
        <span class="highlight">${TELEMETRY_METADATA.environment}</span>
      </div>
      <div class="telemetry-item telemetry-hide-mobile">
        <span>REGION:</span>
        <span class="highlight">${TELEMETRY_METADATA.region}</span>
      </div>
      <div class="telemetry-item">
        <span>UTC CLOCK:</span>
        <span class="highlight" id="liveClock">--:--:-- UTC</span>
      </div>
    </div>
  `;
}

export function renderProjectFlagship(p, t) {
  return `
    <a class="project-flagship fade-in" href="#/project/${p.slug}">
      <div class="flag-row">
        <span class="flag-tag">${t ? t.projects.flagshipBadge : '★ FLAGSHIP SYSTEM ARCHITECTURE'}</span>
        <span class="api-endpoint"><span class="api-method">${p.httpMethod || 'GET'}</span>${p.endpoint || '/api/v1/' + p.slug} • 200 OK</span>
      </div>
      <h3>${p.title} — ${p.subtitle}</h3>
      <p>${p.tagline}</p>
      <div class="card-tags">${renderTagList(p.tech.slice(0, 6))}</div>
      <span class="card-link">${t ? t.projects.exploreCard : 'Explore Architecture & Docs →'}</span>
    </a>
  `;
}

export function renderProjectCard(p, t) {
  return `
    <a class="project-card fade-in" href="#/project/${p.slug}" data-category="${p.category || 'All'}">
      <div class="project-card-top">
        <span class="api-endpoint"><span class="api-method">${p.httpMethod || 'GET'}</span>${p.endpoint || '/api/v1/' + p.slug}</span>
        <h4>${p.title} — <span style="font-weight:400; color:var(--text-muted)">${p.subtitle}</span></h4>
        <p>${p.tagline}</p>
      </div>
      <div>
        <div class="card-tags">
          ${p.gallery ? `<span class="tag" style="border-color:var(--accent); color:var(--accent)">📷 ${p.gallery.length} UI Previews</span>` : ''}
          ${renderTagList(p.tech.slice(0, 4))}
        </div>
        <span class="card-link">${t ? t.projects.viewCard : 'View system details →'}</span>
      </div>
    </a>
  `;
}

export function renderSkillsSection(t) {
  return `
    <section id="skills" class="wrap">
      <div class="eyebrow">${t ? t.skills.eyebrow : '~/skills'} <span class="cursor-blink"></span></div>
      <h2 class="section-title">${t ? t.skills.title : 'Backend Architecture & Tech Stack'}</h2>
      <div class="skills-grid">
        ${SKILL_GROUPS.map(group => `
          <div class="skill-card">
            <h3><span>[${group.icon}]</span> ${group.title}</h3>
            <div class="skill-tags">${renderTagList(group.skills)}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

export function renderExperienceSection(t) {
  return `
    <section id="experience" class="wrap">
      <div class="eyebrow">${t ? t.experience.eyebrow : '~/experience'} <span class="cursor-blink"></span></div>
      <h2 class="section-title">${t ? t.experience.title : 'Experience & Education'}</h2>
      
      <div class="timeline" style="margin-bottom:44px;">
        ${EXPERIENCE.map(item => `
          <div class="t-item">
            <div class="t-head">
              <span class="t-role">${item.role}</span>
              <span class="t-org">${item.org}</span>
              <span class="t-dates">${item.dates}</span>
            </div>
            ${renderPill(item.status, 'active')}
            <ul class="t-list">
              ${item.items.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="eyebrow" style="margin-top:40px;">${t ? t.experience.eduEyebrow : '~/education'}</div>
      <div class="timeline">
        ${EDUCATION.map(item => `
          <div class="t-item">
            <div class="t-head">
              <span class="t-role">${item.role}</span>
              <span class="t-org">${item.org}</span>
              <span class="t-dates">${item.dates}</span>
            </div>
            ${renderPill(item.status, 'complete')}
            ${item.note ? `<p class="t-note">${item.note}</p>` : ''}
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

export function renderHomeTemplate(activeFilter = 'All', langCode = 'en') {
  const t = getLangDict(langCode);
  const flagship = PROJECTS['lagoscp'];
  const restSlugs = PROJECT_ORDER.filter(slug => slug !== 'lagoscp');
  const restProjects = restSlugs.map(slug => PROJECTS[slug]);

  const filteredProjects = activeFilter === 'All' 
    ? restProjects 
    : restProjects.filter(p => p.category === activeFilter || p.tech.includes(activeFilter));

  return `
    <section id="home-hero" class="wrap">
      <div class="hero-eyebrow">~/home <span class="cursor-blink"></span></div>
      <h1 class="hero-name">${PROFILE.name}</h1>
      <p class="hero-role">
        ${t.hero.roleHeadline}
      </p>
      <div class="hero-pills">
        ${renderPill(t.hero.pills[0], 'active')}
        ${renderPill(t.hero.pills[1], 'complete')}
        ${renderPill(t.hero.pills[2], 'http200')}
      </div>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#/project/lagoscp">${t.hero.exploreFlagship}</a>
        <a class="btn btn-ghost" href="#projects">${t.hero.allSystems}</a>
        <a class="btn btn-ghost" href="mailto:${PROFILE.email}">${t.hero.emailMe}</a>
      </div>
    </section>

    <section id="about" class="wrap">
      <div class="eyebrow">${t.about.eyebrow}</div>
      <h2 class="section-title">${t.about.title}</h2>
      <div class="about-grid">
        <div class="about-body">
          ${t.about.paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="backend-terminal-card">
          <div class="terminal-header">
            <span>bash — olamide@backend-node: ~</span>
            <div class="terminal-dots">
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
            </div>
          </div>
          <div class="terminal-body">
            ${PROFILE.terminalStats.map(stat => `
              <div class="terminal-line">
                <span class="terminal-prompt">${stat.prompt}</span>
              </div>
              <div class="terminal-line" style="margin-bottom:12px;">
                <span class="terminal-val">> ${stat.val}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    ${renderSkillsSection(t)}

    ${renderExperienceSection(t)}

    <section id="projects" class="wrap">
      <div class="projects-header-row">
        <div>
          <div class="eyebrow">${t.projects.eyebrow} <span class="cursor-blink"></span></div>
          <h2 class="section-title">${t.projects.title}</h2>
        </div>
        <div class="filter-pills" id="projectFilter">
          <button class="filter-btn ${activeFilter === 'All' ? 'active' : ''}" data-filter="All">${t.projects.filterAll}</button>
          <button class="filter-btn ${activeFilter === 'Django REST' ? 'active' : ''}" data-filter="Django REST">${t.projects.filterRest}</button>
          <button class="filter-btn ${activeFilter === 'Django Fullstack' ? 'active' : ''}" data-filter="Django Fullstack">${t.projects.filterFullstack}</button>
        </div>
      </div>

      ${activeFilter === 'All' || activeFilter === 'Django REST' ? renderProjectFlagship(flagship, t) : ''}

      <div class="project-grid" id="projectGrid">
        ${filteredProjects.map(p => renderProjectCard(p, t)).join('')}
      </div>
    </section>

    <section id="contact" class="wrap">
      <div class="eyebrow">${t.contact.eyebrow} <span class="cursor-blink"></span></div>
      <h2 class="section-title">${t.contact.title}</h2>
      <div class="contact-row">
        <div class="contact-item">
          <span>${t.contact.directEmail}</span>
          <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
        </div>
        <div class="contact-item">
          <span>${t.contact.telephone}</span>
          <p>${PROFILE.phone}</p>
        </div>
        <div class="contact-item">
          <span>${t.contact.githubArchives}</span>
          <a href="${PROFILE.github}" target="_blank" rel="noopener">github.com/Anifowoseolamide</a>
        </div>
      </div>
    </section>

    <footer class="wrap">
      <span>${t.footer.copyright}</span>
      <span>${t.footer.tagline}</span>
    </footer>
  `;
}

function renderDetailSectionHTML(s) {
  const flowHTML = s.flow ? `
    <div class="flow">
      ${s.flow.map((f, i) => `
        <span class="flow-step"><span class="dot dot-${f.dot}"></span>${f.label}</span>
        ${i < s.flow.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
      `).join('')}
    </div>
    <p class="flow-caption">${s.flowCaption || ''}</p>
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

export function renderProjectDetailTemplate(p, langCode = 'en') {
  const t = getLangDict(langCode);
  const statusPill = p.status ? renderPill(p.status.label, p.status.cls) : '';
  const endpointPill = p.endpoint ? `<span class="pill pill-http200"><span class="dot dot-http200"></span>${p.httpMethod || 'GET'} ${p.endpoint}</span>` : '';

  return `
    <div class="wrap fade-in">
      <a class="back-link" href="#projects">${t.detail.returnLink}</a>
      <div class="detail-head">
        <h1>${p.title} <span style="color:var(--text-faint); font-weight:400;">— ${p.subtitle}</span></h1>
        <p class="detail-tagline">${p.tagline}</p>
        <div class="detail-meta">
          ${statusPill}
          ${endpointPill}
        </div>
        <p class="detail-overview">${p.overview}</p>
      </div>

      ${p.gallery ? `
        <div class="detail-section">
          <h2>${t.detail.systemPreviewTitle}</h2>
          <div class="project-gallery">
            ${p.gallery.map(img => `
              <div class="gallery-card">
                <div class="gallery-img-wrap">
                  <img src="${img.src}" alt="${img.caption}" loading="lazy" />
                </div>
                <div class="gallery-caption">
                  <span>//</span> ${img.caption}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${p.sections.map(renderDetailSectionHTML).join('')}

      <div class="tech-block">
        <h2>${t.detail.techStackTitle}</h2>
        <div class="tech-tags">${renderTagList(p.tech)}</div>
        <div class="detail-links">
          ${p.github ? `<a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">${t.detail.viewSource}</a>` : ''}
          <a class="btn btn-ghost" href="#/">${t.detail.backToHome}</a>
        </div>
      </div>
    </div>

    <footer class="wrap">
      <span>${t.footer.copyright}</span>
      <span>${t.footer.tagline}</span>
    </footer>
  `;
}
