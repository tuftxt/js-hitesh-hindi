const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

function chai1(){
    let username = "hitesh"
    console.log(this.username);
}
// chai() undefined

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}
// chai() undefined

const chai3 =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai() {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()