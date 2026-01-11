/**
 * Build a Profile Lookup
 * 
 * You will build a profile lookup that looks up information about people in a contacts list.
 * 
 * For this example imagine there is a contact named Akira Laine, the lookUpProfile("Akira", "lastName") should return Laine.
 * 
 * 
 * 1. The contacts array should still be present in the global scope. Reset the lesson to recover it if you deleted it.
Passed:2. You should have a function named lookUpProfile.
Passed:3. lookUpProfile("Kristian", "lastName") should return a string.
Passed:4. lookUpProfile("Kristian", "lastName") should return the string Vos
Passed:5. lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Passed:6. lookUpProfile("Harry", "likes") should return an array
Passed:7. lookUpProfile("Bob", "number") should return the string No such contact
Passed:8. lookUpProfile("Bob", "potato") should return the string No such contact
Passed:9. lookUpProfile("Akira", "address") should return the string No such property
 */

// Solution:
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      if(property in contacts[i]) {
        return contacts[i][property];
      } else {
        return "No such property";
      }
    };
  };
  return "No such contact";
};

console.log(lookUpProfile("Akira", "address"));