const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  
})



function getComputerChoice(){
  const randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0){
    return "rock";
  }      
  else if(randomNum === 1){
    return "paper";
  } 
  else{
    return "scissors";
  }
}

function getHumanChoice(choice){
  return choice.toLowerCase();
}

   let humanScore = 0;
   let computerScore = 0;

    rockBtn.addEventListener("click", () => handleClick("rock"))
    paperBtn.addEventListener("click", () => handleClick("paper"))
    scissorsBtn.addEventListener("click", () => handleClick("scissors"))

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
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. Computer Wins!`);
        computerScore++;
        return "You lose!";
      }
        else if(humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "rock" && computerChoice === "scissors"
      ){
        console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. You Win!`);
        humanScore++;
        return "You win!"
      }else {
        return "invalid input"
      } 
    }
    
    function handleClick(choice){
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      const resultMessage = playRound(humanChoice, computerChoice);

      updateUI(resultMessage)

      if(humanScore === 5 || computerScore === 5){
        const winner = humanScore > computerScore ? "You are the winner!" : "YOU LOST😕"
        updateUI(winner)
        
      }
    }
   
    function updateUI(message){
      const resultEl = document.querySelector("#result")
      const humanScoreEl = document.querySelector("#human-score")
      const computerScoreEl = document.querySelector("#computer-score");

      if (resultEl) resultEl.textContent = message;
      if (humanScoreEl) humanScoreEl.textContent = humanScore;
      if (computerScoreEl) computerScoreEl.textContent = computerScore;

    }
  
    console.log(`You scored ${humanScore}`)
    console.log(`The computer scored ${computerScore}`)





