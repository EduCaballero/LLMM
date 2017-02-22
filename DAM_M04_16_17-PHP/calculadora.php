<html>  
<head>  
<title>calculadora</title>  
</head>  

<body>  

    <form method="get" action="calculadora.php"> 
        Valor 1: <input type="number" name="n1" minlength="0" required="">
        Valor 2: <input type="number" name="n2" minlength="0" required="">
    <input type="submit" value="+" name="operacion">
    <input type="submit" value="-" name="operacion">
    <input type="submit" value="*" name="operacion">
    <input type="submit" value="/" name="operacion">
    </form> 


<?php 

//if (isset($_GET[aquí va el nombre-name- de las operaciones/input]))
$resultado='';
if (isset($_GET['operacion'])){
$valor1 = $_GET['n1']; 
$valor2 = $_GET['n2']; 

if ($_GET['operacion'] == '+')
    $resultado = $valor1 + $valor2;
if ($_GET['operacion'] == '-')
    $resultado = $valor1 - $valor2;
if ($_GET['operacion'] == '*')
    $resultado = $valor1 * $valor2;
if ($_GET['operacion'] == '/')
    $resultado = $valor1 / $valor2;
}


?>
    
    <label for="result">Resultado</label>
    <input type="text" value="<?php echo $resultado;?>" id="result" readonly/>
 
  <!--  <label for="para enlazar la id con el input">para hacer el recuadro ej: resultado</label>
  <input type="number" value=" < ?php echo "$resultado";-- aquí llamamos el resultado desde php--- ?>" id="res" -- es la id que me enlaza con el label--  readonly
  
   --> 
</body> 
</html>
