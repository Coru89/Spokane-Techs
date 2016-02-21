'use strict';

$( document ).ready(function () {

	$('.st-services__tab').on('click', function () {
		//add active class to menu item + remove active class from all other items in menu
		$(this).closest('.st-services').find('.st-services__tab').removeClass('st-services__item--active');
		$(this).addClass('st-services__item--active');

		//add hidden class to menu item + remove hidden class from all other items in menu
		$(this).closest('.st-services').find('.st-services__hidden--md').addClass('st-services__hidden');
		$(this).children('.st-services__hidden--md').removeClass('st-services__hidden');

		//get content from correct service and display it into the single column row on ipad
		var content = $(this).children('.st-services__hidden--md').text();
		$(this).siblings('.st-services__item-content').children('p').text(content);
	});

	//expand and collapse all business services at once.
	$('.st-services__tab-main').on('click', function () {
		$(this).toggleClass('st-services__tab-main--active');
	});
});
