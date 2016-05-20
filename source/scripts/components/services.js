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

		//Below was me trying to figure out how to edit a pseudo class (:before) using jquery. This only allowed me to edit the style sheet, not target specific elemnts.
		//This would be better handled by creating a new class for borders and using .addclass / .removeclass

		// $(this).closest('.grid__row').children('.st-services__tab').each(function () {
		// 	document.styleSheets[0].addRule('.st-services__tab:before', 'border-style:hidden !important', 0);
		// 	console.log('1++');
		// });


	});

	//expand and collapse all business services at once.
	$('.st-services__tab-main').on('click', function () {
		//this adds active class to main service dropdown + hides and removes the extra dark bar when the main tab is not expanded
		$(this).closest('.st-services').find('#st-services__bottom-bar').toggleClass('st-services__bottom-bar');
		$(this).toggleClass('st-services__tab-main--active');
	});
});
