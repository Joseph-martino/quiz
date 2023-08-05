class Score {

    scoreValue;
    scoreDisplay;

    constructor(){
        this.scoreValue = 0;
        this.scoreDisplay = document.getElementById("score");
        this.scoreDisplay.innerHTML = this.getScoreValue();
    }

    getScoreValue(){
        return this.scoreValue;
    }

    setScoreValue(score){
        this.scoreValue= score;
    }
}