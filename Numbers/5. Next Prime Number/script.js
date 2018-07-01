/*
**********
Luke Orth - Next Prime - 6/22/2018
**********
Last edit on 6/30/2018 -- replace .onClick with .addEventListener
**********
Have the program find prime numbers until the user chooses to stop asking for the next one
**********
*/

// start with 2
let nextNum = 2;
// create variable for event handler
let nextPrime = document.getElementById("nextPrime");

function myFunction() {
    // initialize array to store prime numbers
    let primeArray = [];
    // nested for loops to find prime numbers between 2 and 10,000
    for (let i = 2; i <= 10000; i++) {
        for (let j = 2; j <= 10000; j++) {
            if (i === j) {
                primeArray.push(i);
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    // print prime number corresponding to its appropriate index in array
    document.getElementById("showPrime").innerHTML = primeArray[nextNum-2];
    // increment index for each button press
    nextNum++;
}

// execute myFunction when button is clicked
nextPrime.addEventListener("click", myFunction);
