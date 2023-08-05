class TimeStop extends PowerUp {

    timeStopPowerUp;
    
    constructor(){
        super();
        this.name = "Time Stop";
        this.timeStopPowerUp = document.getElementById("time-stop-power");
        this.timeStopPowerUp.innerHTML = this.getQuantity();
    }
}