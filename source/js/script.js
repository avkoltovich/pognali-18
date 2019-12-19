"use strict";

const siteHeader = document.querySelector('.site-header');
const menuBtn = siteHeader.querySelector('.site-header__button--menu');
const nav = siteHeader.querySelector('.site-header__navigation');
const authBtn = siteHeader.querySelector('.site-header__button--auth');
const contactList = siteHeader.querySelector('.site-header__contact-list');
const socialList = siteHeader.querySelector('.site-header__social-list');

const businessRateOpen = document.querySelector('.add-profile__link--all');
const businessRateClose = document.querySelector('.business-rate__button');
const businessRate = document.querySelector('.site-main__business-rate');
const stepCountryOpen = document.querySelector('.step__input--add-country');
const stepCountryClose = document.querySelector('.country__button--close');
const stepCountry = document.querySelector('.step__country');
const stepBtnDel = document.querySelectorAll('.step__button--del');

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
