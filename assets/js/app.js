$(function (){
    'use strict';

    //Banner slider
    $('.banner-slider').slick({
        prevArrow:'<i class="fas fa-chevron-left banner-arrow1 left "></i>',
        nextArrow:'<i class="fas fa-chevron-right banner-arrow1 right"></i>',
        slidesToShow:1,
        slidesToScroll: 1, 
        autoplay:true,
        autoplaySpeed:500,
        arrows: true,
        fade:true,
        dots: true,
        cssEase:'linear',
    })
    
});