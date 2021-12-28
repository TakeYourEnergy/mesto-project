const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const buttonEdit = document.querySelector('.profile__button-edit')
const popup = document.querySelector('.popup')
const buttonClose = document.querySelector('.popup__button-close')
const formElement = document.querySelector('.popup__information') // !форма
const nameInput = document.querySelector('.popup__input-name')
const jobInput = document.querySelector('.popup__input-about')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')
const hearts = document.querySelectorAll('.box__heart')




//!открытие popup
function openPopup() {
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
}
buttonEdit.addEventListener('click', openPopup)

//!закрытие popup - по крестику
function closePopup() {
  popup.classList.remove('popup_opened')
}
buttonClose.addEventListener('click', closePopup)

//!закрытие popup - по клику на фон (вне формы)
function closePopupClickOutForm(e) {
  if (e.target === popup) {
    popup.classList.remove('popup_opened')
  }
}
popup.addEventListener('click', closePopupClickOutForm)

//!закрытие popup - по клавише Esc
function closePopupEsc(e) {
  if (e.code === "Escape") {
    popup.classList.remove('popup_opened')
  }
}
document.addEventListener('keydown', closePopupEsc)

//!форма по яндексу
function formSubmitHandler(e) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value
  popup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', formSubmitHandler)

//!сердечко
function clickHeart() {
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', (e) => {
      if (e.target === hearts[i]) {
        hearts[i].classList.toggle('box__heart_active')
      }
    })
  }
}
clickHeart()






