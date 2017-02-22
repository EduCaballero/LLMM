/* 
 * 1)	Un programa que demani un número al usuari y mostri per consola 
 * la progressió dels números enters y parells des de 0 fins al número introduït.
 */

function ejericio01(){
    var inpu= document.getElementById("entrada");
    var text =inpu.value;
    text=parseInt(text); //parse valor a entero
    
    for(var k=0;k<=text;){
        console.log(k);
        k=k+2;
    }
}

/* 
 * 2)	Un programa que demani un número al usuari y imprimeixi en el HTML
 *  una llista amb la progressió dels valors des de 0 fins al número introduït.
 */

function ejercicio02(){
    var inpu= document.getElementById("entrada");
    inpu=parseInt(inpu.value); //parse valor a entero y usar el vlaue de arriba también, en una línea
    var result=document.getElementById("resultado");
    
    var html="<ul>";
    for(var k=0; k<inpu;k++){
        html+="<li>"+k+"</li>";
    }    
    result.innerHTML=html;    
    }