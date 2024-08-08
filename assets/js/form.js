import { query } from "./query-type.js";

const main = document.querySelector('main');
const blocks = main.querySelectorAll('.block');
const submit = main.querySelector('#submit');
let noError = true;

general.addEventListener('click', query);
support.addEventListener('click', query);

blocks.forEach(block => {
    block.addEventListener('click', () => {
        block.classList.remove('error');
        noError = true;
    });
});
// Remove error message from email when user starts typing
blocks[2].addEventListener('click', () => {
    blocks[2].childNodes[5].style.display = 'none';
    blocks[2].childNodes[7].style.display = 'none';
});
submit.addEventListener('click', e => {
    e.preventDefault();
    validate();
    if (noError) thank();
});

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
}

function isValidEmail(email) {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function thank() {
    const thanks = main.querySelector('#thanks');
    main.style.marginTop = '7rem'
    thanks.style.display = 'flex';
}