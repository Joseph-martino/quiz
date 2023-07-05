const games = [
    {
        title: "mario",
        picture: "super-mario-bros.jpg"
    },

    {
        title: "zelda",
        picture: "The-Legend-of-Zelda-Twilight-Princess_5.jpg"
    },

    {
        title: "pikmin",
        picture: "pikmin1.jpg"
    }
];

let userScore;
let gameOver;
const scoreDisplay = document.getElementById("score");
const medalIcon = document.getElementById("medal-picture");
let medal = document.getElementById("medal");
const userInput = document.getElementById("user-input");
const validationbutton = document.getElementById("validation-button");
const skipButton = document.getElementById("skip-button");
const imageFolder = "images/";
const iconFolder = "icons/";
let picture = document.getElementById("image");
let randomNumber = Math.floor(Math.random() * games.length); 

function initializeScore(score){
    userScore = 0;
}

function displayScore(){
    scoreDisplay.innerHTML = userScore;
}

function addPointToScore(){
    userScore += 10;
}

function soustractPointToScore(){
    userScore -= 25;
}

function loadRandomPicture(number){
    picture.src = imageFolder + games[number].picture;  
}

function cleanInputField(){
    userInput.value = "";
    userInput.border = "solid 1px black";
}

function getMedal(score){
    if(score < 20) {
        medalIcon.style.display = "none";
    }
    if (score > 20 && score < 40) {
        medal.innerText = "Médaille de bronze";
        medalIcon.style.display = "block";
        medalIcon.src = imageFolder + iconFolder + "bronze-medal.png";
    } else if (score > 40 && score < 60) {
        medalIcon.style.display = "block";
        medal.innerText = "Médaille d'argent";
        medalIcon.src = imageFolder + iconFolder + "silver-medal.png";
    } else if (score  > 60){
        medal.innerText = "Médaille d'or";
        medalIcon.style.display = "block";
        medalIcon.src = imageFolder + iconFolder + "gold-medal.png";
    }
}

function initGame(){
    gameOver = false;
    initializeScore();
    displayScore();
    getMedal();
    loadRandomPicture(randomNumber);
}

function checkUserAnswer(){
    if(userInput.value.toLowerCase() == games[randomNumber].title){
        console.log("Bien joué");
        randomNumber = Math.floor(Math.random() * games.length); 
        addPointToScore(userScore);
        getMedal(userScore);
        displayScore();
        loadRandomPicture(randomNumber);
        cleanInputField();
    } else {
        userInput.style.border = "solid 3px red";
    }
}

function skip(){
    randomNumber = Math.floor(Math.random() * games.length); 
    soustractPointToScore(userScore);
    getMedal(userScore);
    displayScore();
    loadRandomPicture(randomNumber);
    cleanInputField();
}

initGame();
validationbutton.addEventListener('click', checkUserAnswer);
skipButton.addEventListener('click', skip);