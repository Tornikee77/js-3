"use strict";

let grade = Number(prompt("Enter your score"));

function findGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score < 89) {
    return "B";
  } else if (score >= 70 && score < 79) {
    return "C";
  } else if (score >= 60 && score < 69) {
    return "D";
  } else {
    return "You fail!";
  }
}

let result = findGrade(grade);
alert(result);

// A for 90 and above.
// B for 80-89.
// C for 70-79.
// D for 60-69.
// F for below 60.
