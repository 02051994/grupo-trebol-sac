document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  let scrollTimeout;

  // Fondo blanco mientras haces scroll
  window.addEventListener('scroll', () => {
    header.classList.add('scrolled');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      header.classList.remove('scrolled');
    }, 1000);
  });

  // Toggle menú burger
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Mostrar solo una sección y hacer scroll top
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').replace('#', '');
      const sections = document.querySelectorAll('section');

      // Oculta todas las secciones
      sections.forEach(sec => sec.style.display = 'none');

      // Muestra solo la sección objetivo
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';

        // Espera un frame para asegurar el renderizado, y luego scroll al tope
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
      }

      // Cerrar menú burger
      navLinks.classList.remove('open');
    });
  });

  // Cerrar menú burger si haces clic fuera de él
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
});
