class JokerPowerUpService extends PowerUpsService {

    levelService = new LevelService();

    constructor(){
        super();
    }

    // displayJokerPowerUpQuantity(joker){
    //     joker.quantityDisplay.innerHTML = joker.getQuantity();
    // }

    // hideInfo(){
    //     setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    // }

    removeRedBorders(){
        setTimeout(() => {
            jokerButton.style.border = "none";
        },1000);
    }

    useJokerPower(joker, randomNumber){
        if(joker.getQuantity() > 0){
            let currentLevel = this.levelService.getCurrentLevel();
            if(currentLevel %10 === 0){
                let music = this.getCurrentMusic(randomNumber);
                console.log(music);
                userInput.value = music.title;
            } else {
                let game = this.getCurrentGame(randomNumber);
                userInput.value = game.title;
            }
            let quantity = joker.getQuantity();
            joker.setQuantity(quantity - 1);
            this.displayPowerUpQuantity(joker);
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }

    addJokerPowerUp(score, joker){
        if(score.getScoreValue() != 0 && score.getScoreValue() %3 === 0){
            if(joker.getQuantity() < 3){
                let currentQuantity = joker.getQuantity();
                let newQuantity = currentQuantity + 1;
                joker.setQuantity(newQuantity);
                this.displayPowerUpQuantity(joker);
            } else {
                jokerButton.style.border = "solid 2px red";
                this.removeRedBorders();
                powerUpInfo.innerHTML = "Quantité maximale atteinte";
                this.hideInfo();
            }
        }
    }

    getCurrentGame(number){
        return games[number];
    }

    getCurrentMusic(number){
        return musics[number];
    }
}