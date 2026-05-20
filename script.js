document.addEventListener('DOMContentLoaded', () => {

  // 1. Update Copyright Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('open');
      
      // Optional: Change icon to X when open
      navToggle.classList.toggle('active');
    });
  }

  // 3. Feedback Form Handling
  const feedbackForm = document.getElementById('feedbackForm');
  const formMessage = document.getElementById('formMessage');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation (HTML5 already helps, but we add custom message)
      if (!feedbackForm.checkValidity()) {
        formMessage.style.color = '#d42c2c';
        formMessage.textContent = "Please fill in all required fields correctly.";
        return;
      }

      // Simulate successful submission
      formMessage.style.color = '#198754';
      formMessage.textContent = "✅ Thank you! Your feedback has been received. (This is a demo)";

      // Reset form after submission
      feedbackForm.reset();

      // Clear message after 6 seconds
      setTimeout(() => {
        formMessage.textContent = '';
      }, 6000);
    });
  }

  // 4. Interactive Facts (Homepage)
  const factItems = document.querySelectorAll('.fact-item');
  const factExplanation = document.getElementById('fact-explanation');

  if (factItems.length && factExplanation) {
    factItems.forEach(item => {
      item.addEventListener('click', () => {
        const explanation = item.getAttribute('data-explain');
        
        if (explanation) {
          factExplanation.textContent = explanation;
          
          // Remove active class from all and add to clicked one
          factItems.forEach(f => f.classList.remove('active'));
          item.classList.add('active');
        }
      });
    });
  }

  // 5. Optional: Lightbox for images (if you want to expand images on click later)
  // You can extend this in the future

  console.log('✅ Eritrea Horizons website scripts loaded successfully!');
});