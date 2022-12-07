'use strict';


// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK �

const again = document.querySelector('.again');
const check = document.querySelector('.check');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
// console.log(score);
let secretNumber;
let highScore = 0;

// INIZIO GIOCO
// genero numero casuale
secretNumber = getRandomTo20();
// setto il numero da inserire nullo
console.log(secretNumber);
console.log(guess.value);




again.addEventListener('click', function () {
    score.innerText = 20;
    secretNumber = getRandomTo20();
    message.innerText = 'Start guessing...';
    number.innerText = '?';
    number.style.width = '15rem';
    guess.value = '';
    document.body.style.backgroundColor = '#222';

});

check.addEventListener('click', function () {
    console.log(guess.value);
    // caso utente indovina il numero
    if (parseInt(guess.value) === secretNumber) {
        message.innerText = 'Bravo hai indovinato!';
        document.body.style.backgroundColor = 'green';
        number.innerText = secretNumber;
        if (parseInt(score.innerText) > highScore) {
            highScore = parseInt(score.innerText);
            document.querySelector('.highscore').innerText = highScore;
        }
        // caso sbaglia il numero
    } else {
        parseInt(score.innerText--);
        if (parseInt(score.innerText) < 1) {
            message.innerText = 'Hai perso!';
            document.body.style.backgroundColor = 'red';
            number.innerText = secretNumber;
        } else if (parseInt(guess.value) < secretNumber) {
            message.innerText = 'Numero troppo basso!';
        } else {
            message.innerText = 'Numero troppo alto!';
        }
    }
});






// FUNCTIONS

function getRandomTo20() {
    return Math.round(Math.random() * 19) + 1;
}