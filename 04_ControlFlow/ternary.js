// Terniary Operator
// condition ? expressionIfTrue : expressionIfFalse;
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// Basic Usage
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote); // Output: "Yes, you can vote!"

// Assigning default values
let userRole = null;
let role = userRole ? userRole : "Guest";
console.log(role); // Output: "Guest"

// Nested ternary operator
let score = 60;
let grade = score > 90 ? "A" : score > 75 ? "B" : "C";
console.log(grade); // Output: "B"