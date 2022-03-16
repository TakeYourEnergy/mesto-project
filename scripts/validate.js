function setSubmitButtonStateProfile(isFormProfileValid) {
  if (isFormProfileValid) {
    buttonProfile.removeAttribute('disabled');
    buttonProfile.classList.remove('popup__button_disabled');
  } else {
    buttonProfile.setAttribute('disabled', true);
    buttonProfile.classList.add('popup__button_disabled');
  }
}

function setSubmitButtonStateAddCard(isFormAddCardValid) {
  if (isFormAddCardValid) {
    buttonAddCard.removeAttribute('disabled')
    buttonAddCard.classList.remove('popup__button_disabled')
  } else {
    buttonAddCard.setAttribute('disabled', true)
    buttonAddCard.classList.add('popup__button_disabled')
  }
}


popupEditProfile.addEventListener('input', (e) => {
  let isValidProfile
  if ((nameInput.value.length >= 2 && nameInput.value.length <= 40) && (jobInput.value.length >= 2 && jobInput.value.length <= 200)) {
    isValidProfile = true
  } else {
    isValidProfile = false
  }
  setSubmitButtonStateProfile(isValidProfile)
})

popupAddCard.addEventListener('input', (e) => {
  let isValidAddCard
  if (popupInputTitle.value.length >= 2 && popupInputTitle.value.length <= 30 && (popupUnputUrl.value.includes('http//') && popupUnputUrl.value.includes('https//'))) {
    isValidAddCard = true
  } else {
    isValidAddCard = false
  }
  setSubmitButtonStateAddCard(isValidAddCard)
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//! Функция, которая добавляет класс с ошибкой
function showInputError(formElement, elementInput, errorMessage) {
  const errorElement = formElement.querySelector(`.${elementInput.id}-error`)
  elementInput.classList.add('popup__input_type_error')
  errorElement.textContent = errorMessage
}

//! Функция, которая удаляет класс с ошибкой
function hideInputError(formElement, elementInput) {
  const errorElement = formElement.querySelector(`.${elementInput.id}-error`)
  elementInput.classList.remove('popup__input_type_error')
  errorElement.textContent = ""
}

//* Функция, которая проверяет валидность поля Input любого в форме
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement)
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
    })
  })
}
setEventListeners(formPopupEditProfile)


nameInput.addEventListener('input', () => {
  checkInputValidity(formPopupEditProfile, nameInput)
})




