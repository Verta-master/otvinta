//Menu
$('.menu__open').click(function() {
  $(this).addClass('menu__open--hide');
  $('.menu__close').addClass('menu__close--visible');
  $('.menu__body').slideDown();
  $('.menu').addClass('menu--open');
});

$('.menu__close').click(function() {
  $(this).removeClass('menu__close--visible');
  $('.menu__open').removeClass('menu__open--hide');
  $('.menu__body').slideUp();
  $('.menu').removeClass('menu--open');
});

$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.menu').addClass('menu--scroll');
  } else {
    $('.menu').removeClass('menu--scroll');
  };
});

//scroll to arrow anchors
$('.promo__scroll').click(function() {
  event.preventDefault();
  var id  = $(this).attr('href');
  var top = $(id).offset().top;
  $('body, html').animate({scrollTop: top}, 500);
});

//Select forms
$('.select__data').click(function(e) {
  event.preventDefault();
  e.stopPropagation();
  $('#data').slideToggle();
});

$('.select__data2').click(function(e) {
  event.preventDefault();
  e.stopPropagation();
  $('#data2').slideToggle();
});

//Hide popups on escape
$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('#data').slideUp();
    $('#data2').slideUp();
  }
})
