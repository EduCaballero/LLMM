<?php

$nombre = $_POST["nom"];
$apellido = $_POST["ape"];
$nacimiento = $_POST["fecha"];
$email = $_POST["email"];
$sexo = $_POST["regsex"];
$conocido = $_POST["conocido"];

//$interes = $_POST["interes"];
//$interes2 = $_POST["interes2"];
//$interes3 = $_POST["interes3"];
//$interes4 = $_POST["interes4"];

echo "Hola $nombre $apellido. Qué tal?<br>";
echo "Tu fecha de nacimiento es $nacimiento<br>";
echo "Tu email: $email<br>";
echo "Tu sexo es $sexo<br>";
echo "Nos has conocido a través de $conocido<br>";
echo "Tus intereses son: <br>";
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $interes=$_POST["interes"];
    $count = count($interes);
    for ($i = 0; $i < $count; $i++) {
        echo "$interes[$i] <br>";
    }
}
echo "Adios!<br>";
?>