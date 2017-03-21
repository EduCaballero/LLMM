function calculaSuma(){
    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var resul = document.getElementById("resultado");
    
    var n1 = numero1.value;
    n1 = parseInt(n1);
    
    var n2 = numero2.value;
    n2 = parseInt(n2);
    
    html = (n1+n2);

    resul.innerHTML = html;
}

function calculaResta(){
    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var resul = document.getElementById("resultado");
    
    var n1 = numero1.value;
    n1 = parseInt(n1);
    
    var n2 = numero2.value;
    n2 = parseInt(n2);
   
   html = (n1-n2);

   resul.innerHTML = html;
}

function calculaMult(){
    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var resul = document.getElementById("resultado");
    
    var n1 = numero1.value;
    n1 = parseInt(n1);
    
    var n2 = numero2.value;
    n2 = parseInt(n2);
   
   html = (n1*n2);

   resul.innerHTML = html;
}

function calculaDivi(){
    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var resul = document.getElementById("resultado");
    
    var n1 = numero1.value;
    n1 = parseInt(n1);
    
    var n2 = numero2.value;
    n2 = parseInt(n2);
   
   html = (n1/n2);

   resul.innerHTML = html;
}

