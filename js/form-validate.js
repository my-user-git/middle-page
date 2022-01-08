let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

			fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
		}
	});
}


new JustValidate ('.section-contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 4,
            maxLength: 20
        },
        tel: {
            required: true,
            // function: (name, value) => {
            //     const phone = selector.inputmask.unmaskedvalue()
            //     console.log(phone)
            //     return Number(phone) && phone.length === 10
            // }
        },
        // email: {
        //     required: true,
        //     email: true
        // },
    },
    messages: {
        name: {
            minLength: '<span class="form__label">Недопустимый формат</span>',
            required: '<span class="form__label">Недопустимый формат</span>'
        },

        tel: {
            required: '<span class="form__label">Недопустимый формат</span>',
            error: '<span class="form__label">Недопустимый формат</span>'
        },

        // email: {
        //     required: '<span class="form__label">Укажите ваш email</span>'
        // },
    },
})
