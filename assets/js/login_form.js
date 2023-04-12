const signIn = document.querySelector('.sign-in');
const modalLogin = document.querySelector('.modal-login');

signIn.onclick = function (){
    modalLogin.classList.add('open');
}

const closeButton = document.querySelector('.close-button');

closeButton.onclick = function(){
    modalLogin.classList.remove('open');
}
