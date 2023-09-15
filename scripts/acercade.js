const swiper = new Swiper('.swiper', {
  // Parámetros opcionales
  direction: 'horizontal', // Cambiar a 'horizontal' para el desplazamiento lateral
  loop: true, // Habilitar el bucle continuo
  effect: 'coverflow', // Efecto de superposición de imágenes = coverflow
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: 3000,
  clickable: true,

  // Otros parámetros de Swiper (pagination, navigation, etc.)
  pagination: {
    el: '.swiper-pagination', // Contenedor de la paginación
  },
  navigation: {
    nextEl: '.swiper-button-next', // Contenedor del botón siguiente
    prevEl: '.swiper-button-prev', // Contenedor del botón anterior
  },
  scrollbar: {
    el: '.swiper-scrollbar', // Contenedor de la barra de desplazamiento
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  // Agrega un event listener al botón de la hamburguesa
  menuToggle.addEventListener('click', function () {
    // Toggle la clase 'show' en la navegación para mostrar u ocultar
    nav.classList.toggle('show');
  });
});