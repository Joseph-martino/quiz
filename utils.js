let userScore;
let gameOver;
let numberOfSeconds;
const imageFolder = "images/";
const iconFolder = "icons/";
const scoreDisplay = document.getElementById("score");
const medalIcon = document.getElementById("medal-picture");
const timerDisplay = document.getElementById("timer");
const timerInfo = document.getElementById("timer-info");
const clueButton = document.getElementById("clue");
const clueContent = document.getElementById("clue-content");
const gameView = document.getElementById("game-container");
const gameOverView = document.getElementById("game-over-container");
let medal = document.getElementById("medal");
let rewardDisplay = document.getElementById("reward-message");
const userInput = document.getElementById("user-input");
const validationbutton = document.getElementById("validation-button");
const skipButton = document.getElementById("skip-button");
const restartButton = document.getElementById("restart-game");
let picture = document.getElementById("image");
let randomNumber = Math.floor(Math.random() * games.length); 
const endGameScore= document.getElementById("end-game-score");
const StartButton = document.getElementById("start-button");
const tileScreen = document.getElementById("title-screen");
let player = {
    name:"",
    score:""
}