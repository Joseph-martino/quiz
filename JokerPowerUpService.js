class JokerPowerUpService {

    displayJokerPowerUpQuantity(){
        jokerPowerUp.innerHTML = player.powerUps[1].quantity;
    }

    hideInfo(){
        setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    }

    getRightAnswer(){
        if(player.powerUps[1].quantity > 0){
            let game = this.getCurrentGame(randomNumber);
            userInput.value = game.title;
            player.powerUps[1].quantity--;
            this.displayJokerPowerUpQuantity();
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }

    getJokerPowerUp(score){
        if(score != 0 && score %3 === 0){
            player.powerUps[1].quantity = player.powerUps[1].quantity + 1;
            this.displayJokerPowerUpQuantity();
        }
    }

    getCurrentGame(number){
        return games[number];
    }
}