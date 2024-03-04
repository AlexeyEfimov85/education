const form = document.querySelector('#popup-form');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.lead__button');
const registerButton = document.querySelector('.form__button_tablet');
const toggleButton = document.querySelector('.popup__toggle');
const popupOk = document.querySelector('#popup-ok');
const buttonOk = document.querySelector('#button-ok');

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  }); 

console.log(toggleButton);
openPopupButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
})

toggleButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

registerButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    popupOk.classList.add('popup_opened');
})

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        popup.classList.remove('popup_opened');
    }
})

popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
        popup.classList.remove('popup_opened');

    }
});

buttonOk.addEventListener('click', () => {
    popupOk.classList.remove('popup_opened');
})