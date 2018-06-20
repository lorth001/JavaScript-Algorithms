// initialize variable for pi
let pi = Math.PI;

function myFunction() {
    // get input from user for decimal places
    let piLength = document.getElementById("length").value;
    
    // check to determine if number is too large
    if (piLength > 48) {
        document.getElementById("showPi").innerHTML = "Too many decimals... try again :/"
    }
    
    // display final pi
    else {
    let finalPi = pi.toFixed(piLength);
    document.getElementById("showPi").innerHTML = finalPi;
    }
}
