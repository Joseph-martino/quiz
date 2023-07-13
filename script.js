let scoreService = new ScoreService();
let timerService = new TimerService();

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
    userInput.focus();
    scoreService.initializeScore();
    timerService.initializeNumberOfSecond();
    timerService.timer();
    scoreService.displayScore();
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