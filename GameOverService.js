class GameOverService {

    setEndgame(){
        gameOver = true;
    }
    
    // reloadGame() {
    //     window.location.reload();
    // }
    
    displayGameOver(){
        if(gameOver){
            gameView.style.display = "none";
            gameOverView.style.display = "block";
        }
    }

    setScoreToPlayer(score){
        player.score = score;
        console.log(player + "le score est: " + player.score);
    }

}