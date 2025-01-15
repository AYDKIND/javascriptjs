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





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack (Primitve), Heap (Non Primitive)
 let myName ="King"


 let anotherName = "Ashu";
 anotherName = "Ashu"


 console.log(myName); 
 console.log(anotherName); 
 let userOne={
    email:"king@googlegmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne


    userTwo.email="user@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);
    
    
 
