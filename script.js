document.addEventListener('DOMContentLoaded', () => {

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Affiche le bouton lorsque l'utilisateur fait défiler vers le bas
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Changez la valeur si nécessaire
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  // Fait défiler la page vers le haut lorsque le bouton est cliqué
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function toggleMenu() {
    const navLinks = document.querySelector('.navbar .nav-links');
    navLinks.classList.toggle('active');
  }


 
    // Changement de couleur au survol des compétences
    const skillBlocks = document.querySelectorAll('.rectangle, .rectangle-2');
    skillBlocks.forEach(block => {
      block.addEventListener('mouseover', () => {
        block.style.backgroundColor = '#333';
      });
      block.addEventListener('mouseout', () => {
        block.style.backgroundColor = '#000';
      });
    });
  });
  
  