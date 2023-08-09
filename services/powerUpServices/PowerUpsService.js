class PowerUpsService {

    displayPowerUpQuantity(powerUp){
        powerUp.quantityDisplay.innerHTML = powerUp.getQuantity();
    }

        hideInfo(){
        setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    }
}