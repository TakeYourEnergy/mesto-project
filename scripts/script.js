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
const popupEditProfile = document.querySelector('.popup_edit-profile')
const buttonEdit = document.querySelector('.profile__button-edit')
const formPopupEditProfile = popupEditProfile.querySelector('.popup__form')
const buttonCloseProfile = popupEditProfile.querySelector('.popup__button-close')
const nameInput = popupEditProfile.querySelector('.popup__input-name')
const jobInput = popupEditProfile.querySelector('.popup__input-about')
const popupAddCard = document.querySelector('.popup_add_card')
const buttonAdd = document.querySelector('.profile__button-add')
const formPopupAddCard = popupAddCard.querySelector('.popup__form')
const buttonCloseAddCard = popupAddCard.querySelector('.popup__button-close')
const popupInputTitle = popupAddCard.querySelector('.popup__input-title')
const popupUnputUrl = popupAddCard.querySelector('.popup__input-url')
const popupPhoto = document.querySelector('.popup-photo')
const closePopupPhoto = popupPhoto.querySelector('.popup__button-close')
const popupPhotoClick = popupPhoto.querySelector('.popup-photo__click')
const popupPhotoTitle = popupPhoto.querySelector('.popup-photo__title')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')
const box = document.querySelector('.box')
const popups = document.querySelectorAll('.popup')

function openPopup(element) {
  element.classList.add('popup_opened')
  document.body.style.overflow = 'hidden'
}

function closePopup(element) {
  element.classList.remove('popup_opened')
  document.body.style.overflow = 'visible'
}

function openPopupProfile() {
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
  openPopup(popupEditProfile)
}

function formSubmitHandlerProfile(e) {
  e.preventDefault()
  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value
  closePopup(popupEditProfile)
}

function openPopupPhoto(title, link) {
  popupPhotoClick.src = link
  popupPhotoClick.alt = title
  popupPhotoTitle.textContent = title
  openPopup(popupPhoto)
}

function clickHeart(e) {
  e.target.classList.toggle('box__heart_active')
}

const boxElementArr = document.querySelectorAll('.box__element')
boxElementArr.forEach(item => item.remove())

function deleteCard(e) {
  e.target.closest('.box__element').remove()
}

function cloneCard(item) {
  const templateCard = document.querySelector('#templateCards').content
  const templateCardCopy = templateCard.querySelector('.box__element').cloneNode(true)
  templateCardCopy.querySelector('.box__image').src = item.link
  templateCardCopy.querySelector('.box__image').alt = item.name
  templateCardCopy.querySelector('.box__title').textContent = item.name
  templateCardCopy.querySelector('.box__heart').addEventListener('click', clickHeart)
  templateCardCopy.querySelector('.box__delete').addEventListener('click', deleteCard)
  templateCardCopy.querySelector('.box__image').addEventListener('click', () => {
    openPopupPhoto(item.name, item.link)
  })
  return templateCardCopy
}

function addCard(item) {
  box.prepend(cloneCard(item))
}

initialCards.forEach(el => addCard(el))

function formSubmitHandlerAddNewCard(e) {
  e.preventDefault()
  addCard({
    name: popupInputTitle.value,
    link: popupUnputUrl.value
  })
  e.target.reset()
  closePopup(popupAddCard)
}

function closePopupClickOutForm(e) {
  if (e.target === popupEditProfile) {
    closePopup(popupEditProfile)
  }
  if (e.target === popupAddCard) {
    closePopup(popupAddCard)
  }
  if (e.target === popupPhoto) {
    closePopup(popupPhoto)
  }
}

popups.forEach(item => {
  item.addEventListener('click', closePopupClickOutForm)
})
buttonEdit.addEventListener('click', openPopupProfile)
buttonCloseProfile.addEventListener('click', () => {
  closePopup(popupEditProfile)
})
formPopupEditProfile.addEventListener('submit', formSubmitHandlerProfile);
buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard)
})
buttonCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
})
formPopupAddCard.addEventListener('submit', formSubmitHandlerAddNewCard)
closePopupPhoto.addEventListener('click', () => {
  closePopup(popupPhoto)
})
document.addEventListener('keydown', (e) => {
  if (e.code === "Escape") {
    closePopup(popupEditProfile)
    closePopup(popupAddCard)
    closePopup(popupPhoto)
  }
})










