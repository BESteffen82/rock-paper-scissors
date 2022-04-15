let user;
let computer;
let win = 1;
let loss = 1;
let tie = 1;


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

let computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) { 

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor'){
    return 'You Win! Rock beats Scissors'};
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
    return 'You Lose! Paper beats Rock'};
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return 'You Tie!'};
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor'){
        return 'You Lose! Scissor beats Paper'};
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper beats Rock'};
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return 'You Tie!'};
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return 'You Win! Scissors beat Paper'};
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return 'You Lose! Rock beats Scissors'}
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return 'You Tie'}
        else {return 'Please input either Rock, Paper or Scissors!'};
}    

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock', 'Paper', 'Scissors');
        let computerSelection = computerPlay();
        
        if (i === 0){
        console.log(playRound(playerSelection, computerSelection));
        }
        if (i === 1) {
            console.log(playRound(playerSelection, computerSelection));
        }
        if (i === 2) {
            console.log(playRound(playerSelection, computerSelection));
        }
        if (i === 3) {
            console.log(playRound(playerSelection, computerSelection));
        }
        if (i === 4) {      
            console.log(playRound(playerSelection, computerSelection));
        }    
    }


           
    
    
    












        















    
    
    
    










