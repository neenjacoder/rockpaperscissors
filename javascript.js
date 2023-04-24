// Global Values
var userscore = 0;
var computerscore = 0;
var winner = 5;
var compchoicenumber = generatechoicecomputer()
var compchoicetext = "Computer Chooses: " + choicenumbertotext()

// RANDOMLY GENERATES A CHOICE FOR COMPUTER (ROCK, PAPER, SCISSORS)
function generatechoicecomputer() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var computerselected = Math.floor(Math.random()*textArray.length);
    if (computerselected == 0) {
        return 0;
    } else if (computerselected == 1){
        return 1;
    } else {
        return 2;
    }
}

// CHECKS TO SEE WHO THE WINNER IS BETWEEN COMPUTER OR USER FOR A SINGLE ROUND
function playround(userchooses) {
    computerchooses = generatechoicecomputer();
    if (userchooses == computerchooses) {
        console.log("tie game");
        userscore+=0;
        computerscore+=0;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "tie";
    } else if (userchooses == 0 && computerchooses == 1) {
        console.log("computer wins");
        computerscore++;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "computer";
    } else if (userchooses == 0 && computerchooses == 2) {
        console.log("user wins");
        userscore++;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "user";
    } else if (userchooses == 1 && computerchooses == 0) {
        console.log("user wins");
        userscore++;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "user";
    } else if (userchooses == 1 && computerchooses == 2) {
        console.log("computer wins");
        computerscore++;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "computer";
    } else if (userchooses == 2 && computerchooses == 0) {
        console.log("computer wins");
        computerscore++;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "computer";
    } else if (userchooses == 2 && computerchooses == 1) {
        console.log("user wins");
        userscore++;
        console.log("User Score: " + userscore);
        console.log("Computer Score: " + computerscore);
        return "user";
    } else {
        return;
    }
}

function gameover() {
    if (userscore == winner) {
        return "user wins";
    } else if (computerscore == winner) {
        return "computer wins";
    } else {
        return;
    }
}

function choicenumbertotext() {
    if (compchoicenumber == 0) {
        return "rock";
    } else if (compchoicenumber == 1) {
        return "paper";
    } else if (compchoicenumber == 2) {
        return "scissors";
    } else {
        return;
    }
}