'use strict';

const player0El = document.querySelector('#player--0');
const player1El = document.querySelector('#player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('current--0');
const current1El = document.querySelector('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// Rolling dice function

const switchPlayer = function () {
  document.querySelector(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollBtn = function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Chechk if 1, then switch player
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
    document.querySelector(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
};

const holdBtn = function () {
     scores[activePlayer] += currentScore;
     document.getElementById(`current--${activePlayer}`).textContent = scores.[activePlayer];
     switchPlayer();
};

btnRoll.addEventListener('click', rollBtn);
btnHold.addEventListener('click', holdBtn);
