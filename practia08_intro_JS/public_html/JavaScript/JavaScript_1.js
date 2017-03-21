

function ejercicio03(){
    var num1 = document.getElementById("numero1");
    num1 = parseInt(num1.value);
    var num2 = document.getElementById("numero2");
    num2 = parseInt(num2.value);
    
    var resul = document.getElementById("resultado2");
    
    if(num1>num2){
        html = "El primer numero es el mas grande y el segundo numero es el mas pequeño";
    }else{
        html = "El primer numero es el mas pequeño y el segundo numero es el mas grande";
    }
    /**/
    resul.innerHTML = html;
}
