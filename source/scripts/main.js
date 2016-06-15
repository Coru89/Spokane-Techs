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
			var payload = {};
			$(this).closest('.st-form__input-wrapper').addClass('st-form__loading');
			payload = collectFormValues();
			postForm(payload);
			console.log('form is valid yay, fml.');
		}
		// disabled below just to test
		// $(this).closest('.st-form__input-wrapper').removeClass('st-form__loading');
	});

	function collectFormValues () {
		var formData = {};
		formData.email = $('.st-form__group input:nth-child(1)').val();
		formData.phone = $('.st-form__group input:nth-child(2)').val();
		formData.name = $('input:first-of-type').val();
		formData.description = $('textarea').val();
		console.log(formData);

		return formData;
	}

	function postForm (payload) {
		// $.ajax({
		// 	type: 'POST',
		// 	url: 'http://st.mrwebster.net/email.php',
		// 	// The key needs to match your method's input parameter (case-sensitive).
		// 	data: JSON.stringify(payload), // {name: string, email: string, phone: string, message: string}
		// 	contentType: 'application/json; charset=utf-8',
		// 	dataType: 'json',
		// 	success: formSubmissionSuccess(formData),
		// 	failure: function (errMsg) {
		// 		console.log(errMsg);
		// 	}
		// });

		formSubmissionSuccess();
	}

	function formSubmissionSuccess(data) {
		//TODO Check for erros

		if (true) { //noerrors
			//update form
			console.log('hi');
		} else {
			//Show error message on form
			console.log('hi');
		}
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
				// console.log('are we here' + inputLength);
				$(this).closest('.st-form__input-wrapper').addClass('st-form__error');
				valid = false;
			}
		});

		return valid;
	}
})();
