const applyLCARSTheme = () => {
  const root = document.documentElement;
  root.style.setProperty('--lcars-primary', '#FF6600', 'important');
  root.style.setProperty('--lcars-secondary', '#0099FF', 'important');
  root.style.setProperty('--lcars-dark', '#000000', 'important');
  root.style.setProperty('--lcars-accent', '#FFCC00', 'important');
  document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)';
  document.body.style.backgroundAttachment = 'fixed';
  document.querySelectorAll('[class*="bg"], [class*="background"]').forEach(el => {
    el.style.background = '#0a0a0a !important';
  });
};
applyLCARSTheme();
window.addEventListener('load', applyLCARSTheme);
setInterval(applyLCARSTheme, 500);
const observer = new MutationObserver(applyLCARSTheme);
observer.observe(document.body, { childList: true, subtree: true });
