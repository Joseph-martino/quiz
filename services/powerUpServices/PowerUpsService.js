class PowerUpsService {

    displayPowerUpQuantity(powerUp){
        if(powerUp.getName()=== "Time Stop"){
            timeStopPowerUp.innerHTML = powerUp.getQuantity();
        } else if (powerUp.getName() === "Clue"){
            cluePowerUp.innerHTML = powerUp.getQuantity();
        } else if (powerUp.getName() === "Joker"){
            jokerPowerUp.innerHTML = powerUp.getQuantity();
        }

        
    }
}