
function randomComputerChoice() {
    computerchoice =  Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if (computerchoice == 1) {
        document.getElementById("computerchooses").src = "rock.png";
        console.log("Computer Chose Rock");
        return "rock";
    } else if (computerchoice == 2) {
        document.getElementById("computerchooses").src = "paper.png";
        console.log("Computer Chose Paper");
    return "paper";
    } else {
        document.getElementById("computerchooses").src = "scissors.png";
        console.log("Computer Chose Scissors");
        return "scissors"
    }

}

function playGame() {
    randomComputerChoice();
}
