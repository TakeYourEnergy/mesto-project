const buttonEdit = document.querySelector('.profile__button-edit')
const popup = document.querySelector('.popup')
const buttonClose = document.querySelector('.popup__button-close')
const formElement = document.querySelector('.popup__information') // форма
const nameInput = document.querySelector('.popup__input-name')
const jobInput = document.querySelector('.popup__input-about')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')



//!открытие popup
buttonEdit.addEventListener('click', () => {
  popup.classList.add('popup_opened')
})

//!закрытие popup - по крестику
buttonClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened')
})

//!закрытие popup - по клику на фон (вне формы)
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('popup_opened')
  }
})

//!закрытие popup - по клавише Esc
document.addEventListener('keydown', (e) => {
  //console.log(e.code)
  if (e.code === "Escape") {
    popup.classList.remove('popup_opened')
  }
})

//!форма по яндексу
formElement.addEventListener('submit', (e) => {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value
})

//console.log(popup.classList.contains('popup_opened'));


