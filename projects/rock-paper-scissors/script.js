function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3));

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose your option:\n- Rock\n- Paper\n- Scissors").toLowerCase();    
    
    return humanChoice;
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    let computerSelection = getComputerChoice(), humanSelection = getHumanChoice();

    function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
            computerScore++;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log("The round ends in a draw!");
        }
    }

    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice(), humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice(), humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice(), humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice(), humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);

    if (humanScore > computerScore) {
        console.log(`You won the game ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game ${humanScore} to ${computerScore}!`);
    } else {
        console.log("The game ends in a draw!");
    }
}

playGame();