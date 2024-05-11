document.addEventListener("DOMContentLoaded", function ()
{
    var createAccountButton = document.querySelector('.header');

    createAccountButton.addEventListener('click', function ()
    {
        window.location.href = 'index.html';
    });
});

function isStrongPassword(password)
{
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLengthValid = password.length >= 8;

    return hasLowercase && hasUppercase && hasSymbol && hasNumber && isLengthValid;
}

document.addEventListener('DOMContentLoaded', function ()
{
    const validCredentials = [
        { email: 'admin@test.com' }
    ];

    const registerEmailInput = document.querySelector('.register-email');
    const registerPasswordInput = document.querySelector('.register-password');
    const registerRepeatPasswordInput = document.querySelector('.repeat-password');
    const registerErrorSpan = document.querySelector('.register-error');

    registerRepeatPasswordInput.addEventListener('input', function ()
    {
        if (passwordInput.value !== repeatPasswordInput.value)
            registerRepeatPasswordInput.classList.add('invalid-field');
        else
            registerRepeatPasswordInput.classList.add('invalid-field');
    });

    registerErrorSpan.innerHTML = 'Password requires:<br> - One lowercase and uppercase letter<br> - A symbol<br> - A number<br> - Length greater than or equal to 8.<br>';

    document.querySelector('.register-btn').addEventListener('click', function (event)
    {
        event.preventDefault();
        const enteredEmail = registerEmailInput.value;
        const enteredPassword = registerPasswordInput.value;
        const repeatPassword = registerRepeatPasswordInput.value;

        const foundUser = validCredentials.find(cred => cred.email === enteredEmail);

        const isValidEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);

        
        if (!isValidEmailFormat)
            registerErrorSpan.textContent = 'Invalid email format';
        else if (foundUser)
            registerErrorSpan.textContent = 'Already registered email';
        else if (!isStrongPassword(enteredPassword))
            registerErrorSpan.textContent = 'Invalid password format';
        else if (passwordInput.value.localeCompare(repeatPasswordInput.value))
            registerErrorSpan.textContent = 'Passwords do not match';
        else
            window.location.href = 'home.html';
    });
});