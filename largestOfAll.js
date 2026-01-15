/**
 * 
 * 
 * Build the Largest Number Finder
In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function largestOfAll that takes an array of arrays as an argument.
The function should return an array containing the largest number from each sub-array.

 */

// Solution:

function largestOfAll(arr) {
    let larNum = 0;
    let largestNumArr = [];

    for(let i = 0; i < arr.length; i++) {
        let insideArr = arr[i];
        
        for (let i = 0; i < insideArr.length; i++) {
            if(insideArr[i] > larNum) {
                larNum = insideArr[i];
            }
        }

        largestNumArr.push(larNum);
        larNum = 0;
    }

    return largestNumArr;
}


console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
