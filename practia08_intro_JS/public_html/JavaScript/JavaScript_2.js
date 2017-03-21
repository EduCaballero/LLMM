function ejercicio04(){
    var inpu = document.getElementById("entrada");
    var resul = document.getElementById("resultado");
    
    if(inpu == "lunes") html="El numero es: 1";
    else if(inpu == "martes") html="El numero es: 2";
    else if(inpu == "miercoles") html="El numero es: 3";
    else if(inpu == "jueves") html="El numero es: 4";
    else if(inpu == "viernes") html="El numero es: 5";
    else if(inpu == "sabado") html="El numero es: 6";
    else if(inpu == "domingo") html="El numero es: 7";
    
    resul.innerHTML = html;
}

