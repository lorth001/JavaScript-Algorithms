function myFunction() {
    // initialize variables
    let Fn = 0;
    let Fn1 = 1;
    let Fn2 = 1;
    // initialize fib sequence and include first two seeds
    let fibArray = [1, 1];
    // initialize user-entered number
    let userNum = document.getElementById("length").value;
    
    // make sure user enters positive number
    if (userNum < 1) {
        document.getElementById("showFib").innerHTML = "Please enter a positive number.";
    }
    
    // if number is less than 2, display '1'
    else if (userNum < 2) {
        document.getElementById("showFib").innerHTML = 1;
    }
    
    // if number is less than 3, display '1, 1'
    else if (userNum < 3) {
        document.getElementById("showFib").innerHTML = Fn1 + ", " + Fn2;
    }
    
    // otherwise, find and display fib sequence
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
