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
        return 'scissors'};        
} 

const roundResult = document.getElementById('round-result');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    updatedPlayer = button.id;
    computerSelection = computerPlay();
    console.log(playRound(updatedPlayer, computerSelection));
    console.log(`Player:${playerScore} Computer:${computerScore}`);
    }); 
});
  

function playRound(updatedPlayer, computerSelection) {
    let a = 'You Win!' + ' ' + updatedPlayer + ' ' + 'beats' + ' ' + computerSelection;
    let b = 'You Lose!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + updatedPlayer;
    let c = 'You Tie!';

       
    if (updatedPlayer === 'rock' && computerSelection === 'scissors'){
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
    if (updatedPlayer === 'paper' && computerSelection === 'scissors'){
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


//for (let i = 0; i < 5; i++){      
    //let playerSelection = prompt('Rock, Paper or Scissors?'); 
    //let updatedPlayer = playerSelection.toLowerCase();   
    //let computerSelection = computerPlay();   
    
   //console.log(playRound(updatedPlayer, computerSelection));
   // console.log(`Player:${playerScore} Computer:${computerScore}`);    
//}      
                     
function gameWinner(playerScore, computerScore){
        if (`${playerScore}` > `${computerScore}`){
            return 'You Win!';
        } else if (`${computerScore}` > `${playerScore}`){
            return 'Computer Wins!';
        } else {return 'Its a Tie!'};              
}
   
console.log(gameWinner(playerScore, computerScore));
  

    

    





        















    
    
    
    










