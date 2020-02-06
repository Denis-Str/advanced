const form = document.querySelector('.form');
const sendBtn = document.querySelector('.form__btn-submit');

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
    let flag = elem.checkValidity();
    flag ?
        elem.parentElement.classList.remove('error') :
        elem.parentElement.classList.add('error');

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