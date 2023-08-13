let gameService = new GameService();
let gameOverService = new GameOverService();
let cluePowerUpService = new CluePowerUpService();
let timeStopPowerUpService = new TimeStopPowerUpService(); 
let jokerPowerUpService = new JokerPowerUpService(); 
let playerService = new PlayerService();
const userInput = document.getElementById("user-input");
const validationbutton = document.getElementById("validation-button");
const skipButton = document.getElementById("skip-button");
const restartButton = document.getElementById("restart-game");
const startButton = document.getElementById("start-button");
const userNameInput = document.getElementById("user-name");
const userConfirmationButton = document.getElementById("user-confirmation-button");
const playerNameInput = document.getElementById("player-name-input");
const playerNameConfirmationButton = document.getElementById("player-confirmation-button");
const titleScreen = document.getElementById("title-screen");
const shopButton = document.getElementById("shop-button");
const shopScreen = document.getElementById("shop-screen");
const shopContent = document.getElementById("shop-content");
const playerStickersButton = document.getElementById("player-stickers-button");
const playerStickersScreen = document.getElementById("player-stickers-screen");
const playerStickersContent = document.getElementById("player-stickers-content");
const playerSuccessButton = document.getElementById("player-success-button");
const playerSuccessScreen = document.getElementById("player-success-screen");
const shopPreviousButton = document.getElementById("shop-previous-screen-button");
const playerStickersPreviousButton = document.getElementById("player-stickers-screen-previous-button");
const playerSuccessPreviousButton = document.getElementById("player-success-screen-previous-button");

playerNameConfirmationButton.addEventListener('click', function(){
    gameService.setPlayerName(gameService.getPlayer());
},false);

startButton.disabled = true;

startButton.addEventListener('click', function(){
    gameService.launchGame();
});

shopButton.addEventListener('click', function(){
    gameService.showShopScreen();
});

playerStickersButton.addEventListener('click', function(){
    gameService.showPlayerStickerScreen();
});

playerSuccessButton.addEventListener('click', function(){
    gameService.showPlayerSuccessScreen();
});

shopPreviousButton.addEventListener('click', function(){
    gameService.backToTitle();
});

playerStickersPreviousButton.addEventListener('click', function(){
    gameService.backToTitle();
});

playerSuccessPreviousButton.addEventListener('click', function(){
    gameService.backToTitle();
});

validationbutton.addEventListener('click', function(){
    gameService.checkUserAnswer();
});


userInput.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        validationbutton.click();
    }
});

skipButton.addEventListener('click', function(){
    gameService.skip();
});

restartButton.addEventListener('click', function(){
    gameService.reloadGame();
});

// userConfirmationButton.addEventListener('click', function(){
//     gameOverService.setPlayerName(gameService.getPlayer());
// },false);

timeStopButton.addEventListener('click', function(){
    timeStopPowerUpService.useTimeStop(gameService.getTimeStop());
});

jokerButton.addEventListener('click', function(){
    jokerPowerUpService.useJokerPower(gameService.getJoker(), gameService.getRandomNumber());
});

/////////////////paramètre
clueButton.addEventListener('click', function(){
    cluePowerUpService.useCluePower(gameService.getClue(), gameService.getRandomNumber());
});
//https://stackoverflow.com/questions/64338265/javascript-addeventlistener-function-with-parameters