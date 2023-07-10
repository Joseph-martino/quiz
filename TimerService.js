class TimerService {

    initializeNumberOfSecond(){
        numberOfSeconds = 30;
    }

    displayTimer(number){
        timerDisplay.innerText = number;
    }

    getCurrentTimer(){
        let currentNumbrOfSeconds = parseInt(timerDisplay.innerText);
        console.log(currentNumbrOfSeconds);
        console.log(typeof(currentNumbrOfSeconds));
        return currentNumbrOfSeconds;
    }
    
    timer(){
        window.setInterval(() => {
        //let number = this.getCurrentTimer();
        numberOfSeconds--
        if(numberOfSeconds < 0){
            setEndgame(gameOver);
            numberOfSeconds = 0;
        }
        this.displayTimer(numberOfSeconds)} 
        , 1000);
    }
    
    // displayAddOrRemovePointsToTimer(answer){
    //     if(answer){
    //         timerInfo.innerText = "+" + 5;
    //         setTimeout(hideTimerInfo,1000);
    //     } else {
    //         timerInfo.innerText = "-" + 5;
    //         setTimeout(hideTimerInfo,1000);
    //     }
    // }
    
    hideTimerInfo(){
        timerInfo.style.display = "none";
    }
    
    addTimeToTimer(){
        numberOfSeconds = this.getCurrentTimer();
        numberOfSeconds += 5;
        this.displayTimer(numberOfSeconds);
        timerInfo.innerText = "+" + 5;
        setTimeout(this.hideTimerInfo, 1000);
    }
    
    decreaseTimeToTimer(){
        numberOfSeconds = this.getCurrentTimer();
        numberOfSeconds -= 5;
        this.displayTimer(numberOfSeconds);
        timerInfo.innerText = "-" + 5;
        setTimeout(this.hideTimerInfo, 1000);
    }
}


