$(document).ready(function () {
    $('.slider').slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='al.jpg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='ar.jpg'>",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }]
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
                requierd: "Selecciona un personaje"
            },
            addrp2: {
                minlength: "La dirección debe tener al menos de 5 letras",
                maxlength: "La dirección debe tener menos de 20 letras"
            },
            agep2: {
                min: "Debes ser mayor de edad! (18)",
                max: "Demasiado viejo (menor de 99)"
            },
            charp2: {
                requierd: "Selecciona un personaje"
            }
        }
    });
});