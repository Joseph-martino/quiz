class Joker extends PowerUp {

    jokerPowerUp;
    
    constructor(){
        super();
        this.name = "Joker";
        this.jokerPowerUp = document.getElementById("joker-power");
        this.jokerPowerUp.innerHTML = this.getQuantity();
    }
}