class TimeStopPowerUpService extends PowerUpsService{

    isUsed = false;
    timerService = new TimerService();

    constructor(){
        super();
    }

    addTimeStopPowerUp(number, timeStop){
        if(number %7 === 0){
            if(timeStop.getQuantity() < 2){
                let currentQuantity = timeStop.getQuantity();
                let newQuantity = currentQuantity + 1;
                timeStop.setQuantity(newQuantity);
                //player.powerUps[0].quantity = player.powerUps[0].quantity + 1;
                this.displayPowerUpQuantity(timeStop);
            } else {
                timeStopButton.style.border = "solid 2px red";
                //faire disparaitre les border rouges apres un certains temps;
                this.powerUpInfo.innerHTML = "Quantité maximale atteinte";
                this.hideInfo();
            }
        }
    }

    addTimeToTimer(){
        this.timerService.numberOfSeconds = this.timerService.getCurrentTimer();
        this.timerService.numberOfSeconds += 10;
        if(this.timerService.numberOfSeconds > 60){
            this.timerService.numberOfSeconds = 60;
        }
        this.timerService.displayTimer(this.timerService.numberOfSeconds);
        timerInfo.innerText = "+" + 10;
        setTimeout(this.timerService.hideTimerInfo, 1000);
    }

    // hideInfo(){
    //     setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    // }

    
    // displayTimeStopPowerUpQuantity(timeStop){
    //     timeStop.timeStopPowerUp.innerHTML = timeStop.getQuantity();
    // }
    setGradient(value) {
        timeStopButton.style.background = 
        "linear-gradient(to top," 
        + "#8ED6FA " + value + "%, " 
        + "#8ED6FA " + value + "%, " 
        + "#a6a6a6 " + value + "%, " 
        + "#a6a6a6 100%" 
        + ")";
    }

    useTimeStop(timeStop){
        let counter = 0;
        let colorValue = 0;
        if(timeStop.getQuantity() > 0){
            if(this.isUsed === false){
                this.addTimeToTimer();
                let quantity = timeStop.getQuantity();
                timeStop.setQuantity(quantity - 1);
                this.displayPowerUpQuantity(timeStop);
                this.isUsed = true;
                setTimeout(() => {
                    this.isUsed = false;
                }, 10000);
                setInterval(() => {
                    if(counter < 10){
                        counter++;
                        colorValue+=10;
                        this.setGradient(colorValue);
                    }
                },1000);
            } else {
                this.powerUpInfo.innerHTML = "Temps de recharge";
                this.hideInfo();
            } 
        } else {
            this.powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }
}