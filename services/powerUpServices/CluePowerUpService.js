class CluePowerUpService extends PowerUpsService{

    constructor(){
        super();
    }

    levelService = new LevelService();
    
    getCurrentGame(number){
        return games[number];
    }

    getCurrentMusic(number){
        return musics[number];
    }

    useCluePower(clue, randomNumber){
        if(clue.getQuantity() > 0){
            let currentLevel = this.levelService.getCurrentLevel();
            if(currentLevel %10 === 0){
                let music = this.getCurrentMusic(randomNumber);
                clue.clueContent.innerHTML = music.clue;
            } else {
                let game = this.getCurrentGame(randomNumber);
                clue.clueContent.innerHTML = game.clue;
            }
            let quantity = clue.getQuantity();
            clue.setQuantity(quantity - 1);
            this.displayPowerUpQuantity(clue);
        } else {
            this.powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }

    addCluePowerUp(score, clue){
        if(score.getScoreValue() != 0 && score.getScoreValue() %4 === 0){
            if(clue.getQuantity() < 5){
                let currentQuantity = clue.getQuantity();
                let newQuantity = currentQuantity + 1;
                clue.setQuantity(newQuantity);
                this.displayPowerUpQuantity(clue);
            } else {
                clueButton.style.border = "solid 2px red";
                //faire disparaitre les border rouges apres un certains temps;
                this.powerUpInfo.innerHTML = "Quantité maximale atteinte";
                this.hideInfo();
            }
        }
    }
}