// Inject LCARS theme CSS directly into head (bypasses Next.js overrides)
const injectLCARSCSS = () => {
  if (document.getElementById('lcars-theme')) return; // Only inject once
  
  const style = document.createElement('style');
  style.id = 'lcars-theme';
  style.textContent = `
    html, body {
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important;
      background-attachment: fixed !important;
    }
    * {
      background-color: transparent !important;
    }
    body > div, body > main {
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important;
    }
    a:hover {
      text-shadow: 0 0 10px #FF6600 !important;
    }
  `;
  document.head.appendChild(style);
};

// Inject before anything loads
injectLCARSCSS();

// Re-inject if removed
setInterval(() => {
  if (!document.getElementById('lcars-theme')) {
    injectLCARSCSS();
  }
}, 500);
