/*
Next Prime Number - Have the program find prime numbers until the user chooses to stop asking for the next one.
*/

// start with 2
let nextNum = 2;

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
