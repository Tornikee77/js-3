"use strict";

let temperature = Number(prompt("Enter degree"));

function checkTemperature(degree) {
  if (degree < 0) {
    return "Freezing!";
  } else if (degree >= 0 && degree <= 20) {
    return "cold!";
  } else if (degree >= 21 && degree <= 30) {
    return "warm!";
  } else {
    return "hot";
  }
}

let result = checkTemperature(temperature);

alert(result);

// Write a function called checkTemperature that takes a temperature value as an argument.
// Use conditional statements to categorize the temperature as:
// Freezing for below 0.
// Cold for 0-20.
// Warm for 21-30.
// Hot for above 30.
// Test the function with at least four different temperature values.
