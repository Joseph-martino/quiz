class TimerService {

    rewardService = new RewardService();
    scoreService = new ScoreService();
    gameOverService = new GameOverService();
    timerDelay;
    test = 30;
    interval;

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
        this.displayTimer(numberOfSeconds);
    }
    
    timer(){
        clearInterval(this.interval);
        this.addContentToTimer();
        let score = this.scoreService.getCurrentScore();
        if(score >= 0 && score <= 20){
            console.log("lent");
            this.changeTimer(1500);
        } else if(score >20 && score <= 40){
            console.log("moyen");
            this.changeTimer(1000);
        } else if(score > 40){
            console.log("rapide");
            this.changeTimer(700);
        }
        this.interval = window.setInterval(this.timer, this.timerDelay);
        if(numberOfSeconds <= 0){
            numberOfSeconds = 0;
            clearInterval(this.interval);
        }

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
        numberOfSeconds = this.getCurrentTimer();
        numberOfSeconds += 5;
        if(numberOfSeconds > 60){
            numberOfSeconds = 60;
        }
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


