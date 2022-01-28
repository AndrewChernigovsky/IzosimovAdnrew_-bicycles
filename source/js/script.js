"use strict";

const mainForm = document.getElementById("mainForm"),
  userNameMainForm = document.getElementById("username"),
  userPhoneMainForm = document.getElementById("phone");

let navMain = document.querySelector(".main-nav"),
    navToggle = document.querySelector(".main-nav__toggle"),
    mainNavClosed = 'main-nav--closed',
    mainNavOpened = 'main-nav--opened';

navMain.classList.remove("main-nav--nojs");

if(navMain.classList.contains(mainNavOpened)) {
  navMain.classList.remove(mainNavOpened);
  navMain.classList.add(mainNavClosed);
}

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains(mainNavClosed)) {
    navMain.classList.remove(mainNavClosed);
    navMain.classList.add(mainNavOpened);
  } else {
    navMain.classList.add(mainNavClosed);
    navMain.classList.remove(mainNavOpened);
  }
});


mainForm.addEventListener("submit", function (evt) {
  if (isValidName(userNameMainForm)) {
    userNameMainForm.classList.add("error")
    evt.preventDefault();
  } else {
    userNameMainForm.classList.remove("error")
    userNameMainForm.classList.add("success")
    localStorage.setItem("username", userNameMainForm.value);
  }

  if (isValidPhone(userPhoneMainForm)) {
    userPhoneMainForm.classList.add("error")
    evt.preventDefault();
  } else {
    userPhoneMainForm.classList.remove("error")
    userPhoneMainForm.classList.add("success")
    localStorage.setItem("phone", userPhoneMainForm.value);
  }

  if(userPhoneMainForm.classList.contains("success") && userNameMainForm.classList.contains("success")) {
    alert("Форма успешно отправлена")
  }
});

function isValidPhone(input) {
  return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
    input.value
  );
}

function isValidName(input) {
  return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{3,30}$/.test(input.value);
}

userPhoneMainForm.oninput = function () {
  var rep = /[a-zA-ZА-Яа-я]/g;
  this.value = this.value.replace(rep, "");
};

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
