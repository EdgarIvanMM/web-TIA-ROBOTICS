// Obtiene el icono y la información de contacto por su ID
  const icon = document.getElementById('contact-icon');
  const info = document.getElementById('contact-info');

  // Agrega un evento de clic al icono
  icon.addEventListener('click', () => {
    // Muestra u oculta la información de contacto al hacer clic
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  });