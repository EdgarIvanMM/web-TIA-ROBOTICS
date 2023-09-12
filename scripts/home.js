$(document).ready(function() {
    // Inicializa el slider de videos una sola vez con las opciones necesarias
    $('.videos-slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false
    });

    // Agrega las flechas personalizadas al contenedor del slider
    $('.videos-slider').append('<div class="custom-prev-arrow"><i class="fas fa-chevron-left"></i></div>');
    $('.videos-slider').append('<div class="custom-next-arrow"><i class="fas fa-chevron-right"></i></div>');

    // Agrega eventos de clic para controlar el slider con las flechas personalizadas
    $('.custom-prev-arrow').click(function() {
        $('.videos-slider').slick('slickPrev');
    });

    $('.custom-next-arrow').click(function() {
        $('.videos-slider').slick('slickNext');
    });

    // Reproduce solo el primer video automáticamente al cargarse la página
    $('#video1')[0].play();

    // Detecta cuando se cambia de slide y reproduce el video correspondiente
    $('.videos-slider').on('afterChange', function(event, slick, currentSlide){
        var currentVideo = $('#video' + (currentSlide + 1))[0];
        currentVideo.play();
    });

    // Pausa el video actual cuando se cambia a otro slide
    $('.videos-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var currentVideo = $('#video' + (currentSlide + 1))[0];
        currentVideo.pause();
    });

    // Agrega el código para el menú hamburguesa
    $('#menu-toggle').click(function() {
        $('nav').toggleClass('show');
    });
});