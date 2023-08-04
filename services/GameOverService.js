class GameOverService {

    scoreService = new ScoreService();
    rewardService = new RewardService();

    setEndgame(){
        gameOver = true;
        this.displayGameOver(this.gameOver);
        let playerFinalScore = this.scoreService.getCurrentScore();
        this.scoreService.displayFinalScore(playerFinalScore);
        this.setScoreToPlayer(playerFinalScore);
        this.rewardService.getReward(playerFinalScore);
        this.displayHighScore(highScore, player);
        this.rewardService.displayPlayerCoins();
    }
    
    displayGameOver(){
        if(gameOver){
            gameView.style.display = "none";
            gameOverView.style.display = "block";
        }
    }

    setScoreToPlayer(score){
        player.score = score;
    }

    sortArrayByDescendingOrder(array){
        let value;
        let counter;
        let currentScore;
        for(let i = 0; i < array.length; i++){
            value = array[i];
            currentScore = array[i].score;
            counter = i;
            while(counter > 0 && array[counter -1].score < currentScore){
                array[counter] = array[counter -1];
                counter = counter -1;
            }
            array[counter] = value;
        }
    }

    checkIfPlayerScoreIsGreaterThanScoreInHightScore(array, score){
        this.sortArrayByDescendingOrder(array);
        if(score > array[array.length -1].score){
            return true;
        } else {
            return false;
        }
    }

    showNewPlayerNameField(){
        playerNewUsernameBox.style.display = "block";
    }

    hideNewPlayerNameField(){
        playerNewUsernameBox.style.display = "none";
    }

    displayExistingScores(array){
        for(let i = 0; i < array.length; i++){
            let index = i+1;
            let id= "score"+index;
            const div = document.getElementById(id);
            div.innerHTML = "Nom: " + array[i].name + " Score: " + array[i].score;
        }
    }

    setPlayerName(){
        player.name = userNameInput.value;
        highScore.push(player);
        this.hideNewPlayerNameField();
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
            let isPlayerScoreUpperThanHightScore = this.checkIfPlayerScoreIsGreaterThanScoreInHightScore(array, player.score);

            if(isPlayerScoreUpperThanHightScore){
                this.showNewPlayerNameField();
            }
        }
        else {
            this.sortArrayByDescendingOrder(array);
            this.showNewPlayerNameField();
        }
    }
}