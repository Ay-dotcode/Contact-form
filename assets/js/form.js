import { query } from "./query-type.js";
import { validate } from "./validate.js";

const main = document.querySelector('main');
const blocks = main.querySelectorAll('.block');
const submit = main.querySelector('#submit');
const general = document.querySelector('#general');
const support = document.querySelector('#support');

let noError = true;

general.addEventListener('click', query);
support.addEventListener('click', query);

// Remove error message from blocks when clicked
blocks.forEach(block => {
    block.addEventListener('click', () => {
        block.classList.remove('error');
        noError = true;
    });
});

// Remove error message from email block when clicked
blocks[2].addEventListener('click', () => {
    blocks[2].childNodes[5].style.display = 'none';
    blocks[2].childNodes[7].style.display = 'none';
});

submit.addEventListener('click', e => {
    e.preventDefault();
    noError = validate();
    if (noError) thank();
});


function thank() {
    const thanks = main.querySelector('#thanks');
    main.style.marginTop = '7rem'
    thanks.style.display = 'flex';
}