var playersScores, roundScore, activePlayer, dice;

playerScores = [0, 0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;