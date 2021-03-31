import "./import-jquery"

import './style/style.scss'
console.log('ДОБРЫЙ ДЕНЬ')

const catalog = document.querySelector('.catalog')
const dropdown = document. querySelector('.catalog__dropdown')
const triangle = document.querySelector('.triangle')
const triangleActive = document.querySelector('.triangle_active')

$(catalog).click(function() {
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