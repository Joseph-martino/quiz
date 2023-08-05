class ScoreService {

    // initializeScore(){
    //     userScore = 0;
    // }

    getCurrentScore(){
        let currentScore = parseInt(scoreDisplay.innerText);
        return currentScore;
    }
    
    displayScore(){
        scoreDisplay.innerHTML = userScore;
    }

    displayFinalScore(score){
        endGameScore.innerHTML = score;
    }
    
    addPointToScore(){
        userScore += 10;
    }
    
    soustractPointToScore(){
        userScore -= 25;
        if(userScore < 0){
            userScore = 0;
        }
    }
    
    getMedal(score){
        if(score < 20) {
            medalIcon.style.display = "none";
        }
        if (score > 20 && score < 40) {
            medal.innerText = "Médaille de bronze";
            medalIcon.style.display = "block";
            medalIcon.src = imageFolder + iconFolder + "bronze-medal.png";
        } else if (score > 40 && score < 60) {
            medalIcon.style.display = "block";
            medal.innerText = "Médaille d'argent";
            medalIcon.src = imageFolder + iconFolder + "silver-medal.png";
        } else if (score  > 60){
            medal.innerText = "Médaille d'or";
            medalIcon.style.display = "block";
            medalIcon.src = imageFolder + iconFolder + "gold-medal.png";
        }
    }
}




