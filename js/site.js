// ids:
// strValue,
// results,
// alert,
// alertPalindrome,
// alertNotPalindrom

// This function is responsible for receiving and responding to the user's string
function getValues() {
    let inputString = document.getElementById('strValue').value;

    let checkedString = checkForPalindrome(inputString);
    displayResults(checkedString);
}
// This function is responsible determining whether a string is a palindrome
function checkForPalindrome(strToCheck) {
    const regex = /[^A-Za-z0-9]/gi;
    let newString = ""
    let palindrome = true;

    let regString = strToCheck.replace(regex, "");
    let halfString = regString.length / 2;
    let i = 0;

    for (let j = regString.length - 1; j >= halfString; j--) {

        if (regString[i] === regString[j]) {
            i += 1;
        } else {
            newString = "Not Palindrome"
            palindrome = false;
        }
    }
    if (palindrome) {
        newString = regString
    }

    return newString;
}

//This function is responsible for displaying a message to the user to show 
//whether their string is a palindrome or not
function displayResults(result) {
    let alert = document.getElementById('alert');

    //reset alert box
    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-success');

    let messageElement = document.getElementById('message');
    let resultElement = document.getElementById('results');

    if (result === "Not Palindrome") {
        alert.classList.add('alert-danger');
        messageElement.textContent = "Sorry! You entered NOT a palindrome!"
        resultElement.textContent = "Try again!"
    } else {
        alert.classList.add('alert-success');
        messageElement.textContent = "Well Done! You entered a palindrome!"
        resultElement.textContent = "Your string reversed is: " + result
    }

    alert.classList.remove('invisible');

    // let className;

    // if (checkedString !== "isNotPalindrome") {
    //     className = 'alertPalindrome';
    //     document.getElementById('results').innerHTML = `<div class=${className} ><h1>Well Done! You entered a Palindrome!</h1><hr>
    //         <h4>Your phrase reversed is: <b> ${checkedString} </b></h4></div>`;
    //     document.getElementById('alert').classList.remove('invisible');
    // } else {
    //     className = 'alertNotPalindrom';
    //     document.getElementById('results').innerHTML = `<div class=${className}><h1>Well Done! You entered a Palindrome!</h1><hr>
    //     <h4>Try again!</h4></div>`;
    //     document.getElementById('alert').classList.remove('invisible');
    // }
}
