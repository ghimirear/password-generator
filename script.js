//accessing Html file
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// add event listner to generateBtn
generateBtn.addEventListener("click", writePassword);

//setting up  global variables.
var numbersStrings = "1234567890".split("");
var lowerString = "abcdefghijklmnopqrstuvwxyz".split("");

var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var specialString = "!@#$^&*(><,)_%-:/;+=~`".split("");

// function to prompt the user with a series of questions. 
function generatePassword(){ 
  
  var passLength = prompt("please enter the length of your password between 8 nad 128");
 
  passLength = parseInt(passLength);
  //eliminating possible erros to get the required length of password
  while (passLength < 8 || passLength > 128 || isNaN(passLength) || passLength <0 ){
    alert("your password must be between 8 and 128");{
      passLength = prompt("please enter the length of your password between 8 and 128");
   }
  }
  //letting the user to choose any of these options.
    var numbers = confirm("do you want numbers in your password?");
    var special = confirm( "do you want specials characters in your password?");
    var lower = confirm( " do you want lowecase characters in your password?");
    var upper = confirm("do you want Uppercase character in your password?");
   
  //if above conditions  not chosen then 
  while (numbers === false && special === false && lower === false && upper === false){
    alert("you need to select at least one optios!!!!!!");

    numbers = confirm("do you want numbers in your password?");
    special = confirm( "do you want specials characters in your password?");
    lower = confirm( " do you want lowecase characters in your password?");
    upper = confirm("do you want Uppercase character in your password?");
  }
  //checking user choices and joining them to array of password.
  var userOptions = [];

  if ( numbers === true){
    userOptions = userOptions.concat(numbersStrings);
  }
  if ( special === true){
    userOptions = userOptions.concat(specialString);
  }
  if ( lower === true){
    userOptions = userOptions.concat(lowerString);
  }
  if ( upper === true){ 
    userOptions = userOptions.concat(upperString);
  }

  //creating an empty string to store generated password naming generatedPassword.
  var generatedPassword ="";
  // creating an for loop to generate random characters from user choices.
    for ( var i =0; i < passLength; i++){
    generatedPassword = generatedPassword + userOptions[Math.floor(Math.random() * userOptions.length)];
  } 
return generatedPassword;
} //setting up the password to display.
  function writePassword(){
    var password = generatePassword();
    passwordText.value = password;
  }

