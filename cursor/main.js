// === Scripts JS pour Ski DEKAEL ===
// Ajoute ici tes interactions (menu mobile, animations, etc.)

// Menu mobile burger
const burger = document.querySelector('.burger');
const navMenu = document.getElementById('nav-menu');

if (burger && navMenu) {
  burger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Fermer le menu si on clique sur un lien
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Exemple : gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! (Simulation)');
    contactForm.reset();
  });
} 