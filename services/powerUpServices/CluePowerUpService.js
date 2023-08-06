class CluePowerUpService {

    levelService = new LevelService();
    
    displayCluePowerUpQuantity(clue){
        clue.cluePowerUp.innerHTML = clue.getQuantity();
    }

    hideInfo(){
        setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    }

    getCurrentGame(number){
        return games[number];
    }

    getCurrentMusic(number){
        return musics[number];
    }

    displayClue(clue){
        if(clue.getQuantity() > 0){
            let currentLevel = this.levelService.getCurrentLevel();
            if(currentLevel %10 === 0){
                let music = this.getCurrentMusic(randomNumber);
                console.log(music);
                clue.cluePowerUp.innerHTML = music.clue;
            } else {
                let game = this.getCurrentGame(randomNumber);
                clue.cluePowerUp.innerHTML = game.clue;
            }
            let quantity = clue.getQuantity();
            clue.setQuantity(quantity - 1);
            this.displayCluePowerUpQuantity();
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }

    addCluePowerUp(score, clue){
        if(score.getScoreValue() != 0 && score.getScoreValue() %4 === 0){
            if(clue.getQuantity() < 5){
                let currentQuantity = clue.getQuantity();
                let newQuantity = currentQuantity + 1;
                clue.setQuantity(newQuantity);
                this.displayCluePowerUpQuantity(clue);
            } else {
                clueButton.style.border = "solid 2px red";
                //faire disparaitre les border rouges apres un certains temps;
                powerUpInfo.innerHTML = "Quantité maximale atteinte";
                this.hideInfo();
            }
        }
    }
}