function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errormessage = document.getElementById('error-message');

    //simple validation
    if(username === '' || password === '') {
        errormessage.textContent = 'please fill in both fields.';
        return;
    }

    if(username === 'victor' && password === '1234') {
        alert(`hey ${username}, your Signup was successful`);
        errormessage.textContent = ''; //clear my error messages
        //reflect or continue to another page
    }else {
        errormessage.textContent = 'Invalid users name or password.';
    }
}