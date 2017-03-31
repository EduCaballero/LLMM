/*1. Añade un slider con mínimo 3 imágenes, una para cada personaje del
formulario, y que se muestren 2 a la vez y que pasen de una en una. El slider no ha
de pasar automáticamente, ha de estar estático.
2. Cuando la medida de la pantalla sea menor a 700px muestra solo una imagen y
muestra los dots (los puntos).*/

$(document).ready(ini);
function ini() {
    $('.slider').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='al.jpg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='ar.jpg'>",
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
}