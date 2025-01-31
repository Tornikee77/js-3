"use strict";

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

function compareNumbers(number1, number2) {
  if (number1 > number2) {
    return `${number1} is greather than ${number2}`;
  } else {
    return `${number2} is greather than ${number1}`;
  }
}
let result = compareNumbers(num1, num2);
alert(result);
