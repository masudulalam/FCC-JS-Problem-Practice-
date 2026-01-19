/**
 * 
 * 
 * Build a Pyramid Generator
 * 
 * User Stories:
 * You should have a function named pyramid that takes three arguments.
 * 
 * The first argument should be a string representing the pattern character to repeat in your pyramid.
 * 
 * The second argument should be an integer representing the number of rows in the pyramid,
 * 
 * The third argument should be a Boolean value.
 * 
 * The pyramid function should return a string in which the pattern character is repeated and        arranged to form a pyramid having the vertex facing upwards when the third argument is false.
 * 
 * When the third argument is true the pyramid should have the vertex facing downwards.
 * 
 * The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
 * 
 * Each row should start with a number of spaces sufficient to put the center character of each row in the same column and there should not be any spaces at the end of each row.
 * 
 * The pyramid should start and end with a newline character.
 * 
 * For example, calling pyramid("o", 4, false) should give this output:
 * 
 * 
 */

// Solution:

function pyramid(strCharacter, rows, vertexDownwards) {
    let result = "\n";

    // if(vertexDownwards) {
    //     for(let i = 0; i < rows; i++) {
    //         result += " ".repeat(i) + strCharacter.repeat(2 * (rows - i) - 1) + "\n";
    //     }
    // } else {
    //     for(let i = 0; i < rows; i++) {
    //         result += " ".repeat(rows - i - 1) + strCharacter.repeat(2 * i + 1) + "\n";
    //     }
    // }

    for(let i = 0; i < rows; i++) {
        if(vertexDownwards) {
            result += " ".repeat(i) + strCharacter.repeat(2 * (rows - i) - 1) + "\n";
        } else {
            result += " ".repeat(rows - i - 1) + strCharacter.repeat(2 * i + 1) + "\n";
        }  
    }

    return result
}

console.log(pyramid("o", 4, false));
// console.log(pyramid("p", 5, true));

