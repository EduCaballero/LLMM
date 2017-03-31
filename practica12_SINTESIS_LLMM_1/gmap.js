$(document).ready(function () {
    $('.slider').slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='al.jpg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='ar.jpg'>",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
});