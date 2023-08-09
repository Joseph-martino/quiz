class PowerUpsService {

    powerUpInfo = document.getElementById("power-up-info");

    displayPowerUpQuantity(powerUp){
        powerUp.quantityDisplay.innerHTML = powerUp.getQuantity();
    }

        hideInfo(){
        setTimeout(() => this.powerUpInfo.innerHTML = "", 1000);
    }
}