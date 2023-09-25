// Función para abrir la ventana emergente desde los botones "Contactar" en productos y ofertas
var contactarBotones = document.querySelectorAll(".info-product button, .info-oferta button");

contactarBotones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        document.getElementById("ventanaEmergente").style.display = "flex";
    });
});

// Función para abrir la ventana emergente desde el botón "INFORMACION PARA MAS PRODUCTOS"
document.querySelector(".botonL").addEventListener("click", function () {
    document.getElementById("ventanaEmergente").style.display = "flex";
});

// Función para cerrar la ventana emergente
document.getElementById("cerrarVentana").addEventListener("click", function () {
    document.getElementById("ventanaEmergente").style.display = "none";
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