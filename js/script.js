//Menu
$('.menu__open').click(function() {
  $(this).fadeOut();
  $('.menu__close').fadeIn();
  $('.menu__body').slideDown();
  $('.menu').addClass('menu--open');
});

$('.menu__close').click(function() {
  $(this).fadeOut();
  $('.menu__open').fadeIn();
  $('.menu__body').slideUp();
  $('.menu').removeClass('menu--open');
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
