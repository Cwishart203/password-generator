// ==============
// DATA
// ==============
var generatePasswordIDBtn = document.getElementById("generate");
var generatePasswordQSBtn = document.querySelector("#generate");

// Character sets to choose for password
//  Numeric character set
//  Upper case alphabets
//  Lower case alphabets
//  Numeric character set
var specialCharStr = "`~!@#$%^&*()-_=+";
var upperCaseLetterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numbersStr = "0123456789";

var specialCharArr = specialCharStr.split("");
var upperCaseCharArr = upperCaseLetterStr.split("");
var lowerCaseCharArr = lowerCaseChars.split("");
var numbersArr = numbersStr.split("");

// Array to hold all charater sets confirmed by user
var userCharPool = [];

// Array to hold all the chars for the final password.
var aPassword = [];

// TODO: create an array variable to store the guaranteed chars - one char from each character set which user has confirmed

// ================
// MAIN PROCESS
// ================

function generatePassword () {
    // User choices of length, special chars, upper case, lowercase alphabets, numeric chars
  // Store user choices to variables
  var userChoiceLength = prompt("Choose your password length: ");
  console.log(userChoiceLength);

  var userChoiceSpecialChars = confirm("Do you want special characters?");
  console.log(userChoiceSpecialChars);

  var userChoiceUpperCase = confirm("Do you want upper case letters?");
  console.log(userChoiceUpperCase);

  var userChoiceLowerCase = confirm("Do you want lower case letters?");
  console.log(userChoiceLowerCase);

  var userChoiceNumbers = confirm("Do you want numbers?");
  console.log(userChoiceNumbers);


  if (userChoiceSpecialChars) {
    userCharPool = userCharPool.concat(specialCharArr);
      
    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceUpperCase) {
    userCharPool = userCharPool.concat(upperCaseCharArr);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceLowerCase) {
    userCharPool = userCharPool.concat(lowerCaseCharArr);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceNumbers) {
    userCharPool = userCharPool.concat(numbersArr);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  };
console.log(userCharPool);

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);

    console.log(userCharPool[index]);

    aPassword.push(userCharPool[index]);

  }
  console.log(aPassword);
  writePassword();
}


  // TODO: replace the first characters in the passwrod array with the characters in the guaranteed array


function writePassword() {
  var password = aPassword.join("");
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;

  return;

}

generatePasswordIDBtn.addEventListener("click", writePassword);
generatePasswordQSBtn.addEventListener("click", generatePassword);
