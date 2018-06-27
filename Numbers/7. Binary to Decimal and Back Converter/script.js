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
