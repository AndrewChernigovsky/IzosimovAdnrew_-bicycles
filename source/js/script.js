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
  buttonMainForm = document.getElementById('mainFormSubmit');

  mainForm.addEventListener('submit', function(evt) {
        if (isValidName(userNameMainForm)){
          userNameMainForm.classList.add('error')
          evt.preventDefault();
        } else {
          userNameMainForm.classList.remove('error')
          userNameMainForm.classList.add('success');
      }  

      if (isValidPhone(userPhoneMainForm)){
        userPhoneMainForm.classList.add('error')
        evt.preventDefault();    
      } else {
        userPhoneMainForm.classList.remove('error')
        userPhoneMainForm.classList.add('success');
        
    }  
  });

  function isValidPhone(input){
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
  };
  
  function isValidName(input){
    return !/^\D{1,3}[А-Яа-яA-Za-z0-9_-]{3,30}$/.test(input.value);
  };

userPhoneMainForm.oninput = function(){
  var rep = /[a-zA-ZА-Яа-я]/g; 
  this.value = this.value.replace(rep, '');
}