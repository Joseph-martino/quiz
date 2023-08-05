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

    displayClue(){
        if(player.powerUps[2].quantity > 0){
            let currentLevel = this.levelService.getCurrentLevel();
            if(currentLevel %10 === 0){
                let music = this.getCurrentMusic(randomNumber);
                console.log(music);
                clueContent.innerHTML = music.clue;
            } else {
                let game = this.getCurrentGame(randomNumber);
                clueContent.innerHTML = game.clue;
            }
            player.powerUps[2].quantity--;
            this.displayCluePowerUpQuantity();
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }

    getCluePowerUp(score){
        if(score != 0 && score %4 === 0){
            if(player.powerUps[2].quantity < 5){
                //player.powerUps[2].quantity = player.powerUps[2].quantity + 1;
                this.displayCluePowerUpQuantity();
            } else {
                clueButton.style.border = "solid 2px red";
                //faire disparaitre les border rouges apres un certains temps;
                powerUpInfo.innerHTML = "Quantité maximale atteinte";
                this.hideInfo();
            }
        }
    }
}