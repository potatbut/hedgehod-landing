import "./import-jquery"
import './style/style.scss'

import "slick-carousel"
import 'slick-carousel/slick/slick.min';

console.log('ДОБРЫЙ ДЕНЬ')

$('.slider__wrapper').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
      }
    }, 
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }, 
    {
      variableWidth: true,
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        arrows: false,
      }
    }
  ]
});

$('.slide__info-badge').click(function(e) {
 $(e.target.querySelector(".info-block")).toggleClass("show")
})

$(".header__burger").click(function(event) {
  $(".header__burger, .header__nav, .header__tel").toggleClass("display")
})