//ids:
//strValue,
//results,
// alert,
//alertPalindrome,
//alertNotPalindrom

//entering function
// This function is responsible for receiving and responding to the user's string
function getValues() {
    let inputString = document.getElementById('strValue').value;

    // let reversedString = reversString(inputString);
    let checkedString = checkForPalindrome(inputString);
    displayResults(checkedString);
}

//logic function
// This function is responsible determining whether a string is a palindrome
function checkForPalindrome(strToCheck, reversedString) {
    let reg = /[^A-Za-z0-9]/g;

    let regString = strToCheck.toLowerCase().replace(reg, "");

    let newString = ""
    let palindrome = true;

    // for (let i = 0;  i < regString.length/2; i++) {
    let halfString = regString.length;
    let i = 0;

    for (let j = halfString - 1; j >= 0; j--) {

        if (regString[i] === regString[j]) {
            i += 1;
        } else {
            newString = "isNot"
            palindrome = false;
        }
        // }
    }
    if (palindrome) {
        newString = regString
    }

    return newString;


}

function reversString(resivedString) {
    let newString = "";

    for (let i = resivedString.length - 1; i >= 0; i--) {

        newString += resivedString[i];
    }
    return newString;
}

//This function is responsible for displaying a message to the user to show 
//whether their string is a palindrome or not
function displayResults(checkedString) {

    let className;

    if (checkedString !== "isNot") {
        className = 'alertPalindrome';
        document.getElementById('results').innerHTML = `<div class=${className} ><h1>Well Done! You entered a Palindrome!</h1><hr>
            <h4>Your phrase reversed is: <b> ${checkedString} </b></h4></div>`;
        document.getElementById('alert').classList.remove('invisible');
    } else {
        className = 'alertNotPalindrom';
        document.getElementById('results').innerHTML = `<div class=${className}><h1>Sorry! You entered not a Palindrome!</h1><hr>
        <p>Try again!</p></div>`;
        document.getElementById('alert').classList.remove('invisible');
    }

}


// function displayMessage(params) {
//     let msg = document.getElementById("message").value;

//     Swal.fire(
//         {
//             backdrop: false,
//             title: "AppName",
//             text: msg
//         }
//     )
// }