const applyLCARSTheme = () => {
  // Apply to document element
  document.documentElement.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important';
  document.documentElement.style.backgroundAttachment = 'fixed !important';
  
  // Apply to body
  document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important';
  document.body.style.backgroundAttachment = 'fixed !important';
  
  // Find and override all container elements
  const containers = document.querySelectorAll('[class*="container"], [class*="main"], main, [class*="layout"]');
  containers.forEach(el => {
    el.style.background = 'transparent !important';
    el.style.backgroundColor = 'transparent !important';
  });
};

// Apply immediately
applyLCARSTheme();

// Re-apply on load
window.addEventListener('load', applyLCARSTheme);
window.addEventListener('DOMContentLoaded', applyLCARSTheme);

// Keep re-applying every 200ms to fight React re-renders
setInterval(applyLCARSTheme, 200);

// Watch for DOM mutations
const observer = new MutationObserver(() => {
  setTimeout(applyLCARSTheme, 50);
});
observer.observe(document.body, { childList: true, subtree: true, attributes: true });
