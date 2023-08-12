class StickersShopRepository {

    getStickers(){
        let stickersFromData = stickers;
        let stickersShop = [];
        for(let i = 0; i < stickersFromData.length; i++){
            let sticker = new Sticker();
            sticker.setName(stickersFromData[i].name);
            sticker.setPicture(stickersFolder + stickersFromData[i].picture);
            sticker.setCost(stickersFromData[i].cost);
            stickersShop.push(sticker);
        }
        return stickersShop;
    }
}