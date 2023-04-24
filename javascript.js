// List of functions to play a round and check to see who is winner:
    //play a round function
        // generate a random choice for computer
    // compare random choice computer to user choice
    // declare a winner
    // update score
    // check for winner
    // no winner keep playing, wait for input

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
    userscore = 0;
    computerscore = 0;
    if (userchooses == computerchooses) {
        console.log("tie game");
        userscore+=0;
        computerscore+=0;
        console.log(userscore);
        console.log(computerscore);
        return "tie";
    } else if (userchooses == 0 && computerchooses == 1) {
        console.log("computer wins");
        computerscore++;
        console.log(computerscore);
        return "computer";
    } else if (userchooses == 0 && computerchooses == 2) {
        console.log("user wins");
        userscore++;
        console.log(userscore);
        return "user";
    } else if (userchooses == 1 && computerchooses == 0) {
        console.log("user wins");
        userscore++;
        console.log(userscore);
        return "user";
    } else if (userchooses == 1 && computerchooses == 2) {
        console.log("computer wins");
        computerscore++;
        console.log(computerscore);
        return "computer";
    } else if (userchooses == 2 && computerchooses == 0) {
        console.log("computer wins");
        computerscore++;
        console.log(computerscore);
        return "computer";
    } else if (userchooses == 2 && computerchooses == 1) {
        console.log("user wins");
        userscore++;
        console.log(userscore);
        return "user";
    } else {
        return;
    }
}

// // UPDATES THE SCORE
// function scorekeeper () {
//     roundwinner = roundwinner();
//     userscore = 0;
//     computerscore = 0;
//     if (roundwinner == "userwins") {
//         userscore ++;
//     } else if (roundwinner == "computerwins") {
//         computerscore ++;
//     } else if (roundwinner == "tie") {
//         userscore += 0;
//         computerscore += 0;
//     } else {
//         return;
//     }
// }

// // CHECKS TO SEE WHO WON THE GAME
// function gamewinner () {
//     if (userscore == 5) {
//         return "user wins";
//     } else if (computerscore == 5) {
//         return "computer wins";
//     } else {
//         return;
//     }
// }
