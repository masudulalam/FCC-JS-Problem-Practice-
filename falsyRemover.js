/**
 * Implement a Falsy Remover
In this lab you will create a function that removes all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

User Stories:

You should have a bouncer function that takes an array as argument.
The bouncer function should return a new array that contains the same elements as the array passed in as argument with the falsy elements removed.
The bouncer function should not change the array passed in as an argument.
Hint: Try converting each value to a Boolean.
 */

// Solution:

function bouncer(arr) {
    let result = arr.filter((element) => !!element)

    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([]));
