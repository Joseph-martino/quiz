class StickersShopRepository {

    getStickers(){
        let stickersFromData = stickers;
        let stickersShop = [];
        for(let i = 0; i < stickersFromData.length; i++){
            let sticker = new Sticker();
            sticker.setId(stickersFromData[i].id);
            sticker.setName(stickersFromData[i].name);
            sticker.setPicture(stickersFolder + stickersFromData[i].picture);
            sticker.setCost(stickersFromData[i].cost);
            stickersShop.push(sticker);
        }
        return stickersShop;
    }

    getStickerById(id){
        let sticker = new Sticker();
        sticker.setId(stickers[id].id);
        sticker.setName(stickers[id].name);
        sticker.setPicture(stickersFolder + stickers[id].picture);
        sticker.setCost(stickers[id].cost);
        return sticker;
    }
}