document.addEventListener('DOMContentLoaded', () => {
    // Animation pour "Engagez moi" bouton
    const engagezMoiBtn = document.querySelector('.overlap-group-2');
    engagezMoiBtn.addEventListener('mouseover', () => {
      engagezMoiBtn.style.backgroundColor = '#A626D3';
    });
  
    engagezMoiBtn.addEventListener('mouseout', () => {
      engagezMoiBtn.style.backgroundColor = '#8b0db7';
    });
  
    // Navigation vers la section "À propos"
    const aboutLink = document.querySelector('.text-wrapper-21');
    aboutLink.addEventListener('click', () => {
      window.scrollTo({
        top: document.querySelector('.a-propos').offsetTop,
        behavior: 'smooth'
      });
    });
  
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
  