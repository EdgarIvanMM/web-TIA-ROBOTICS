// Obtiene el icono y la información de contacto por su ID
  const icon = document.getElementById('contact-icon');
  const info = document.getElementById('contact-info');
  const closeIcon = document.getElementById('close-icon'); // Agregado

  // Agrega un evento de clic al icono
  icon.addEventListener('click', () => {
    // Muestra u oculta la información de contacto al hacer clic
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  });

  // Agrega un evento de clic al icono de cierre (tacha)
  closeIcon.addEventListener('click', () => {
    // Oculta la información de contacto al hacer clic en la tacha
    info.style.display = 'none';
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