<!DOCTYPE html>
<html>
    <head>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfITkskFnkQFXkgSbMT-AoPXCx9_yHoXw&region=GB"></script>
        <script src="js/gmap3.min.js" type="text/javascript"></script>
        <link rel="stylesheet" href="gmap.css">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        if (rand(1, 2) == 1) {
            $ganador = 1;
            $addr = $_POST["addrp1"];
            $age = $_POST["agep1"];
            $char = $_POST["charp1"];
            ?><audio controls autoplay loop preload="auto">
                <source src="bensoundcute.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
            <?php
        } else {
            $ganador = 2;
            $addr = $_POST["addrp2"];
            $age = $_POST["agep2"];
            $char = $_POST["charp2"];
            ?>
        <audio controls autoplay loop preload="auto">
                <source src="bensoundepic.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
            <?php
        }
        ?>
        <div id="map-wrapper">
            <h1>Mapa del vencedor!</h1>
            <div id="map"></div>
        </div>
        <script>
            $(document).ready(function () {
                $('#map').gmap3({
                    zoom: 6
                })
                        .infowindow({})
                .marker([
                {address: "<?php echo $addr ?>", data: "<h3>Ganador <?php echo $ganador ?></h3><div>" +
                "<p><b>Age: </b><?php echo $age ?> years</p>" +
                        "<p><b>Consola: </b><?php echo $char ?></p>" +
                        "<img src='<?php echo $char ?>.jpg'></div>"}
                ])
                        .on('click', function (marker) {  //Al clicar obrim una finestra sobre la marca i hi insertem el data de la marca
                            marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
                            var map = this.get(0); //this.get(0) retorna la primera propietat vinculada-> gmap3
                            var infowindow = this.get(1); //this.get(1) retorna la segona propietat vinculada -> infowindow
                            infowindow.setContent(marker.data);     //dins la finestra mostrem el atribut data de la marca
                            infowindow.open(map, marker);
                        })
                        .fit();
            });
        </script>
    </body>
</html>
