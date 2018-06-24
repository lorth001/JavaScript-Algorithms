function myFunction() {
    
    // initialize array to store prime numbers
    let primeArray = [];
    // store user-entered number
    let userNum = document.getElementById("testNum").value;
    
    // divide user input by 2 until result is not 0
    while (userNum % 2 === 0) {
        // avoid infinite loop
        if (userNum == 0) {
            break;
        }
        // if divisible by 2, then add 2 to array
        primeArray.push(2);
        userNum = userNum / 2;
    }
    
    // divide user input by 3 until result is not 0
    while (userNum % 3 === 0) {
        // avoid infinite loop
        if (userNum == 0) {
            break;
        }
        // if divisible by 3, then add 3 to array
        primeArray.push(3);
        userNum = userNum / 3;
    }
    
    // if the remaining number is still larger than 2, then add number to array
    if (userNum > 2) {
        primeArray.push(userNum);
    }
    
    // display the resulting prime array
    document.getElementById("showPrimes").innerHTML = primeArray.join(', ');
}
