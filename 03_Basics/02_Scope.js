//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube";
        console.log(username);
        console.log(website);
    }
    //console.log(website);
    two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); error
}
// console.log(username); error


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

// addTwo(5) ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

/*
- Function declarations (addone) are hoisted completely.
- Function expressions (addTwo) are only hoisted by their variable name but not initialized with a function until that line in the code is executed.
*/