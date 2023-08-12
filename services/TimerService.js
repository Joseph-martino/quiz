class TimerService {

    rewardService = new RewardService();
    scoreService = new ScoreService();
    gameOverService = new GameOverService();
    playerService = new PlayerService();
    timerDelay;
    interval;
    self;
    scorePlayer;
    player;
    numberOfSeconds;


    constructor(){
        self = this;
    }

    getPlayer(player){
        self.player = player;
    }

    getPlayerScore(score){
        self.scorePlayer = self.scoreService.getScore(score);
        //return self.scorePlayer;
    }

    initializeNumberOfSecond(){
        self.numberOfSeconds = 30;
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
        self.numberOfSeconds--;
        self.displayTimer(self.numberOfSeconds);
    }

    checkScore(score){
        if(score.getScoreValue() >= 0 && score.getScoreValue() <= 20){
            self.changeTimer(1500);
        } else if(score.getScoreValue() >20 && score.getScoreValue() <= 40){
            self.changeTimer(1000);
        } else if(score.getScoreValue() > 40){
            self.changeTimer(800);
        }
    }
    
    timer(){
        clearInterval(window.interval);
        if(self.numberOfSeconds > 0){
            clearInterval(window.interval);
            self.addContentToTimer();
            self.checkScore(self.player.getScore());
            window.interval = setInterval(self.timer, self.timerDelay);
        } if(self.numberOfSeconds <= 0){
            self.numberOfSeconds = 0;
            console.log("tata");
            self.gameOverService.setEndgame(true, self.player);
        }
    }
    
    stopTimer(timer) {
        clearInterval(timer);
    }
    
    hideTimerInfo(){
        timerInfo.innerText ="";
    }
    
    addTimeToTimer(){
        self.numberOfSeconds = self.getCurrentTimer();
        self.numberOfSeconds += 5;
        if(self.numberOfSeconds > 60){
            self.numberOfSeconds = 60;
        }
        self.displayTimer(self.numberOfSeconds);
        timerInfo.innerText = "+" + 5;
        setTimeout(self.hideTimerInfo, 1000);
    }
    
    decreaseTimeToTimer(){
        self.numberOfSeconds = self.getCurrentTimer();
        self.numberOfSeconds -= 5;
        self.displayTimer(self.numberOfSeconds);
        timerInfo.innerText = "-" + 5;
        setTimeout(self.hideTimerInfo, 1000);
    }
}


