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


function playRound (playerSelection, computerSelection) {
    let a = 'You Win!' + ' ' + playerSelection.toLowerCase() + ' ' + 'beats' + ' ' + computerSelection;
    let b = 'You Lose!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection.toLowerCase();
    let c = 'You Tie!'; 
      
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor'){
    return a};
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
    return b};
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return c};
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor'){
        return b};
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return a};
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return c};
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return a};
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return b}
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return c}
           else {return 'Please input either Rock, Paper or Scissors!'};           
} 

function game(){}

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, Scissors?');
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



           
    
    
    












        















    
    
    
    










