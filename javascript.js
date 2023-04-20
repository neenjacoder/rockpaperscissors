function computerchoice () {
    var textArray = [
        "rock",
        "paper",
        "scissors",
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);
    if (randomNumber == 0) {
        console.log("rock");
        return "rock";
    } else if (randomNumber == 1) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}