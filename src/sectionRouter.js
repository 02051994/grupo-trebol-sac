// src/sectionRouter.js

document.addEventListener('DOMContentLoaded', () => {
  const allSections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Oculta todas las secciones
  function hideAllSections() {
    allSections.forEach(sec => sec.style.display = 'none');
  }

  // Muestra la sección correspondiente
  function showSection(id) {
    const target = document.getElementById(id);
    if (target) {
      target.style.display = 'block';
    }
  }

  // Inicialmente, muestra solo "inicio"
  hideAllSections();
  showSection('inicio');

  // Evento para cada enlace del menú
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.dataset.section;
      if (targetSection) {
        hideAllSections();
        showSection(targetSection);
        // Si el menú está abierto (modo móvil), ciérralo
        document.querySelector('.nav-links').classList.remove('open');
      }
    });
  });
});
