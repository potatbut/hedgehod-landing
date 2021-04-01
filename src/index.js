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


function showModal() {
  $('#popup').fadeIn('fast')
}

$('.popup__close-button').click(function(){
  $('#popup').fadeOut(500)
})
$('.popup__button').click(function(){
  $('#popup').fadeOut(500)
})

$(document).on('click', function(e) {
  if (!$(e.target).closest('.popup__container').length) {
    $('#popup').fadeOut(500)
  }
  e.stopPropagation()
});

setTimeout(showModal, 5000);

$('.header__burger').click(function(event) {
  $('.header__list, .phone-dropdown').toggleClass("show")
})