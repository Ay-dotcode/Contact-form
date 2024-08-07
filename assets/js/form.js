const main = document.querySelector('main');
const blocks = main.querySelectorAll('.block');
const submit = main.querySelector('#submit');
const general = main.querySelector('#general');


blocks.forEach(block => {
    block.addEventListener('click', () => {
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit');
});
general.addEventListener('click', (e) => {
    for (const child of general.children) {
        console.log(child);

    }
});