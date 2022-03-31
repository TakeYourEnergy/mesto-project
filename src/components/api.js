const config = {
  url: 'https://nomoreparties.co/v1/plus-cohort-8',
  headers: {
    authorization: '8b702e0f-d546-40bd-a650-cc80ffee7b56',
    'Content-Type': 'application/json'
  }
}

export function onResponce(res) {
  return res.ok ? res.json() : Promise.reject(res.status)
}

export function getProfile() {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers
  })
    .then(onResponce)
}

export function getCards() {
  return fetch(`${config.url}/cards`, {
    headers: config.headers
  })
    .then(onResponce)
}

export function newProfile(name, about) {
  return fetch(`${config.url}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(onResponce)
}

export function newCard(name, link) {
  return fetch(`${config.url}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(onResponce)
}

export function removeCard(cardId) {
  return fetch(`${config.url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(onResponce)
}

export function addLike(cardId) {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(onResponce)
}

export function removeLike(cardId) {
  return fetch(`${config.url}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(onResponce)
}


export function newAvatar(link) {
  return fetch(`${config.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(onResponce)
}




