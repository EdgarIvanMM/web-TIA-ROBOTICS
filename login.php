<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <link rel="icon" type="image/x-icon" href="imagenes/faviconB.ico">
    <link rel="stylesheet" href="estilos/estilo_login.css">
    <script src="https://kit.fontawesome.com/374b632105.js" crossorigin="anonymous"></script>
</head>

<body>
    <main>
        <section class="form-main">
            <div class="form-content">
                <img><img src="imagenes/logo_tia.png" alt="">
                <!--<div class="circle-1"></div>-->
                <!--<div class="circle-2"></div>-->
                <!--<div class="circle-3"></div>-->
                <div class="box">
                    <h3>Bienvenido</h3>
                    <form method="post" action="">

                        <?php
                        include "controlador/controlador_login.php";
                        ?>

                        <div class="input-box">
                            <input type="text" placeholder="Email o Usuario" class="input-control" name="usuario">
                        </div>
                        <div class="input-box">
                            <input type="password" placeholder="Password" class="input-control" name="password">
                            <div class="input-link">
                                <a href="#" class="gradient-text">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <button name="btningresar" type="submit" class="btn">Iniciar sesion</button>
                    </form>
                </div>
            </div>
        </section>


        <div class="separator"></div> <!-- Primera línea horizontal -->

        <footer>
            <a href="https://www.facebook.com/TIAutomation" target="_blank"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/tia_robotics?igsh=MTJoOGt2azl2YjRzNg==" target="_blank"><i class="fab fa-instagram"></i></a>
                  <a href="https://www.tiktok.com/@tiarobotics?_t=8gaytUXJDQD&_r=1" target="_blank"><i class="fab fa-tiktok"></i></a>
                  <a href="https://www.linkedin.com/company/tiasa" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </footer>
    
        <div class="separator2"></div> <!-- Segunda línea horizontal -->
    </main>

        <script src="scripts/productos.js"></script>

        <script>
            window.addEventListener('mouseover', initLandbot, { once: true });
            window.addEventListener('touchstart', initLandbot, { once: true });
            var myLandbot;
            function initLandbot() {
              if (!myLandbot) {
                var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
                s.addEventListener('load', function() {
                  myLandbot = new Landbot.Popup({
                    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2067536-K5GR2ESGXUS65PPF/index.json',
                  });
                });
                s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
              }
            }
            </script>
        
</body>
</html>