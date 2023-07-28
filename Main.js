//let gameOverService = new gameOverService();
//let timeStopPowerUp = new TimeStopPowerUp();

StartButton.addEventListener('click',launchGame);
validationbutton.addEventListener('click', checkUserAnswer);
userInput.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        validationbutton.click();
    }
});

skipButton.addEventListener('click', skip);
clueButtonTest.addEventListener('click', showClue);
restartButton.addEventListener('click', reloadGame);
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
})