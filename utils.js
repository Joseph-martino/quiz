//let userScore;
//let gameOver;
let numberOfSeconds;
//let consecutiveAnswers;
let answerDuration;
let timerInterval = 1000;
const imageFolder = "images/";
const iconFolder = "icons/";
const musicFolder = "sounds/musics/";
//const scoreDisplay = document.getElementById("score");
// const medalIcon = document.getElementById("medal-picture");
const timerDisplay = document.getElementById("timer");
const timerInfo = document.getElementById("timer-info");
const clueContent = document.getElementById("clue-content");
const gameView = document.getElementById("game-container");
const gameOverView = document.getElementById("game-over-container");
//let medal = document.getElementById("medal");
let rewardDisplay = document.getElementById("reward-message");
const userInput = document.getElementById("user-input");
const validationbutton = document.getElementById("validation-button");
const skipButton = document.getElementById("skip-button");
const restartButton = document.getElementById("restart-game");
let picture = document.getElementById("image");
//let randomNumber = Math.floor(Math.random() * games.length); 
//let randomNumberMusic = Math.floor(Math.random() * musics.length);
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
const timeStopButton = document.getElementById("time-stop-power-button");
// const timeStopPowerUp = document.getElementById("time-stop-power");
const jokerButton = document.getElementById("joker-power-button");
//const jokerPowerUp = document.getElementById("joker-power");
const clueButton = document.getElementById("clue-power-button");
//const cluePowerUp = document.getElementById("clue-power");
const powerUpInfo = document.getElementById("power-up-info");
const gameMusic = document.getElementById("game-music");
const coins= document.getElementById("coins");
const endGameCoinsDisplay = document.getElementById("end-game-coins");
let level;
// let player = {
//     name:"",
//     score:"",
//     coins: 0,
//     powerUps: [
//         {
//             name: "Time Stop",
//             quantity: 0,
//         },

//         {
//             name: "Joker",
//             quantity: 0
//         },

//         {
//             name: "Clue",
//             quantity: 0
//         }
//     ]
// }