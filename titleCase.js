/**
 * Build a Title Case Converter
You will create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

"Web Development Is Awesome" is an example of a title cased string.

User Stories:

You should have a titleCase function that takes a string as an argument.
The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
titleCase("I like to code") should return "I Like To Code".
titleCase("javaScript is fun") should return "Javascript Is Fun".
 */

// Solution:

function titleCase(str) {
    let words = str.split(" ");
    let result = [];

    for(let i = 0; i < words.length; i++) {
        let word = words[i];

        let firstChar = word[0].toUpperCase();
        let restChars = word.slice(1).toLowerCase();

        result.push(firstChar + restChars);
    }

    return result.join(" "); 
}

console.log(titleCase("javaScript is fun"));



