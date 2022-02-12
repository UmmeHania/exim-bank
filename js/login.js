// step-1 : check the validation of email and password
document.getElementById('login-submit').addEventListener('click', function () {
    let emailField = document.getElementById('user-email');
    let userEmail = emailField.value;
    //get your passsword
    let passwordField = document.getElementById('user-password');
    let userPassword = passwordField.value;

    if (userEmail == 'user@email.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'

    }
})
