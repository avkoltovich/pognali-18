"use strict";

const siteHeader = document.querySelector('.site-header');
const menuBtn = siteHeader.querySelector('.site-header__button--menu');

const filterCountry = document.querySelector('.filter-country');
const filterCountryBtnOpen = filterCountry.querySelector('.filter-country__button--close');
const filterCountryBtnClose = filterCountry.querySelector('.filter-country__button--hide');

const filterBtnList = document.querySelectorAll('.filter__button--show');
const filterLabelWrapList = document.querySelectorAll('.filter__label-wrap');

const businessRateOpen = document.querySelector('.add-profile__link--all');
const businessRateClose = document.querySelector('.business-rate__button');
const businessRate = document.querySelector('.site-main__business-rate');
const stepCountryOpen = document.querySelector('.step__input--add-country');
const stepCountryClose = document.querySelector('.country__button--close');
const stepCountry = document.querySelector('.step__country');
const stepBtnDel = document.querySelectorAll('.step__button--del');

menuBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  siteHeader.classList.toggle('site-header--closed');
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

if (filterCountry) {
  filterCountryBtnOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--closed');
  });

  filterCountryBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--closed');
  });
}

if (filterBtnList) {
  for (let i = 0; i < filterBtnList.length; i++) {

    // Вынужденная мера из-за поддержки IE 11

    let currentBtn = filterBtnList[i];
    let currentLabelWrap = filterLabelWrapList[i];

    currentBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      currentLabelWrap.classList.toggle('display-none');
    });
  };
};
