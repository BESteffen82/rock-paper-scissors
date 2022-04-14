function computerPlay () {
    let result = Math.floor(Math.random()*3)
    if (result === 0) {
        return 'rock';
    }
    if (result === 1) {
        return 'paper';
    }
    if (result === 2){
        return 'scissor'};
}

function playRound (playerSelection, computerSelection ) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor'){
      return 'You Win! Rock beats Scissors'};
    if (playerSelection.toLowerCase() === 'rock' &&computerSelection === 'paper'){
      return 'You Lose! Paper beats Rock'};
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return 'You Tie!';
    }
}    
    let computerSelection = computerPlay();
    let playerSelection = prompt('Rock, Paper, Scissors');
        



console.log(playRound(playerSelection,computerSelection));











    
    
    
    










