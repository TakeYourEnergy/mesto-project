import '../pages/index.css';
import { openPopup, closePopup, closePopupClickOutForm } from '../components/modal.js';
import { addCard } from '../components/card.js';
import { validationConfig, enableValidation, deleteErrorOpenPopup, openAddCard, openAvatar } from '../components/validate.js';
import { buttonEdit, formPopupEditProfile, buttonCloseProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupPhoto, popupPhotoCloseButton, popups, popupAddCard, popupEditProfile, nameInput, jobInput, popupInputTitle, popupInputUrl, buttonAddCard, profileName, profileText, myId, popupAvatar, buttonAvatar, formAvatar, BtnAvatarClose, avatarImage, avatarInput, buttonProfile, avatarSubmit } from '../components/const.js';
import { getProfile, getCards, newProfile, newCard, newAvatar } from '../components/api.js';


getProfile()
  .then((result) => {
    console.log(result);
    avatarImage.src = result.avatar
    profileName.textContent = result.name
    profileText.textContent = result.about
    myId.id = result._id
  })

getCards()
  .then(res => {
    res.forEach(item => {
      addCard(item)
    })
  })

enableValidation(validationConfig)

function openPopupProfile() {
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
  openPopup(popupEditProfile)
}

function hanldeProfileFormSubmit() {

  renderLoading(true, buttonProfile)

  newProfile(nameInput.value, jobInput.value)
    .then((res) => {
      profileName.textContent = res.name
      profileText.textContent = res.about
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderLoading(false, buttonProfile)
    })
  closePopup(popupEditProfile)
}

function hanldeAddNewCardFormSubmit(e) {

  renderLoading(true, buttonAddCard)

  newCard(popupInputTitle.value, popupInputUrl.value)
    .then((res) => {
      addCard(res)
      e.target.reset()
      closePopup(popupAddCard)
      buttonAddCard.setAttribute('disabled', true)
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderLoading(false, buttonAddCard)
    })

}

function hanldeAvatarFormSubmit(e) {

  renderLoading(true, avatarSubmit)

  newAvatar(avatarInput.value)
    .then((res) => {
      console.log(res);
      avatarImage.src = res.avatar
      e.target.reset()
      closePopup(popupAvatar)
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderLoading(false, avatarSubmit)
    })

}

function renderLoading(isLoading, btn) {
  const textLoad = 'Сохранение...'
  if (isLoading) {
    btn.textContent = textLoad
  } else {
    if (btn === avatarSubmit) {
      btn.textContent = 'Сохранить'
    } else {
      btn.textContent = 'Создать'
    }
  }
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


buttonAvatar.addEventListener('click', () => {
  openPopup(popupAvatar)
})
buttonAvatar.addEventListener('click', openAvatar)
formAvatar.addEventListener('submit', hanldeAvatarFormSubmit);
BtnAvatarClose.addEventListener('click', () => {
  closePopup(popupAvatar)
})


