//let gameOverService = new GameOverService();

StartButton.addEventListener('click',launchGame);
validationbutton.addEventListener('click', checkUserAnswer);
skipButton.addEventListener('click', skip);
clueButton.addEventListener('click', showClue);
restartButton.addEventListener('click', reloadGame);
userConfirmationButton.addEventListener('click', function(){
    gameOverService.setPlayerName()
},false);