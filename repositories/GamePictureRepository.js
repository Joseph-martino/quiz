class GamePictureRepository {

    getById(id){
        let gameFromArray = games[id];
        let gamePicture = new GamePicture();
        gamePicture.setTitle(gameFromArray.title);
        gamePicture.setPicture(imageFolder + gameFromArray.picture);
        gamePicture.setClue(gameFromArray.clue);
        let randomNumber = 5*(Math.floor(Math.random() * 40));
        console.log(randomNumber);
        gamePicture.setCoins(randomNumber);
        return gamePicture;
    }  
}