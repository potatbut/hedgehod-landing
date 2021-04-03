import "./import-jquery"
import './style/style.scss'

import "slick-carousel"
import 'slick-carousel/slick/slick.min';

console.log('ДОБРЫЙ ДЕНЬ')

const dropdown = document. querySelector('.catalog__dropdown')
const triangle = document.querySelector('.triangle')
const triangleActive = document.querySelector('.triangle_active')

/* $(catalog).click(function() {
  $(dropdown).toggle(500)
  $(triangle).toggle()
  $(triangleActive).toggle()
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(catalog).length) {
    $(dropdown).hide(500)
    $(triangleActive).hide()
    $(triangle).show()
  }
  e.stopPropagation()
});
 */

$('.header__burger').click(function(event) {
  $('.list__wrapper, .phone-dropdown, .header__burger').toggleClass("show")
})

$('.slider__wrapper').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
});

$('.slide__info-badge').click(function(e) {
 $(e.target.querySelector(".info-block")).toggleClass("show")
})
