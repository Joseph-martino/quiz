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
        const timer = window.setInterval(() => {
        numberOfSeconds--
        if(numberOfSeconds < 0){
            this.gameOverService.setEndgame(this.gameOver);
            numberOfSeconds = 0;
            this.stopTimer(timer);
        }
        this.displayTimer(numberOfSeconds)} 
        , 1000);
    }

    stopTimer(timer) {
        clearInterval(timer);
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


