// src/modules/modal.js
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
