$('.product-item__favorite').on('click', function (){
  $(this).toggleClass('product-item__favorite--active');
})

$(function (){
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="../../img/arrow-black-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="../../img/arrow-black-right.svg" alt="arrow-right"></button>',
  });
})
