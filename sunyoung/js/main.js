$('.menu-open').on('mouseenter', function() {
  if (window.innerWidth > 1024) {
    $('.fullscreen-menu').fadeIn(300);
  }
});
$('.hamburger').on('click', function() {
  $('.fullscreen-menu').fadeIn(300);
});
$('.close-btn').on('click', function() {
  $('.fullscreen-menu').fadeOut(300);
});
