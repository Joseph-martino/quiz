class MusicService {

    musicRepository = new MusicRepository();

    getByid(id){
        return this.musicRepository.getById(id);
    }
}