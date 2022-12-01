// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from  to .
// Any  less than grade is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the grade and the next multiple of grades is less than grade, round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  grades round to  (85 - 84 is less than 3)
//  grades do not round (result is less than 40)
//  grades do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate
// Input Format

// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, .

// Constraints

function gradingStudents(grades) {
    let newArray = []
    grades.forEach(item => {
        if (((Math.ceil(item / 5) * 5) - item < 3) && item > 38) {
            newArray.push((Math.ceil(item / 5) * 5))
        }
        else {
            newArray.push(item)
        }
    })
    console.log(newArray)
}

gradingStudents([4, 75, 67, 40, 33])
gradingStudents([22, 86, 30, 0, 16, 51, 53, 42, 48, 22, 69, 12, 27, 34, 24, 95, 16, 32, 22, 52])