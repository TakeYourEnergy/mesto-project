export { cloneCard, addCard };
import { box, popupPhotoImg, popupPhotoTitle, popupPhoto, myId } from './const.js';
import { openPopup } from './modal.js';
import { removeCard, addLike, removeLike } from './api.js';

function openPopupPhoto(title, link) {
  popupPhotoImg.src = link
  popupPhotoImg.alt = title
  popupPhotoTitle.textContent = title
  openPopup(popupPhoto)
}

function cloneCard(item) {
  const templateCard = document.querySelector('#templateCards').content
  const templateCardCopy = templateCard.querySelector('.box__element').cloneNode(true)
  const templateCardBoxImage = templateCardCopy.querySelector('.box__image')
  const boxHeart = templateCardCopy.querySelector('.box__heart')
  const cardId = item._id
  const boxCounter = templateCardCopy.querySelector('.box__counter')
  const btnDelete = templateCardCopy.querySelector('.box__delete')
  templateCardBoxImage.src = item.link
  templateCardBoxImage.alt = item.name
  templateCardCopy.querySelector('.box__title').textContent = item.name

  //!Отображение количества лайков карточки
  boxCounter.textContent = item.likes.length

  //!удаление своих карточек
  if (item.owner._id !== myId.id) {
    btnDelete.style.display = 'none'
  } else {
    btnDelete.addEventListener('click', () => {
      removeCard(cardId)
        .then(() => {
          templateCardCopy.remove()
        })
        .catch((err) => console.log(err))
    })
  }

  //!Постановка и снятие лайка
  boxHeart.addEventListener('click', (e) => {
    if (boxHeart.classList.contains('box__heart_active')) {
      removeLike(cardId)
        .then((res) => {
          boxHeart.classList.remove('box__heart_active')
          boxCounter.textContent = res.likes.length
        })
        .catch((err) => console.log(err))
    } else {
      addLike(cardId)
        .then((res) => {
          boxHeart.classList.add('box__heart_active')
          boxCounter.textContent = res.likes.length
        })
        .catch((err) => console.log(err))
    }
  })

  //! эта штука для того, чтобы прочекать лайк при загрузке или перезагрузке страницы и добавить его если уже лайкал
  item.likes.forEach(item => {
    if (item._id === myId.id) {
      boxHeart.classList.add('box__heart_active')
    }
  })

  //!разворачиваем картинку на весь экран по клику
  templateCardBoxImage.addEventListener('click', () => {
    openPopupPhoto(item.name, item.link)
  })
  return templateCardCopy
}

function addCard(item) {
  box.prepend(cloneCard(item))
}


