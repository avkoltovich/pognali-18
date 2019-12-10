"use strict";

let menuBtn = document.querySelector('.site-header__button--menu');
let nav = document.querySelector('.site-header__navigation');
let authBtn = document.querySelector('.site-header__button--auth');
let contactList = document.querySelector('.site-header__contact-list');
let socialList = document.querySelector('.site-header__social-list');

menuBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
    nav.classList.toggle('display-none');
    contactList.classList.toggle('display-none');
    socialList.classList.toggle('display-none');
    if (window.matchMedia("(max-width: 767px)").matches) {
      authBtn.classList.toggle('display-none');
    };
});
