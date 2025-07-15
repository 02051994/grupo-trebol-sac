// src/modules/scrollAnimaciones.js

export function iniciarAnimacionesScroll() {
  const observerTexto = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const parrafo = entry.target;
        parrafo.style.opacity = '1';
        parrafo.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.5 });

  const observerImagen = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '1';
        img.style.transform = 'translateX(0)';
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.parrafo-texto').forEach(p => observerTexto.observe(p));
  document.querySelectorAll('.contenedor-imagen img').forEach(img => observerImagen.observe(img));
}
