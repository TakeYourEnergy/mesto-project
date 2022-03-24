export { openPopup, closePopup, handleEscUp, closePopupClickOutForm };

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

