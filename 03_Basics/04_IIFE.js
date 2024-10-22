// Immediately Invoked Function Expressions (IIFE)
(function() {
    // code inside this function
    console.log("I am an IIFE!");
})();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed as soon as it is defined. It’s a function that runs immediately without needing to be explicitly called.

// The function is wrapped inside parentheses to make it an expression, and it is immediately invoked by the () at the end.

/*
Why is IIFE used?
- Encapsulation: IIFE helps in creating a local scope for variables and functions. This ensures that variables declared inside the IIFE don’t interfere with the rest of the code, which prevents global scope pollution.

- Avoid Global Scope Pollution: If you define variables in the global scope, they can accidentally overwrite other variables with the same name. IIFE avoids this by keeping the variables confined to the function's scope.

- Private Variables: Variables defined inside an IIFE cannot be accessed outside, making them effectively "private."

- Module Pattern: IIFE is often used to create modules, where some parts of the code are exposed (made public), and others are kept private. 
*/