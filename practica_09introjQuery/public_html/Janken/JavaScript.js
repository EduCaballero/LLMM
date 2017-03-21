$(document).ready(inicio);
function inicio() {
    $("#fight").click(fight);
    
    
}

function fight() {
    $("#jugador1>img,#jugador2>img")
            .css({"height": "120px", "position": "relative",
                "left": "0px", "top": "0px"});
    $("#jugador1>h3").css({"background-color": "blue"});
    $("#fight,#player1Win,#player2Win,#draw,#jugador2>img").fadeOut();
    $("#jugador1>img").mouseenter(selecciona);
    $("#jugador1>img").click(selecciona1);
    $("#jugador2>img").click(selecciona2);
    
   
   
}
function selecciona(){
    var id = $(this).parent("div").attr("id");
    $("#"+id+">img").stop();     
    $("#"+id+">img").animate({"height": "100px", "width": "100px"}, {"duration": 200});
    $(this).stop();
    $(this).animate({"height": "140px", "width": "140px"}, {"duration": 200});
    
    
}

var opcion1;

function selecciona1(){
    opcion1 = $(this).attr("alt");
    
    $("#jugador1>img").off();
    $("#jugador1>img").fadeOut();
    
    $("#jugador2>img").fadeIn();
    $("#jugador2>img").mouseenter(selecciona);
    $("#jugador2>h3").css({"background-color": "blue"});
    $("#jugador1>h3").css({"background-color": "transparent"});
}

var opcion2;

function selecciona2(){
    opcion2 = $(this).attr("alt");
    
    $("#jugador2>img").off();
    $("#jugador2>img").fadeOut();
    $("#jugador2>h3").css({"background-color": "transparent"});
    
    $("#"+opcion1+"1").fadeIn();
    $("#"+opcion2+"2").fadeIn();
    
   var ganador=result[opcion1][opcion2];
   $("#"+ganador).fadeIn();
   if (ganador==="player1Win"){
       $("#jugador1>img").animate({"left":"150px", "top":"150px", "position":"absolute"}, {"duration":500});
       $("#jugador2>img").fadeOut(1000);
   }
   if (ganador==="player2Win"){
       $("#jugador2>img").animate({"left":"-150px", "top":"150px", "position":"absolute"}, {"duration":500});
       $("#jugador1>img").fadeOut(1000);
   }
}

var result={
    rock:{rock:"draw",paper:"player2Win",scissors:"player1Win"},
    paper:{rock:"player1Win",paper:"draw",scissors:"player2Win"},
    scissors:{rock:"player2Win",paper:"player1Win",scissors:"draw"}
};