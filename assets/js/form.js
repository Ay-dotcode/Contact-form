import { query } from "./query-type.js";
const main = document.querySelector('main');
const blocks = main.querySelectorAll('.block');
const submit = main.querySelector('#submit');

general.addEventListener('click', query);
support.addEventListener('click', query);

blocks.forEach(block => {
    block.addEventListener('click', () => { });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit');
});
