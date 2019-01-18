var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    // Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    // Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';

    //Update the round score if the rolled number is not 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add current score to gobal score
    scores[activePlayer] += roundScore;
    // Update the UI to reflect the above score
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game
    // Next Player
    nextPlayer();
});

function nextPlayer() {
    // Change player if 1 is the rolled number or the Hold button is pressed
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // Reset roundScore to 0
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}