import { submitForm, resetForm, currentUser, showUser, hiddenUser } from "./submit_form.js";

const registerForm = document.querySelector('.register');
const modalRegister = document.querySelector('.modal-register');
const closeButtonRegister = modalRegister.querySelector('.close-button');

const loginForm = document.querySelector('.log-in');
const modalLogin = document.querySelector('.modal-login');
const closeButtonLogin = modalLogin.querySelector('.close-button');

const linkRegister = document.querySelector('.link-register');
const linkLogin = document.querySelector('.link-login');
const modalAlertFailed = document.querySelector('.modal-register-failed');

const modalLoginFailed = document.querySelector('.modal-login-failed');
const linkRegisterFromLogin = document.querySelector('.link-register-from-login');

// click open register form
registerForm.onclick = function (){
    resetForm('#form-register', ['#name', '#birthday', '#gender', '#email', '#phone-number', '#password', '#confirm-password', '#checkbox']);
    modalRegister.classList.add('open');
}
// click close button on register form
closeButtonRegister.onclick = function(){
    modalRegister.classList.remove('open');
}
// click open login form
loginForm.onclick = function (){
    resetForm('#form-login', ['#email', '#password']);
    modalLogin.classList.add('open');
}
// click close login form
closeButtonLogin.onclick = function(){
    modalLogin.classList.remove('open');
    resetForm('#form-login', ['#email', '#password']);
}

// click open link register form from login form
linkRegister.onclick = function (){
    closeButtonLogin.onclick();
    registerForm.onclick();
}
// click open link register form from alert login failed
linkRegisterFromLogin.onclick = function (){
    closeButtonLogin.onclick();
    registerForm.onclick();
    modalLoginFailed.classList.remove('open');
}
// click open link register form from login form
linkLogin.onclick = function (){
    closeButtonRegister.onclick();
    loginForm.onclick();
    modalAlertFailed.classList.remove('open');
}
// close modal-register-successfull
const closeButtonAlert = document.querySelector('.return-main-page');
closeButtonAlert.onclick = function() {
    modalAlert.classList.remove('open');
}

// submit register form
submitForm('#form-register', ['#name', '#birthday', '#gender', '#gender', '#email', '#phone-number', '#password', '#confirm-password', '#checkbox']);

// submit login form
submitForm('#form-login', ['#email', '#password']);

if(currentUser != null){
    console.log(currentUser)
    showUser();
}
else {
    hiddenUser();
}

