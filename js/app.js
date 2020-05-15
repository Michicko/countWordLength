const wordInput = document.querySelector('#word-input');
const form = document.querySelector('#word-form');
const display = document.querySelector('.display');


// Event Listener
form.addEventListener('submit', getWordLength);

function getWordLength(e) {
    let str = wordInput.value;
    str = str.split("");
    str = str.join("").replace(/\s/g, "");
    display.textContent = str.length;
    e.preventDefault();
}