"use strict";
let test_string = "Hello";
let test_string1 = "world";
let test_string2 = "Hello";
// Tests for equality and inequality with strings
console.log("Equialty test:", test_string == test_string2); // True
console.log("Inequialty test:", test_string !== test_string2); // False
console.log("Equialty test with strings:", test_string === test_string2);
console.log("Inequialty test with strings:", test_string !== test_string2);
// Tests using the lower case function
console.log("Equality Test with lowercase function:", test_string.toLowerCase() === "hello");
console.log("Inequality Test with lowercase function:", test_string.toLowerCase() !== "hello");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 5;
let num1 = 7;
console.log("Equality Test:", num === num1); // False
console.log("Inequality Test:", num !== num1); // True
console.log("Greater Than Test:", num > num1); // False
console.log("Less Than Test:", num < num1); // True
console.log("Greater Than or Equal To Test:", num >= num1); // False
console.log("Less Than or Equal To Test:", num <= num1); // True
// Tests using "and" and "or" operators
console.log("Testing with AND", num === num1 && num !== num1);
console.log("Testing with OR", num === num1 || num !== num1);
