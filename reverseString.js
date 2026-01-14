/**
 * 
 * 
 * Build a String Inverter
In this lab, you will build a simple string inverter that reverses the characters of a given string.

For example, "hello" should become "olleh".

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named reverseString that takes a string as an argument.
The function should return the reversed string.

 */


// Solution: 

function reverseString(str) {
  let reverseStr = "";

  for(let i = str.length - 1; i >= 0 ; i--) {
    reverseStr += str[i];
  }
  
  return reverseStr;
}

console.log(reverseString("hello")); 
console.log(reverseString("Greetings from Earth"))