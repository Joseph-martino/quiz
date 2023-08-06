class RewardService {

    getReward(score){
        if(score.getScoreValue() <= 10) {
            rewardDisplay.innerText = "Naze";
        }
        if (score.getScoreValue() > 10 && score.getScoreValue() <= 20) {
            rewardDisplay.innerText = "Bof";
        } else if (score.getScoreValue() > 20 && score.getScoreValue() < 25) {
            rewardDisplay.innerText = "Peu mieux faire";
        } else if (score.getScoreValue() >= 25){
            rewardDisplay.innerText = "Pas mal";
        }
    }


        displayPlayerCoins(player){
            endGameCoinsDisplay.innerHTML = player.getCoins();
        }
}