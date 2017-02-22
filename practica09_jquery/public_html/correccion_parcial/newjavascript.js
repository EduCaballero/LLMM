/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(inicio);
function inicio(){
    $("#fight").click(fight);
    $("#jugador1>img").mouseenter(selecciona);
}

function fight(){
    $("#jugador1>img,#jugador2>img").css({"height":"120px","position":"relative","left":"0px","top":"0px"});
    $("#jugador1>h3").css({"background-color":"blue"});
    $("#fight,#player1Win,#player2Win,#draw,#jugador2>img").fadeOut();
    
}
