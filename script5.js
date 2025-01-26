"use strict";

// Write a function called greetUser that takes a name as an argument.
// Use prompt to ask the user for their name.
// If the user provides a name, greet them with a personalized message.
// Test the functionality in your browser.

let userName = prompt("Enter username:");

function greetUser(greeting) {
  if (greeting === "ADMIN") {
    return "hello ADMIN";
  } else {
    return "Hello"+" "+ greeting;
  }
}
let result = greetUser(userName);
alert(result);
