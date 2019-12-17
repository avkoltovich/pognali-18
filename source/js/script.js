"use strict";

let menuBtn = document.querySelector('.site-header__button--menu');
let nav = document.querySelector('.site-header__navigation');
let authBtn = document.querySelector('.site-header__button--auth');
let contactList = document.querySelector('.site-header__contact-list');
let socialList = document.querySelector('.site-header__social-list');
let businessRateOpen = document.querySelector('.add-profile__link--all');
let businessRateClose = document.querySelector('.business-rate__button');
let businessRate = document.querySelector('.site-main__business-rate');
let stepCountryOpen = document.querySelector('.step__input--add-country');
let stepCountryClose = document.querySelector('.country__button--close');
let stepCountry = document.querySelector('.step__country');
let stepBtnDel = document.querySelectorAll('.step__button--del');

menuBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  nav.classList.toggle('display-none');
  contactList.classList.toggle('display-none');
  socialList.classList.toggle('display-none');
  if (window.matchMedia("(max-width: 767px)").matches) {
    authBtn.classList.toggle('display-none');
  };
});

if (businessRate) {
  businessRateOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    businessRate.classList.toggle('display-none');
  });

  businessRateClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    businessRate.classList.toggle('display-none');
  });
};

if (stepCountry) {
  stepCountryOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    stepCountry.classList.toggle('display-none');
    stepBtnDel[stepBtnDel.length - 1].classList.toggle('display-none');
  });

  stepCountryClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    stepCountry.classList.toggle('display-none');
    stepBtnDel[stepBtnDel.length - 1].classList.toggle('display-none');
  });
};
