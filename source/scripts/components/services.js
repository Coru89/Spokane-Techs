'use strict';

$( document ).ready(function () {
	$('.st-services__tab').on('click', function () {
		$('.st-services__tab').removeClass('st-services__item--active');
		$(this).addClass('st-services__item--active');
		$('.st-services__hidden--md').addClass('st-services__hidden');
		$(this).children('.st-services__hidden--md').removeClass('st-services__hidden');
	});
	$('.st-services__tab-main').on('click', function () {
		$(this).next('.st-services__content-box').toggleClass('st-services__content-box--active');
	});
});
