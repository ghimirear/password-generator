 // Assignment Code
//console.log("app connecting")
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
    generatePassword();
  });


//setting up variables.
var numbersStrings = "1234567890".split("");
console.log(numbersStrings);
var lowerString = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerString);

var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperString);

var specialString = "!@#$^&*(>)_%-:;+=~`".split("");
console.log(specialString);

var userOptions = [];

console.log(numbersStrings);
console.log(lowerString);
console.log(upperString);
console.log(specialString);

function generatePassword(){ 
  
  var passLength = prompt("please enter the length of your password")
 
  passLength = parseInt(passLength);
  if (passLength >= 8 && passLength <=128){

    var numbers = confirm("do you want numbers in your password?");
    if (numbers){
      userOptions = userOptions.concat(numbersStrings);
      console.log(userOptions);
    }
    
   
    var special = confirm( "do you want specials characters in your password?");
    if (special){
      userOptions = userOptions.concat(specialString);
      console.log(userOptions);
    }
    
    
    var lower = confirm( " do you want lowecase characters in your password?");
    if (lower){
      userOptions = userOptions.concat(lowerString);
      console.log(userOptions);

  }
  
 
  var upper = confirm("do you want Uppercase character in your password?");
  if (upper){
    userOptions = userOptions.concat(upperString);
    console.log(userOptions);
  }
  console.log( "user options are");
 console.log(userOptions); 
  


var generatedPassword ="";
 for ( var i =0; i < passLength; i++){
  var rand = Math.floor(Math.random() * userOptions.length 
 );
 generatedPassword +=userOptions[rand];
 console.log(generatedPassword);
} 
console.log(generatedPassword);
password = generatedPassword;
var passwordText = document.querySelector("#password");
passwordText.textContent = password;
}
else{
  alert("it must be inbetween 8 and 128")
  passwordText.textContent = "";
}
  }

