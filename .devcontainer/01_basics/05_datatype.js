//primitive

// 7 types : String, Number, Boolean, null,undefined,symbol,BigInt


const score =100;
const scoreValue =100.3;
const isLoggedIn = false;
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id==anotherId);



const bigInt  = 234567889767934509n;

//referance (Non primitive)

// Array, Objects, Function

const heros = ["king","IIKing","doga"];
let myObj = {
    name: "Ashu"

    

}
const myfunction=function(){
    console.log("harry");
    
}
console.log(typeof outsideTemp);
