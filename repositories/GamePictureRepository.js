class GamePictureRepository {

    getById(id){
        let gameFromArray = games[id];
        let gamePicture = new GamePicture();
        gamePicture.setTitle(gameFromArray.title);
        gamePicture.setPicture(imageFolder + gameFromArray.picture);
        gamePicture.setClue(gameFromArray.clue);
        gamePicture.setCoins(gameFromArray.coins);
        return gamePicture;
    }  
}