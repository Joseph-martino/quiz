class Clue extends PowerUp {

    quantityDisplay;
    clueContent;

    constructor(){
        super();
        this.name = "Clue";
        this.quantityDisplay = document.getElementById("clue-power");
        this.quantityDisplay.innerHTML = this.getQuantity();
        this.clueContent = document.getElementById("clue-content");
    }
}