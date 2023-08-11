$(function(){
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		swipe: false,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		asNavFor: '.slider-dots-head',
	})
	$('.slider-dots-head').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		swipe: false,
		asNavFor: '.header__slider',
	})
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		autoplay: true,
		autoplaySpeed: 2000,
		swipe: false,
		focusOnSelect: false,
		asNavFor: '.slider-map',
	})
	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.surf-slider',
	})
	$('.travel__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	})
})
