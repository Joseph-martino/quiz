const myArray = [
    {
        name:"Toto",
        score:50
    },
    {
        name:"Yaya",
        score:70
    },
    {
        name:"Yoyo",
        score:60
    },
    {
        name:"Tutu",
        score:80
    },
    {
        name:"Tata",
        score:40
    }
];


//https://www.geeksforgeeks.org/how-to-store-an-array-in-localstorage/
function addToArray(array, player){
    array.push(player);
}

console.log(myArray);
let arrayInString = JSON.stringify(myArray);
console.log(arrayInString);
localStorage.setItem("key",arrayInString);

let restring = localStorage.getItem("key");
console.log(restring);

let retArray = JSON.parse(restring);
console.log(retArray);

let player = {
    name: "binjour",
    score: 200
}

let player2 = {
    name: "salut",
    score: 300
}

addToArray(retArray, player);
addToArray(retArray, player2);