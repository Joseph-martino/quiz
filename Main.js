let gameService = new GameService();
let cluePowerUpService = new CluePowerUpService();
let timeStopPowerUpService = new TimeStopPowerUpService(); 
let jokerPowerUpService = new JokerPowerUpService(); 

StartButton.addEventListener('click', function(){
    gameService.launchGame();
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

userConfirmationButton.addEventListener('click', function(){
    gameOverService.setPlayerName()
},false);

timeStopButton.addEventListener('click', function(){
    timeStopPowerUpService.useTimeStop();
});

jokerButton.addEventListener('click', function(){
    jokerPowerUpService.getRightAnswer();
});

clueButton.addEventListener('click', function(){
    cluePowerUpService.displayClue();
});