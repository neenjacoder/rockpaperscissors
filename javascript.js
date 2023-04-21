function computerchoicerock() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);
    if (randomNumber == 0)  {
        console.log(randomNumber);
        console.log("tie game");
        return "tie game";
    } else if (randomNumber == 1) {
        console.log(randomNumber);
        console.log("player loses");
        return "player loses";
    } else {
        console.log(randomNumber);
        console.log("player wins");
        return "player wins";
    }
}

function computerchoicescissors() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);
    if (randomNumber == 0)  {
        console.log(randomNumber);
        console.log("player wins");
        return "player wins";
    } else if (randomNumber == 1) {
        console.log(randomNumber);
        console.log("tie game");
        return "tie game";
    } else {
        console.log(randomNumber);
        console.log("player loses");
        return "player loses";
    }
}

function computerchoicepaper() {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);
    if (randomNumber == 0)  {
        console.log(randomNumber);
        console.log("player loses");
        return "player loses";
    } else if (randomNumber == 1) {
        console.log(randomNumber);
        console.log("player wins");
        return "player wins";
    } else {
        console.log(randomNumber);
        console.log("tie game");
        return "tie game";
    }
}