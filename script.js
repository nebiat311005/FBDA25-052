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
      formMessage.textContent = " Thank you! Your feedback has been received. (This is a demo)";

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

  console.log(' Eritrea Horizons website scripts loaded successfully!');
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.glimpse-card');
  const modal = document.getElementById('fullModal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.querySelector('.modal-close');

  const modalContents = {
    "modal-1": `
      <h2>Early Civilizations</h2>
      <p><strong>Period:</strong> ~3000 BCE – 1000 CE</p>
      <p>The Eritrean region was a vital part of the ancient Red Sea trade network. Ports like <strong>Adulis</strong> connected the Aksumite Kingdom with Egypt, Arabia, and India. This era saw the rise of the Kingdom of D'mt and later strong influence from the Aksumite Empire.</p>
      <p>Archaeological evidence shows advanced agriculture, ironworking, and international commerce.</p>
    `,
    "modal-2": `
      <h2>Italian Colonial Rule</h2>
      <p><strong>Period:</strong> 1889 – 1941</p>
      <p>Italy transformed Eritrea into its first African colony. Asmara was developed into a beautiful modern city, earning the nickname "Little Rome". Railways, roads, and industries were built, but Eritreans had limited rights.</p>
    `,
    "modal-3": `
      <h2>Struggle for Independence</h2>
      <p><strong>Period:</strong> 1961 – 1991</p>
      <p>After Ethiopia annexed Eritrea, a 30-year armed struggle began. The Eritrean People's Liberation Front (EPLF) fought against huge odds and eventually liberated the country in 1991.</p>
    `,
    "modal-4": `
      <h2>Independence</h2>
      <p><strong>Date:</strong> 24 May 1993</p>
      <p>Following a UN-supervised referendum where 99.8% voted for independence, Eritrea officially became a sovereign nation. May 24 is celebrated annually as Independence Day.</p>
    `
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      modalBody.innerHTML = modalContents[modalId];
      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // prevent scrolling background
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'visible';
  });

  // Close when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'visible';
    }
  });
});