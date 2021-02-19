const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const startButton = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');

startButton.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

let phrases = [
    'espresso',
    'latte',
    'sweetener',
    'coffee mug',
    'teapot'
];

function getRandomPhraseAsArray(arr) {
    const randomPhrase =  arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('')
};

getRandomPhraseAsArray(phrases);

function addPhrasetoDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = arr[i] 
        phrase.appendChild(li); 
        if (arr[i] === ' ') {
            li.className = 'space'; 
        } else {
            li.className = 'letter';
        }
    }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

function checkLetter(btn) {
    const checkLetter = document.getElementsByTagName('li');
    let match = 'null';
    for (let i = 0; i < checkLetter.length; i++) {
        if (btn.textContent === checkLetter[i].textContent) {
            checkLetter[i].classList.add('show');
            match = btn;
        }
    }
    return match;
};

let missed = 0;

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && !e.target.disabled) {
        e.target.classList.add('chosen');
        e.target.disabled = true; 
        const letterFound = checkLetter(e.target);
        console.log(letterFound.value);
        if (letterFound.value === undefined) {
            const liveHeart = document.querySelectorAll('#scoreboard img');
            liveHeart[missed].src = 'images/lostHeart.png';
            missed++
            console.log(missed);
        }

    }
    checkWin();

    function checkWin() {
        const letter = document.getElementsByClassName('letter');
        const show = document.getElementsByClassName('show');
        const title = document.querySelector('.title');
        if (letter.length === show.length) {
            overlay.classList.add('win');
            title.innerHTML = 'You Win!';
            startButton.textContent = 'Play again?'
            overlay.style.display = 'flex';
            startButton.addEventListener('click', (e) =>
                 window.location.reload());
        } else if (missed >= 5) {
            overlay.classList.add('lose');
            title.innerHTML = 'Try again?';
            startButton.textContent = 'Play again'
            overlay.style.display = 'flex';
        }
        startButton.addEventListener('click', (e) =>
                 window.location.reload());
    } 
});
