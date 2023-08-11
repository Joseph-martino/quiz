class MusicRepository {

    getById(id){
        let musicFromArray = musics[id];
        let music = new Music();
        music.setTitle(musicFromArray.title);
        music.setMusic(musicFolder + musicFromArray.music);
        music.setClue(musicFromArray.clue);
        let randomNumber = 5*(Math.floor(Math.random() * 40));
        console.log(randomNumber);
        gamePicture.setCoins(randomNumber);
        return music;
    }  
}