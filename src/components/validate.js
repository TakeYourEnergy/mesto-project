export { validationConfig, showInputError, hideInputError, checkInputValidity, hasInvalidInput, toggleButtonState, setEventListeners, enableValidation, deleteErrorOpenPopup, openAddCard, openAvatar };
import { formPopupAddCard, popupAddCard, popupAvatar, formAvatar } from './const.js';
import { openPopup } from './modal.js';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}

//! 5)Функция, которая добавляет класс с ошибкой
function showInputError(formElement, elementInput, errorMessage, config) {
  const errorElement = formElement.querySelector(`.${elementInput.id}-error`)
  elementInput.classList.add(config.inputErrorClass)
  errorElement.textContent = errorMessage
}

//! 4)Функция, которая удаляет класс с ошибкой
function hideInputError(formElement, elementInput, config) {
  const errorElement = formElement.querySelector(`.${elementInput.id}-error`)
  elementInput.classList.remove(config.inputErrorClass)
  errorElement.textContent = ""
}

//! 3)Функция, которая проверяет валидность поля Input любого в форме
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config)
  } else {
    hideInputError(formElement, inputElement, config)
  }
}

//! 7)проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  })
}

//! 6)отвечает за блокировку кнопки
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass)
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

//! 2)тут находим все инпуты и вешаем событие input
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector))
  const buttonElement = formElement.querySelector(config.submitButtonSelector)

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config)
    })
  })
}

//! 1)тут находим все формы
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    })
    setEventListeners(formElement, config)
  })
}

function deleteErrorOpenPopup(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector))
  const buttonElement = formElement.querySelector(config.submitButtonSelector)
  toggleButtonState(inputList, buttonElement, config)

  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement, config)
  })
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


