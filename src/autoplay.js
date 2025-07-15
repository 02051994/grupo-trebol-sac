// src/modules/autoplay.js
//import { scrollToIndex, visibleItems, items } from './carousel.js';

let currentIndex = 0;
let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    if (currentIndex < items.length - visibleItems()) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    scrollToIndex(currentIndex);
  }, 1500);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

window.addEventListener('load', startAutoplay);

export { stopAutoplay };
