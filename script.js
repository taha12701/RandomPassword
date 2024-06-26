const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()?><}{";
const alChars = upperCase + lowerCase + number + symbol;


//create random

function createPassword(){
  let password =""
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += upperCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * number.length)];
  password += upperCase[Math.floor(Math.random() * symbol.length)]

  while( length > password.length )
    {
      password += alChars[Math.floor(Math.random() * alChars.length)]
    }
   passwordBox.value = password;
}
