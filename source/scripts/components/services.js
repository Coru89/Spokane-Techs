'use strict';

$( document ).ready(function () {

	//specific to business services
	$('.st-services__tab-business').on('click', function () {
		$(this).removeClass('st-services__item--active-business');
		$(this).addClass('st-services__item--active-business');
		$('.st-services__tab-business').removeClass('st-services__item--active');
		$(this).addClass('st-services__item--active');
		$('.st-services__hidden-business').addClass('st-services__hidden');
		$(this).children('.st-services__hidden-business').removeClass('st-services__hidden');
	});

	//specific to residential services
	$('.st-services__tab-residential').on('click', function () {
		$(this).removeClass('st-services__item--active-residential');
		$(this).addClass('st-services__item--active-residential');
		$('.st-services__tab-residential').removeClass('st-services__item--active');
		$(this).addClass('st-services__item--active');
		$('.st-services__hidden-residential').addClass('st-services__hidden');
		$(this).children('.st-services__hidden-residential').removeClass('st-services__hidden');
	});

	$('.st-services__tab').on('click', function () {

		//get content from correct service and display it into the single column row on ipad
		var content = $(this).children('.st-services__hidden--md').text();
		$(this).siblings('.st-services__item-content').children('p').text(content);
	});

	//expand and collapse all business services at once.
	$('.st-services__tab-main').on('click', function () {
		$(this).next('.st-services__content-box').toggleClass('st-services__content-box--active');
	});
});
