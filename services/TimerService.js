class TimerService {

    rewardService = new RewardService();
    scoreService = new ScoreService();
    gameOverService = new GameOverService();
    timerDelay;
    interval;
    self

    constructor(){
        self = this;
    }

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

    changeTimer(number){
        this.timerDelay = number;
    }

    addContentToTimer(){
        numberOfSeconds--;
        self.displayTimer(numberOfSeconds);
    }

    checkScore(score){
        if(score >= 0 && score <= 20){
            self.changeTimer(1500);
        } else if(score >20 && score <= 40){
            self.changeTimer(1000);
        } else if(score > 40){
            self.changeTimer(800);
        }
    }
    
    timer(){
        clearInterval(this.interval);
        self.addContentToTimer();
        if(numberOfSeconds <= 0){
            self.gameOverService.setEndgame();
            numberOfSeconds = 0;
            clearInterval(self.interval);
        }
        let score = self.scoreService.getCurrentScore();
        self.checkScore(score);
        this.interval = window.setInterval(self.timer, self.timerDelay);
        

        // const timer = window.setInterval(() => {
        // numberOfSeconds--
        // if(numberOfSeconds < 0){
        //     this.gameOverService.setEndgame(this.gameOver);
        //     numberOfSeconds = 0;
        //     this.stopTimer(timer);
        // }
        // this.displayTimer(numberOfSeconds)} 
        // , timerInterval);
    }
    
    stopTimer(timer) {
        clearInterval(timer);
    }
    
    hideTimerInfo(){
        timerInfo.innerText ="";
    }
    
    addTimeToTimer(){
        numberOfSeconds = self.getCurrentTimer();
        numberOfSeconds += 5;
        if(numberOfSeconds > 60){
            numberOfSeconds = 60;
        }
        self.displayTimer(numberOfSeconds);
        timerInfo.innerText = "+" + 5;
        setTimeout(self.hideTimerInfo, 1000);
    }
    
    decreaseTimeToTimer(){
        numberOfSeconds = self.getCurrentTimer();
        numberOfSeconds -= 5;
        self.displayTimer(numberOfSeconds);
        timerInfo.innerText = "-" + 5;
        setTimeout(self.hideTimerInfo, 1000);
    }
}


