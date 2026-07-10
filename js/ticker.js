/**
 * OLAMIDE ANIFOWOSHE — LIVE SERVER LOG TICKER (#4)
 * Collapsible bottom dock streaming realistic backend telemetry log events
 */

const SIMULATED_LOG_MESSAGES = [
  { level: "INFO", source: "Auth.SimpleJWT", msg: "Token verified & refreshed for user_session=usr_88a9 (scope: api_access)" },
  { level: "LOCK", source: "RideShare.Escrow", msg: "Acquired atomic SELECT FOR UPDATE lock on Wallet#4012 (balance verified)" },
  { level: "DEBUG", source: "PetrolLink.Detection", msg: "Telemetry frame #9412 analyzed: dP=0.1 PSI -> STATUS_NORMAL" },
  { level: "QUERY", source: "LagosCP.Biometrics", msg: "Face++ embedding vector matched against enrolled subject (score=0.984)" },
  { level: "INFO", source: "Tidal.Celery", msg: "Background OCR worker processed handwriting canvas submission_id=sub_7109 in 138ms" },
  { level: "LOCK", source: "PostgreSQL.Tx", msg: "Committed atomic transaction block tx_id=990142 -> 0 anomalies" },
  { level: "ALERT", source: "PetrolLink.Brain", msg: "Stochastic noise injected into simulation.py sensor stream delta=+0.03 PSI" },
  { level: "INFO", source: "Ndara.ai.Webhook", msg: "WhatsApp automated message event dispatched cleanly (200 OK)" },
  { level: "DEBUG", source: "API.RateLimiter", msg: "Rate limit pool replenished for client_ip=102.89.*.* (98/100 remaining)" },
  { level: "QUERY", source: "DB.ConnectionPool", msg: "Active PostgreSQL connection pool status: 8 busy, 12 idle -> HEALTHY" }
];

export function initServerLogTicker() {
  const tickerEl = document.getElementById('serverLogTicker');
  if (!tickerEl) return;

  tickerEl.innerHTML = `
    <div class="ticker-header-row" id="tickerHeader">
      <div class="ticker-label-left">
        <span class="dot dot-http200"></span>
        <span>SYS.LOGS // BACKEND EVENT STREAM</span>
      </div>
      <div class="ticker-live-stream" id="tickerLiveStream">
        [SYS.BOOT] Initializing background telemetry and transaction stream...
      </div>
      <button class="ticker-toggle-btn" id="tickerToggleBtn">[ ▲ EXPAND ]</button>
    </div>
    <div class="ticker-expanded-logs" id="tickerExpandedLogs"></div>
  `;

  const headerEl = document.getElementById('tickerHeader');
  const toggleBtn = document.getElementById('tickerToggleBtn');
  const liveStreamEl = document.getElementById('tickerLiveStream');
  const expandedLogsEl = document.getElementById('tickerExpandedLogs');

  let expanded = false;

  const toggleDock = () => {
    expanded = !expanded;
    tickerEl.classList.toggle('expanded', expanded);
    if (toggleBtn) {
      toggleBtn.textContent = expanded ? '[ ▼ MINIMIZE ]' : '[ ▲ EXPAND ]';
    }
  };

  if (headerEl) {
    headerEl.addEventListener('click', toggleDock);
  }

  let logIndex = 0;

  const appendLogEntry = () => {
    const item = SIMULATED_LOG_MESSAGES[logIndex % SIMULATED_LOG_MESSAGES.length];
    logIndex++;

    const now = new Date();
    const timeStr = now.toISOString().split('T')[1].split('.')[0] + ' UTC';

    const logText = `[${timeStr}] [${item.level}] [${item.source}] ${item.msg}`;

    if (liveStreamEl) {
      liveStreamEl.textContent = logText;
    }

    if (expandedLogsEl) {
      const entryDiv = document.createElement('div');
      entryDiv.className = 'ticker-log-entry';
      entryDiv.innerHTML = `
        <span class="log-time">[${timeStr}]</span>
        <span class="log-level-${item.level}">[${item.level}]</span>
        <span style="color:var(--text-muted)">[${item.source}]</span>
        <span>${item.msg}</span>
      `;
      expandedLogsEl.appendChild(entryDiv);

      while (expandedLogsEl.children.length > 25) {
        expandedLogsEl.removeChild(expandedLogsEl.firstChild);
      }
      expandedLogsEl.scrollTop = expandedLogsEl.scrollHeight;
    }
  };

  // Seed first 4 log entries immediately
  for (let i = 0; i < 4; i++) {
    appendLogEntry();
  }

  // Tick every 3.8 seconds
  setInterval(appendLogEntry, 3800);
}
