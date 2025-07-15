// src/slider.js (si estás usando módulos)
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  const changeSlide = () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  };

  // Cambia de slide cada 2 segundos
  setInterval(changeSlide, 3000);
});
