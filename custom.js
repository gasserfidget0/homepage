const injectLCARSTheme = () => {
  if (document.getElementById('lcars-injected')) return;
  
  const style = document.createElement('style');
  style.id = 'lcars-injected';
  style.textContent = `
    :root {
      --lcars-primary: #FF6600 !important;
      --lcars-secondary: #0099FF !important;
      --lcars-dark: #000000 !important;
      --lcars-accent: #FFCC00 !important;
      --lcars-text: #CCCCCC !important;
    }

    html, body {
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important;
      color: var(--lcars-text) !important;
    }

    body {
      background-attachment: fixed !important;
    }

    .header, .card, [class*="card"], [class*="header"] {
      background: linear-gradient(90deg, var(--lcars-primary) 0%, var(--lcars-secondary) 100%) !important;
      border: 2px solid var(--lcars-primary) !important;
    }

    a {
      color: var(--lcars-secondary) !important;
    }

    a:hover {
      color: var(--lcars-accent) !important;
      text-shadow: 0 0 10px var(--lcars-primary) !important;
    }
  `;
  document.head.appendChild(style);
};

injectLCARSTheme();
setInterval(() => {
  if (!document.getElementById('lcars-injected')) {
    injectLCARSTheme();
  }
}, 1000);
