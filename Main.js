StartButton.addEventListener('click',launchGame);
validationbutton.addEventListener('click', checkUserAnswer);
userInput.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        validationbutton.click();
    }
});
skipButton.addEventListener('click', skip);
clueButton.addEventListener('click', showClue);
restartButton.addEventListener('click', reloadGame);
userConfirmationButton.addEventListener('click', function(){
    gameOverService.setPlayerName()
},false);