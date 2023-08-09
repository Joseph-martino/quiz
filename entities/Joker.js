class Joker extends PowerUp {

    quantityDisplay;
    
    constructor(){
        super();
        this.name = "Joker";
        this.quantityDisplay = document.getElementById("joker-power");
        this.quantityDisplay.innerHTML = this.getQuantity();
    }
}