// List of functions to play a round and check to see who is winner:
    // 

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
function playround (userchoice, computerchoice) {
    userchoice = onclick();
    computerchoice = computerchoice();
    if (userchoice == computerchoice) {
        return "tie"
    } else if (userchoice == "rock" && computerchoice() == "paper") {
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
function scorekeeper () {
    roundwinner = roundwinner();
    userscore = 0;
    computerscore = 0;
    if (roundwinner == "userwins") {
        userscore ++;
    } else if (roundwinner == "computerwins") {
        computerscore ++;
    } else if (roundwinner == "tie") {
        userscore += 0;
        computerscore += 0;
    } else {
        return;
    }
}

// CHECKS TO SEE WHO WON THE GAME
function gamewinner () {
    if (userscore == 5) {
        return "user wins";
    } else if (computerscore == 5) {
        return "computer wins";
    } else {
        return;
    }
}
