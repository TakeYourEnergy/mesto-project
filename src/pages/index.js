import '../pages/index.css';
import { openPopup, closePopup, closePopupClickOutForm, openPopupProfile, hanldeProfileFormSubmit, hanldeAddNewCardFormSubmit } from '../scripts/modal.js';
import { addCard } from '../scripts/card.js';
import { validationConfig, enableValidation, deleteErrorOpenPopup, openAddCard } from '../scripts/validate.js';
import {initialCards, popupEditProfile, buttonEdit, formPopupEditProfile, buttonCloseProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupPhoto, closePopupPhoto, popups, popupAddCard} from '../scripts/const.js';


initialCards.forEach(el => addCard(el))
enableValidation(validationConfig)


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

closePopupPhoto.addEventListener('click', () => {
  closePopup(popupPhoto)
})

buttonAdd.addEventListener('click', openAddCard)



