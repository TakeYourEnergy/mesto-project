import '../pages/index.css';
import { openPopup, closePopup, closePopupClickOutForm } from '../components/modal.js';
import { addCard } from '../components/card.js';
import { validationConfig, enableValidation, deleteErrorOpenPopup, openAddCard, openAvatar } from '../components/validate.js';
import { buttonEdit, formPopupEditProfile, buttonCloseProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupPhoto, popupPhotoCloseButton, popups, popupAddCard, popupEditProfile, nameInput, jobInput, popupInputTitle, popupInputUrl, buttonAddCard, profileName, profileText, myId, popupAvatar, buttonAvatar, formAvatar, BtnAvatarClose, avatarImage, avatarInput } from '../components/const.js';
import { getProfile, getCards, newProfile, newCard, newAvatar } from '../components/api.js';


getProfile()
  .then((result) => {
    //console.log(result._id)
    profileName.textContent = result.name
    profileText.textContent = result.about
    myId.id = result._id
    //console.log(myId)
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
  newProfile(nameInput.value, jobInput.value)
    .then((res) => {
      console.log(res);
      profileName.textContent = res.name
      profileText.textContent = res.about
    })
  closePopup(popupEditProfile)
}

function hanldeAddNewCardFormSubmit(e) {
  newCard(popupInputTitle.value, popupInputUrl.value)
    .then((res) => {
      addCard(res)
    })
  e.target.reset()
  closePopup(popupAddCard)
  buttonAddCard.setAttribute('disabled', true)
}

function hanldeAvatarFormSubmit(e) {
  newAvatar(avatarInput.value)
    .then((res) => {
      console.log(avatarImage.src);
      console.log(res.avatar);
      avatarImage.src = res.avatar
      e.target.reset()
    })

  closePopup(popupAvatar)
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


