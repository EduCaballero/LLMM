/*1)Un programa que demani un número al usuari y mostri per consola 
 *la progressió dels números enters y parells des de 0 fins al número introduït.*/
function ex01(){
    //Primero pido el número por pantalla y lo guardo en una variable
    var pedirNum = prompt("Introduce un número y te mostraremos la progresión de números enteros en el log");
    //si es numérico lo paso a Int
    pedirNum=parseInt(pedirNum);
    for (var i=0; i<=pedirNum; i=i+2){
        console.log(i);
    }
}

/*2)	Un programa que demani un número al usuari y imprimeixi en el HTML
 *  una llista amb la progressió dels valors des de 0 fins al número introduït.
ex: <ul>
<li>0</li>
<li>1</li>
<li>2</li>
</ul>
*/

function ex02(){
    //Primero traigo el número del primer box con getElementbyId
    var pedirNum2 = document.getElementById("valor1").value;
    //si es numérico lo paso a Int
    pedirNum2=parseInt(pedirNum2);
    var div= document.getElementById("resultado");
    var html= "<ul>";
    for(var i=0;i<=pedirNum2;i++){
        html+= "<li>"+i+"</li>";
    }
    div.innerHTML=html + "</ul>";
}

/*3)	Un programa que demani dos números per pantalla i ens indiqui quin dels 
 * dos és superior i quin és inferior.*/

function ex03(){
    //Traemos los valores de las dos cajas y los parseamos a int
    var num1=document.getElementById("valor1").value;
    var num2=document.getElementById("valor2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    var div=document.getElementById("resultado");
    if(num1>num2){
        div.innerHTML=num1+" es mayor que "+num2;
    }
    else if(num1<num2){
        div.innerHTML=num2+" es mayor que "+num1;
    }
    else{
        div.innerHTML="Son iguales";
    }
}

/*4)	Un programa que ens demani el nom del dia de la setmana i ens retorni 
 * el número del dia de la setmana començant per dilluns*/

function ex04(){
    var dia=document.getElementById("valor1").value;
    dia=dia.toLowerCase();
    var div=document.getElementById("resultado");
    switch(dia){
        case "lunes":
            div.innerHTML="lunes es el 1";
             break;
        case "martes":
            div.innerHTML="martes es el 2";
             break;
        case "miercoles":
            div.innerHTML="miercoles es el 3";
            break;
        case "jueves":
            div.innerHTML="jueves es el 4";
            break;
        case "viernes":
            div.innerHTML="viernes es el 5";
            break;
        case "sabado":
            div.innerHTML="sabado es el 6";
            break;
        case "domingo":
            div.innerHTML="domingo es el 7";
            break;
    }
    
}


/*5)	Un programa que a partir d’un número inicial indicat per el programador, 
 * demani al usuari que intenti endevinar-lo. El programa ha d’indicar 
 * si el número pensat es superior o inferior. Un cop endevinat ha de 
 * felicitar a l’usuari i mostrar-li el número d’intents.*/
var intentos=0;
function ex05(){
    var num1=document.getElementById("valor1").value;
    var num2=11;
    num1=parseInt(num1);
    var acierto=document.getElementById("resultado");
    if(num1<num2) acierto.innerHTML="Te has quedado corto";
    else if(num1>num2) acierto.innerHTML="Te has pasado";
    else acierto.innerHTML="Acertaste";
    intentos++;
    acierto.innerHTML+="<br>Lo has intentado "+intentos;
}

/*6)	Crea una web amb tres botons: SUMA, RESTA, MULTIPLICA*/
function ex06(op){
    var num1=document.getElementById("valor1").value;
    var num2=document.getElementById("valor2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    var operacion=num1+op+num2;
    var resultado=document.getElementById("resultado");
    var final=eval(operacion);
    resultado.innerHTML=final;
    //document.getElementById("resultado").innerHTML=final; con esto lo haríamos directamente
    //sin tener que guardar el getelementbyid en una variable
}

/*7)	Crea un programa JS i aconsegueix que quan:
a)	Es cliqui sobre SUMA, es demanin 2 valors numèrics i es mostri dins un DIV amb id “resultat” el resultat de la seva suma amb el format:
		“el resultat de sumar 1 més 2 es 3”*/
                            





/*b)	Es cliqui sobre RESTA es demanin 2 valors numèrics i es mostri dins un DIV amb id “resultat” el resultat de la seva resta amb el format:
		“el resultat de restar 1 menys 2 es -1”*/
                            



/*c)	Es cliqui sobre MULTIPLICA es demanin 2 valors i es mostri dins un DIV amb id “resultat” una llista amb la progressió de la seva multiplicació amb el format:
El resultat de multiplicar 2 per 4 es: 8
 <ul>
<li>2</li>
<li>4</li>
<li>6</li>
<li>8</li>
</ul>
*/