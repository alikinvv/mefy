$(function() {
	//Active menu
	$('ul li a').click(function(){
		$('li a').removeClass("active");
		$(this).addClass("active");
	});

	//Active filter
	$('.filter .item').click(function(){
		$('.filter .item').removeClass("active");
		$(this).addClass("active");
	});

	//Toggle menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mnu").fadeToggle();
		return false;
	});



	//Category
	$(".all_category").click(function() {
		if($(".s-area").is(":visible")){
			$(".s-area").slideUp();
			$(".all_category img").css("transform","rotate(0)");
		} else {
			$(".s-area").slideDown();
			$(".all_category img").css("transform","rotate(180deg)");
		}
	});

	//Hide
	$(".about").click(function() {
		if($(".info .h2 .hide").is(":visible")){
			$(".info .h2 .hide").slideUp();
			$(this).text("Читать больше");
		} else {
			$(".info .h2 .hide").slideDown();
			$(this).text("Скрыть");
		}
	});

		//Pen
		
		$('.fadestatus').hover(function() {
			$(this).next(".status").css("display", "inline-block");
		}, function() {
			$(this).next(".status").css("display", "none");
		});

		$('.fadename').hover(function() {
			$(this).children(".hide").css("display", "inline-block");
		}, function() {
			$(this).children(".hide").css("display", "none");
		});

		$('.t-item-wrap .button-center').click(function() {
			var item = $(this).parent(".t-item-wrap").children(".hide");
			if($(item).is(":visible")){
				$(item).slideUp();
				$(this).text("Показать больше");
			} else {
				$(item).slideDown();
				$(this).text("Скрыть");
			}
		});

		$('.tovar .button-center-all').click(function() {
			var item = $(this).parent(".tovar").children(".hide");
			if($(item).is(":visible")){
				$(item).slideUp();
				$(this).text("Все категории товаров компании");
			} else {
				$(item).slideDown();
				$(this).text("Скрыть все категории");
			}
		});

		$('.rev-show').click(function() {
			var item = $(this).parent(".right").parent(".bottom").parent(".item").children(".text").children(".hide");
			if($(item).is(":visible")){
				$(item).slideUp();
				$(this).text("Читать полностью");
			} else {
				$(item).slideDown();
				$(this).text("Скрыть");
			}
			return false;
		});		





		$('.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				var $svg = jQuery(data).find('svg');
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}
				$svg = $svg.removeAttr('xmlns:a');
				$img.replaceWith($svg);
			}, 'xml');
		});


	// sliders

	var swiper = new Swiper('.filter__top', {
		slidesPerView: 'auto',
		spaceBetween: 19.7,
		simulateTouch: false,
		navigation: {
			nextEl: '.filter__left',
			prevEl: '.filter__right',
		},
	});

	var akcii = new Swiper('.akcii.normal .akcii-slider', {
		slidesPerView: 'auto',
		spaceBetween: 38.5,
		freeMode: true,
		navigation: {
			nextEl: '.akcii__left',
			prevEl: '.akcii__right',
		},
	});

	$(".rev-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		adaptiveHeight: true,
		arrows: true,
		prevArrow:"<div class='prev'><img src='img/icon/small/prev.svg'></div>",
		nextArrow:"<div class='next'><img src='img/icon/small/next.svg'></div>"
	});

	$(".artikles-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		adaptiveHeight: true,
		arrows: true,
		prevArrow:"<div class='prev'><img src='img/icon/small/prev.svg'></div>",
		nextArrow:"<div class='next'><img src='img/icon/small/next.svg'></div>"
	});

	$(".brand-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		adaptiveHeight: true,
		arrows: true,
		prevArrow:"<div class='prev'><img src='img/icon/small/prev.svg'></div>",
		nextArrow:"<div class='next'><img src='img/icon/small/next.svg'></div>"
	});

	$(".akcii:not(.normal) .akcii-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		adaptiveHeight: true,
		arrows: true,
		prevArrow:"<div class='prev'><img src='img/icon/small/prev.svg'></div>",
		nextArrow:"<div class='next'><img src='img/icon/small/next.svg'></div>"
	});

	$(".sotrudniki-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		adaptiveHeight: true,
		arrows: true,
		prevArrow:"<div class='prev'><img src='img/icon/small/prev.svg'></div>",
		nextArrow:"<div class='next'><img src='img/icon/small/next.svg'></div>"
	});	

	$(".zayavki-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		adaptiveHeight: true,
		arrows: true,
		prevArrow:"<div class='prev'><img src='img/icon/small/prev.svg'></div>",
		nextArrow:"<div class='next'><img src='img/icon/small/next.svg'></div>"
	});

	var activeEl = $('.filter__nav a.active');
	$('body').on('mouseenter', '.filter__nav a', function () {
		$('.filter__nav a').removeClass('active');
	});

	$('body').on('mouseleave', '.filter__nav', function () {
		activeEl.addClass('active');
	});

	$('body').on('click', '.filter__nav a', function () {
		activeEl = $(this);
		$('.filter__nav a').removeClass('active');
		activeEl.addClass('active');	
	});

	$('body').on('click', '.all .letters a', function () {
		$('.all .letters a').removeClass('active');
		$(this).addClass('active');
	});

	if ($('.all .wrap').length > 0) {
		const ps = new PerfectScrollbar('.all .wrap', {
			wheelPropagation: true,
			minScrollbarLength: 20,
			maxScrollbarLength: 31
		});

		for (var i = 1; i <= $('.scroll').length; i++) {
			new PerfectScrollbar('.c' + i, {
				wheelPropagation: true,
				minScrollbarLength: 12,
				maxScrollbarLength: 12
			});
		}
	}	

	$('.ps__thumb-y').append('<span></span>');

	$('.filter').addClass('low')

	$('.filter__item').on('shown.bs.dropdown', function () {
		$('.filter').removeClass('low')
	});

	$('.filter__item').on('hide.bs.dropdown', function () {
		$('.filter').addClass('low')
	});

	$('body').on('click', '.checklist:not(.active) .btn', function () {
		$('.checklist').addClass('active')
		$(this).text('Сформировать заказ')
	});

	$('body').on('click', '.checklist.active .close', function () {
		$('.checklist').removeClass('active')
		$('.checklist .btn').text('Развернуть')
	});

	$('body').on('click', '.qest', function () {
		$(this).next('.answer').slideToggle();
		$(this).toggleClass('active');
	});

	$('body').on('click', '.group__toggle', function () {
		$(this).closest('.group').next('.group-list').slideToggle();
		$(this).closest('.group').toggleClass('active');
	});

	$('.group.active').next('.group-list').css('display', 'block');
	$('.qest.active').next('.answer').css('display', 'block');


	$('body').on('click', '.info-one .link:not(.active)', function () {
		$('.info-one .link').removeClass('active');
		$(this).addClass('active');

	});	

	$('body').on('click', '.info-one .link.active', function () {
		$('.info-one .link').removeClass('active');
	});	

	$('body').on('click', '.mnu-item', function () {
		$(this).find('.user-menu').toggleClass('active')
	});	

	$('body').on('click', '.open-checklist', function () {
		$('.checklist').toggleClass('open');
	});	
});