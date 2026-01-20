/**
 * 
 * 
 * Build a Pyramid Generator
 * 
 * User Stories:
 * You should have a function named pyramid that takes three arguments.
 * 
 * 1. The first argument should be a string representing the pattern character to repeat in your pyramid.
 * 
 * 2. The second argument should be an integer representing the number of rows in the pyramid,
 * 
 * 3. The third argument should be a Boolean value.
 * 
 * 4. The pyramid function should return a string in which the pattern character is repeated and     arranged to form a pyramid having the vertex facing upwards when the third argument is false.
 * 
 * 5. When the third argument is true the pyramid should have the vertex facing downwards.
 * 
 * 6. The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
 * 
 * 7. Each row should start with a number of spaces sufficient to put the center character of each row in the same column and there should not be any spaces at the end of each row.
 * 
 * 8. The pyramid should start and end with a newline character.
 * 
 * 9. For example, calling pyramid("o", 4, false) should give this output: 
 *          o
           ooo
          ooooo
         ooooooo
 * 
 * 
 */

// Solution:

function pyramid(patternChar, rows, vertexDownwards) {
    let result = "\n";

    // The code is fine but not more readable and consist repetition
    /*
    if(vertexDownwards) {
        for(let i = 0; i < rows; i++) {
            result += " ".repeat(i) + strCharacter.repeat(2 * (rows - i) - 1) + "\n";
        }
    } else {
        for(let i = 0; i < rows; i++) {
            result += " ".repeat(rows - i - 1) + strCharacter.repeat(2 * i + 1) + "\n";
        }
    }
    */
    
    // Now the code is more readable and clean
    for(let i = 0; i < rows; i++) {
        let spaceCount;
        let charCount;

        if(vertexDownwards) {
            spaceCount = i;
            charCount = 2 * (rows - i) - 1;
        } else {
            spaceCount = rows - i - 1;
            charCount = 2 * i + 1;
        }  

        let row = " ".repeat(spaceCount) + patternChar.repeat(charCount);
        result += row + "\n"
    }

    return result
}

console.log(pyramid("o", 4, false));
// console.log(pyramid("p", 5, true));

