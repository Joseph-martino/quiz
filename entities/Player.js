class Player{

    name;
    score;
    coins;
    powerUps;

    constructor(){
        this.score = 0;
        this.coins = 0;
        this.powerUps = [];
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getScore(){
        return this.score;
    }

    setScore(score){
        this.score = score;
    }

    getCoins(){
        return this.coins;
    }

    setName(coins){
        this.coins = coins;
    }

    getPowerUps(){
        return this.powerUps;
    }

    setName(powerUps){
        this.powerUps = powerUps;
    }

    addPowerUp(powerUp){
        this.powerUps.push(powerUp);
    }

}