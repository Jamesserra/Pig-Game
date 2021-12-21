//Select Elements
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--1')

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Start Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

//Roll Dice
btnRoll.addEventListener('click', function() {
    //Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check for rolled 1
    if(dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
    //Switch Player
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
})