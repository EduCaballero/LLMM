function ejercicio05(){
    var inpu = document.getElementById("entrada");
    var resul = document.getElementById("resultado");
 
    var text = inpu.value;
    text = parseInt(text);
    //var aleatorio = Math.floor((Math.random() * 100) + 1);
    var aleatorio = 19;
    
    if(text>aleatorio) html = "El numero es mas Pequeño";
    else if(text<aleatorio) html = "El numero es mas Grande";
    else if(text===aleatorio) html = "Felicidades has acertado el numero";
    
    resul.innerHTML = html;
}

