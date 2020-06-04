"use strict";

let siteHeader = document.querySelector(".site-header");
let menuBtn = siteHeader.querySelector(".site-header__button--menu");
let isUserMenu = document.querySelector(".user-menu");
let filterCountry = document.querySelector(".filter-country");
let filterBtnList = document.querySelectorAll(".filter__button--show");
let businessRateOpen = document.querySelector(".add-profile__link--all");
let businessRate = document.querySelector(".site-main__business-rate");
let stepCountryOpen = document.querySelector(".step__input--add-country");
let stepCountryClose = document.querySelector(".country__button--close");
let stepCountry = document.querySelector(".step__country");
let stepBtnDel = document.querySelectorAll(".step__button--del");

window.addEventListener("scroll", function (evt) {
  evt.preventDefault();
  if (window.pageYOffset > 1) {
    siteHeader.classList.add("site-header--scrolled");
  } else {
    siteHeader.classList.remove("site-header--scrolled");

  }
  if (window.pageYOffset > 23) {
    siteHeader.classList.add("site-header--animation");
  } else {
    siteHeader.classList.remove("site-header--animation");
  }
});

if (isUserMenu) {
  siteHeader.classList.toggle("site-header--index-closed");
  menuBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    siteHeader.classList.toggle("site-header--index-closed");
  });
} else {
  siteHeader.classList.toggle("site-header--closed");
  menuBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    siteHeader.classList.toggle("site-header--closed");
  });
}

if (businessRate) {
  let businessRateClose = businessRate.querySelector(".business-rate__button");

  businessRateOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessRate.classList.toggle("display-none");
  });

  businessRateClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessRate.classList.toggle("display-none");
  });
};

if (stepCountry) {
  stepCountryOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    stepCountry.classList.toggle("display-none");
    stepBtnDel[stepBtnDel.length - 1].classList.toggle("display-none");
  });

  stepCountryClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    stepCountry.classList.toggle("display-none");
    stepBtnDel[stepBtnDel.length - 1].classList.toggle("display-none");
  });
};

if (filterCountry) {
  let filterCountryBtnOpen = filterCountry.querySelector(".filter-country__button--close");
  let filterCountryBtnClose = filterCountry.querySelector(".filter-country__button--hide");
  let filterCountryLetterList = filterCountry.querySelectorAll(".filter-country__letter-button");
  let filterCountryList = filterCountry.querySelectorAll(".filter-country__list-wrap");
  let filterCountryLetterItem = filterCountry.querySelectorAll(".filter-country__letter-item");

  filterCountryBtnOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle("filter-country--closed");
  });

  filterCountryBtnClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle("filter-country--closed");
  });

  let currentListShow = filterCountryList[0];
  let currentActiveItem = filterCountryLetterItem[0];

  for (let i = 0; i < filterCountryList.length; i++) {

    let currentLetterBtn = filterCountryLetterList[i];
    let currentCountryList = filterCountryList[i];
    let currentCountryLetterItem = filterCountryLetterItem[i];

    currentLetterBtn.addEventListener("click", function (evt) {
      evt.preventDefault();

      currentListShow.classList.toggle("filter-country__list-wrap--no-show");
      currentCountryList.classList.toggle("filter-country__list-wrap--no-show");

      currentActiveItem.classList.toggle("filter-country__letter-item--active");
      currentCountryLetterItem.classList.toggle("filter-country__letter-item--active");

      currentListShow = currentCountryList;
      currentActiveItem = currentCountryLetterItem;
    });
  }
}

if (filterBtnList) {
  let filterLabelWrapList = document.querySelectorAll(".filter__label-wrap");
  let filterSVGList = document.querySelectorAll(".filter__icon--hide");
  for (let i = 0; i < filterBtnList.length; i++) {

    // Вынужденная мера из-за поддержки IE 11

    let currentBtn = filterBtnList[i];
    let currentLabelWrap = filterLabelWrapList[i];
    let currentFilterSVGList = filterSVGList[i];

    currentBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      currentLabelWrap.classList.toggle("filter__label-wrap--closed");
      currentFilterSVGList.classList.toggle("filter__icon--rotated");
    });
  };
};
