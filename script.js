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
    userInput.focus();
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
        scoreService.addPointToScore();
        scoreService.getMedal(userScore);
        scoreService.displayScore();
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