let scoreService = new ScoreService();
let timerService = new TimerService();
let levelService = new LevelService();
let gameOverService = new GameOverService();
let timeStopPowerUpService = new TimeStopPowerUpService();
let jokerPowerUpService = new JokerPowerUpService();
let cluePowerUpService = new CluePowerUpService();

function reloadGame() {
    window.location.reload();
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
    consecutiveAnswers = 0;
    timeStopPowerUpService.displayTimeStopPowerUpQuantity();
    jokerPowerUpService.displayJokerPowerUpQuantity();
    cluePowerUpService.displayCluePowerUpQuantity();
    userInput.focus();
    scoreService.initializeScore();
    levelService.initializeLevel();
    levelService.displayLevel();
    levelService.hideLevel();
    timerService.initializeNumberOfSecond();
    scoreService.displayScore();
    timerService.timer();
    scoreService.getMedal();
    loadRandomPicture(randomNumber);
}

function launchGame(){
    tileScreen.style.display = "none";
    gameView.style.display = "block";
    initGame();
}

function checkUserAnswer(){
    if(userInput.value.toLowerCase() == games[randomNumber].title){
        goodAnswerSound.play();
        randomNumber = Math.floor(Math.random() * games.length);
        consecutiveAnswers++;
        timeStopPowerUpService.getTimeStopPowerUp(consecutiveAnswers);
        timerService.addTimeToTimer();
        scoreService.addPointToScore();
        levelService.displayLevel();
        levelService.hideLevel();
        scoreService.getMedal(userScore);
        scoreService.displayScore();
        currentScore = scoreService.getCurrentScore();
        jokerPowerUpService.getJokerPowerUp(currentScore);
        cluePowerUpService.getCluePowerUp(currentScore);
        removeClue();
        loadRandomPicture(randomNumber);
        cleanInputField();
        userInput.focus();
    } else {
        userInput.style.border = "solid 3px red";
    }
}

function skip(){
    randomNumber = Math.floor(Math.random() * games.length); 
    consecutiveAnswers = 0;
    timerService.decreaseTimeToTimer();
    scoreService.soustractPointToScore();
    scoreService.getMedal(userScore);
    scoreService.displayScore();
    removeClue();
    loadRandomPicture(randomNumber);
    cleanInputField();
    userInput.focus();
}

function showClue(){
    clueContent.innerHTML = games[randomNumber].clue;
}

function removeClue(){
    clueContent.innerHTML ="";
}