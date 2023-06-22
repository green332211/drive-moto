$(function () {
  $('.footer__top-drop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__top-drop--active');
  });
});
