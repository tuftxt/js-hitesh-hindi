//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const player = "hitesh"
const score = 100
const scoreValue = 100.3
const bigNumber = 3456543576654356754n
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);
// console.log(typeof id);
// console.log(typeof anotherId);

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof player);
console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof undefined);

// https://262.ecma-international.org/5.1/#sec-11.4.3