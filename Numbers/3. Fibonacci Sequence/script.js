/*
**********
Luke Orth - Fibonacci Sequence - 6/21/2018
**********
Last edit on 6/29/2018 -- replace .onClick with .addEventListener
**********
Generate the Fibonacci Sequence to the Nth number as specified by the user
**********
*/

// create variable for event handler
let findFib = document.getElementById("findFib");

function myFunction() {
    
    // initialize variables
    let Fn = 0;
    let Fn1 = 1;
    let Fn2 = 1;
    // initialize fib sequence and include first two seeds
    let fibArray = [1, 1];
    // initialize user-entered number
    let userNum = document.getElementById("length").value;
    
    if (userNum < 1) {
        document.getElementById("showFib").innerHTML = "Please enter a positive number.";
    }
    
    else if (userNum < 2) {
        document.getElementById("showFib").innerHTML = 1;
    }
    
    else if (userNum < 3) {
        document.getElementById("showFib").innerHTML = Fn1 + ", " + Fn2;
    }
    
    else {
        for (let i = 0; i < (userNum - 2); i++) {
            Fn = Fn1 + Fn2; 
            Fn2 = Fn1; 
            Fn1 = Fn;
            fibArray.push(Fn);
            document.getElementById("showFib").innerHTML = fibArray.join(', ');
        }
    }
}
// execute myFunction when button is clicked
findFib.addEventListener("click", myFunction);
