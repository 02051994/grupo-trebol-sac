// src/modules/scaleAnimation.js
const scaleElements = document.querySelectorAll('.anim-scale');

const scaleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

scaleElements.forEach(el => scaleObserver.observe(el));
