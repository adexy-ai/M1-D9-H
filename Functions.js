/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

//WRITE YOUR ANSWER HERE */

function area(a, b) {
    console.log("\nThe area of the associated rectangle is", a * b);
}
area(11, 12)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
function crazySum(int1, int2) {
    console.log("\nThe sum of the two integers would be ruturned as a value")
    return int1 + int2
}
let sum = crazySum(2, 5)
console.log("\n",sum)

//console.log("The value of", crazySum(), "is the sum of", int1, "and" int2, crazySum(2,5))


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
function crazyDiff(num) {
    if (num > 19) {
        //console.log("\nThe difference between the function argument and 19 is", num - 19)
        return (num - 19) * 3
    }
}
crazyDiff(20)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
boundary(30)
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
function strivify(myString) {
    console.log("\nThe parameter could be any type of variabel, in this case, it is a string;", myString)
}

strivify("\nIt should print this statement")
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
function check3and7(num) {
    if ((num % 3) === 0) {
        console.log("\nThe argument parameter", num,  "is a multiple of 3", ((num / 3) === 0))
    } else if ((num % 7) === 0) {
        console.log("\nThe argument parameter", num, "is a multiple of 7", ((num / 7) === 0))
    } else {
        console.log("\nThe number", num, "is neither a multiple of 3 or 7")
    }
}
check3and7(20)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
function reverseString(name) {
    let i = 0
    while (i < name.lenght.) {
        console.log("This is the reverse of the parameter given", name[i])
    }
}
reverseString("strive")
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
function upperFirst(string) {
    return string.toUpperCase(" ")
}
upperFirst("Aderiy is participating in epicode bootcamp")
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
