const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');

const startButton = document.getElementsByClassName('btn__reset')[0];

const overlay = document.getElementById('overlay');

//hide start overlay
startButton.addEventListener('click', (e) => {
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
        console.log(letterFound);
        if (letterFound === null) {
            const liveHeart = document.querySelectorAll('#scoreboard img');
            liveHeart[missed].src = 'images/lostHeart.png';
            missed++
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
            overlay.style.display = 'flex'
        } else if (missed > 5) {
            title.innerHTML = 'Try again?';
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
        }
    } 
});