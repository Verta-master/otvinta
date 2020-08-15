//Menu
$('.menu__open').click(function() {
  $(this).fadeOut();
  $('.menu__close').fadeIn();
  $('.menu__body').slideDown();
});

$('.menu__close').click(function() {
  $(this).fadeOut();
  $('.menu__open').fadeIn();
  $('.menu__body').slideUp();
});
