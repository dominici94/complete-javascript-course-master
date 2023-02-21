'use strict';

// selezione elementi
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreTotal0 = document.getElementById('score--0');
const scoreTotal1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// Funzioni

function rollDice() {
  return Math.round(Math.random() * 5) + 1;
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

// condizioni di partenza

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreTotal0.textContent = 0;
  scoreTotal1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

// AL CLICK SU ROLL DICE
roll.addEventListener('click', function () {
  if (playing) {
    // genero un dado casuale
    let casual = rollDice();

    // mostro il dado a schermo
    dice.classList.remove('hidden');
    dice.src = `dice-${casual}.png`;

    // aggiungo il dado al punteggio corrente se diverso da 1
    if (casual !== 1) {
      currentScore += casual;
      // selezione dinamica del giocatore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // passo al prossimo giocatore
      switchPlayer();
    }
  }
});

// AL CLICK SU HOLD
hold.addEventListener('click', function () {
  if (playing) {
    // AGGIUNGO IL PIUNTEGGIO CORRENTE AL PUNTEGGIO TOTALE DEL GIOCATORE ATTIVO
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // se un giocatore supera i 99 punti vince
    if (scores[activePlayer] >= 99) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
    } else {
      switchPlayer();
    }
  }
});

// AL CLICK SU NEW GAME

newGame.addEventListener('click', function () {
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('active--player');
  scoreTotal0.textContent = 0;
  scoreTotal1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
});
