import '../pages/index.css';
import { openPopup, closePopup, closePopupClickOutForm } from '../components/modal.js';
import { addCard } from '../components/card.js';
import { validationConfig, enableValidation, deleteErrorOpenPopup, openAddCard } from '../components/validate.js';
import { buttonEdit, formPopupEditProfile, buttonCloseProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupPhoto, popupPhotoCloseButton, popups, popupAddCard, popupEditProfile, nameInput, jobInput, popupInputTitle, popupInputUrl, buttonAddCard, profileName, profileText, myId } from '../components/const.js';
import { getProfile, getCards, newProfile, newCard } from '../components/api.js';


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
      console.log(res)
      profileName.textContent = res.name
      profileText.textContent = res.about
    })
  closePopup(popupEditProfile)
}

function hanldeAddNewCardFormSubmit(e) {
  // addCard({
  //   name: popupInputTitle.value,
  //   link: popupInputUrl.value
  // })
  newCard(popupInputTitle.value, popupInputUrl.value)
    .then((res) => {
      addCard(res)
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



