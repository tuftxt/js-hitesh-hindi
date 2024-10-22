// if 
// <, >, <=, >=, ==, !=, ===, !==
const isUserloggedIn = true
const temperature = 32

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

if (temperature > 40) {
    console.log("It's extremely hot! Stay hydrated.");
} else if (temperature > 30) {
    console.log("It's a hot day. Make sure to wear light clothes.");
} else if (temperature > 20) {
    console.log("The weather is warm and pleasant.");
} else if (temperature > 10) {
    console.log("It's a bit chilly. A jacket would be a good idea.");
} else if (temperature > 0) {
    console.log("It's cold. Wear a coat.");
} else {
    console.log("It's freezing! Stay warm and indoors if possible.");
}

const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); ReferenceError: power is not defined


const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");   
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
} else {
    console.log("Not allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}