class StickersShopService {


    stickersShopRepository = new StickersShopRepository();

    getStickers(){
        return this.stickersShopRepository.getStickers();
    }


}