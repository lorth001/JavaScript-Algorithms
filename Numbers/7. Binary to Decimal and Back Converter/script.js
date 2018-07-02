/*
**********
Luke Orth - Binary to Decimal and Back Converter - 6/25/2018
**********
Last edit on 7/01/2018
**********
This program will take a user's input in either binary or decimal format and convert it to the opposite format
**********
*/

// create variable for decimal event handler
let getDec = document.getElementById("getDec");
// create variable for binary event handler
let getBin = document.getElementById("getBin");

// Function to convert binary to decimal
function getDecimal() {
    // Get binary number from user
    let binary = document.getElementById("binary").value;
    // Set the base (radix) to 2
    let binBase = 2;
    // Actual conversion to decimal number
	let finalDec = Number.parseInt(binary, binBase);
    // Output
    document.getElementById("showDecimal").innerHTML = finalDec;
	return finalDec;
}

// Function to convert decimal to binary
function getBinary() {
    // Get decimal number from user
    let decimal = document.getElementById("decimal").value;
    // Actual conversion to binary number
    let finalBin = Number(decimal).toString(2);
    // Output
    document.getElementById("showBinary").innerHTML = finalBin;
	return finalBin;
}

// execute getDecimal when button is clicked
getDec.addEventListener("click", getDecimal);
// execute getBinary when button is clicked
getBin.addEventListener("click", getBinary);
