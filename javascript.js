// Global Values
var userscore = 0;
var userscoretext = "User: " + userscore + " points!";
var computerscore = 0;
var computerscoretext = "Computer: " + computerscore + " points!"
var winner = 5;
var computerchooses = "";
var computerchoice = "Computer Chooses: " + computerchooses;
var winnerwinner = "";
var declarewinner = alert("The " + winnerwinner + " Wins!");

// RANDOMLY GENERATES A CHOICE FOR COMPUTER
function generatechoicecomputer() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var computerselected = Math.floor(Math.random()*textArray.length);
    if (computerselected == 0) {
        computerchooses += "Rock";
        return 0;
    } else if (computerselected == 1){
        computerchooses += "Paper";
        return 1;
    } else {
        computerchooses += "Scissors";
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
        winnerwinner += "User";
        return "User";
    } else if (computerscore == winner) {
        winnerwinner += "Computer";
        return "Computer";
    } else {
        return;
    }
}

function choicenumbertotext(number) {
    number = generatechoicecomputer();
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else if (number == 2) {
        return "scissors";
    } else {
        return;
    }
}