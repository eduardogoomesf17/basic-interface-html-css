const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnSubmit = document.querySelector('#btnSubmit');

btnSubmit.addEventListener('click', (e) => {

    const usernameValue = username.value;
    const passwordValue = password.value;

    if (!usernameValue || !passwordValue) {
        return alert('Usuário e senha não podem ficar em branco');
    }

    if (usernameValue.length < 7 || usernameValue.length > 50) {
        return alert('O usuário deve ter entre 7 e 50 digitos');
    }

    if (passwordValue.length < 7 || passwordValue.length > 50) {
        return alert('A senha deve ter entre 7 e 50 digitos');
    }

    alert('Os dados estão corretos');

});


