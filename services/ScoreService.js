class ScoreService {

    getCurrentScore(score){
        return score.getScoreValue();
    }
    
    displayScore(score){
        score.scoreDisplay.innerHTML = score.getScoreValue();
    }

    displayFinalScore(score){
        endGameScore.innerHTML = score.getScoreValue();
    }
    
    addPointsToScore(score){
        let currentScore = score.getScoreValue();
        let newScore = currentScore + 10;
        score.setScoreValue(newScore);
    }
    
    soustractPointToScore(score){
        let currentScore = score.getScoreValue();
        let newScore = currentScore -25;
        score.setScoreValue(newScore);
        if(newScore < 0){
            newScore = 0;
            score.setScoreValue(newScore);
        }
    }
}




