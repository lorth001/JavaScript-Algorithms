/*
**********
Luke Orth - Find Primes - 6/21/2018
**********
Last edit on 6/29/2018 -- replace .onClick with .addEventListener
**********
Have the user enter a number and find all Prime values leading up to declared number
**********
*/

// create variable for getting number from user
let userNum = document.getElementById("testNum").value;
// create variable for event handler
let findPrimes = document.getElementById("findPrimes");

function myFunction() {
    let primeArray = [];
    for (let i = 2; i <= userNum; i++) {
        for (let j = 2; j <= userNum; j++) {
            if (i === j) {
                primeArray.push(i);
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    document.getElementById("showPrimes").innerHTML = primeArray.join(', ');
}

// execute myFunction when the button is clicked
findPrimes.addEventListener("click", myFunction);
