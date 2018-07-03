/*
**********
Luke Orth - Hexadecimal to Decimal and Back Converter - 7/03/2018
**********
Last edit on 7/03/2018
**********
This program will take a user's input in either hexadecimal or decimal format and convert it to the opposite format
**********
*/

// create variable for decimal event handler
let getDec = document.getElementById("getDec");
// create variable for hexadecimal event handler
let getHex = document.getElementById("getHex");

// function to convert deecimal to hexadecimal
function getHexadecimal() {
    // get decimal number from user
    let hexDecimal = document.getElementById("hexDecimal").value;
    // convert decimal to hexadecimal
    let finalHex = Number(hexDecimal).toString(16).toUpperCase();
    // output hexadecimal
    document.getElementById("showHexadecimal").innerHTML = finalHex;
    return finalHex;
}

// function to convert hexadecimal to decimal
function getDecimal() {
    // get hexadecimal number from user
    let hexadecimal = document.getElementById("hexadecimal").value;
    // set the base (radix) to 16
    let hexBase = 16;
    // convert to decimal number
	let finalDec = Number.parseInt(hexadecimal, hexBase);
    // output decimal
    document.getElementById("showDecimal").innerHTML = finalDec;
	return finalDec;
}


// execute getDecimal when button is clicked
getDec.addEventListener("click", getDecimal);
// execute getHexadecimal when button is clicked
getHex.addEventListener("click", getHexadecimal);
