/*
**********
Luke Orth - Find Pi to the Nth Digit - 6/20/2018
**********
Last edit on 6/29/2018 -- replace .onClick with .addEventListener
**********
Generate the number 'Pi' with a certain number of trailing decimal places as specified by the user
**********
*/

// initialize variable for pi
let pi = Math.PI;
// create variable for event handler
let findPi = document.getElementById("findPi");

function myFunction() {
    // get input from user for decimal places
    let piLength = document.getElementById("length").value;
    // if inputted number is greater than 48
    if (piLength > 48) {
        // then output error message
        document.getElementById("showPi").innerHTML = "Too many decimals... try again :/"
    }
    // otherwise, proceed
    else {
    // reduce pi to requested decimal places
    let finalPi = pi.toFixed(piLength);
    // show final pi
    document.getElementById("showPi").innerHTML = finalPi;
    }
}
// execute myFunction when button is clicked
findPi.addEventListener("click", myFunction);
