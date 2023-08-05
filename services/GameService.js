class GameService {

    scoreService = new ScoreService();
    timerService = new TimerService();
    levelService = new LevelService();
    gameOverService = new GameOverService();
    timeStopPowerUpService = new TimeStopPowerUpService();
    jokerPowerUpService = new JokerPowerUpService();
    cluePowerUpService = new CluePowerUpService();
    playerService = new PlayerService();
    medalService = new MedalService();
    randomNumber;
    consecutiveAnswers;
    player;
    clue;
    joker;
    timeStop;

    reloadGame() {
        window.location.reload();
    }
    
    generateRandomNumber(array) {
        this.randomNumber = Math.floor(Math.random() * array.length);
    }
    
    getRandomNumber(){
        return this.randomNumber;
    }
    loadRandomPicture(number) {
        picture.src = imageFolder + games[number].picture;
    }

    showPicture() {
        picture.style.display = "block";
    }

    hidePicture() {
        picture.style.display = "none";
    }

    loadRandomMusic(number) {
        gameMusic.src = musicFolder + musics[number].music;
        gameMusic.play();
    }

    checkIfBoss(level) {
        if (level % 10 === 0) {
            this.generateRandomNumber(musics);
            this.randomNumber = this.getRandomNumber();
            this.hidePicture();
            this.loadRandomMusic(this.randomNumber);
        } else {
            this.generateRandomNumber(games);
            this.randomNumber = this.getRandomNumber();
            this.showPicture();
            this.loadRandomPicture(this.randomNumber);
        }
    }

    cleanInputField() {
        userInput.value = "";
        userInput.border = "solid 1px black";
    }

    initGame() {
        //.playerService.createPlayer();
        this.player = this.playerService.createPlayer();
        // this.player = new Player();
        // this.clue = new Clue();
        // this.timeStop = new TimeStop();
        // this.joker = new Joker();
        // this.score = new Score();
        // this.player.setScore(this.score.getScore());
        // this.player.addPowerUp(this.clue);
        // this.player.addPowerUp(this.timeStop);
        // this.player.addPowerUp(this.joker);
        this.consecutiveAnswers = 0;

        // this.powersUp.displayPowerUpQuantity(this.clue);
        // this.powersUp.displayPowerUpQuantity(this.timeStop);
        // this.powersUp.displayPowerUpQuantity(this.joker);


        // this.timeStopPowerUpService.displayTimeStopPowerUpQuantity();
        // this.jokerPowerUpService.displayJokerPowerUpQuantity();
        // this.cluePowerUpService.displayCluePowerUpQuantity();

        userInput.focus();
        //this.scoreService.initializeScore();
        this.levelService.initializeLevel();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.timerService.initializeNumberOfSecond();
        this.scoreService.displayScore(this.player.getScore());
        this.timerService.timer(this.player.getScore());
        //this.scoreService.getMedal();
        this.medalService.getMedal(this.player.getMedal(), this.player.getScore().getScoreValue());
        this.generateRandomNumber(games);
        this.loadRandomPicture(this.randomNumber);
    }

    launchGame() {
        tileScreen.style.display = "none";
        gameView.style.display = "block";
        this.initGame();
    }

    answerVerification(array) {
        console.log(array);
        console.log(this.player);
        console.log("score: " + this.player.getScore().getScoreValue());
        goodAnswerSound.play();
        gameMusic.src = "";
        this.consecutiveAnswers++;
        this.timeStopPowerUpService.getTimeStopPowerUp(this.consecutiveAnswers);
        this.timerService.addTimeToTimer();
        this.scoreService.addPointToScore();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.scoreService.getMedal(userScore);
        this.scoreService.displayScore();
        let currentScore = this.scoreService.getCurrentScore();
        this.jokerPowerUpService.getJokerPowerUp(currentScore);
        this.cluePowerUpService.getCluePowerUp(currentScore);
        this.removeClue();
        let currentLevel = this.levelService.getCurrentLevel();
        this.checkIfBoss(currentLevel);
        this.cleanInputField();
        userInput.focus();
    }

    checkUserAnswer() {
        let currentLevel = this.levelService.getCurrentLevel();
        if (currentLevel % 10 === 0) {
            if (userInput.value.toLowerCase() === musics[this.randomNumber].title) {
                this.answerVerification(musics);
            } else {
                userInput.style.border = "solid 3px red";
            }
        } else if (currentLevel % 10 != 0) {
            if (userInput.value.toLowerCase() === games[this.randomNumber].title) {
                this.answerVerification(games);
            }
        }
    }

    skip() {
        gameMusic.src = "";
        this.randomNumber = this.generateRandomNumber(games);
        this.consecutiveAnswers = 0;
        this.timerService.decreaseTimeToTimer();
        this.scoreService.soustractPointToScore();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.scoreService.getMedal(userScore);
        this.scoreService.displayScore();
        this.removeClue();
        this.loadRandomPicture(this.randomNumber);
        let currentLevel = this.levelService.getCurrentLevel();
        this.checkIfBoss(currentLevel);
        this.cleanInputField();
        userInput.focus();
    }

    showClue() {
        clueContent.innerHTML = games[randomNumber].clue;
    }

    removeClue() {
        clueContent.innerHTML = "";
    }
}