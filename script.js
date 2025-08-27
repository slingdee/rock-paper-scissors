let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   if(humanChoice === computerChoice){
    console.log("This round was a tie");
    return "Tie";
   }
   else if(humanChoice === "rock" && computerChoice === "paper"
    || humanChoice === "paper" && computerChoice === "scissors"
    || humanChoice === "scissors" && computerChoice === "rock"
   ){
    console.log("Computer has won");
    return "You lose!";
   }
     else if(humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
    || humanChoice === "rock" && computerChoice === "scissors"
   ){
     console.log("Computer has lost, you won");
     return "You win!"
   }
    
};

function getComputerChoice(){
  const randomNum = Math.floor(Math.random() * 9);
  if(randomNum <= 3){
    return "rock";
  }      
  else if(randomNum <= 6){
    return "paper";
  } 
  else if(randomNum <= 9){
    return "scissors";
  }
};getComputerChoice()

function getHumanChoice(){
  return prompt("Rock-paper-scissors?").toLowerCase();     
}getHumanChoice()


