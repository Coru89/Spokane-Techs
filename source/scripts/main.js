/*!
 * main.js
 * Author: Corey Keller
 */
(function () {
	'use strict';

	$( document ).ready(function () {
		//expand and collapse all business services at once.
		$('.st-services__tab-main').on('click', function () {
			//this adds active class to main service dropdown + hides and removes the extra dark bar when the main tab is not expanded
			$(this).closest('.st-services').find('#st-services__bottom-bar').toggleClass('st-services__bottom-bar');
			$(this).toggleClass('st-services__tab-main--active');
		});

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
	});

	//on form submit
	$('.st-form__submit').on('click', function () {
		$('.st-form__input-wrapper').removeClass('st-form__error');

		if (validateForm()) {
			// initiate sending spinner
			$(this).closest('.st-form__input-wrapper').addClass('st-form__loading');
			var payload = {};
			payload = collectFormValues();
			postForm(payload);
		}
	});

	function collectFormValues () {
		var formData = {};
		formData.name = $('form [name="name"]').val();
		formData.email = $('form [name="email"]').val();
		formData.phone = $('form [name="phone"]').val();
		formData.message = $('form [name="message"]').val();
		formData.gotcha = $('form [name="_gotcha"]').val();

		return formData;
	}

	function postForm (payload) {
		var subject = 'Spokane Techs Form Submission: ' + payload.name;

		// if (payload.gotcha === '') {
		// 	$.ajax({
		// 		url: 'https://formspree.io/email@domain.com',
		// 		method: 'POST',
		// 		data: {
		// 			name: payload.name,
		// 			email: payload.email,
		// 			phone: payload.phone,
		// 			message: payload.message,
		// 			_subject: subject
		// 		},
		// 		dataType: 'json',
		// 		success: formSubmissionSuccess(),
		// 		failure: function (errMsg) {
		// 			console.log(errMsg);
		// 		}
		// 	});
		// }
	}

	function formSubmissionSuccess(data) {
		$('.st-form').html('<h3>Your message was successfuly delivered!</h3>');
	}

	function validateForm() {
		var formValid = true;
		formValid = validateGroup($('[data-form-type="group"]')) ? formValid : false;
		formValid = validateInputs($('[data-form-type="text"]')) ? formValid : false;

		return formValid;
	}

	function validateGroup($group) {
		var valid = false;

		$group.each(function () {
			var inputValue = this.value;

			if (inputValue.length !== 0 && /\S/.test(inputValue)) {
				valid = true;
			}
		});

		if (valid === false) {
			$group.closest('.st-form__input-wrapper').addClass('st-form__error');
		}

		return valid;
	}

	function validateInputs($selector) {
		var valid = true;

		$selector.each(function () {
			var inputValue = this.value;
			var inputLength = this.value.length;

			if (inputLength === 0 || !/\S/.test(inputValue)) {
				$(this).closest('.st-form__input-wrapper').addClass('st-form__error');
				valid = false;
			}
		});

		return valid;
	}
})();
