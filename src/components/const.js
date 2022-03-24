export { initialCards, popupEditProfile, buttonEdit, formPopupEditProfile, buttonCloseProfile, nameInput, jobInput, buttonProfile, buttonAdd, formPopupAddCard, buttonCloseAddCard, popupInputTitle, popupInputUrl, buttonAddCard, popupPhoto, popupPhotoCloseButton, popupPhotoImg, popupPhotoTitle, profileName, profileText, box, popups, popupAddCard }

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupEditProfile = document.querySelector('.popup_edit-profile')
const buttonEdit = document.querySelector('.profile__button-edit')
const formPopupEditProfile = popupEditProfile.querySelector('.popup__form')
const buttonCloseProfile = popupEditProfile.querySelector('.popup__button-close')
const nameInput = popupEditProfile.querySelector('.popup__input-name')
const jobInput = popupEditProfile.querySelector('.popup__input-about')
const buttonProfile = popupEditProfile.querySelector('.popup__button-submit-save')

const popupAddCard = document.querySelector('.popup_add_card')
const buttonAdd = document.querySelector('.profile__button-add')
const formPopupAddCard = popupAddCard.querySelector('.popup__form')
const buttonCloseAddCard = popupAddCard.querySelector('.popup__button-close')
const popupInputTitle = popupAddCard.querySelector('.popup__input-title')
const popupInputUrl = popupAddCard.querySelector('.popup__input-url')
const buttonAddCard = popupAddCard.querySelector('.popup__button-submit-create')

const popupPhoto = document.querySelector('.popup-photo')
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__button-close')
const popupPhotoImg = popupPhoto.querySelector('.popup-photo__click')
const popupPhotoTitle = popupPhoto.querySelector('.popup-photo__title')
const profileName = document.querySelector('.profile__name')
const profileText = document.querySelector('.profile__text')

const box = document.querySelector('.box')
const popups = document.querySelectorAll('.popup')
