let playerScore = 0;
let computerScore = 0;
let result;


function computerPlay() {
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
let playerSelection = prompt('Rock, Paper or Scissors?');
let updatedPlayer = playerSelection.toLowerCase();   
let computerSelection = computerPlay();

function playRound(updatedPlayer, computerSelection) {
    let a = 'You Win!' + ' ' + updatedPlayer + ' ' + 'beats' + ' ' + computerSelection;
    let b = 'You Lose!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + updatedPlayer;
    let c = 'You Tie!';
    
    if (updatedPlayer === 'rock' && computerSelection === 'scissor'){
        playerScore+=1;
        return a;
        };
    if (updatedPlayer === 'rock' && computerSelection === 'paper'){
        computerScore+=1;
        return b;    
        };
    if (updatedPlayer === 'paper' && computerSelection === 'rock'){
        playerScore+=1;
        return a;
        };
    if (updatedPlayer === 'paper' && computerSelection === 'scissor'){
        computerScore+=1;
        return b;
        };    
    if (updatedPlayer === 'scissors' && computerSelection === 'paper'){
        playerScore+=1;
        return a;
        };
    if (updatedPlayer === 'scissors' && computerSelection === 'rock'){
        computerScore+=1;
        return b;
        };
    if (updatedPlayer === computerSelection) {
        return c};
}             
 
    for (let i = 1; i <= 5; i++){      
        if (i === 1){
            console.log(playRound(updatedPlayer,computerSelection));
        console.log(`${playerScore}`,`${computerScore}`);                  
        }if (i === 2){
            console.log(playRound(updatedPlayer,computerSelection));
        console.log(`${playerScore}`,`${computerScore}`);     
        }if ( i === 3){
            console.log(playRound(updatedPlayer,computerSelection));
        console.log(`${playerScore}`,`${computerScore}`);     
        }if ( i === 4){
            console.log(playRound(updatedPlayer,computerSelection));
        console.log(`${playerScore}`,`${computerScore}`);     
        }if ( i === 5){
            console.log(playRound(updatedPlayer,computerSelection));
        console.log(`${playerScore}`,`${computerScore}`);     
        }
    }    
    
function gameWinner(playerScore, computerScore){
        if (`${playerScore}` > `${computerScore}`){
            return 'You Win!';
        } else if (`${computerScore}` > `${playerScore}`){
            return 'Computer Wins!';
        }else {return 'Its a Tie!'};              
}
    console.log(gameWinner(playerScore, computerScore));
    

    





        















    
    
    
    










