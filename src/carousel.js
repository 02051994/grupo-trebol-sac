// src/modules/carousel.js
const track = document.querySelector('.carousel-track');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let itemWidth = 0;

function setItemWidth() {
  itemWidth = items[0].offsetWidth + 20;
}

function scrollToIndex(index) {
  track.scrollTo({
    left: index * itemWidth,
    behavior: 'smooth'
  });
  updateArrows(index);
}

function updateArrows(index) {
  btnPrev.style.display = index === 0 ? 'none' : 'block';
  btnNext.style.display = index >= items.length - visibleItems() ? 'none' : 'block';
}

function visibleItems() {
  return Math.floor(track.clientWidth / itemWidth);
}

btnNext.addEventListener('click', () => {
  if (currentIndex < items.length - visibleItems()) {
    currentIndex++;
    scrollToIndex(currentIndex);
  }
  stopAutoplay();
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToIndex(currentIndex);
  }
  stopAutoplay();
});

window.addEventListener('load', () => {
  setItemWidth();
  scrollToIndex(currentIndex);
});

window.addEventListener('resize', () => {
  setItemWidth();
  scrollToIndex(currentIndex);
});
