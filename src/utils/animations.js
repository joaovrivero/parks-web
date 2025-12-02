/**
 * Intersection Observer for scroll animations
 * Animates elements as they enter the viewport
 */
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Only animate once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const elementsToAnimate = document.querySelectorAll(
    '.feature-card, .screenshot-item, .faq-item, section'
  );

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize FAQ accordion functionality
 */
export function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answer = question.nextElementSibling;

      // Close all other FAQs
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          q.nextElementSibling.classList.remove('open');
        }
      });

      // Toggle current FAQ
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('open');
    });
  });
}

/**
 * Smooth scroll for anchor links
 */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        return;
      }

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
