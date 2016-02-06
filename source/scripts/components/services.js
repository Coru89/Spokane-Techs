'use strict';

$( document ).ready(function () {
	$('.st-services__tab').on('click', function () {
		$('.st-services__tab').removeClass('st-services__item--active');
		$(this).closest('.st-services__tab').toggleClass('st-services__item--active');
	});

	$('.st-services__tab-main').on('click', function () {
		$(this).next('.st-services__content-box').toggleClass('st-services__content-box--active');
	});
});
