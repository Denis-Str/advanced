const form = document.querySelector('.form');
const sendBtn = document.querySelector('.form__btn-submit');
const errorsElem = document.querySelectorAll('.form__error')

// перебор элементов формы
const formElements = (form) => {
    let arr = [];
    for (let i = 0; i < form.length; i++) {
        if (form[i].type !== 'submit')
            arr.push(form[i]);
    }
    return arr;
};

//Проверка полей формы
const formValidate = (form) => {
    let valid = true;
    formElements(form).forEach(elem => {
        if (!fieldValidate(elem)) {
            valid = false;
        }
    });
    return valid;
};

//Проверка поля
const fieldValidate = (elem) => {
    if (elem.type === 'text' || elem.type === 'textarea') {
        elem.nextElementSibling.textContent = elem.validationMessage;
    }
    console.log(elem.validationMessage)

    errorsElem.forEach(item => {
        item.classList.remove('form__error_show');
        item.classList.add('form__error_show')
    })
    return elem.checkValidity();
};

// отправка формы
sendBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (formValidate(form)) {
        let formData = new FormData(form);
        formData.append('to', 'exp@mail.com');
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', ()=> {
            if (xhr.response.status === 200) {
                console.log('send')
            }
        });
    }
});