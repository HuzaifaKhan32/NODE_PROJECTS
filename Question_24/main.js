/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
var test_string = "Hello";
var test_string1 = "world";
var test_string2 = "Hello";
// Tests for equality and inequality with strings
console.log("Equialty test:", test_string == test_string2); // True
console.log("Inequialty test:", test_string !== test_string2); // False
console.log("Equialty test with strings:", test_string === test_string2); // True
console.log("Inequialty test with strings:", test_string !== test_string2); // False
// Tests using the lower case function
console.log("Equality Test with lowercase function:", test_string.toLowerCase() === "hello"); // True
console.log("Inequality Test with lowercase function:", test_string.toLowerCase() !== "hello"); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num = 5;
var num1 = 7;
console.log("Equality Test:", num === num1); // False
console.log("Inequality Test:", num !== num1); // True
console.log("Greater Than Test:", num > num1); // False
console.log("Less Than Test:", num < num1); // True
console.log("Greater Than or Equal To Test:", num >= num1); // False
console.log("Less Than or Equal To Test:", num <= num1); // True
// Tests using "and" and "or" operators
console.log("Testing with AND", num === num1 && num !== num1); // False
console.log("Testing with OR", num === num1 || num !== num1); // True
// Test whether an item is in a array
var arr = ["Huzaifa", "Ghilman", "Ebtisam", "Abdul Wasey"];
console.log("Equality test with array", arr.includes("Huzaifa")); //True
// Test whether an item is not in a array
console.log("Inequality test with array", arr.includes("Aseem")); //False
