// initialize variable for e
let e = Math.E;

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
