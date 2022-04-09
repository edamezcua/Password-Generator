// Assignment code here
var password=document.getElementById("password");
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['!', '@', '$', '&']
var numberCharacters = ['1', '2', '3', '4']
var upperCase = ['A', 'B', 'C', 'D']
var lowerCase = ['a', 'b', 'c', 'd']
var passwordOption = [];
var finalPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomElement(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex]; // var randomElement = passwordOptions[?]
  return randomElement
}

function generatePassword() {
  var length = parseInt(prompt('How many characters would you like your password to be?'));

  if (length < 8){
    alert('Use more characters')
    return null;
  }

  if (length > 128){
    alert('Use less characters')
    return null;
  }

  if (Number.isNaN(length)) {
    alert('Please insert valid number')
    return null;
  }

  var hasSpecial = confirm('Do you want to include special characters?');
  var hasNumber = confirm('Do you want to include numbers?');
  var hasLowerCase = confirm('Do you want to include lowercase characters?');
  var hasUpperCase = confirm('Do you want to include special characters?');

  if (hasSpecial === false && hasNumber === false && hasLowerCase === false && hasUpperCase === false) {
    alert('Must select at least one character type!')
    return null;
  }

  if(hasSpecial) {
    passwordOption = passwordOption.concat(specialCharacters)
  }

  if(hasNumber) {
    passwordOption = passwordOption.concat(numberCharacters)
  }

  if(hasLowerCase) {
    passwordOption = passwordOption.concat(lowerCase)
  }

  if(hasUpperCase) {
    passwordOption = passwordOption.concat(upperCase)
  }

  console.log('passwordOptions', passwordOption)

  for(let i =  0 ; i < length  ; i ++ ) {
    console.log('random el', getRandomElement(passwordOption))
    finalPassword.push(getRandomElement(passwordOption))
    console.log('finalpass iteration', finalPassword)
  

  }
  return finalPassword
}
