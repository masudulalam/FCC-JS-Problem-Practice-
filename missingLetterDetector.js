/**
 * 
 * Build a Missing Letter Detector
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named fearNotLetter.
The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
The function should find the missing letter in the passed letter range and return it.
If all letters are present in the range, the function should return undefined.

 */

//Solution:

function fearNotLetter(str) {
  for(let i = 0; i < str.length - 1; i++) {
    const currentCharCode = str.charCodeAt(i);
    const nextCharCode = str.charCodeAt(i + 1);

    if(nextCharCode !== currentCharCode + 1) {
      return String.fromCharCode(currentCharCode + 1);
    }  
  }

  return undefined;
}

console.log(fearNotLetter("abce"));