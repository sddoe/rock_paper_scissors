function capitalize (str)
{
    return (str[0].toUpperCase() + str.slice(1));
}

var randomSelection = ['Rock', 'Paper', 'Scissors'];
var status = '';
var rounds = 0;
var wins = 0;
var losses = 0;
var ties = 0;
var finalResult = '';

function computerPlay()
{
    let selection = randomSelection[Math.floor(Math.random()*randomSelection.length)]
    if(selection === 'Rock')
    {
        return 'Rock';
    }
    else if(selection === 'Paper')
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

    if(!playerSelection)
    {
        return 'Not Valid!';
    }
    let playerWon = false;

    if(playerSelection === computerSelection)
    {
        status = `It's a tie. Both selected ${playerSelection}!`;
        ties++;
        rounds++;
        return status;
    }
    else if((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper'))
    {
        playerWon = true;
        wins++;
    }
    else 
    {
        playerWon = false;
        losses++;
    }

    let win_loss_status = playerWon? 'Win' : 'Lose';
    let winningSelection = playerWon? playerSelection : computerSelection;
    let losingSelection = playerWon? computerSelection : playerSelection;
    let beatOrBeats = winningSelection === 'Scissors'? 'beat' : 'beats';

    status = `You ${win_loss_status}! ${winningSelection} ${beatOrBeats} ${losingSelection}`;
    rounds++;

    if (rounds == 5)
    {
        if (wins > losses)
        {
            finalResult = `You Won! ${wins} to ${losses}`;
            return status + ` ` + finalResult;
        }
        else 
        {
            finalResult = `You Lost. ${wins} to ${losses}`;
            return status + ` ` + finalResult;
        }
    }
    return status;
}

function game()
{
    if (rounds <= 4) 
    {
        return playRound(prompt(`Your choice?`), computerPlay());
    }
    else if (rounds >= 5)
    {
        return 'Game Over!';
    }
    return finalResult;
}