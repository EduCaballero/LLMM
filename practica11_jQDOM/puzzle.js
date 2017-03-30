var fitxes_inici = {
        fitxa1: "img1"
    , fitxa2: "img3"
    , fitxa3: "img4"
    , fitxa4: "img7"
    , fitxa5: "img6"
    , fitxa6: "img2"
    , fitxa7: "img4"
    , fitxa8: "img9"
    , fitxa9: "img8"
};

var fitxes_final = {
        fitxa1: "img1"
    , fitxa2: "img2"
    , fitxa3: "img3"
    , fitxa4: "img4"
    , fitxa5: "img5"
    , fitxa6: "img6"
    , fitxa7: "img7"
    , fitxa8: "img8"
    , fitxa9: "img9"
};

$(document).ready(inicio);

function inicio(){
    $("#fitxes_iguals>img").click(fitxaSel);
    $(".fitxa").click(situaFitxa);
    $("button").click(check);//en lugar de button podríamos darle una id y seleccionarla (por si hubiera varios button en el html)
}

function fitxaSel(){
    $("#fitxa_seleccionada>img").appendTo($("#fitxes_iguals"));
    $(this).appendTo($("#fitxa_seleccionada")); 
}

function situaFitxa(){
    var img = $("#fitxa_seleccionada>img");
//    $("#fitxa_seleccionada>img").off();
    img.off();
    $(this).children("img").click(fitxaSel);
    $(this).children("img").appendTo($("#fitxa_seleccionada"));        
    $(this).append(img);
}

function check(){
    var correcto=true;
    $(".fitxa").each(function(i){
        if ($(this).children("img").attr("src")===fitxes_final["fitxa"+(i+1)]+".jpg"){// no entiendo por qué los []
            $(this).css('border-color', 'green');
        }
        else{
            $(this).css('border-color', 'red');
            correcto = false;
        }
    });
    if(correcto) window.alert("Perfecto!");
    else window.alert("Incorrecto!");
}
