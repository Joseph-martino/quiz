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
    gamePictureService = new GamePictureService();
    musicService = new MusicService();
    goodAnswerSound = document.getElementById("good-answer-sound");
    gameMusic = document.getElementById("game-music");
    picture = document.getElementById("image");
    errorPlayerNameInfo = document.getElementById("error-player-name-info");
    randomNumber;
    consecutiveAnswers;
    player;
    clue;
    joker;
    timeStop;
    self;

    constructor(){
        self = this;
        this.player = this.playerService.createPlayer();
    }

    setPlayerName(player){
        if(playerNameInput.value != " " && !playerNameInput != undefined){
            player.setName(playerNameInput.value);
            this.hideErrorPlayerName();
            startButton.disabled = false;
        } else {
            this.errorPlayerNameInfo.innerHTML = "Renseignez un nom valide";
        }
    }

    hideErrorPlayerName() {
        this.errorPlayerNameInfo.style.display = "none";
    }

    showShopScreen(){
        titleScreen.style.display = "none";
        shopScreen.style.display = "block";
    }

    showPlayerStickerScreen(){
        titleScreen.style.display = "none";
        playerStickersScreen.style.display = "block";
    }

    showPlayerSuccessScreen(){
        titleScreen.style.display = "none";
        playerSuccessScreen.style.display = "block";
    }

    backToTitle(){
        titleScreen.style.display = "block";
        shopScreen.style.display = "none";
        playerStickersScreen.style.display = "none";
        playerSuccessScreen.style.display = "none";
    }

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
        let game = this.gamePictureService.getByid(number);
        this.picture.src =  game.getPicture();
    }

    showPicture() {
        this.picture.style.display = "block";
    }

    hidePicture() {
        this.picture.style.display = "none";
    }

    loadRandomMusic(number) {
        let music = this.musicService.getByid(number);
        this.gameMusic.src = music.getMusic();
        this.gameMusic.play();
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
        this.consecutiveAnswers = 0;
        userInput.focus();
        this.levelService.initializeLevel();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.timerService.initializeNumberOfSecond();
        this.scoreService.displayScore(this.player.getScore());
        this.timerService.getPlayerScore(this.player.getScore());
        this.timerService.getPlayer(this.player);
        this.timerService.timer();
        this.medalService.getMedal(this.player.getMedal(), this.player.getScore().getScoreValue());
        this.generateRandomNumber(games);
        this.loadRandomPicture(this.randomNumber);
    }

    launchGame() {
        titleScreen.style.display = "none";
        gameView.style.display = "block";
        this.initGame();
    }

    earnCoins(level,randomNumber){
        if(level %10 === 0){
            this.player.setCoins(this.player.getCoins() + musics[randomNumber].coins);
        }
    }

    answerVerification() {
        console.log(this.player);
        this.goodAnswerSound.play();
        this.gameMusic.src = "";
        this.consecutiveAnswers++;
        this.timeStopPowerUpService.addTimeStopPowerUp(this.consecutiveAnswers, this.player.getTimeStop());
        this.timerService.addTimeToTimer();
        this.scoreService.addPointsToScore(this.player.getScore());
        this.timerService.getPlayerScore(this.player.getScore()); ///////////
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.medalService.getMedal(this.player.getMedal(), this.player.getScore().getScoreValue());
        this.scoreService.displayScore(this.player.getScore());
        this.cluePowerUpService.addCluePowerUp(this.player.getScore(), this.player.getClue());
        this.jokerPowerUpService.addJokerPowerUp(this.player.getScore(), this.player.getJoker());
        this.removeClue(this.player.getClue());
        let currentLevel = this.levelService.getCurrentLevel();
        this.checkIfBoss(currentLevel);
        this.earnCoins(currentLevel,this.randomNumber);
        this.cleanInputField();
        userInput.focus();
    }

    checkUserAnswer() {
        let question;
        let currentLevel = this.levelService.getCurrentLevel();
        if (currentLevel % 10 === 0) {
            question = musics;
        } else {
            question = games;
        }
        if (userInput.value.toLowerCase() === question[this.randomNumber].title) {
                this.answerVerification(question);
        } else {
                userInput.style.border = "solid 3px red";
        }
    }

    skip() {
        this.gameMusic.src = "";
        this.consecutiveAnswers = 0;
        this.timerService.decreaseTimeToTimer();
        this.scoreService.soustractPointToScore(this.player.getScore());
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.medalService.getMedal(this.player.getMedal(), this.player.getScore().getScoreValue());
        this.scoreService.displayScore(this.player.getScore());
        this.removeClue(this.player.getClue());
        let currentLevel = this.levelService.getCurrentLevel();
        this.checkIfBoss(currentLevel);
        this.cleanInputField();
        userInput.focus();
    }

    showClue(clue) {
        clue.clueContent.innerHTML = games[randomNumber].clue;
    }

    removeClue(clue) {
        clue.clueContent.innerHTML = "";
    }

    getPlayer(){
        return this.player;
    }

    getClue(){
        return this.player.getClue();
    }

    getJoker(){
        return this.player.getJoker();
    }

    getTimeStop(){
        return this.player.getTimeStop();
    }
}