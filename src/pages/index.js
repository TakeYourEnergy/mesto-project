import '../pages/index.css';
import { openPopup, closePopup, handlePopupClose, openAddCard, openAvatar } from '../components/modal.js';
import { addCard, cloneCard } from '../components/card.js';
import { validationConfig, enableValidation, deleteErrorOpenPopup } from '../components/validate.js';
import { buttonEdit, formPopupEditProfile, buttonCloseProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupPhoto, popupPhotoCloseButton, popups, popupAddCard, popupEditProfile, nameInput, jobInput, popupInputTitle, popupInputUrl, buttonAddCard, profileName, profileText, myId, popupAvatar, buttonAvatar, formAvatar, BtnAvatarClose, avatarImage, avatarInput, buttonProfile, avatarSubmit, box } from '../components/const.js';
import { getProfile, getCards, changeProfile, postNewCard, changeAvatar } from '../components/api.js';


Promise.all([getProfile(), getCards()])
  .then(([userData, cards]) => {
    profileName.textContent = userData.name
    profileText.textContent = userData.about
    myId.id = userData._id
    avatarImage.src = userData.avatar
    cards.forEach(item => {
      box.append(cloneCard(item))
    })
  })
  .catch(err => console.error(err))

enableValidation(validationConfig)

function openPopupProfile() {
  nameInput.value = profileName.textContent
  jobInput.value = profileText.textContent
  openPopup(popupEditProfile)
}

function hanldeProfileFormSubmit() {
  renderLoading(true, buttonProfile)
  changeProfile(nameInput.value, jobInput.value)
    .then((res) => {
      profileName.textContent = res.name
      profileText.textContent = res.about
      closePopup(popupEditProfile)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false, buttonProfile)
    })
}

function hanldeAddpostNewCardFormSubmit(e) {
  renderLoading(true, buttonAddCard)
  postNewCard(popupInputTitle.value, popupInputUrl.value)
    .then((res) => {
      console.log(res);
      box.prepend(cloneCard(res))
      e.target.reset()
      closePopup(popupAddCard)
      buttonAddCard.setAttribute('disabled', true)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false, buttonAddCard)
    })
}

function hanldeAvatarFormSubmit(e) {
  renderLoading(true, avatarSubmit)
  changeAvatar(avatarInput.value)
    .then((res) => {
      avatarImage.src = res.avatar
      e.target.reset()
      closePopup(popupAvatar)
    })
    .catch((res) => console.log(res))
    .finally(() => {
      renderLoading(false, avatarSubmit)
    })

}

//!загрузка
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
  item.addEventListener('click', handlePopupClose)
})


buttonEdit.addEventListener('click', () => {
  deleteErrorOpenPopup(formPopupEditProfile, validationConfig)
  openPopupProfile()
})
formPopupEditProfile.addEventListener('submit', hanldeProfileFormSubmit);


buttonAdd.addEventListener('click', () => {
  openAddCard()
})
formPopupAddCard.addEventListener('submit', hanldeAddpostNewCardFormSubmit)


buttonAvatar.addEventListener('click', () => {
  openAvatar()
})
formAvatar.addEventListener('submit', hanldeAvatarFormSubmit);



