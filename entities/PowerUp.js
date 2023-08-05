class PowerUp {

    name;
    quantity;

    constructor(){
        this.quantity = 0;
    }
    

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getQuantity(){
        return this.quantity;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }
}