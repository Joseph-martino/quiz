class MedalService {

    getMedal(medal, score){
        if(score < 20) {
            medal.medalDisplay.style.display = "none";
        }
        if (score > 20 && score < 40) {
            medal.name = "Médaille de bronze";
            medal.medalDisplay.style.display = "block";
            medal.medalDisplay.src = imageFolder + iconFolder + "bronze-medal.png";
        } else if (score > 40 && score < 60) {
            medal.name = "Médaille d'argent";
            medal.medalDisplay.style.display = "block";
            medalIcon.src = imageFolder + iconFolder + "silver-medal.png";
        } else if (score  > 60){
            medal.innerText = "Médaille d'or";
            medal.medalDisplay.style.display = "block";
            medal.medalDisplay.src = imageFolder + iconFolder + "gold-medal.png";
        }
    }
}