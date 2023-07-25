class TimeStopPowerUpService {

    timerService = new TimerService();

    addTimeToTimer(){
        numberOfSeconds = this.timerService.getCurrentTimer();
        numberOfSeconds += 10;
        if(numberOfSeconds > 60){
            numberOfSeconds = 60;
        }
        this.timerService.displayTimer(numberOfSeconds);
        timerInfo.innerText = "+" + 10;
        setTimeout(this.timerService.hideTimerInfo, 1000);
    }

    displayTimeStopPowerUpQuantity(){
        timeStopPowerUp.innerHTML = player.powerUps[0].quantity;
    }
    useTimeStop(){
        if(player.powerUps[0].quantity > 0){
            console.log(player.powerUps[0].quantity);
            this.addTimeToTimer();
            player.powerUps[0].quantity--;
            console.log(player.powerUps[0].quantity);
            this.displayTimeStopPowerUpQuantity();
        } else {
            console.log("pas assez de pouvoir");
        }
    }
}