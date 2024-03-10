// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let PersonName : string = "huzaifa khan";
// convert name into lower case
console.log("Lower Case:", PersonName.toLowerCase());
// convert name into Upper case
console.log("Upper Case:", PersonName.toUpperCase());
// convert name into Title case
// using 'split' function to split a string into an array
let words = PersonName.split(" ");
// using 'map' function to make some changes with Elements of an array and return a new array  
let ToTitlecase = words.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
// using 'join' function to combine array into a string
let result = ToTitlecase.join(" ");
console.log("Title Case:", result);