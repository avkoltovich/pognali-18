"use strict";

var siteHeader = document.querySelector('.site-header');
var menuBtn = siteHeader.querySelector('.site-header__button--menu');
var isUserMenu = document.querySelector('.user-menu');
var filterCountry = document.querySelector('.filter-country');
var filterBtnList = document.querySelectorAll('.filter__button--show');
var businessRateOpen = document.querySelector('.add-profile__link--all');
var businessRate = document.querySelector('.site-main__business-rate');
var stepCountryOpen = document.querySelector('.step__input--add-country');
var stepCountryClose = document.querySelector('.country__button--close');
var stepCountry = document.querySelector('.step__country');
var stepBtnDel = document.querySelectorAll('.step__button--del');

window.addEventListener('scroll', function (evt) {
  evt.preventDefault();
  if (window.pageYOffset > 1) {
    siteHeader.classList.add('site-header--scrolled');
  } else {
    siteHeader.classList.remove('site-header--scrolled');

  }
  if (window.pageYOffset > 23) {
    siteHeader.classList.add('site-header--animation');
  } else {
    siteHeader.classList.remove('site-header--animation');
  }
});

if (isUserMenu) {
  siteHeader.classList.toggle('site-header--index-closed');
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    siteHeader.classList.toggle('site-header--index-closed');
  });
} else {
  siteHeader.classList.toggle('site-header--closed');
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    siteHeader.classList.toggle('site-header--closed');
  });
}

if (businessRate) {
  var businessRateClose = businessRate.querySelector('.business-rate__button');

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
  var filterCountryBtnOpen = filterCountry.querySelector('.filter-country__button--close');
  var filterCountryBtnClose = filterCountry.querySelector('.filter-country__button--hide');
  var filterCountryLetterList = filterCountry.querySelectorAll('.filter-country__letter-button');
  var filterCountryList = filterCountry.querySelectorAll('.filter-country__list-wrap');
  var filterCountryLetterItem = filterCountry.querySelectorAll('.filter-country__letter-item');

  filterCountryBtnOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--closed');
  });

  filterCountryBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--closed');
  });

  var currentListShow = filterCountryList[0];
  var currentActiveItem = filterCountryLetterItem[0];

  for (var i = 0; i < filterCountryList.length; i++) {

    var currentLetterBtn = filterCountryLetterList[i];
    var currentCountryList = filterCountryList[i];
    var currentCountryLetterItem = filterCountryLetterItem[i];

    currentLetterBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      currentListShow.classList.toggle('filter-country__list-wrap--no-show');
      currentCountryList.classList.toggle('filter-country__list-wrap--no-show');

      currentActiveItem.classList.toggle('filter-country__letter-item--active');
      currentCountryLetterItem.classList.toggle('filter-country__letter-item--active');

      currentListShow = currentCountryList;
      currentActiveItem = currentCountryLetterItem;
    });
  }
}

if (filterBtnList) {
  var filterLabelWrapList = document.querySelectorAll('.filter__label-wrap');
  var filterSVGList = document.querySelectorAll('.filter__icon--hide');
  for (var i = 0; i < filterBtnList.length; i++) {

    // Вынужденная мера из-за поддержки IE 11

    var currentBtn = filterBtnList[i];
    var currentLabelWrap = filterLabelWrapList[i];
    var currentFilterSVGList = filterSVGList[i];

    currentBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      currentLabelWrap.classList.toggle('filter__label-wrap--closed');
      currentFilterSVGList.classList.toggle('filter__icon--rotated');
    });
  };
};
