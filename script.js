let scoreService = new ScoreService();
let timerService = new TimerService();

function setEndgame(isEnded){
    isEnded = true;
}

function displayGameOver(){
    if(gameOver){
        gameOverDisplay.style.display = "block";
    }
}

function loadRandomPicture(number){
    picture.src = imageFolder + games[number].picture;  
}

function cleanInputField(){
    userInput.value = "";
    userInput.border = "solid 1px black";
}

function initGame(){
    gameOver = false;
    scoreService.initializeScore();
    timerService.initializeNumberOfSecond();
    timerService.timer();
    scoreService.displayScore();
    scoreService.getMedal();
    loadRandomPicture(randomNumber);
}

function checkUserAnswer(){
    if(userInput.value.toLowerCase() == games[randomNumber].title){
        randomNumber = Math.floor(Math.random() * games.length);
        timerService.addTimeToTimer();
        //timerService.displayAddOrRemovePointsToTimer(true);
        scoreService.addPointToScore();
        scoreService.getMedal(userScore);
        scoreService.displayScore();
        loadRandomPicture(randomNumber);
        cleanInputField();
    } else {
        userInput.style.border = "solid 3px red";
    }
}

function skip(){
    randomNumber = Math.floor(Math.random() * games.length); 
    timerServicedecreaseTimeToTimer();
    timerService.displayAddOrRemovePointsToTimer(false);
    timerService.displayTimer(rightAnswer);
    scoreService.soustractPointToScore();
    scoreService.displayScore();
    scoreService.getMedal(userScore);
    loadRandomPicture(randomNumber);
    cleanInputField();
}