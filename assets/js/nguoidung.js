import { hiddenUser, currentUser } from "./submit_form.js";

// sign out account
const signOutElement = document.querySelector('.sign-out');
signOutElement.onclick = () => {
    const tmpUser = null;
    hiddenUser();
    window.localStorage.setItem('currentUser', JSON.stringify(tmpUser));
}

const showInfoUser = () => {
    if(currentUser != null){
        const accountName = document.querySelector('.account-name strong');
        accountName.innerText = currentUser['name'];

        const infoUser = document.querySelector('.info');
        const arrSelector = ['name', 'birthday', 'gender', 'email', 'phone-number'];

        for(var i = 0; i < arrSelector.length; ++i){
            var infoElement = infoUser.querySelector(`.${arrSelector[i]}`);
            if(arrSelector[i] === 'gender'){
                const valueGender = currentUser[`${arrSelector[i]}`];
                switch(valueGender){
                    case 'male':
                        infoElement.innerText = 'Nam';
                        break;
                    case 'female':
                        infoElement.innerText = 'Nữ';
                        break;
                    case 'orther':
                        infoElement.innerText = 'Khác';
                        break;
                }
            }
            else
                infoElement.innerText = currentUser[`${arrSelector[i]}`];
        }
    }
}
showInfoUser();