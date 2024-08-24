// Premitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2337644674727n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Thor", "Ironman", "Captain America"]
let myObj = {
    name: "Mriganka",
    age: 19,
}

const myFunction = function(){
    console.log("Hello Babe");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);
