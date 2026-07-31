// =============================================================
// ChatGPT — Remielle the Widget · chatgpt.com
// =============================================================

// --- Widget size (persisted across sessions) ---
const SIZE_KEY  = 'remielle-size-chatgpt';
const SIZE_MIN  = 60;
const SIZE_MAX  = 220;
const SIZE_STEP = 12;
let widgetSize  = Math.min(SIZE_MAX, Math.max(SIZE_MIN,
  parseInt(localStorage.getItem(SIZE_KEY) || '120', 10)
));

// --- Assets & States ---
const ASSETS = {
  WAITING:     chrome.runtime.getURL('assets/waiting_user_input.gif'),
  USER_TYPING: chrome.runtime.getURL('assets/user_typing.gif'),
  AI_THINKING: chrome.runtime.getURL('assets/ai_thingking.gif'),
  AI_TYPING:   chrome.runtime.getURL('assets/ai_typing.gif'),
  AI_COMPLETE: chrome.runtime.getURL('assets/ai_complete_answer.gif'),
};

const STATES = {
  WAITING:     'WAITING',
  USER_TYPING: 'USER_TYPING',
  AI_THINKING: 'AI_THINKING',
  AI_TYPING:   'AI_TYPING',
  AI_COMPLETE: 'AI_COMPLETE',
};

// --- Runtime state ---
let currentState = STATES.WAITING;
let widgetImg    = null;
let aiObserver   = null;
let typingTimeout = null;
let isObserving  = false;
let dragMoved    = false; // distinguish click from drag-end


// =============================================================
// Widget UI
// =============================================================

function createWidget() {
  if (document.getElementById('gptielle-widget-container')) return;

  const container = document.createElement('div');
  container.id = 'gptielle-widget-container';

  widgetImg = document.createElement('img');
  widgetImg.src = ASSETS.WAITING;
  widgetImg.alt = 'Remielle - AI Status';
  widgetImg.draggable = false;

  container.appendChild(widgetImg);
  document.body.appendChild(container);

  // Apply saved size
  applySize(container);

  makeDraggable(container);
  setupScrollResize(container);
  setupClickInteraction(container);
}

function applySize(container) {
  container.style.width  = `${widgetSize}px`;
  container.style.height = `${widgetSize}px`;
}

// ── Scroll-to-resize ─────────────────────────────────────────
function setupScrollResize(container) {
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    e.stopPropagation();
    widgetSize += e.deltaY < 0 ? SIZE_STEP : -SIZE_STEP;
    widgetSize  = Math.max(SIZE_MIN, Math.min(SIZE_MAX, widgetSize));
    applySize(container);
    localStorage.setItem(SIZE_KEY, widgetSize);
  }, { passive: false });
}

// ── Click: zoom burst + cherry blossoms ──────────────────────
function setupClickInteraction(container) {
  container.addEventListener('click', () => {
    if (dragMoved) return; // ignore accidental click after drag

    // Gentle zoom-out pop
    container.style.transition = 'transform 0.12s ease-out';
    container.style.transform  = 'scale(1.22)';
    setTimeout(() => {
      container.style.transition = 'transform 0.18s ease-in';
      container.style.transform  = 'scale(1)';
    }, 130);

    // Sakura burst
    const rect = container.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const count = 14;
    for (let i = 0; i < count; i++) {
      setTimeout(() => spawnPetal(cx, cy), i * 25);
    }
  });
}

// ── Cherry blossom particle ───────────────────────────────────
function spawnPetal(cx, cy) {
  const el = document.createElement('div');

  // Spawn in a ring around the widget center
  const angle  = Math.random() * Math.PI * 2;
  const radius = widgetSize * 0.35 + Math.random() * widgetSize * 0.25;
  const x0 = cx + Math.cos(angle) * radius;
  const y0 = cy + Math.sin(angle) * radius;

  // Physics
  const driftX   = (Math.random() - 0.5) * 90;
  const driftY   = 55 + Math.random() * 80;
  const rotate   = (Math.random() - 0.5) * 600;
  const size     = 7 + Math.random() * 9;   // px
  const duration = 1100 + Math.random() * 900; // ms
  const hue      = 335 + Math.random() * 25;   // pink range
  const sat      = 65 + Math.random() * 20;
  const lit      = 78 + Math.random() * 14;

  Object.assign(el.style, {
    position:     'fixed',
    left:         `${x0}px`,
    top:          `${y0}px`,
    width:        `${size}px`,
    height:       `${size * 0.72}px`,
    borderRadius: '60% 40% 60% 40% / 50% 50% 50% 50%',
    background:   `hsl(${hue}deg ${sat}% ${lit}%)`,
    boxShadow:    `0 0 ${size * 0.4}px hsl(${hue}deg ${sat}% ${lit}% / 0.5)`,
    opacity:      '0.95',
    zIndex:       '2147483647',
    pointerEvents:'none',
    transform:    'translate(-50%,-50%)',
    willChange:   'transform, opacity',
    transition:   `transform ${duration}ms cubic-bezier(0.2,0,0.4,1),
                   left      ${duration}ms cubic-bezier(0.2,0,0.4,1),
                   top       ${duration}ms cubic-bezier(0.2,0,0.4,1),
                   opacity   ${duration * 0.6}ms ease ${duration * 0.4}ms`,
  });

  document.body.appendChild(el);

  // Trigger movement (double-rAF ensures transition fires)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.left    = `${x0 + driftX}px`;
    el.style.top     = `${y0 + driftY}px`;
    el.style.opacity = '0';
    el.style.transform = `translate(-50%,-50%) rotate(${rotate}deg) scale(0.4)`;
  }));

  setTimeout(() => el.remove(), duration + 50);
}

function makeDraggable(container) {
  let isDragging = false;
  let startX = 0, startY = 0;
  let initLeft = 0, initTop = 0;

  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    dragMoved  = false; // reset for click detection
    container.classList.add('dragging');

    const rect = container.getBoundingClientRect();
    initLeft = rect.left;
    initTop  = rect.top;

    container.style.bottom = 'auto';
    container.style.right  = 'auto';
    container.style.left   = `${initLeft}px`;
    container.style.top    = `${initTop}px`;

    startX = e.clientX;
    startY = e.clientY;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    dragMoved = true;
    const newLeft = Math.max(0, Math.min(initLeft + (e.clientX - startX), window.innerWidth  - container.offsetWidth));
    const newTop  = Math.max(0, Math.min(initTop  + (e.clientY - startY), window.innerHeight - container.offsetHeight));
    container.style.left = `${newLeft}px`;
    container.style.top  = `${newTop}px`;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('dragging');
    }
  });
}

function setState(newState) {
  if (currentState === newState) return;
  currentState = newState;
  if (widgetImg) widgetImg.src = ASSETS[newState];
}


// =============================================================
// ChatGPT-specific DOM helpers & State Machine
// =============================================================

function isChatGPTGenerating() {
  return !!(
    document.querySelector('button[data-testid="stop-button"]') ||
    document.querySelector('button[aria-label*="Stop" i]') ||
    document.querySelector('[data-is-streaming="true"]')
  );
}

// Returns 'thinking', 'response', or false
function inspectChatGPTState(el) {
  if (!el) return false;

  // 1. Thinking / reasoning block (o1 / o3 reasoning models)
  const inReasoning = el.closest(
    '[data-testid="reasoning-block"], .reasoning-block, [data-is-thinking="true"], details'
  );
  if (inReasoning) return 'thinking';

  // 2. Assistant turn / response markdown container
  const inAssistant = el.closest(
    '[data-message-author-role="assistant"], .markdown, .prose, [data-is-streaming="true"], article'
  );
  if (inAssistant) return 'response';

  return false;
}

function getMutationTargetElement(mutation) {
  if (mutation.type === 'characterData') {
    return mutation.target.parentElement || mutation.target;
  }
  if (mutation.type === 'childList') {
    return mutation.target;
  }
  return null;
}


// =============================================================
// AI typing detection (MutationObserver + Polling Safety Net)
// =============================================================

function startAIObserver() {
  if (isObserving) return;
  isObserving = true;

  const root = document.querySelector('main') ||
               document.querySelector('[role="main"]') ||
               document.body;

  aiObserver = new MutationObserver((mutations) => {
    let hasReasoning = false;
    let hasResponseText = false;

    for (const m of mutations) {
      const el = getMutationTargetElement(m);
      if (!el) continue;

      const stateType = inspectChatGPTState(el);
      if (stateType === 'thinking') {
        hasReasoning = true;
      } else if (stateType === 'response') {
        const txt = (el.textContent || '').trim();
        if (txt.length > 0) {
          hasResponseText = true;
        }
      }
    }

    // --- State Transitions ---
    if (hasResponseText) {
      if (currentState !== STATES.AI_TYPING) {
        setState(STATES.AI_TYPING);
      }
    } else if (hasReasoning && currentState !== STATES.AI_TYPING) {
      if (currentState !== STATES.AI_THINKING) {
        setState(STATES.AI_THINKING);
      }
    }

    // Debounce completion check
    if (currentState === STATES.AI_TYPING || currentState === STATES.AI_THINKING) {
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        if (!isChatGPTGenerating()) {
          setState(STATES.AI_COMPLETE);
          stopAIObserver();
          scheduleReset();
        }
      }, 1200);
    }
  });

  aiObserver.observe(root, { childList: true, characterData: true, subtree: true });

  // Safety fallback timeout: 2 minutes max
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    if (currentState === STATES.AI_THINKING || currentState === STATES.AI_TYPING) {
      if (!isChatGPTGenerating()) {
        setState(STATES.AI_COMPLETE);
        stopAIObserver();
        scheduleReset();
      }
    }
  }, 120_000);
}

function stopAIObserver() {
  if (aiObserver) {
    aiObserver.disconnect();
    aiObserver = null;
  }
  isObserving = false;
  clearTimeout(typingTimeout);
}

function scheduleReset() {
  setTimeout(() => {
    if (currentState === STATES.AI_COMPLETE) setState(STATES.WAITING);
  }, 3000);
}


// =============================================================
// User interaction detection & Polling Safety Net
// =============================================================

function getInputEl() {
  return document.querySelector(
    '#prompt-textarea[contenteditable], ' +
    '.ProseMirror[contenteditable="true"], ' +
    'div[contenteditable="true"], ' +
    'textarea'
  );
}

function handleInputEvent(target) {
  if (!target) return;
  if (!target.isContentEditable && target.tagName !== 'TEXTAREA' && target.tagName !== 'INPUT') return;

  const text = (target.textContent || target.value || '').trim();
  const aiActive = currentState === STATES.AI_THINKING || currentState === STATES.AI_TYPING;
  if (aiActive) return;

  setState(text.length > 0 ? STATES.USER_TYPING : STATES.WAITING);
}

function onSubmit() {
  setState(STATES.AI_THINKING);
  startAIObserver();
}

function setupUserDetection() {
  // Text input / deletion
  document.addEventListener('input', (e) => handleInputEvent(e.target), true);
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Backspace' || e.key === 'Delete') handleInputEvent(e.target);
  }, true);

  // Enter key — ChatGPT sends on plain Enter (Shift+Enter = newline)
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.shiftKey) return;
    const t = e.target;
    if (!t.isContentEditable && t.tagName !== 'TEXTAREA') return;
    const text = (t.textContent || t.value || '').trim();
    if (text.length > 0) onSubmit();
  }, true);

  // Send button click
  document.addEventListener('click', (e) => {
    let el = e.target;
    while (el && el !== document.body) {
      const isSend =
        el.matches?.('button[data-testid="send-button"]') ||
        (el.tagName === 'BUTTON' && (el.getAttribute('aria-label') || '').toLowerCase().includes('send')) ||
        el.type === 'submit';

      if (isSend) {
        onSubmit();
        break;
      }
      el = el.parentElement;
    }
  }, true);

  // Polling Safety Net: Check generation state every 500ms
  setInterval(() => {
    const generating = isChatGPTGenerating();

    if (generating) {
      if (currentState === STATES.WAITING || currentState === STATES.USER_TYPING) {
        onSubmit();
      }
    } else if (currentState === STATES.AI_TYPING || currentState === STATES.AI_THINKING) {
      // Stop button disappeared -> trigger AI_COMPLETE
      setTimeout(() => {
        if (!isChatGPTGenerating() && (currentState === STATES.AI_TYPING || currentState === STATES.AI_THINKING)) {
          setState(STATES.AI_COMPLETE);
          stopAIObserver();
          scheduleReset();
        }
      }, 400);
    }
  }, 500);
}


// =============================================================
// SPA navigation: ChatGPT changes chats without full reload
// =============================================================

let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    stopAIObserver();
    currentState = STATES.WAITING;
    if (widgetImg) widgetImg.src = ASSETS.WAITING;
  }
}).observe(document, { subtree: true, childList: true });


// =============================================================
// Boot
// =============================================================

function boot() {
  createWidget();
  setupUserDetection();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
