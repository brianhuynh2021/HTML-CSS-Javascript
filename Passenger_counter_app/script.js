// //document.getElementById("count-el").innerText = 5;
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// count = 8;
// console.log(count);


// let myAge = 32;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// function increment () {
//     console.log("The button was clicked");
// }

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);

// }

// countdown();

// function myLogger() {
//     console.log(42);
// }

// myLogger();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// // create a function that logs out the sum of all the lap times

// function logLapTime() {
//     console.log(lap1 + lap2 + lap3);
// }

// logLapTime();

// let lapsCompleted = 0;

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLap() {
//     lapsCompleted += 1;
// }

// console.log(lapsCompleted)

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
   
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

// Create a function, save(), which logs out the count when it's called
function save(){
    console.log(count)
}


// let name = "Brian Huynh"
// let greeting =  "Hi, my name is "

// let myGreeting = greeting + name;

// console.log(myGreeting);

// let point = 4;
// let bonusPoint = "10";
// let totalPoint = point + bonusPoint;
// console.log(totalPoint);

// console.log(4 + 5);
// console.log(4+ "5");

let welcomeEl = document.getElementById("welcome-el");
let name = "Brian Huynh";
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + name;