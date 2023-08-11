class GamePictureService {

    gamePictureRepository = new GamePictureRepository();

    getByid(id){
        return this.gamePictureRepository.getById(id);
    }
}