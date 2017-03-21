$(document).ready(inicio);

//Con esto habilitamos que el botón fight funcione
function inicio() {
    $("#fight").click(fight);
}


/**Todas las opciones de los jugadores tengan una altura de 
 * 120px,  una posición relativa y una posición left:0px y top:0px;
 ---Se modifique el color de fondo de PLAYER1.---
 Se oculte el botón, los mensajes de ganador y las opciones 
 del jugador de la derecha.
 */
function fight(){
    $("#jugador1>h3").css({"background-color":"blue"});
    $("#jugador1>img,#jugador2>img").css({"height":"120px", "position":"relative",
                            "left":"0px", "top":"0px"});
    $("#jugador2>img, #fight, #player1Win, #player2Win, #draw").fadeOut();
    $("#jugador1>img").mouseenter(seleccionar);
    //$("#jugador1>img").mouseleave(desseleccionar);
    $("#jugador1>img").click(click1);
    $("#jugador2>img").click(click2);
    
}

/**Cuando el ratón se sitúe sobre una de las opciones,
 *  ésta se ha de animar hasta llegar a un tamaño de 140x140px 
 *  , mientras el resto se ha de animar para conseguir un tamaño de 100x100px.
 */

function seleccionar(){
    var id = $(this).parent("div").attr("id");
    $("#"+id+">img").stop();     
    $("#"+id+">img").animate({"height": "100px", "width": "100px"}, {"duration": 300});
    $(this).stop();
    $(this).animate({"width":"140px","height":"140px"}, {"duration":300});
}
//con esto hago que vuelvan al tamaño original, aunque no lo pide
//explícitamente la práctica, creo que sería así
/*function desseleccionar(){
    $("img").animate({"height": "120px", "width": "120px"}, {"duration": 300});
}*/

var opcion1;
function click1(){
    //guarda en una variable global javascript el nombre de la opción seleccionada por el 1er jugador
    opcion1=$(this).attr("alt");
    //desvinculamos eventos jugador 1
    $("#jugador1>img").off();
    //Ocultamos opciones jugador 1 y mostramos las del 2
    $("#jugador1>img").fadeOut();
    $("#jugador1>h3").css({"background-color":"transparent"});
    $("#jugador2>img").fadeIn();
    $("#jugador2>h3").css({"background-color":"blue"});
    $("#jugador2>img").mouseenter(seleccionar);
    //$("#jugador2>img").mouseleave(desseleccionar); no puedo utilizarlo o me aparece las manos de jugador 1    
}

var opcion2;
function click2(){
    //guarda en una variable global javascript el nombre de la opción seleccionada por el 1er jugador
    opcion2=$(this).attr("alt");
    //desvinculamos eventos jugador 1
    $("#jugador2>img").off();
    $("#jugador2>img").fadeOut();
    $("#jugador2>h3").css({"background-color": "transparent"});
    
    $("#"+opcion1+"1").fadeIn();
    $("#"+opcion2+"2").fadeIn();
    
   var ganador=result[opcion1][opcion2];
   $("#"+ganador).fadeIn();
   if (ganador==="player1Win"){
       $("#jugador1>img").animate({"left":"150px", "top":"150px", "position":"absolute"}, {"duration":500});
       $("#jugador2>img").fadeOut(2000);
   }
   if (ganador==="player2Win"){
       $("#jugador2>img").animate({"left":"-150px", "top":"150px", "position":"absolute"}, {"duration":500});
       $("#jugador1>img").fadeOut(2000);
   }
}

var result={
    rock:{rock:"draw",paper:"player2Win",scissors:"player1Win"},
    paper:{rock:"player1Win",paper:"draw",scissors:"player2Win"},
    scissors:{rock:"player2Win",paper:"player1Win",scissors:"draw"}
};