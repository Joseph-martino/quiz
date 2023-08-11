class MusicRepository {

    getById(id){
        let musicFromArray = musics[id];
        let music = new Music();
        music.setTitle(musicFromArray.title);
        music.setMusic(musicFolder + musicFromArray.music);
        music.setClue(musicFromArray.clue);
        music.setCoins(musicFromArray.coins);
        return music;
    }  
}