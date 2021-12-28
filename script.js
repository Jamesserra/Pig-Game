//Select Elements
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--1')

const switchPlayer = () => {
  //Switch Player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

let scores, currentScore, activePlayer, gameStart;

//Start Conditions
const startConditions = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameStart = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  diceEl.classList.add('hidden');
}

//Roll Dice
btnRoll.addEventListener('click', function () {
  if (gameStart) {
    //Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (gameStart) {
    //Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //check if player score is >=20
    if (scores[activePlayer] >= 10) {
      //Finish Game
      gameStart = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    //Switch Player
    switchPlayer();
  }
});

btnNew.addEventListener('click', () => {
  startConditions();
})

startConditions();
