class PlayerService {

    player;
    clue;
    timeStop;
    joker;
    score;
    medal;

    createPlayer(){
        this.player = new Player();
        this.clue = new Clue();
        this.timeStop = new TimeStop();
        this.joker = new Joker();
        this.score = new Score();
        this.medal = new Medal();
        this.player.setScore(this.score);
        this.player.setMedal(this.medal);
        this.player.addPowerUp(this.clue);
        this.player.addPowerUp(this.timeStop);
        this.player.addPowerUp(this.joker);
        return this.player;
    }

    getPlayer(){
        return this.player;
    }

    getClue(){
        console.log(this.player);
        return this.player.getClue();
    }
}