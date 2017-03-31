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
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    dots: false
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

    $("#clickp2").click(function () {
        var img = $("<img id='imgBorrar' src='segadoes.jpg'>");
        //$("#imgMedio").remove();
        $("#imgMedio").append(img);
        /*$("#imgBorrar").animate({
         right:"20%"
         });*/
    });
    //----------------------------------------------------
    $("#clickp1").click(function () {
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
        $("#imgp2").click(function () {
            $(this).animate({
                height: "100px",
                width: "100px"
            }, 3000);

        });
    });

//    //----------------------------
//    $("#imgp1").click(function () {
//        $("#imgp1").animate({
//            height: "100px",
//            width: "100px"
//        }, 3000);
//        $("#imgp2").animate({
//            height: "100px",
//            width: "100px"
//        }, 3000);
//    });

    /*function small(){
     $("#imgp1").click(seleccionar);
     $("#imgp2").click(seleccionar);
     }*/

    //$("#images").click(seleccionar);

    /*$("#imgp1").click(function(){
     var id = $(this).parent("div").attr("id");
     $("#" + id + ">img").stop();
     $("#" + id + ">img").animate({"height": "100px", "width": "100px"}, {"duration": 3000});
     });*/


    function seleccionar() {
        var id = $(this).parent("div").attr("id");
        $("#" + id + ">img").stop();
        $("#" + id + ">img").animate({"height": "100px", "width": "100px"}, {"duration": 3000});
    }

    //{"height": "100px", "width": "100px"}

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
            padre1: {
                required: true,
                minlength: 2,
                maxlength: 8
            },
            padre2: {
                required: true,
                minlength: 2,
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
            padre1: {
                required: "padre obligatorio",
                minlength: "Longitud min del padre es de 2 letras",
                maxlength: "Longitud m del padre es de 8 letras"
            },
            padre2: {
                required: "padre obligatorio",
                minlength: "Longitud min del padre es de 8 letras",
                maxlength: "Longitud máxima del padre es de 8 letras"
            },
            charp2: {
                required: "Selecciona un personaje"
            }
        }
    });
});