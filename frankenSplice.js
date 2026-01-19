/**
 * 
 * 
 * Implement the Slice and Splice Algorithm
you will need to create an algorithm to merge two arrays.


User Stories:

Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.
 */


// Solution:

function frankenSplice(arr1, arr2, index) {
    let copyArr2 = arr2.slice(0);

    copyArr2.splice(index, 0, ...arr1);

    return copyArr2;

}

console.log(frankenSplice([1, 2], ["a", "b"], 1))
