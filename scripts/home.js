$(document).ready(function() {
    // Inicializa el slider de videos una sola vez con las opciones necesarias
    $('.videos-slider').slick({
        autoplay: true,
        autoplaySpeed: 25000,
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

    function changeVideo() {
        var isMobile = window.innerWidth <= 768;
        
        // Cambia las fuentes de video según el tipo de dispositivo
        if (isMobile) {
        $('#video1 source').attr('src', 'videos/vid1pMOVIL.mp4');
        $('#video2 source').attr('src', 'videos/vid3pMOVIL.mp4');
        $('#video3 source').attr('src', 'videos/vid2pMOVIL.mp4');
        $('#video4 source').attr('src', 'videos/vid4pMOVIL.mp4');
        } else {
      
        }
        
        // Recarga las fuentes de video
        $('.videos-slider').slick('slickGoTo', 0);
        $('.videos-slider').slick('refresh');
        
        // Reproduce el nuevo primer video
        var newVideo = $('#video1')[0];
       
        // Pausa el video actual antes de cargar y reproducir el nuevo video
        $('.videos-slider').slick('slickPause');
        
        newVideo.load();
        newVideo.play();
        
        // Cambia el elemento activeSlide del slider
        $('.videos-slider').slick('slickGoTo', 1);
    }
    
    // Llama a la función changeVideo al cargar la página
    changeVideo();
    
    // Detecta cuando el primer video ha cargado y comienza a reproducir el slider
    $('#video1').on('loadeddata', function () {
        $('.videos-slider').slick('slickPlay');
    });
    
    // Llama a la función changeVideo cuando la ventana cambia de tamaño
    $(window).on('resize', function () {
        changeVideo();
    });
    
   
});

