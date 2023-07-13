class RewardService {

    getReward(score){
        if(score <= 10) {
            rewardDisplay.innerText = "Naze";
        }
        if (score > 10 && score <= 20) {
            rewardDisplay.innerText = "Bof";
        } else if (score > 20 && score < 25) {
            rewardDisplay.innerText = "Peu mieux faire";
        } else if (score  >= 25){
            rewardDisplay.innerText = "Pas mal";
        }
    }
}