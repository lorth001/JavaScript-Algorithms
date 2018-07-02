/*
**********
Luke Orth - Change Return - 6/23/2018
**********
Last edit on 7/01/2018
**********
The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change for the user.
**********
*/

// create variable for event handler
let changeCalc = document.getElementById("changeCalc");

function myFunction() {
    // initialize variables for user input
    let cost = document.getElementById("cost").value;
    let payment = document.getElementById("payment").value;
    // initialize variable for determining change
    let change = (payment - cost) * 100;
    // initialize variables for storing coin values
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    
    // round 'change' variable to whole number
    change = change.toFixed();
    
    // if the payment is too low, display error message
    if (payment < cost) {
        document.getElementById("showChange").innerHTML = "Your payment was too low.  Please enter a larger payment.";
    }
    // if the payment is exact, enter no change message
    else if (payment == cost) {
        document.getElementById("showChange").innerHTML = "Perfect!  You entered the exact payment for the cost of your item. No change necessary.";
    }
    // otherwise, calculate change and coin values
    else {
        for (let i = 0; i < 10000; i++) {
            if (change >= 25) {
                quarters++;
                change = change - 25;
            }
            else if (change >= 10) {
                dimes++;
                change = change - 10;
            }
            else if (change >= 5) {
                nickels++;
                change = change - 5;
            }
            else if (change >= 1) {
                pennies++;
                change = change - 1;
            }
        }
        // display coins and their respective values
        document.getElementById("showChange").innerHTML = "Quarters: " + quarters + "<br />Dimes: " + dimes + "<br />Nickels: " + nickels + "<br />Pennies: " + pennies;
    }
}

// execute myFunction when button is clicked
changeCalc.addEventListener("click", myFunction);
