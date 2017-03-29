<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        if (isset($_GET["musica"])) {
            $musica = $_GET["musica"];
        } else $musica = $_POST["musica"];
        echo $musica;
        if ($musica == "cute") {
            ?>
            <audio controls autoplay loop preload="auto">
                <source src="bensoundcute.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
            <?php
        } else if ($musica == "epic") {
            ?>
             <audio controls autoplay loop preload="auto">
                <source src="bensoundepic.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
        <?php
        } else {
            ?>
            <p>
             <audio controls loop preload="auto">
                <source src="bensoundcute.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
            </p>
            <p>
             <audio controls loop preload="auto">
                <source src="bensoundepic.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
            </p>
            <?php
        }
        ?>
    </body>
</html>
