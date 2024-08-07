const main = document.querySelector('main');
const blocks = main.querySelectorAll('.block');
const submit = main.querySelector('#submit');

blocks.forEach(block => {
    block.addEventListener('click', () => {
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit');
});