/* 
Find Prime Numbers - Have the user enter a number and find/dispaly all Prime Numbers (if there are any) 
leading up to the user's number.
*/

// get number to test from user
let userNum = document.getElementById("testNum").value;

function myFunction() {
    // initialize array to store prime numbers
    let primeArray = [];
    // nested for loops to find prime numbers
    for (let i = 2; i <= userNum; i++) {
        for (let j = 2; j <= userNum; j++) {
            if (i === j) {
                // if prime, then 'push' to array
                primeArray.push(i);
            }
            if (i % j === 0) {
                // break and repeat loop if not prime
                break;
            }
        }
    }
    // output prime numbers
    document.getElementById("showPrimes").innerHTML = primeArray.join(', ');
}
