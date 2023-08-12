class PlayerService {

    player;
    clue;
    timeStop;
    joker;
    score;
    medal;

    createPlayer(){
        this.player = new Player();
        this.score = new Score();
        this.medal = new Medal();
        this.player.setScore(this.score);
        this.player.setMedal(this.medal);
        this.clue = new Clue();
        console.log(this.clue);
        this.timeStop = new TimeStop();
        this.joker = new Joker();
        this.player.addPowerUp(this.clue);
        this.player.addPowerUp(this.timeStop);
        this.player.addPowerUp(this.joker);
        console.log(this.player.getPowerUps());
        return this.player;
    }

    getPlayer(player){
        return player;
    }

    getClue(){
        return this.player.getClue();
    }
}