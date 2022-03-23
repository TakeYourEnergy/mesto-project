export { openPopup, closePopup, handleEscUp, closePopupClickOutForm, openPopupPhoto, openPopupProfile, hanldeProfileFormSubmit, hanldeAddNewCardFormSubmit }
import { popupEditProfile, nameInput, jobInput, popupInputTitle, popupUnputUrl, buttonAddCard, popupPhoto, popupPhotoClick, popupPhotoTitle, profileName, profileText, popupAddCard } from './const.js'
import { addCard } from './card.js'

// !функция открытия
function openPopup(element) {
  document.addEventListener('keydown', handleEscUp)
  element.classList.add('popup_opened')
  document.body.style.overflow = 'hidden'
}
// !функция закрытия
function closePopup(element) {
  document.removeEventListener('keydown', handleEscUp);
  element.classList.remove('popup_opened')
  document.body.style.overflow = 'visible'
}

//!закрытие popup по esc
const handleEscUp = (e) => {
  const activePopup = document.querySelector('.popup_opened');
  if (e.key === "Escape") {
    closePopup(activePopup)
  }
}

//!закрытие по клику на фон - overlay
function closePopupClickOutForm(e) {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__button-close')) {
    closePopup(e.target)
  }
}

// !функция открытия модального окна с фото
function openPopupPhoto(title, link) {
  popupPhotoClick.src = link
  popupPhotoClick.alt = title
  popupPhotoTitle.textContent = title
  openPopup(popupPhoto)
}

function openPopupProfile() {
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
  openPopup(popupEditProfile)
}

function hanldeProfileFormSubmit() {
  profileName.textContent = nameInput.value
  profileText.textContent = jobInput.value
  closePopup(popupEditProfile)
}

function hanldeAddNewCardFormSubmit(e) {
  addCard({
    name: popupInputTitle.value,
    link: popupUnputUrl.value
  })
  e.target.reset()
  closePopup(popupAddCard)
  buttonAddCard.setAttribute('disabled', true)
}
