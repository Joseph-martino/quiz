class GameOverService {

    scoreService = new ScoreService();
    rewardService = new RewardService();
    gameOver;

    constructor(){
        this.gameOver = false;
    }

    getGameOver(){
        return this.gameOver;
    }

    setGameOver(boolean){
        this.gameOver = boolean;
    }

    setEndgame(boolean, player){
        this.setGameOver(boolean);
        this.displayGameOver(this.gameOver);
        this.scoreService.displayFinalScore(player.getScore());
        this.rewardService.getReward(player.getScore());
        this.displayHighScore(highScore, player);
        this.rewardService.displayPlayerCoins(player);
    }
    
    displayGameOver(gameOver){
        if(gameOver){
            gameView.style.display = "none";
            gameOverView.style.display = "block";
        }
    }

    sortArrayByDescendingOrder(array){
        let value;
        let counter;
        let currentScore;
        for(let i = 0; i < array.length; i++){
            value = array[i];
            currentScore = array[i].getScore().getScoreValue();
            counter = i;
            while(counter > 0 && array[counter -1].getScore().getScoreValue() < currentScore){
                array[counter] = array[counter -1];
                counter = counter -1;
            }
            array[counter] = value;
        }
    }

    checkIfPlayerScoreIsGreaterThanScoreInHightScore(array, player){
        this.sortArrayByDescendingOrder(array);
        if(player.getScore().getScoreValue() > array[array.length -1].getScore().getScoreValue()){
            return true;
        } else {
            return false;
        }
    }

    // showNewPlayerNameField(){
    //     playerNewUsernameBox.style.display = "block";
    // }

    // hideNewPlayerNameField(){
    //     playerNewUsernameBox.style.display = "none";
    // }

    displayExistingScores(array){
        for(let i = 0; i < array.length; i++){
            let index = i+1;
            let id = "score"+index;
            const div = document.getElementById(id);
            div.innerHTML = "Nom: " + array[i].getName() + " Score: " + array[i].getScore().getScoreValue();
        }
    }

    // setPlayerName(player){
    //     player.setName(userNameInput.value);
    //     highScore.push(player);
    //     this.hideNewPlayerNameField();
    //     this.sortArrayByDescendingOrder(highScore);
    //     if(highScore.length >= 5){
    //         highScore.pop();
    //     }
    //     this.displayExistingScores(highScore);
    // }

    addPlayerToHighScore(player){
        //player.setName(userNameInput.value);
        highScore.push(player);
        //this.hideNewPlayerNameField();
        this.sortArrayByDescendingOrder(highScore);
        if(highScore.length >= 5){
            highScore.pop();
        }
        this.displayExistingScores(highScore);
    }

    displayHighScore(array, player){
        if(array.length >= 5){
            this.sortArrayByDescendingOrder(array);
            this.displayExistingScores(array);
            let isPlayerScoreUpperThanHightScore = this.checkIfPlayerScoreIsGreaterThanScoreInHightScore(array, player);

            if(isPlayerScoreUpperThanHightScore){
                //this.showNewPlayerNameField();
                this.addPlayerToHighScore(player)
            }
        }
        else {
            this.sortArrayByDescendingOrder(array);
            //this.showNewPlayerNameField();
        }
    }
}