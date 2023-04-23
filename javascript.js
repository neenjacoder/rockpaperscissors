// RANDOMLY GENERATES A CHOICE FOR COMPUTER (ROCK, PAPER, SCISSORS)
function computerchoice() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var computerselected = Math.floor(Math.random()*textArray.length);
    if (computerselected == 0) {
        return "rock";
    } else if (computerselected == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// CHECKS TO SEE WHO THE WINNER IS BETWEEN COMPUTER OR USER FOR A SINGLE ROUND
function roundwinner (userchoice, computerchoice) {
    if (userchoice == computerchoice) {
        return "tie"
    } else if (userchoice == "rock" && computerchoice == "paper") {
        return "computerwins";
    } else if (userchoice == "rock" && computerchoice == "scissors") {
        return "userwins";
    } else if (userchoice == "paper" && computerchoice == "rock") {
        return "userwins";
    } else if (userchoice == "paper" && computerchoice == "scissors") {
        return "computerwins";
    } else if (userchoice == "scissors" && computerchoice == "rock") {
        return "computerwins";
    } else if (userchoice == "scissors" && computerchoice == "paper") {
        return "userwins";
    } else {
        return;
    }
}

// UPDATES THE SCORE
function gamewinner (roundwinner) {
    roundwinner = roundwinner();
    user = 0;
    computer = 0;
    if (roundwinner == "userwins") {
        user ++;
    } else if (roundwinner == "computerwins") {
        computer ++;
    } else if (roundwinner == "tie") {
        user += 0;
        computer += 0;
    } else {
        return;
    }
}

// CHECKS TO SEE WHO WON THE GAME