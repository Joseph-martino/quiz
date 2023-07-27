class TimeStopPowerUpService {

    timerService = new TimerService();

    getTimeStopPowerUp(number){
        if(number %7 === 0){
            player.powerUps[0].quantity = player.powerUps[0].quantity + 1;
            this.displayTimeStopPowerUpQuantity();
        }
    }

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

    hideInfo(){
        setTimeout(() => powerUpInfo.innerHTML = "", 1000);
    }

    displayTimeStopPowerUpQuantity(){
        timeStopPowerUp.innerHTML = player.powerUps[0].quantity;
    }
    useTimeStop(){
        if(player.powerUps[0].quantity > 0){
            this.addTimeToTimer();
            player.powerUps[0].quantity--;
            this.displayTimeStopPowerUpQuantity();
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }
}