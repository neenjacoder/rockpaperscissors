var computerpoints = 0;
var userpoints = 0;
var winner = 5;

function playGame(userchoice) {
    if (userchoice == "rock") {
        userchoserock();
        return;
    } else if (userchoice == "paper") {
        userchosepaper();
        return;
    } else {
        userchosescissors();
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

function userchoserock() {
    computer = randomComputerChoice();
    console.log("User chose rock")
    console.log("Computer chose " + computer);
    if (computer == "rock") {
        document.getElementById("winneris").innerText = "This Round Was A Tie!";
        console.log("Tie")
    } else if (computer == "scissors") {
        userpoints++;
        document.getElementById("userscore").innerText = "User Score: " + userpoints;
        document.getElementById("winneris").innerText = "User Wins This Round!";
        console.log("User wins")
        checkwinner();
        resetgame();
    } else {
        computerpoints++;
        document.getElementById("computerscore").innerText = "Computer Score: " + computerpoints;
        document.getElementById("winneris").innerText = "Computer Wins This Round!";
        console.log("Computer wins")
        checkwinner();
        resetgame(); 
    }
}

function userchosepaper() {    
    computer = randomComputerChoice();
    console.log("User chose paper")
    console.log("Computer chose " + computer);
    if (computer == "rock") {
        userpoints++;
        document.getElementById("userscore").innerText = "User Score: " + userpoints;
        document.getElementById("winneris").innerText = "User Wins This Round!";
        console.log("User wins")
        checkwinner();
        resetgame();    
    } else if (computer == "scissors") {
        computerpoints++;
        document.getElementById("computerscore").innerText = "Computer Score: " + computerpoints;
        document.getElementById("winneris").innerText = "Computer Wins This Round!";
        console.log("Computer wins")
        checkwinner();
        resetgame(); 
    } else {
        document.getElementById("winneris").innerText = "This Round Was A Tie!";
        console.log("Tie")
    }
}

function userchosescissors() {
    computer = randomComputerChoice();
    console.log("User chose scissors");
    console.log("Computer chose " + computer);
    if (computer == "rock") {
        computerpoints++;
        document.getElementById("computerscore").innerText = "Computer Score: " + computerpoints;
        document.getElementById("winneris").innerText = "Computer Wins This Round!";
        console.log("Computer wins")
        checkwinner();
        resetgame();  
    } else if (computer == "scissors") {
        document.getElementById("winneris").innerText = "This Round Was A Tie!";
        console.log("Tie")
    } else {
        userpoints++;
        document.getElementById("userscore").innerText = "User Score: " + userpoints;
        document.getElementById("winneris").innerText = "User Wins This Round!";
        console.log("User wins")
        checkwinner();
        resetgame();        
    }
}

function checkwinner() {
    if (userpoints == winner) {
        document.getElementById("winneris").innerText = "Congrats You Win!";
        return;
    } else if (computerpoints == winner) {
        document.getElementById("winneris").innerText = "Disaster, The Computer Won!";
        return;
    } else {
        return;
    }
}

// create a function to reset the game