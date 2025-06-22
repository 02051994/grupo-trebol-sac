document.addEventListener('DOMContentLoaded', () => {
  // --- MENU BURGER ---
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');
  const navLinksList = document.querySelectorAll('#nav-links a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('nav-active');
  });

  navLinksList.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
      }
    });
  });

  // --- ANIMACIONES DE SCROLL ---
  const animables = document.querySelectorAll('.animate, .animate-left, .animate-right, .animate-scale-left, .animate-scale-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // ← esto permite que la animación se reinicie
      }
      
    });
  }, {
    threshold: 0.1
  });

  animables.forEach(el => observer.observe(el));
});



// Slider automático
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// Animaciones de scroll
const animElements = document.querySelectorAll('.anim-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

animElements.forEach(el => observer.observe(el));

// CARRUSEL DE NOTICIAS
const track = document.querySelector('.carousel-track');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let itemWidth = 0;

function setItemWidth() {
  itemWidth = items[0].offsetWidth + 20; // incluye gap entre items
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

// AUTOPLAY CARRUSEL
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
  startAutoplay(); // reinicia autoplay tras interacción
}

window.addEventListener('load', startAutoplay);

// MODAL NOTICIAS
const modal = document.getElementById('modal-noticia');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const cerrarModal = document.getElementById('cerrar-modal');

document.querySelectorAll('.carousel-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const desc = item.querySelector('p').innerText;
    modalImg.src = imgSrc;
    modalDesc.textContent = desc;
    modal.classList.add('active');
  });
});

cerrarModal.addEventListener('click', () => {
  modal.classList.remove('active');
});
