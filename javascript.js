var computerscore = 0;
var usersscore = 0;
var winner = 5;

function playGame(userchoice) {
    computer = randomComputerChoice();
    user = userchoice;
     if (user = computer) {
        userscore+=0;
        computerscore+=0;
        return;
    } else if ((user == "rock" && computer == "paper") || (user == "paper" && computer == "scissors") || (user == "scissors" && computer == "rock")) {
        computerscore+=1;
        document.getElementById("computerscore").innerText = computerscore;
        return;
    } else if ((user == "rock" && computer == "scissors") || (user == "paper" && computer == "rock") || (user == "scissors" && computer == "paper")) {
        userscore+=1;
        document.getElementById("userscore").innerText = userscore;
        return;
    } else {
        return;
    }
}

function randomComputerChoice() {
    computerchoice =  Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if (computerchoice == 1) {
        document.getElementById("computerchooses").src = "rock.png";
        return "rock";
    } else if (computerchoice == 2) {
        document.getElementById("computerchooses").src = "paper.png";
    return "paper";
    } else {
        document.getElementById("computerchooses").src = "scissors.png";
        return "scissors";
    }

}

