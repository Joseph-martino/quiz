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

}