/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





var scores, roundScore, activePlayer, dice, gamePlaying, nextDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() // Anonymous functions
{
    if(gamePlaying)
    {
        dice = Math.floor(Math.random() * 6) + 1;

        // Displaying the result dice(Image)
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // Update the round score if the rolled number was not 1
        if (dice != 1)
        {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else
        {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function()
{
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if the player won the game
        if (scores[activePlayer] >= 100) {

            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
    }
});

function nextPlayer()
{
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');// if the active class exists, delete it, if not , add it
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active'); // this will not work, just for educational purpose
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init);// we don't use " () " with init because we are not calling it, we are passing it to the listener

function init()
{
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // 0 for the first player and 1 for the second player
    gamePlaying = true;

    // to make a specific style
    document.querySelector('.dice').style.display = 'none'; // to hide the image

    // we don't use css styling in getElementById(), so we don't put '#' or '.'
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}















// to set value
//document.querySelector('#current-' + activePlayer).textContent = dice;// we can only set text not html code
//document.querySelector('#current-' + activePlayer).innerHTML='<em>' + dice + '</em>'; // em makes italic text

// to read a value of an item with its id 
//var x = document.querySelector('#score-0').textContent;






