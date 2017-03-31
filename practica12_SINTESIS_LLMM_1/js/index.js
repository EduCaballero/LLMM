$(document).ready(function () {
    $('.slider').slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='al.jpg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='ar.jpg'>",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }                
            },
            {
                breakpoint:500,
                settings:{
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 1000
                }
            }
        ]
    });
    $('h2').click(function () {
        if ($(this).hasClass('') || $(this).hasClass('red')) {
            $(this).removeClass('red');
            $(this).addClass('blue');
        } else if ($(this).hasClass('blue')) {
            $(this).removeClass('blue');
            $(this).addClass('green');
        } else {
            $(this).removeClass('green');
            $(this).addClass('red');
        }
    });
    
    //-------------------------------------------------
    
    $("#clickp1").click(function(){
        var img = $("<img id='imgBorrar' src='segadoes.jpg'>");
        //$("#imgMedio").remove();
        $("#imgMedio").append(img);
        /*$("#imgBorrar").animate({
            right:"20%"
        });*/
    });
    //----------------------------------------------------
    $("#imgMedio").click(function(){
        $("#imgBorrar").remove();
        //$("#imgMedio").append(img);
        /*$("#imgBorrar").animate({
            right:"20%"
        });*/
    });
    
    
    /*function situaFitxa() {
        var img = $("src=segadoes.jpg");
//    $("#fitxa_seleccionada>img").off();
        //img.off();
        $(this).click("#clickp1");
        $(this).children("img").appendTo($("#fitxa_seleccionada"));
        $(this).append(img);
    }*/
    
    
    $('#chr1').change(function () {
        var chara = $(this).val();
        chara = chara + ".jpg";
        var img = $("<img id='imgp1' src='" + chara + "'>");
        $("#imgp1").remove();
        $("#images").append(img);
        $("#imgp1").animate({
            left: "20%"
        });
    });
    $('#chr2').change(function () {
        var chara = $(this).val();
        chara = chara + ".jpg";
        var img = $("<img id='imgp2' src='" + chara + "'>");
        $("#imgp2").remove();
        $("#images").append(img);
        $("#imgp2").animate({
            right: "20%"
        });
    });
    
    //----------------------------
    $("#images").click(function(){
        $("#imgp1").animate({
            top: "100"
        },2000);
        $("#imgp2").animate({
            top: "100"
        },2000);
    });
    
        
    
    $('#playerForm').validate({
        rules: {
            addrp1: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            agep1: {
                required: true,
                min: 18,
                max: 99
            },
            charp1: "required",
            addrp2: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            agep2: {
                required: true,
                min: 18,
                max: 99
            },
            eslogan1: {
                required: true,
                maxlength: 8
            },
            eslogan2: {
                required: true,
                maxlength: 8
            },
            charp2: "required"
        },
        messages: {
            addrp1: {
                minlength: "La dirección debe tener al menos de 5 letras",
                maxlength: "La dirección debe tener menos de 20 letras"
            },
            agep1: {
                min: "Debes ser mayor de edad! (18)",
                max: "Demasiado viejo (menor de 99)"
            },
            charp1: {
                required: "Selecciona un personaje"
            },
            addrp2: {
                minlength: "La dirección debe tener al menos de 5 letras",
                maxlength: "La dirección debe tener menos de 20 letras"
            },
            agep2: {
                min: "Debes ser mayor de edad! (18)",
                max: "Demasiado viejo (menor de 99)"
            },
            eslogan1: {
                required:"eslogan obligatorio",
                maxlength:"Longitud máxima del eslogan es de 8 letras"
            },
            eslogan2: {
                required:"eslogan obligatorio",
                maxlength:"Longitud máxima del eslogan es de 8 letras"
            },
            charp2: {
                required: "Selecciona un personaje"
            }
        }
    });
});