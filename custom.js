const applyLCARSTheme = () => {
  // Remove or override Next.js theme <style> tags
  document.querySelectorAll('style').forEach(style => {
    if (style.textContent.includes('background') || style.textContent.includes('color')) {
      style.textContent = '';
    }
  });

  // Remove Next.js CSS classes that apply blue theme
  document.querySelectorAll('[class*="bg-"], [class*="from-"], [class*="to-"]').forEach(el => {
    el.className = el.className.replace(/bg-\S+|from-\S+|to-\S+|via-\S+/g, '');
  });

  // Force background on everything
  document.documentElement.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important';
  document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%) !important';
  document.body.style.backgroundAttachment = 'fixed !important';
  
  // Target main content containers
  const main = document.querySelector('main') || document.querySelector('[class*="main"]');
  if (main) {
    main.style.background = 'transparent !important';
    main.style.backgroundColor = 'transparent !important';
  }
};

applyLCARSTheme();
window.addEventListener('load', applyLCARSTheme);
setTimeout(applyLCARSTheme, 500);
setTimeout(applyLCARSTheme, 1000);
setInterval(applyLCARSTheme, 2000);
