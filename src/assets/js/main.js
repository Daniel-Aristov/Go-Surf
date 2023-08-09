console.log("main");
$(function(){
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		asNavFor: '.slider-dots',
	})
	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	})
})
