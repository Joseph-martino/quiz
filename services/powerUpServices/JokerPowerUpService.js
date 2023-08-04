class JokerPowerUpService {

    levelService = new LevelService();

    displayJokerPowerUpQuantity(){
        jokerPowerUp.innerHTML = player.powerUps[1].quantity;
    }

    hideInfo(){
        setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    }

    removeRedBorders(){
        setTimeout(() => {
            jokerButton.style.border = "none";
        },1000);
    }

    getRightAnswer(){
        if(player.powerUps[1].quantity > 0){
            let currentLevel = this.levelService.getCurrentLevel();
            if(currentLevel %10 === 0){
                let music = this.getCurrentMusic(randomNumber);
                console.log(music);
                userInput.value = music.title;
            } else {
                let game = this.getCurrentGame(randomNumber);
                userInput.value = game.title;
            }
            // let game = this.getCurrentGame(randomNumber);
            // userInput.value = game.title;
            player.powerUps[1].quantity--;
            this.displayJokerPowerUpQuantity();
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }

    getJokerPowerUp(score){
        if(score != 0 && score %3 === 0){
            if(player.powerUps[1].quantity < 3){
                player.powerUps[1].quantity = player.powerUps[1].quantity + 1;
                this.displayJokerPowerUpQuantity();
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