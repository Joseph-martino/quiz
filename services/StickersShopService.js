class StickersShopService {


    stickersShopRepository = new StickersShopRepository();

    getStickers(){
        return this.stickersShopRepository.getStickers();
    }

    getStickerById(id){
        return this.stickersShopRepository.getStickerById(id);
    }


}