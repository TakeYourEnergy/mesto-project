import '../pages/index.css';
import { openPopup, closePopup, closePopupClickOutForm } from '../components/modal.js';
import { addCard } from '../components/card.js';
import { validationConfig, enableValidation, deleteErrorOpenPopup, openAddCard } from '../components/validate.js';
import { initialCards, buttonEdit, formPopupEditProfile, buttonCloseProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupPhoto, popupPhotoCloseButton, popups, popupAddCard, popupEditProfile, nameInput, jobInput, popupInputTitle, popupInputUrl, buttonAddCard, profileName, profileText } from '../components/const.js';


initialCards.forEach(el => addCard(el))
enableValidation(validationConfig)


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
    link: popupInputUrl.value
  })
  e.target.reset()
  closePopup(popupAddCard)
  buttonAddCard.setAttribute('disabled', true)
}


popups.forEach(item => {
  item.addEventListener('click', closePopupClickOutForm)
})
buttonEdit.addEventListener('click', openPopupProfile)

buttonEdit.addEventListener('click', () => {
  deleteErrorOpenPopup(formPopupEditProfile, validationConfig)
})

buttonCloseProfile.addEventListener('click', () => {
  closePopup(popupEditProfile)
})

formPopupEditProfile.addEventListener('submit', hanldeProfileFormSubmit);

buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard)
})
buttonCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard)
})

formPopupAddCard.addEventListener('submit', hanldeAddNewCardFormSubmit)

popupPhotoCloseButton.addEventListener('click', () => {
  closePopup(popupPhoto)
})

buttonAdd.addEventListener('click', openAddCard)



