/**
 * OLAMIDE ANIFOWOSHE — INTERACTIVE FLOATING CLI TERMINAL (#3)
 * Interactive shell overlay supporting backend commands & JSON output
 */

import { PROFILE, SKILL_GROUPS, EXPERIENCE, EDUCATION, PROJECTS } from './data.js';

export function initInteractiveCLI() {
  const modalEl = document.getElementById('cliModal');
  const triggerBtn = document.getElementById('cliTriggerBtn');
  if (!modalEl || !triggerBtn) return;

  modalEl.innerHTML = `
    <div class="cli-window-header">
      <div class="cli-window-dots">
        <span class="terminal-dot"></span>
        <span class="terminal-dot"></span>
        <span class="terminal-dot"></span>
      </div>
      <span>bash — olamide@backend-node: ~</span>
      <button class="cli-close-btn" id="cliCloseBtn" aria-label="Close Terminal">✕</button>
    </div>
    <div class="cli-body" id="cliBody">
      <div class="cli-output-line system">ANIFOWOSHE OLAMIDE INTERACTIVE BACKEND SHELL v2026.4</div>
      <div class="cli-output-line system">Type <span style="color:var(--accent)">help</span> for available system commands or <span style="color:var(--accent)">cat resume.json</span> for full JSON profile.</div>
    </div>
    <div class="cli-input-row">
      <span class="cli-prompt">olamide@backend-node: ~$</span>
      <input type="text" class="cli-input" id="cliInput" autocomplete="off" spellcheck="false" placeholder="type 'help'..." />
    </div>
  `;

  const closeBtn = document.getElementById('cliCloseBtn');
  const bodyEl = document.getElementById('cliBody');
  const inputEl = document.getElementById('cliInput');

  let isOpen = false;
  const history = [];
  let historyIdx = -1;

  const toggleModal = (forceOpen) => {
    isOpen = forceOpen !== undefined ? forceOpen : !isOpen;
    modalEl.classList.toggle('open', isOpen);
    if (isOpen && inputEl) {
      setTimeout(() => inputEl.focus(), 50);
    }
  };

  triggerBtn.addEventListener('click', () => toggleModal());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleModal(false));

  // Global hotkey to open terminal (backtick / tilde or Ctrl+~)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleModal(false);
    } else if (e.key === '`' || (e.ctrlKey && e.key === '~')) {
      if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        toggleModal();
      }
    }
  });

  const printLine = (text, cls = '') => {
    if (!bodyEl) return;
    const line = document.createElement('div');
    line.className = 'cli-output-line ' + cls;
    line.innerHTML = text;
    bodyEl.appendChild(line);
    bodyEl.scrollTop = bodyEl.scrollHeight;
  };

  const handleCommand = (rawInput) => {
    const cmd = rawInput.trim();
    if (!cmd) return;

    printLine(`<span style="color:var(--accent)">olamide@backend-node: ~$</span> ${cmd}`);

    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      bodyEl.innerHTML = '';
      return;
    }

    if (lower === 'help') {
      printLine(`<strong>AVAILABLE SYSTEM COMMANDS:</strong>`);
      printLine(`  <span style="color:var(--accent)">whoami</span>          -> Print developer identity & role`);
      printLine(`  <span style="color:var(--accent)">cat resume.json</span> -> Output complete experience & profile as structured JSON`);
      printLine(`  <span style="color:var(--accent)">projects</span>        -> List engineered systems & REST endpoints`);
      printLine(`  <span style="color:var(--accent)">skills</span>          -> Display backend architecture skills & databases`);
      printLine(`  <span style="color:var(--accent)">status</span>          -> Run real-time backend diagnostics check`);
      printLine(`  <span style="color:var(--accent)">contact</span>         -> View direct email, phone, and GitHub archives`);
      printLine(`  <span style="color:var(--accent)">clear</span>           -> Clear console screen`);
      return;
    }

    if (lower === 'whoami') {
      printLine(`Anifowoshe Olamide — Backend Engineer (B.Sc. CS @ Lagos State University)`);
      printLine(`Specialties: API Design, Atomic Escrow Transactions, PostgreSQL Select For Update, AI Biometrics`);
      return;
    }

    if (lower === 'cat resume.json') {
      const resumeObj = {
        name: PROFILE.name,
        role: PROFILE.roleHeadline.replace(/<[^>]+>/g, ''),
        location: PROFILE.location,
        availability: PROFILE.availability,
        experience: EXPERIENCE.map(ex => ({ role: ex.role, org: ex.org, dates: ex.dates, highlights: ex.items })),
        education: EDUCATION.map(ed => ({ degree: ed.role, institution: ed.org, dates: ed.dates }))
      };
      printLine(JSON.stringify(resumeObj, null, 2), 'json');
      return;
    }

    if (lower === 'projects') {
      printLine(`<strong>ENGINEERED SYSTEMS & API ARCHITECTURES:</strong>`);
      Object.values(PROJECTS).forEach(p => {
        printLine(`  ● <span style="color:var(--accent)">${p.title}</span> [${p.httpMethod || 'GET'} ${p.endpoint || '/api/v1/' + p.slug}] — ${p.subtitle}`);
      });
      return;
    }

    if (lower === 'skills') {
      printLine(`<strong>TECHNICAL STACK & CORE ARCHITECTURE:</strong>`);
      SKILL_GROUPS.forEach(g => {
        printLine(`  [${g.icon}] ${g.title}: ${g.skills.join(', ')}`);
      });
      return;
    }

    if (lower === 'status') {
      printLine(`Running system health diagnostics...`);
      setTimeout(() => {
        printLine(`  [✔] PostgreSQL Connection Pool: ONLINE (0 deadlocks, atomic locking active)`, 'success');
        printLine(`  [✔] REST API Gateway Latency: 14ms average (200 OK)`, 'success');
        printLine(`  [✔] Celery Background Workers: 4 active runners`, 'success');
        printLine(`  [✔] PetrolLink Simulation Brain: Stochastic noise generation ACTIVE`, 'success');
      }, 200);
      return;
    }

    if (lower === 'contact') {
      printLine(`Email: <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>`);
      printLine(`Phone: ${PROFILE.phone}`);
      printLine(`GitHub: <a href="${PROFILE.github}" target="_blank" rel="noopener">${PROFILE.github}</a>`);
      return;
    }

    printLine(`Command not found: '<strong>${cmd}</strong>'. Type <span style="color:var(--accent)">help</span> for available commands.`, 'error');
  };

  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = inputEl.value;
        if (val.trim()) {
          history.push(val);
          historyIdx = history.length;
          handleCommand(val);
          inputEl.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (history.length > 0 && historyIdx > 0) {
          historyIdx--;
          inputEl.value = history[historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIdx < history.length - 1) {
          historyIdx++;
          inputEl.value = history[historyIdx];
        } else {
          historyIdx = history.length;
          inputEl.value = '';
        }
      }
    });
  }
}
