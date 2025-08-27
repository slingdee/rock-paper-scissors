

function playGame(){
   let humanScore = 0;
   let computerScore = 0;

    function playRound(humanChoice, computerChoice){
      humanChoice = humanChoice.toLowerCase();
      if(humanChoice === computerChoice){
        console.log("This round was a tie");
        return "Tie";
      }
      else if(humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock"
      ){
        console.log("Computer has won");
        computerScore += 1;
        return "You lose!";
      }
        else if(humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "rock" && computerChoice === "scissors"
      ){
        console.log("Computer has lost, you won");
        humanScore += 1;
        return "You win!"
      }else {
        return "invalid input"
      } 
    };
    for(let i = 0;i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    console.log(`You scored ${humanScore}`)
    console.log(`The computer scored ${computerScore}`)
}
playGame()




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
  return prompt("Rock-paper-scissors?");     
}getHumanChoice()


