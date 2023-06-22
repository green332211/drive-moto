$(function () {
  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  })

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 100000,
    max: 500000,
  });

  $('.filter-btn__send').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('filter-btn__send--active');
  });

  $('.catalog__filter-btn--grid').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btn--line').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  })

  $('.catalog__filter-btn--line').on('click', function() {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btn--grid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });
})
