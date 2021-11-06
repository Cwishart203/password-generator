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

// TODO: create the function, generatePassword, move the following code in the function which will be called in writePassword


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
    console.log(userCharPool);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceLowerCase) {
    userCharPool = userCharPool.concat(lowerCaseCharArr);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  }

  if (userChoiceNumbers) {
    userCharPool = userCharPool.concat(numbersArr);
    console.log(userCharPool);

    // TODO: copy the one char randomly selected from this character set to the guaranteed array

  };

  for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userCharPool.length);

    console.log(userCharPool[index]);

    aPassword.push(userCharPool[index]);

  }
  console.log(aPassword);

  // TODO: replace the first characters in the passwrod array with the characters in the guaranteed array

  console.log(aPassword.join(""));

  // TODO: convert password array to a string, then return that string to the caller, writePassword


function writePassword() {
  var password = generatePassword();
  var passwordTextEl = document.getElementById("password");

  passwordTextEl.value = password;

  return;

}

generatePasswordIDBtn.addEventListener("click", writePassword);

