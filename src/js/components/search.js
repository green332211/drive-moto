$('.tab').on('click', function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass('tab--active');
  $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

  $(this).addClass('tab--active');
  $($(this).attr('href')).addClass('tabs-content--active');

  $('.product-slider').slick('setPosition');
})
