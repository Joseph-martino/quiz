class LevelService {

    initializeLevel(){
        level = 0;
    }

    riseLevel(){
        level+=1;
    }

    displayLevel(){
        this.riseLevel();
        levelDisplay.innerHTML = "Level " + level;
        levelDisplay.style.display = "block";

    }

    hideLevel(){
        setTimeout(() => levelDisplay.style.display = "none"
        ,1000);
    }
}