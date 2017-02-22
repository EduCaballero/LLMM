<?php

$email = $_POST["email"];
$race = $_POST["race"];

echo "Tu email: $email<br>";
echo "Tu raza es $race<br>";
echo "Tu comida favorita: <br>";
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $interes=$_POST["interes"];
    $count = count($interes);
    for ($i = 0; $i < $count; $i++) {
        echo "$interes[$i] <br>";
    }
}
echo "Adios!<br>";
?>