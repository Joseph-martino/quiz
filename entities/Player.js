class Player{

    name;
    score;
    coins;
    powerUps;
    medal;
    stickers;

    constructor(){
        this.score = 0;
        this.coins = 1000;
        this.powerUps = [];
        this.stickers = [];
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

    setCoins(coins){
        this.coins = coins;
    }

    getPowerUps(){
        return this.powerUps;
    }

    setPowerUps(powerUps){
        this.powerUps = powerUps;
    }

    addPowerUp(powerUp){
        this.powerUps.push(powerUp);
    }

    getMedal(){
        return this.medal;
    }

    setMedal(medal){
        this.medal = medal;
    }

    getClue(){
        return this.powerUps[0];
    }

    getTimeStop(){
        return this.powerUps[1];
    }

    getJoker(){
        return this.powerUps[2];
    }

    getStickers(){
        return this.stickers;
    }

    setStickers(stickers){
        this.stickers = stickers;
    }

    addSticker(sticker){
        this.stickers.push(sticker);
    }

}