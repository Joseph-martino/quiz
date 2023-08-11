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
        //let scorePlayer = self.scoreService.getCurrentScore(score);
        self.scorePlayer = self.scoreService.getScore(score);
        //return self.scorePlayer;
    }

    test(){
        this.playerService.test();
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

    // timerContentTest(score){
    //     self.addContentToTimer();
    //     if(numberOfSeconds <= 0){
    //         self.gameOverService.setEndgame(true, score);
    //         numberOfSeconds = 0;
    //         clearInterval(self.interval);
    //     }
    //     self.checkScore(score);
    // }

    // timertest(score){
    //     setInterval(() => {
    //         console.log(score);
    //         this.timerContentTest(score);
    //     }, 1000);
    // }
    
    timer(){
        console.log("titi");
        clearInterval(window.interval);
        if(self.numberOfSeconds > 0){
            clearInterval(window.interval);
            self.addContentToTimer();
            self.checkScore(self.player.getScore());
            window.interval = setInterval(self.timer, self.timerDelay);
        } if(self.numberOfSeconds <= 0){
            console.log("tata");
            self.gameOverService.setEndgame(true, self.player);
            self.numberOfSeconds = 0;
            //clearInterval(this.interval);
        }
        
        
        
        //console.log(self.scorePlayer);
        //let scoreTest = self.scoreService.getCurrentScore(score);
        //console.log(scoreTest);
        //score = score.getScoreValue();
        
        ///////////////////////////////////////////////////////////

        // if(numberOfSeconds <= 0){
        //     self.gameOverService.setEndgame(true, self.player);
        //     numberOfSeconds = 0;
        //     console.log("tata");
        //     clearInterval(this.interval);
        // } else {
        //     clearInterval(this.interval);
        //     self.addContentToTimer();
        //     console.log("toto");
        //     //console.log(self.scorePlayer);
        //     //let scoreTest = self.scoreService.getCurrentScore(score);
        //     //console.log(scoreTest);
        //     //score = score.getScoreValue();
        //     self.checkScore(self.player.getScore());
        //     this.interval = setInterval(self.timer, self.timerDelay);
        // }

        //////////////////////////////////////////////////////////////

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


