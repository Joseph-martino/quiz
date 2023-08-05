class TimeStopPowerUpService {

    isUsed = false;

    timerService = new TimerService();

    getTimeStopPowerUp(number){
        if(number %7 === 0){
            if(player.powerUps[0].quantity < 2){
                player.powerUps[0].quantity = player.powerUps[0].quantity + 1;
                this.displayTimeStopPowerUpQuantity();
            } else {
                clueButton.style.border = "solid 2px red";
                //faire disparaitre les border rouges apres un certains temps;
                powerUpInfo.innerHTML = "Quantité maximale atteinte";
                this.hideInfo();
            }
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
        //timeStopPowerUp.innerHTML = player.powerUps[0].quantity;
    }
    useTimeStop(){
        if(player.powerUps[0].quantity > 0){
            if(this.isUsed === false){
                this.addTimeToTimer();
                //player.powerUps[0].quantity--;
                this.displayTimeStopPowerUpQuantity();
                this.isUsed = true;
                setTimeout(() => {
                    this.isUsed = false;
                }, 10000);
            } else {
                powerUpInfo.innerHTML = "Temps de recharge";
                this.hideInfo();
            } 
        } else {
            powerUpInfo.innerHTML = "Pas assez de pouvoir";
            this.hideInfo();
        }
    }
}