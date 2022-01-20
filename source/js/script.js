'use strict';

// BurgerMenu
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    }
});

// Form
const 
  mainForm = document.getElementById('mainForm'),
  userNameMainForm = document.getElementById('username'),
  userPhoneMainForm = document.getElementById('phone'),
  inputs = document.querySelectorAll('.Mainform-calltoAction__input'),
  buttonMainForm = document.getElementById('mainFormSubmit');

  mainForm.addEventListener('submit', function(evt) {
    inputs.forEach(el => {
      if (el.nextElementSibling){
        el.nextElementSibling.remove()
      }
  
      if (el.value === ' ') {
        el.classList.add('error');
        el.parentElement.insertAdjacentHTML(
          "beforeend",
          `<span class="errorText">поле должно быть заполнено</span>`
        );
      evt.preventDefault();
  
      } else {
        if (el.classList.contains('error')) {
          el.classList.remove('error');
          el.classList.add('success');
        }
      }
    });
  
        if (isValidPhone(userPhoneMainForm)){
          if (userPhoneMainForm.nextElementSibling){
            userPhoneMainForm.nextElementSibling.remove()
          }
          userPhoneMainForm.classList.remove('success');
          userPhoneMainForm.classList.add('error');
          userPhoneMainForm.parentElement.insertAdjacentHTML(
            "beforeend",
            `<span class="errorText">Неккоректно заполнено</span>`
          );
          evt.preventDefault();
        } else {
          if (userPhoneMainForm.nextElementSibling){
            userPhoneMainForm.nextElementSibling.remove()
          }
          userPhoneMainForm.classList.remove('error');
          userPhoneMainForm.classList.add('success');
        }
  
        if (isValidName(userNameMainForm)){
          if (userNameMainForm.nextElementSibling){
            userNameMainForm.nextElementSibling.remove()
          }
          userNameMainForm.classList.remove('success');
          userNameMainForm.classList.add('error');
          userNameMainForm.parentElement.insertAdjacentHTML(
            "beforeend",
            `<span class="errorText">Неккоректно заполнено</span>`
          );
          evt.preventDefault();
        } else {
          if (userNameMainForm.nextElementSibling){
            userNameMainForm.nextElementSibling.remove()
          }
          userNameMainForm.classList.remove('error');
          userNameMainForm.classList.add('success');
        }
  });


  function isValidPhone(input){
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
  };
  
  function isValidName(input){
    return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{3,30}$/.test(input.value);
  };