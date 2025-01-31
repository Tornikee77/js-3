"use strict";

//Write a function called proceedAction that takes a boolean value as an argument.
// Use confirm to ask the user if they want to proceed.
// Return a message indicating whether the action was confirmed or canceled.
// Test the functionality in your browser.


let response = confirm("Do you want proceed?")

function proceedAction(userResponse){
    if(response){
        return "Actions confirmed!"
    }else{
        return "Actions canceled!"
    }
}

let result = proceedAction(response);
alert(result);