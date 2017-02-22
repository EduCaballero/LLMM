<html>  
<head>  
<title>reproductor audio</title>  
</head>  

<body>  
    
    <?php 
$song = "Sake-No-Binks.mp3";
    if (isset($_GET['song'])){
        $song = $_GET['song'];        
    }

    if (isset($_GET['randomsong'])){
        if ($_GET['randomsong'] == "Random"){
          $randomsong = rand(1,3);
          if ($randomsong == 1) {
              $song = "Sake-No-Binks.mp3";
          }
          if ($randomsong == 2) {
              $song = "FF-fanfare.mp3";
          }
          if ($randomsong == 3) {
              $song = "wild-arms-op.mp3";
          }
          
        }
            
        
    }
    
    
?>

    <audio controls>
        <source src="<?php echo "$song"; ?>" type="audio/mp3" >
       	Audio no disponible.
       </audio>
    
    <form method="get" action="audio.php"> 
       Canción:
            <select name="song" required>
                <option value="Sake-No-Binks.mp3">Sake No Binks</option>
                <option value="FF-fanfare.mp3">Final Fantasy Fanfare</option>
                <option value="wild-arms-op.mp3">Wild Arms</option>   
            
            <input type="submit" value="PLAY" />
            </select><br />
        
           Random<input type="checkbox" name="randomsong" value="Random">
           No random<input type="checkbox" name="norandomsong" value="No random">

            
    </form> 
  
 
</body> 
</html>
