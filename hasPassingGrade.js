/**
 * Build a Gradebook App
 * 
 * User Stories:
 * 
 * 1. You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.
 * 
 * 2. You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:
 * 
 * Score Range	Grade
    100	"A+"
    90 - 99	"A"
    80 - 89	"B"
    70 - 79	"C"
    60 - 69	"D"
    0 - 59	"F"

* 3.You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.

* 4. The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".

* 5. You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

    "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.

    "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
    Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.

 */


// Solution:

function getAverage(scores) {
    let totalScore = 0;
    const scoreLength = scores.length;

    for(let score of scores) {
        totalScore += score;
    }

    const average = totalScore / scoreLength;

    return average;
}

function getGrade(score) {
    if(score === 100) {
        return "A+";
    } else if(score >= 90 && score <= 99) {
        return "A";
    } else if(score >= 80 && score <= 89) {
        return "B";
    } else if(score >= 70 && score <= 79) {
        return "C";
    } else if(score >= 60 && score <= 69) {
        return "D";
    } else if(score >= 0 && score <= 59) {
        return "F";
    }
}

function hasPassingGrade(score) {
    const grade = getGrade(score);

    if(grade === "F") {
        return false;
    } else {
        return true;
    }
}

function studentMsg(scores, studentScore) {
    let average = getAverage(scores);
    let grade = getGrade(studentScore);

    return `Class average: ${average}. Your grade: ${grade}. ${hasPassingGrade(studentScore) ? "You passed the course." : "You failed the course."}`;
}


console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getGrade(60));
console.log(hasPassingGrade(80));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));