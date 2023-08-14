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

})
