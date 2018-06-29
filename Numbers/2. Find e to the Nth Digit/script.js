/*
**********
Luke Orth - Find e to the Nth Digit - 6/20/2018
**********
Last edit on 6/29/2018 -- replace .onClick with .addEventListener
**********
Generate the number 'e' with a certain number of trailing decimal places as specified by the user
**********
*/

// initialize variable for e
let e = Math.E;
// create variable for event handler
let findE = document.getElementById("findE");

function myFunction() {
    // get length from user
    let e_length = document.getElementById("length").value;
    
    // check to determine if number is too large
    if (e_length > 48) {
        document.getElementById("show_e").innerHTML = "Too many digits... please try again :/";
    }
    
    // display final value for e
    else {
        let final_e = e.toFixed(e_length);
        document.getElementById("show_e").innerHTML = final_e;
    }
}

// execute myFunction when button is clicked
findE.addEventListener("click", myFunction);
