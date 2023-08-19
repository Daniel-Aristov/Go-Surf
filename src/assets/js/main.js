$(function(){
	// HEADER
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

	// SURF
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		autoplay: false,
		autoplaySpeed: 2000,
		swipe: false,
		focusOnSelect: false,
		asNavFor: '.slider-map',
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					unslick: true
				}
			},
		]
	})

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.surf-slider',
		responsive: [
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					unslick: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
					dots: false,
					unslick: true
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
					dots: false,
					unslick: true
				}
			},
		]
	})

	// TRAVEL AND SLEEP
	$('.holder__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		infinite: true,
		fade: true,
		autoplay: false,
	})

	$('<div class="quantity-button minus">-</div>').insertBefore('.quantity input[type="number"]');
	$('<div class="quantity-button plus">+</div>').insertAfter('.quantity input[type="number"]');
	$(document).ready(function(){
		$('.plus').on('click', function() {
				if ($(this).prev().val()) {
						$(this).prev().val(+$(this).prev().val() + 1);
				}
		});
		$('.minus').on('click', function() {
				if ($(this).next().val() > 1) {
						if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
				}
		});
	});

	$('.quantity-button').on('click', function() {
		let sum = Number($('.nights').val()) * Number($('.sum').data('nights')) + Number(($('.guests').val() - 1)) * $('.sum').data('guests');
		$('.sum').html('$' + sum);
	});
	let sum = Number($('.nights').val()) * Number($('.sum').data('nights')) + Number(($('.guests').val() - 1)) * $('.sum').data('guests');
	$('.sum').html('$' + sum);

	$('.shop__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<svg class="slider-arrows slider-arrows__left"><use xlink:href="assets/images/svg/sprite.svg#arrows-left"></use></svg>',
		nextArrow: '<svg class="slider-arrows slider-arrows__right"><use xlink:href="assets/images/svg/sprite.svg#arrows-right"></use></svg>',
		infinite: true,
		fade: true,
		autoplay: false,
	})

	$('.surfboard-box__circle').on('click', function() {
		$(this).toggleClass('active')
	});

	$('.menu-btn').on('click', function() {
		$('.menu').toggleClass('menu-show')
	});

	wow = new WOW (
		{
		boxClass:     'wow',
		animateClass: 'animate__animated',
		mobile:       false,
		live:         true,
	})
	wow.init();
})
