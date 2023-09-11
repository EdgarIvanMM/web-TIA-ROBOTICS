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