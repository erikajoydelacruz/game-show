const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');

let missed = 0;

const startButton = document.getElementsByClassName('btn__reset')[0];

//hide start overlay
startButton.addEventListener('click', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

let phrases = [
    'blanket',
    'monitor',
    'office chair',
    'coffee cup',
    'keyboard'
];

/*get random phrase
split phrase into array of characters
return array of characters*/
function getRandomPhraseAsArray(arr) {
    const randomPhrase =  arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('')
};

getRandomPhraseAsArray(phrases);

//loops through an array of characters
function addPhrasetoDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li'); //make li for the character
        li.textContent = arr[i] //storing character as text content for li
        phrase.appendChild(li); //append li to phrase which is `#phrase ul`
        if (arr[i] === ' ') {
            li.className = 'space'; 
        } else {
            li.className = 'letter';
        }
    }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

let match = 'null';

function checkLetter(btn) {
    const checkLetter = document.getElementsByTagName('li');
    for (let i = 0; i < checkLetter.length; i++) {
        if (btn.textContent === checkLetter[i].textContent) {
            checkLetter[i].classList.add('show');
            match = btn;
        } 
    }
    return match;
};

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true; 
    } else {
        e.target.disabled = false;
    }
    const letter = checkLetter(e.target);
    if (letter === null) {
        let heartImage = document.getElementsByTagName('img');
        heartImage[missed].src = 'images/lostHeart.png';
        missed++;
    }
});

function checkWin() {
    let liLetter = document.getElementsByClassName('letter');
    let liShow = document.getElementsByClassName('show');
    
    if (liLetter.length === liShow.length) {
        overlay.classList.add('win');
        overlay.style.display ='flex'
    }
}