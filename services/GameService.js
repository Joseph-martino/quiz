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
    goodAnswerSound = document.getElementById("good-answer-sound");
    gameMusic = document.getElementById("game-music");
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
        this.player = this.playerService.createPlayer();
        this.consecutiveAnswers = 0;
        userInput.focus();
        //this.scoreService.initializeScore();
        this.levelService.initializeLevel();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.timerService.initializeNumberOfSecond();
        this.scoreService.displayScore(this.player.getScore());
        this.timerService.timer(this.scoreService.getCurrentScore(this.player.getScore()));
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
        
        this.goodAnswerSound.play();
        this.gameMusic.src = "";
        this.consecutiveAnswers++;
        this.timeStopPowerUpService.getTimeStopPowerUp(this.consecutiveAnswers);
        this.timerService.addTimeToTimer();
        this.scoreService.addPointsToScore(this.player.getScore());
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.medalService.getMedal(this.player.getMedal(), this.player.getScore().getScoreValue());
        this.scoreService.displayScore(this.player.getScore());
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
        let question;
        let currentLevel = this.levelService.getCurrentLevel();
        if (currentLevel % 10 === 0) {
            question = musics;
            console.log(question);
            if (userInput.value.toLowerCase() === musics[this.randomNumber].title) {
                this.answerVerification(musics);
            } else {
                userInput.style.border = "solid 3px red";
            }
        } else if (currentLevel % 10 != 0) {
            question = games;
            console.log(question);
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