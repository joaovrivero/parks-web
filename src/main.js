import { initScrollAnimations, initFAQ, initSmoothScroll } from './utils/animations.js';

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll animations
  initScrollAnimations();

  // Initialize FAQ accordion
  initFAQ();

  // Initialize smooth scrolling for anchor links
  initSmoothScroll();

  // Track download button clicks
  const downloadBtn = document.getElementById('download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      // Log the download click (useful for analytics later)
      console.log('Download button clicked');

      // TODO: Replace '#' with actual Google Drive link
      // downloadBtn.href = 'YOUR_GOOGLE_DRIVE_LINK_HERE';

      // If href is still '#', prevent default to avoid page jump
      if (downloadBtn.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Por favor, adicione o link do Google Drive no arquivo src/main.js');
      }
    });
  }
});

/**
 * Add a small performance optimization:
 * Preload critical images on page load
 */
window.addEventListener('load', () => {
  // Add any additional initialization after page fully loads
  console.log('ParksApp landing page loaded successfully!');
});
