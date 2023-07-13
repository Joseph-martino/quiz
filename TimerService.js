class TimerService {

    rewardService = new RewardService();
    scoreService = new ScoreService();
    gameOverService = new GameOverService();

    initializeNumberOfSecond(){
        numberOfSeconds = 30;
    }

    displayTimer(number){
        timerDisplay.innerText = number;
    }

    getCurrentTimer(){
        let currentNumbrOfSeconds = parseInt(timerDisplay.innerText);
        return currentNumbrOfSeconds;
    }
    
    timer(){
        window.setInterval(() => {
        numberOfSeconds--
        if(numberOfSeconds < 0){
            this.gameOverService.setEndgame(this.gameOver);
            numberOfSeconds = 0;
            this.gameOverService.displayGameOver(this.gameOver);
            let playerFinalScore = this.scoreService.getCurrentScore();
            this.scoreService.displayFinalScore(playerFinalScore);
            this.gameOverService.setScoreToPlayer(playerFinalScore);
            this.rewardService.getReward(playerFinalScore);
        }
        this.displayTimer(numberOfSeconds)} 
        , 1000);
    }
    
    hideTimerInfo(){
        timerInfo.innerText ="";
    }
    
    addTimeToTimer(){
        numberOfSeconds = this.getCurrentTimer();
        numberOfSeconds += 5;
        this.displayTimer(numberOfSeconds);
        timerInfo.innerText = "+" + 5;
        setTimeout(this.hideTimerInfo, 1000);
    }
    
    decreaseTimeToTimer(){
        numberOfSeconds = this.getCurrentTimer();
        numberOfSeconds -= 5;
        this.displayTimer(numberOfSeconds);
        timerInfo.innerText = "-" + 5;
        setTimeout(this.hideTimerInfo, 1000);
    }
}


