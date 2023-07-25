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
const hightScoreContainer = document.getElementById("high-score-container");
const playerNewUsernameBox = document.getElementById("player-new-username-container");
const userNameInput = document.getElementById("user-name");
const userConfirmationButton = document.getElementById("user-confirmation-button");
const tileScreen = document.getElementById("title-screen");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");
const score5 = document.getElementById("score5");
const goodAnswerSound = document.getElementById("good-answer-sound");
const levelDisplay = document.getElementById("level");
let level;

let player = {
    name:"",
    score:""
}