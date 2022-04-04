export { openPopup, closePopup, handleEscUp, handlePopupClose, openAddCard, openAvatar };
import { deleteErrorOpenPopup } from './validate.js';
import { formPopupAddCard, formAvatar, popupAddCard, popupAvatar } from './const.js';
import { validationConfig } from './validate.js'

// !функция открытия
function openPopup(element) {
    document.addEventListener('keydown', handleEscUp)
    element.classList.add('popup_opened')
  }

// !функция закрытия
function closePopup(element) {
  document.removeEventListener('keydown', handleEscUp);
  element.classList.remove('popup_opened')
}

//!закрытие popup по esc
const handleEscUp = (e) => {
  if (e.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup)
  }
}

//!закрытие по клику на фон - overlay
function handlePopupClose(e) {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__button-close')) {
    closePopup(e.currentTarget)
  }
}

const openAddCard = function () {
  formPopupAddCard.reset()
  openPopup(popupAddCard)
  deleteErrorOpenPopup(popupAddCard, validationConfig)
};

const openAvatar = function () {
  formAvatar.reset()
  openPopup(popupAvatar)
  deleteErrorOpenPopup(popupAvatar, validationConfig)
}

