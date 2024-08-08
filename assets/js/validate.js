function validate() {
    let noError = true;
    const main = document.querySelector('main');
    const blocks = main.querySelectorAll('.block');
    const firstName = main.querySelector('#first-name');
    const lastName = main.querySelector('#last-name');
    const email = main.querySelector('#email');
    const radioButtons = main.querySelectorAll('input[type="radio"]');
    const textarea = main.querySelector('#msg');
    const checkbox = main.querySelector('#consent');

    // Validate first name
    if (firstName.value.trim() === '') {
        blocks[0].classList.add('error');
        noError = false;
    }
    // Validate last name
    if (lastName.value.trim() === '') {
        blocks[1].classList.add('error');
        noError = false;
    }

    // Validate email
    if (email.value.trim() === '') {
        blocks[2].classList.add('error');
        blocks[2].childNodes[5].style.display = 'none';
        blocks[2].childNodes[7].style.display = 'block';
        noError = false;
    } else if (!isValidEmail(email.value)) {
        blocks[2].classList.add('error');
        blocks[2].childNodes[7].style.display = 'none';
        blocks[2].childNodes[5].style.display = 'block';
        noError = false;
    } else {
        blocks[2].childNodes[7].style.display = 'none';
        blocks[2].childNodes[5].style.display = 'none';
    }

    // Validate radio buttons
    let isRadioButtonChecked = false;
    radioButtons.forEach(radioButton => {
        if (radioButton.checked)
            isRadioButtonChecked = true;
    });
    if (!isRadioButtonChecked) {
        blocks[3].classList.add('error');
        noError = false;
    }

    // Validate textarea
    if (textarea.value.trim() === '') {
        blocks[4].classList.add('error');
        noError = false;
    }

    // Validate checkbox
    if (!checkbox.checked) {
        blocks[5].classList.add('error');
        noError = false;
    }
    return noError;
}

function isValidEmail(email) {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


export { validate };

