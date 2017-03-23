$(document).ready(ini);
function ini() {
    $('.slider').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='al.jpg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='ar.jpg'>",
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}