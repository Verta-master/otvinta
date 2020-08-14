//Menu
$('.menu__open').click(function() {
  $(this).hide();
  $('.menu__close').show();
  $('.menu__body').slideDown();
});

$('.menu__close').click(function() {
  $(this).hide();
  $('.menu__open').show();
  $('.menu__body').slideUp();
});
