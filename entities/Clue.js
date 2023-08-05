class Clue extends PowerUp {

    cluePowerUp;

    constructor(){
        super();
        this.name = "Clue";
        this.cluePowerUp = document.getElementById("clue-power");
        this.cluePowerUp.innerHTML = this.getQuantity();
        // displayPowerUpQuantity(powerUp){
        //     if(powerUp.getName()=== "Time Stop"){
        //         timeStopPowerUp.innerHTML = powerUp.getQuantity();
        //     } else if (powerUp.getName() === "Clue"){
        //         cluePowerUp.innerHTML = powerUp.getQuantity();
        //     } else if (powerUp.getName() === "Joker"){
        //         jokerPowerUp.innerHTML = powerUp.getQuantity();
        //     } 
        // }
    }
}