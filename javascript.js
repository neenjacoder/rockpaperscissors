// Global Values
var userscore = 0;
var computerscore = 0;
var winner = 5;

//PLAY ONE ROUND, CHECK FOR WINNER
function playround(userchooses) {
    computerchooses = generatechoicecomputer();
    if (userchooses == computerchooses) {
        console.log("tie game");
        userscore+=0;
        computerscore+=0;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "tie";
    } else if (userchooses == 0 && computerchooses == 1) {
        console.log("computer wins");
        computerscore++;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "computer";
    } else if (userchooses == 0 && computerchooses == 2) {
        console.log("user wins");
        userscore++;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "user";
    } else if (userchooses == 1 && computerchooses == 0) {
        console.log("user wins");
        userscore++;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "user";
    } else if (userchooses == 1 && computerchooses == 2) {
        console.log("computer wins");
        computerscore++;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "computer";
    } else if (userchooses == 2 && computerchooses == 0) {
        console.log("computer wins");
        computerscore++;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "computer";
    } else if (userchooses == 2 && computerchooses == 1) {
        console.log("user wins");
        userscore++;
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return "user";
    } else {
        console.log("User: " + userscore + "  " + "Compuer: " + computerscore);
        checkwinner();
        return;
    }
}

// RANDOMLY GENERATES A CHOICE FOR COMPUTER
function generatechoicecomputer() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var computerselected = Math.floor(Math.random()*textArray.length);
    if (computerselected == 0) {
        return "rock";
    } else if (computerselected == 1){
        return 1;
    } else {
        return 2;
    }
}

// CHCEKS FOR WINNER
function checkwinner() {
    if (userscore == 5) {
        alert("player");
    } else if (computerscore == 5) {
        alert("computer");
    } else {
        return;
    }
}

// CONVERTS COMPUTER CHOICE TO TEXT
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