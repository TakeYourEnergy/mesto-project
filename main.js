/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function e(e){document.addEventListener("keydown",n),e.classList.add("popup_opened"),document.body.style.overflow="hidden"}function t(e){document.removeEventListener("keydown",n),e.classList.remove("popup_opened"),document.body.style.overflow="visible"}var n=function(e){var n=document.querySelector(".popup_opened");"Escape"===e.key&&t(n)};function o(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__button-close"))&&t(e.target)}var r=document.querySelector(".popup_edit-profile"),c=document.querySelector(".profile__button-edit"),u=r.querySelector(".popup__form"),i=r.querySelector(".popup__button-close"),a=r.querySelector(".popup__input-name"),l=r.querySelector(".popup__input-about"),s=r.querySelector(".popup__button-submit-save"),d=document.querySelector(".popup_add_card"),p=document.querySelector(".profile__button-add"),f=d.querySelector(".popup__form"),_=d.querySelector(".popup__button-close"),v=d.querySelector(".popup__input-title"),h=d.querySelector(".popup__input-url"),m=d.querySelector(".popup__button-submit-create"),y=document.querySelector(".popup-photo"),S=y.querySelector(".popup__button-close"),b=y.querySelector(".popup-photo__click"),q=y.querySelector(".popup-photo__title"),E=document.querySelector(".profile__name"),L=document.querySelector(".profile__text"),k=document.querySelector(".popup_avatar"),g=document.querySelector(".profile__avatar-img"),x=document.querySelector(".profile__avatar-button"),C=k.querySelector(".popup__form-avatar"),A=k.querySelector(".popup__button-close"),T=k.querySelector(".popup__input-avatar-url"),B=k.querySelector(".popup__button-submit-save"),P=document.querySelector(".box"),w=document.querySelectorAll(".popup"),N={id:""},O={url:"https://nomoreparties.co/v1/plus-cohort-8",headers:{authorization:"8b702e0f-d546-40bd-a650-cc80ffee7b56","Content-Type":"application/json"}};function j(e){return e.ok?e.json():Promise.reject(e.status)}function D(t){console.log(t);var n=document.querySelector("#templateCards").content.querySelector(".box__element").cloneNode(!0),o=n.querySelector(".box__image"),r=n.querySelector(".box__heart"),c=t._id,u=n.querySelector(".box__counter"),i=n.querySelector(".box__delete");return o.src=t.link,o.alt=t.name,n.querySelector(".box__title").textContent=t.name,u.textContent=t.likes.length,t.owner._id!==N.id?i.style.display="none":i.addEventListener("click",(function(){(function(e){return fetch("".concat(O.url,"/cards/").concat(e),{method:"DELETE",headers:O.headers}).then(j)})(c).then((function(){n.remove()})).catch((function(e){return console.log(e)}))})),r.addEventListener("click",(function(e){e.target.classList.toggle("box__heart_active"),r.classList.contains("box__heart_active")?function(e){return fetch("".concat(O.url,"/cards/likes/").concat(e),{method:"PUT",headers:O.headers}).then(j)}(c).then((function(e){u.textContent=e.likes.length})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(O.url,"/cards/likes/").concat(e),{method:"DELETE",headers:O.headers}).then(j)}(c).then((function(e){u.textContent=e.likes.length})).catch((function(e){return console.log(e)}))})),t.likes.forEach((function(e){e._id===N.id&&r.classList.add("box__heart_active")})),o.addEventListener("click",(function(){var n,o;n=t.name,o=t.link,b.src=o,b.alt=n,q.textContent=n,e(y)})),n}var J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function H(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent=""}var z=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))};function M(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);z(n,o,t),n.forEach((function(n){H(e,n,t)}))}function U(e,t){t.textContent=e?"Сохранение...":t===B?"Сохранить":"Создать"}Promise.all([fetch("".concat(O.url,"/users/me"),{headers:O.headers}).then(j),fetch("".concat(O.url,"/cards"),{headers:O.headers}).then(j)]).then((function(e){console.log(e[0]),E.textContent=e[0].name,L.textContent=e[0].about,N.id=e[0]._id,g.src=e[0].avatar,e[1].forEach((function(e){P.append(D(e))}))})).catch((function(e){return console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?H(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),z(n,o,t)}))}))}(t,e)}))}(J),w.forEach((function(e){e.addEventListener("click",o)})),c.addEventListener("click",(function(){a.value=E.textContent,l.value=L.textContent,e(r)})),c.addEventListener("click",(function(){M(u,J)})),i.addEventListener("click",(function(){t(r)})),u.addEventListener("submit",(function(){var e,n;U(!0,s),(e=a.value,n=l.value,fetch("".concat(O.url,"/users/me"),{method:"PATCH",headers:O.headers,body:JSON.stringify({name:e,about:n})}).then(j)).then((function(e){E.textContent=e.name,L.textContent=e.about})).catch((function(e){return console.log(e)})).finally((function(){U(!1,s)})),t(r)})),p.addEventListener("click",(function(){e(d)})),_.addEventListener("click",(function(){t(d)})),f.addEventListener("submit",(function(e){var n,o;U(!0,m),(n=v.value,o=h.value,fetch("".concat(O.url,"/cards"),{method:"POST",headers:O.headers,body:JSON.stringify({name:n,link:o})}).then(j)).then((function(n){P.prepend(D(n)),e.target.reset(),t(d),m.setAttribute("disabled",!0)})).catch((function(e){return console.log(e)})).finally((function(){U(!1,m)}))})),S.addEventListener("click",(function(){t(y)})),p.addEventListener("click",(function(){f.reset(),e(d),M(d,J)})),x.addEventListener("click",(function(){e(k)})),x.addEventListener("click",(function(){C.reset(),e(k),M(k,J)})),C.addEventListener("submit",(function(e){var n;U(!0,B),(n=T.value,fetch("".concat(O.url,"/users/me/avatar"),{method:"PATCH",headers:O.headers,body:JSON.stringify({avatar:n})}).then(j)).then((function(n){console.log(n),g.src=n.avatar,e.target.reset(),t(k)})).catch((function(e){return console.log(e)})).finally((function(){U(!1,B)}))})),A.addEventListener("click",(function(){t(k)}))})();