let answer = '';
let userText = document.getElementById('user');
let computerText = document.getElementById('computer');
let result = document.querySelector('.result');
var userScore = 0;
var computerScore = 0;
let getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        break;
        case 1:
            return "paper";
        break;
        case 2:
            return "scissors";
        break;
    };
 };
    function game(answer){
        if(computerScore < 5 && userScore < 5){
            let value = function(computer, user){
                computer = getComputerChoice();
                user = answer;
               if(computer === user){
                   return "It is a tie, Try again!!!";
               }
               else if(computer === "rock" && user === "paper"){
                   return "Paper beats Rock, You win!!!";
               }
               else if(computer === "scissors" && user === "rock"){
                   return "Rock beats Scissors, You win!!!";
               }
               else if(computer === "paper" && user === "scissors"){
                   return "Scissors beats Paper, You win!!!";
               }
               else if(computer === "paper" && user === "rock"){
                   return "Paper beats Rock, You lose!!!";
               }
               else if(computer === "rock" && user === "scissors"){
                   return "Rock beats Scissors, You lose!!!";
               }
               else if(computer === "scissors" && user === "paper"){
                   return "Scissors beats Paper, You lose!!!";
          };
        }; 
          let decision = value();
            if(decision === "Paper beats Rock, You win!!!" || decision === "Rock beats Scissors, You win!!!" || decision === "Scissors beats Paper, You win!!!"){
                userScore += 1;
            }
        
            if(decision === "Paper beats Rock, You lose!!!" || decision ==="Rock beats Scissors, You lose!!!" || decision === "Scissors beats Paper, You lose!!!"){
                computerScore += 1;
            } 
        userText.textContent =`Your Score: ${userScore} point(s)`;
        computerText.textContent =`Computer Score: ${computerScore} point(s)`;
        result.textContent = decision;
    } 
    else{
        reset(); 
    } 
}
function reset(){
        let winner = () => { if(userScore > computerScore){
            return `have won the game  with ${userScore} points over the Computer\`s ${computerScore} points`;
       }
       else if(userScore < computerScore){
            return `have lost the game  with ${userScore} points under the Computer\`s ${computerScore} points`;
       }
       else{
            return `It\`s a tie!!! You scored ${userScore} equaling the computer\`s ${computerScore}`;
       }
    };
    alert('You\'ve concluded this round and ' + winner());
    
    confirm('Do you want to play again?') ? history.go(0) : no();
}
function no(){
    alert("Thanks for playing!!!"); 
    window.close();
}
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {button.addEventListener('click', (e) => { 
    answer = button.id;
    result.style.display = "block";
    game(answer);
    });  
    });