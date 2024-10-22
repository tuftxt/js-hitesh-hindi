let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts) {
    console.log(`Attempting to connect... (Attempt ${attempts + 1})`);
    // Simulate a failed connection attempt
    let success = false;

    if (success) {
        console.log("Connection successful!");
        break;
    }
    attempts++;
}

if (attempts === maxAttempts) {
    console.log("Max attempts reached. Could not connect.");
}


let number;
do {
    number = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    console.log(`You rolled: ${number}`);
} while (number !== 6);

console.log("You finally rolled a 5!");