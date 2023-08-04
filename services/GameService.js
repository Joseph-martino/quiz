class GameService {

    scoreService = new ScoreService();
    timerService = new TimerService();
    levelService = new LevelService();
    gameOverService = new GameOverService();
    timeStopPowerUpService = new TimeStopPowerUpService();
    jokerPowerUpService = new JokerPowerUpService();
    cluePowerUpService = new CluePowerUpService();
    randomNumber;

    reloadGame() {
        window.location.reload();
    }

    
    generateRandomNumber(array) {
        this.randomNumber = Math.floor(Math.random() * array.length);
        //return this.randomNumber;
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
            // player.coins = musics[randomNumberMusicArray].coins;
            // coins.innerHTML = "pièces: " + player.coins;
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
        gameOver = false;
        consecutiveAnswers = 0;
        this.timeStopPowerUpService.displayTimeStopPowerUpQuantity();
        this.jokerPowerUpService.displayJokerPowerUpQuantity();
        this.cluePowerUpService.displayCluePowerUpQuantity();
        userInput.focus();
        this.scoreService.initializeScore();
        this.levelService.initializeLevel();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.timerService.initializeNumberOfSecond();
        this.scoreService.displayScore();
        this.timerService.timer();
        this.scoreService.getMedal();
        this.generateRandomNumber(games);
        this.loadRandomPicture(this.randomNumber);
    }

    launchGame() {
        tileScreen.style.display = "none";
        gameView.style.display = "block";
        this.initGame();
    }

    // function checkUserAnswer(){
    //     if(userInput.value.toLowerCase() === games[randomNumber].title /*|| userInput.value.toLowerCase() === musics[randomNumberMusic].title || userInput.value.toLowerCase() === "nadine"*/){
    //         console.log(musics[randomNumberMusic].title);
    //         console.log(games[randomNumber].title);
    //         console.log(player.coins);
    //         goodAnswerSound.play();
    //         gameMusic.src = "";
    //         randomNumber = generateRandomNumber(games);
    //         consecutiveAnswers++;
    //         timeStopPowerUpService.getTimeStopPowerUp(consecutiveAnswers);
    //         timerService.addTimeToTimer();
    //         scoreService.addPointToScore();
    //         levelService.displayLevel();
    //         levelService.hideLevel();
    //         scoreService.getMedal(userScore);
    //         scoreService.displayScore();
    //         currentScore = scoreService.getCurrentScore();
    //         jokerPowerUpService.getJokerPowerUp(currentScore);
    //         cluePowerUpService.getCluePowerUp(currentScore);
    //         removeClue();
    //         currentLevel = levelService.getCurrentLevel();
    //         //checkIfBoss(currentLevel);
    //         if(currentLevel %10 === 0){
    //             randomNumberMusicArray = generateRandomNumber(musics);
    //             hidePicture();
    //             loadRandomMusic(randomNumberMusicArray);
    //             player.coins = musics[randomNumberMusicArray].coins;
    //             coins.innerHTML = "pièces: " + player.coins;
    //         } else {
    //             showPicture();
    //             loadRandomPicture(randomNumber);
    //         }
    //         cleanInputField();
    //         userInput.focus();
    //     } else {
    //         userInput.style.border = "solid 3px red";
    //     }
    // }

    answerVerification(array) {
        console.log(array);
        goodAnswerSound.play();
        gameMusic.src = "";
        //let randomNumber = this.generateRandomNumber(array);
        consecutiveAnswers++;
        this.timeStopPowerUpService.getTimeStopPowerUp(consecutiveAnswers);
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
        // if (currentLevel % 10 === 0) {
        //     //let randomNumber2 = generateRandomNumber(musics);
        //     this.hidePicture();
        //     this.loadRandomMusic(this.randomNumber);
        //     // player.coins = musics[randomNumberMusicArray].coins;
        //     // coins.innerHTML = "pièces: " + player.coins;
        // } else {
        //     //let randomNumber3 = generateRandomNumber(games);
        //     this.showPicture();
        //     this.loadRandomPicture(this.randomNumber);
        // }
        this.cleanInputField();
        userInput.focus();
    }

    checkUserAnswer() {
        let currentLevel = this.levelService.getCurrentLevel();
        if (currentLevel % 10 === 0) {
            console.log("music");
            console.log("music: " + musics[this.randomNumber].title);
            if (userInput.value.toLowerCase() === musics[this.randomNumber].title) {
                this.answerVerification(musics);
            } else {
                userInput.style.border = "solid 3px red";
            }
        } else if (currentLevel % 10 != 0) {
            console.log("image");
            console.log("image: " + games[this.randomNumber].title);
            if (userInput.value.toLowerCase() === games[this.randomNumber].title) {
                this.answerVerification(games);
            }
        }
    }

    skip() {
        gameMusic.src = "";
        this.randomNumber = this.generateRandomNumber(games);
        consecutiveAnswers = 0;
        this.timerService.decreaseTimeToTimer();
        this.scoreService.soustractPointToScore();
        this.levelService.displayLevel();
        this.levelService.hideLevel();
        this.scoreService.getMedal(userScore);
        this.scoreService.displayScore();
        removeClue();
        this.loadRandomPicture(this.randomNumber);
        currentLevel = levelService.getCurrentLevel();
        //this.checkIfBoss(currentLevel);
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