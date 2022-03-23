export { cloneCard, addCard, deleteCard, clickHeart };
import { box } from './const.js'
import { openPopupPhoto } from './modal.js'

function cloneCard(item) {
  const templateCard = document.querySelector('#templateCards').content
  const templateCardCopy = templateCard.querySelector('.box__element').cloneNode(true)
  const templateCardBoxImage = templateCardCopy.querySelector('.box__image')
  templateCardBoxImage.src = item.link
  templateCardBoxImage.alt = item.name
  templateCardCopy.querySelector('.box__title').textContent = item.name
  templateCardCopy.querySelector('.box__heart').addEventListener('click', clickHeart)
  templateCardCopy.querySelector('.box__delete').addEventListener('click', deleteCard)
  templateCardBoxImage.addEventListener('click', () => {
    openPopupPhoto(item.name, item.link)
  })
  return templateCardCopy
}

function addCard(item) {
  box.prepend(cloneCard(item))
}

function deleteCard(e) {
  e.target.closest('.box__element').remove()
}

function clickHeart(e) {
  e.target.classList.toggle('box__heart_active')
}
