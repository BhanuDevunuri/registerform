const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const tandc = document.getElementById("tc");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
});

function validate() {
    let nameValue = uname.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();

    // User name check
    if (nameValue === '') {
        setError(uname, 'User name cannot be empty');
    } else if (nameValue.length < 3) {
        setError(uname, 'User name should be minimum 3 characters');
    } else {
        setSuccess(uname);
    }

    // Email check
    if (emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!emailCheck(emailValue)) {
        setError(email, 'Enter valid email');
    } else {
        setSuccess(email);
    }

    // Password check
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password should be minimum 8 characters');
    } else {
        setSuccess(password);
    }

    // Confirm password check
    if (cpasswordValue === '') {
        setError(cpassword, 'Confirm password cannot be empty');
    } else if (cpasswordValue !== passwordValue) {
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }

    // Terms and conditions check
    if (!tandc.checked) {
        setError(tandc, 'You must agree to the terms and conditions');
    } else {
        setSuccess(tandc);
    }
}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
}

function emailCheck(email) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$/;
    return emailReg.test(email);
}
