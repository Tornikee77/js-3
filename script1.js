"use strict";

// function checkUserNameLength(username) {
//   if (username.length >= 5 && username.length <= 20) {
//     return "username length is valid";
//   } else {
//     return "username length is valid.It mustbe between 5  and 20 character";
//   }
// }
// const questionUsername = prompt("Enter your username!");
// const result = checkUsernameLength(questionUsername);
// alert(result);

//  Write a Function to Calculate Sum

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));

let number1 = Number(prompt("Enter first number"));
let number2 = Number(prompt("Enter second number"));

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(number1, number2);
alert(result);
