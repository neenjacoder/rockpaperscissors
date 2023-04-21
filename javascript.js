// function computerrock() {
//     var textArray = [
//         "rock",
//         "paper",
//         "scissors",
//     ];
//     var randomNumber = Math.floor(Math.random()*textArray.length);
//     if (randomNumber == 0)  {
//         console.log(randomNumber);
//         console.log("tie game");
//         return "tie game";
//     } else if (randomNumber == 1) {
//         console.log(randomNumber);
//         console.log("player loses");
//         return "player loses";
//     } else {
//         console.log(randomNumber);
//         console.log("player wins");
//         return "player wins";
//     }
// }

// function computerpaper() {
//     var textArray = [
//         "rock",
//         "paper",
//         "scissors",
//     ];
//     var randomNumber = Math.floor(Math.random()*textArray.length);
//     if (randomNumber == 0)  {
//         console.log(randomNumber);
//         console.log("player wins");
//         return "player wins";
//     } else if (randomNumber == 1) {
//         console.log(randomNumber);
//         console.log("tie game");
//         return "tie game";
//     } else {
//         console.log(randomNumber);
//         console.log("player loses");
//         return "player loses";
//     }
// }

// function computerscissors() {
//     var textArray = [
//         "rock",
//         "paper",
//         "scissors",
//     ];
//     var randomNumber = Math.floor(Math.random()*textArray.length);
//     if (randomNumber == 0)  {
//         console.log(randomNumber);
//         console.log("player loses");
//         return "player loses";
//     } else if (randomNumber == 1) {
//         console.log(randomNumber);
//         console.log("player wins");
//         return "player wins";
//     } else {
//         console.log(randomNumber);
//         console.log("tie game");
//         return "tie game";
//     }
// }

function computergame(userchoice) {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);
    if (randomNumber == userchoice)  {
        // computer and user chose the same
        return "user";
    } else if (userchoice == 0 && randomNumber == 1) {
        // rock vs paper, computer wins
        return "computer";
    } else if (userchoice == 0 && randomNumber == 2) {
        // rock vs scissors, user wins
        return "user";
    } else if (userchoice == 1 && randomNumber == 0) {
        // paper vs rock, user wins
        return "user";
    } else if (userchoice == 1 && randomNumber == 2) {
        // paper vs scissors, computer wins
        return "computer";
    } else if (userchoice == 2 && randomNumber == 0) {
        // scissors vs rock, computer wins
        return "computer";
    } else {
        // scissors vs paper, user wins
        return "user";
    }
}