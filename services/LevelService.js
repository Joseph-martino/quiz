class LevelService {

    initializeLevel(){
        level = 0;
    }

    riseLevel(){
        level+=1;
    }

    getCurrentLevel(){
        return level;
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