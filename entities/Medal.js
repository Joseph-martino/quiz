class Medal {

    icon;
    name;
    medalDisplay;

    constructor(){
        this.icon = "";
        this.name = "";
        this.medalDisplay = document.getElementById("medal-picture");
        this.medalDisplay.style.display = "none";
        //medal = document.getElementById("medal");
    }

    getIcon(){
        return this.icon;
    }

    setIcon(icon){
        this.icon = icon;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}