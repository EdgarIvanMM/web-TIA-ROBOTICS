document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
  
    // Agrega un event listener al botón de la hamburguesa
    menuToggle.addEventListener('click', function () {
      // Toggle la clase 'show' en la navegación para mostrar u ocultar
      nav.classList.toggle('show');
    });
  });