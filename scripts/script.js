let buttonEdit = document.querySelector('.profile__button-edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__button-close')

//открытие popup
buttonEdit.addEventListener('click', () => {
  popup.classList.add('popup_opened')
})

//закрытие popup
buttonClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened')
})

