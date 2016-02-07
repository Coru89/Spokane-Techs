'use strict';

$( document ).ready(function () {
	$('.st-services__tab').on('click', function () {
		$('.st-services__tab').removeClass('st-services__item--active');
		$(this).addClass('st-services__item--active');

		//expand and collapse individual services when in mobile view
		$('.st-services__hidden--md').addClass('st-services__hidden');
		$(this).children('.st-services__hidden--md').removeClass('st-services__hidden');

		//get content from correct service and display it into the single column row on ipad
		var content = $(this).children('.st-services__hidden--md').text();
		$(this).siblings('.st-services__item-content').children('p').text(content);
	});

	$('.st-services__tab-main').on('click', function () {
		//expand and collapse all business services at once.
		$(this).next('.st-services__content-box').toggleClass('st-services__content-box--active');
	});
});
