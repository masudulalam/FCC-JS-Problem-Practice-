/** 
 * Build a String Repeating Function
In this lab, you will create a function that repeats a given string a specific number of times. For the purpose of this lab, do not use the built-in .repeat() method.


User Stories:

You should create a function named repeatStringNumTimes that takes two parameters: a string and a number.
The function should return the string repeated the specified number of times.
If the number is less than or equal to zero, the function should return an empty string.

 * 
 * 
*/

// Solution:
function repeatStringNumTimes(str, num) {
  let totalStr = "";
  if(num <= 0) {
    return "";
  } else {
    for(let i = 0; i < num; i++) {
      totalStr += str
    }
    return totalStr;
  }
};

console.log(repeatStringNumTimes("abc", -3));