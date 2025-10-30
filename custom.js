// Inject enhanced LCARS CSS directly
const injectLCARSCSS = () => {
  if (document.getElementById('lcars-enhanced')) return;
  
  const style = document.createElement('style');
  style.id = 'lcars-enhanced';
  style.textContent = `
    :root {
      --lcars-orange: #FF6600;
      --lcars-blue: #0099FF;
      --lcars-yellow: #FFCC00;
    }

    /* Glowing borders on all cards */
    div[class*="card"], div[class*="service"], div[class*="bg"] {
      border-left: 4px solid #FF6600 !important;
      border-top: 2px solid #0099FF !important;
      box-shadow: 0 0 20px rgba(255, 102, 0, 0.4), inset 0 0 10px rgba(0, 0, 0, 0.8) !important;
    }

    /* Hover glow */
    div[class*="card"]:hover, div[class*="service"]:hover {
      box-shadow: 0 0 30px rgba(255, 102, 0, 0.7), 0 0 50px rgba(0, 153, 255, 0.4), inset 0 0 15px rgba(255, 102, 0, 0.2) !important;
    }

    /* Links */
    a {
      color: #0099FF !important;
      transition: all 0.3s;
    }

    a:hover {
      color: #FFCC00 !important;
      text-shadow: 0 0 20px #FF6600, 0 0 40px #0099FF !important;
    }

    /* Headers */
    h1, h2, h3, h4 {
      color: #FFCC00 !important;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 0 0 10px #FF6600 !important;
    }

    /* Tabs */
    [role="tab"] {
      border: 1px solid #0099FF !important;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    [role="tab"][aria-selected="true"] {
      background: linear-gradient(90deg, #FF6600, #0099FF) !important;
      color: #000000 !important;
      box-shadow: 0 0 20px #FF6600 !important;
    }
  `;
  document.head.appendChild(style);
};

injectLCARSCSS();
setInterval(() => {
  if (!document.getElementById('lcars-enhanced')) {
    injectLCARSCSS();
  }
}, 2000);
