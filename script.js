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

  const swiper = new Swiper('.swiper-container', {
    loop: true, // Boucle infinie
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permet de cliquer sur la pagination pour changer les slides
      renderBullet: function (index, className) {
        // Personnaliser le rendu des bullets de pagination
        return `<div class="${className}" style="background-color: #d9d9d9; width: 41px; height: 5px; border-radius: 8px; margin: 0 5px;"></div>`;
      },
    },
    autoplay: {
      delay: 5000, // Délai entre les changements de slide (en millisecondes)
    },
    slidesPerView: 1, // Affiche une diapositive à la fois
    spaceBetween: 50, // Espace entre les diapositives
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
  
  