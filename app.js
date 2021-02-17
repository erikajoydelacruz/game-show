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
    'treehouse techdegree',
    'javascript array',
    'object literal',
    'for loop',
    'conditional statement'
];

/*get random phrase
split phrase into array of characters
return array of characters*/
function getRandomPhraseAsArray(arr) {
    const rando =  arr[Math.floor(Math.random() * arr.length)];
    return rando.split('')
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
};
    /* get all elements with class letter 
    loop  over letters 
    check if they match the letter in the button the player has chosen
    if match
        add "show" class to list item containing the letter 
        store matching letter inside variable
        return letter
    else
        return null
        */