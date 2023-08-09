class TimeStop extends PowerUp {

    quantityDisplay;
    
    constructor(){
        super();
        this.name = "Time Stop";
        this.quantityDisplay = document.getElementById("time-stop-power");
        this.quantityDisplay.innerHTML = this.getQuantity();
    }
}