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
const buttonAdd = document.querySelector('.profile__button-add')
const popupEditProfile = document.querySelector('.popup_edit-profile')
const popupAddCard = document.querySelector('.popup_add_card')
const formElement = document.forms.peopleInformation // !форма 1
const formElementAdd = document.forms.newPlaceInformation //!форма 2
const nameInput = document.querySelector('.popup__input-name')
const jobInput = document.querySelector('.popup__input-about')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')
const popups = document.querySelectorAll('.popup')
const titleImageBox = document.querySelectorAll('.box__title')


//!открытие popup Profile
function openPopupProfile() {
  popupEditProfile.classList.add('popup_opened')
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
}
buttonEdit.addEventListener('click', openPopupProfile)

//!открытие popup New Card
function openPopupNewCard() {
  popupAddCard.classList.add('popup_opened')
}
buttonAdd.addEventListener('click', openPopupNewCard)

//!закрытие popup - по крестику
function closePopup() {
  popups.forEach(item => item.classList.remove('popup_opened'))
}

function closeClickOnCross() {
  const buttonClose = document.querySelectorAll('.popup__button-close')
  for (let i = 0; i < buttonClose.length; i++) {
    buttonClose[i].addEventListener('click', (e) => {
      popups[i].classList.remove('popup_opened')
    })
  }
}
closeClickOnCross()

//!закрытие popup - по клику на фон (вне формы)
function closePopupClickOutForm(e) {
  if (e.target === popupEditProfile || e.target === popupAddCard) {
    closePopup()
  }
}
popups.forEach(item => {
  item.addEventListener('click', closePopupClickOutForm)
})

//!закрытие popup - по клавише Esc
function closePopupEsc(e) {
  if (e.code === "Escape") {
    closePopup()
  }
}
document.addEventListener('keydown', closePopupEsc)

//!форма по яндексу
function formSubmitHandler(e) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value
  closePopup()
}
formElement.addEventListener('submit', formSubmitHandler)

//!функция замены карточек из массива
function replaceCard(arrayCards) {
  const imageBox = document.querySelectorAll('.box__image');

  for (let i = 0; i < imageBox.length; i++) {
    for (let j = 0; j < arrayCards.length; j++) {
      if (i === j) {
        imageBox[i].src = arrayCards[j].link
      }
    }
  }

  for (let k = 0; k < titleImageBox.length; k++) {
    for (let t = 0; t < arrayCards.length; t++) {
      if (k === t) {
        titleImageBox[k].textContent = arrayCards[t].name
      }
    }
  }
}
replaceCard(initialCards)

//!функция добавления карточки через popup
function addCardForPopup(e) {
  e.preventDefault()
  const templateCard = document.querySelector('#templateCards').content
  const templateCardCopy = templateCard.querySelector('.box__element').cloneNode(true)
  const box = document.querySelector('.box')
  box.prepend(templateCardCopy)

  templateCardCopy.querySelector('.box__image').src = e.target.urlToThePicture.value
  templateCardCopy.querySelector('.box__image').alt = e.target.titleNewPlace.value
  templateCardCopy.querySelector('.box__title').textContent = e.target.titleNewPlace.value

  const hearts = templateCardCopy.querySelector('.box__heart')
  hearts.addEventListener('click', (e) => {
    e.target.classList.toggle('box__heart_active')
  })

  const boxDelete = templateCardCopy.querySelector('.box__delete')
  boxDelete.addEventListener('click', (e) => {
    e.target.closest('.box__element').remove()
  })

  const openPhotoElement1 = templateCardCopy.querySelector('.box__image')
  const popupPhoto1 = document.querySelector('.popup-photo')
  const popupPhotoClick1 = document.querySelector('.popup-photo__click')
  const popupPhotoTitle1 = document.querySelector('.popup-photo__title')
  const titleImageBox1 = templateCardCopy.querySelector('.box__title')
  openPhotoElement1.addEventListener('click', (e) => {
    popupPhoto1.classList.add('popup_opened')
    popupPhotoClick1.src = openPhotoElement1.src
    popupPhotoTitle1.textContent = titleImageBox1.textContent
    popupPhotoClick1.alt = titleImageBox1.textContent
  })

  e.target.reset()
  closePopup()
}
formElementAdd.addEventListener('submit', addCardForPopup)

//!сердечко - без этого не работает начальные 6 карточек с сердчечками
function clickHeart() {
  const hearts1 = document.querySelectorAll('.box__heart')

  for (let i = 0; i < hearts1.length; i++) {
    hearts1[i].addEventListener('click', (e) => {
      if (e.target === hearts1[i]) {
        hearts1[i].classList.toggle('box__heart_active')
      }
    })
  }
}
clickHeart()

//!функция удаления карточки по клику на корзинку - без этого не работает начальные 6 карточек с сердчечками
function deleteCard() {
  const boxDelete1 = document.querySelectorAll('.box__delete')
  const boxElement1 = document.querySelectorAll('.box__element')

  for (let i = 0; i < boxDelete1.length; i++) {
    boxDelete1[i].addEventListener('click', (e) => {
      if (e.target === boxDelete1[i]) {
        boxElement1[i].remove()
      }
    })
  }
}
deleteCard()

//!добавление popup-photo
function openPhoto() {
  const openPhotoElement = document.querySelectorAll('.box__image')
  const popupPhoto = document.querySelector('.popup-photo')
  const popupPhotoClick = document.querySelector('.popup-photo__click')
  const popupPhotoTitle = document.querySelector('.popup-photo__title')

  for (let i = 0; i < openPhotoElement.length; i++) {
    openPhotoElement[i].addEventListener('click', (e) => {
      if (e.target === openPhotoElement[i]) {
        popupPhoto.classList.add('popup_opened')
        popupPhotoClick.src = openPhotoElement[i].src
        popupPhotoTitle.textContent = titleImageBox[i].textContent
        popupPhotoClick.alt = titleImageBox[i].textContent
      }
    })
  }
}
openPhoto()






