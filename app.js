const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

let missed = 0;

const startButton = document.getElementsByClassName('btn__reset')[0];

startButton.addEventListener('click', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

let phrases = [
    ['treehouse techdegree'],
    ['javascript array'],
    ['object literal'],
    ['for loop'],
    ['conditional statement']
]
function getRandomPhraseAsArray(arr) {


};