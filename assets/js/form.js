import { query } from "./query-type.js";

const main = document.querySelector('main');
const blocks = main.querySelectorAll('.block');
const submit = main.querySelector('#submit');

general.addEventListener('click', query);
support.addEventListener('click', query);

blocks.forEach(block => {
    block.addEventListener('click', () => {
        block.classList.remove('error');
    });
});

function thank() {
    const thanks = main.querySelector('#thanks');
    e.preventDefault();
    console.log('submit');
    main.style.marginTop = '7rem'
    thanks.style.display = 'flex';
}

function validate() {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const textarea = document.querySelector('#msg');
    const checkbox = document.querySelector('#consent');

    // Validate first name
    if (firstName.value.trim() === '') {
        blocks[0].classList.add('error');
    }

    // Validate last name
    if (lastName.value.trim() === '') {
        blocks[1].classList.add('error');
    }

    // Validate email
    if (email.value.trim() === '') {
        blocks[2].classList.add('error');
        blocks[2].childNodes[5].style.display = 'none';
        blocks[2].childNodes[7].style.display = 'block';
    } else if (!isValidEmail(email.value)) {
        blocks[2].classList.add('error');
        blocks[2].childNodes[7].style.display = 'none';
        blocks[2].childNodes[5].style.display = 'block';
    }

    // Validate radio buttons
    let isRadioButtonChecked = false;
    radioButtons.forEach(radioButton => {
        if (radioButton.checked)
            isRadioButtonChecked = true;
    });
    if (!isRadioButtonChecked) {
        blocks[3].classList.add('error');
    }

    // Validate textarea
    if (textarea.value.trim() === '') {
        // Display error message for empty textarea
        // Example: textareaError.textContent = 'Message is required';
    }

    // Validate checkbox
    if (!checkbox.checked) {
        // Display error message for unchecked checkbox
        // Example: checkboxError.textContent = 'Please accept the terms and conditions';
    }
}

function isValidEmail(email) {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
