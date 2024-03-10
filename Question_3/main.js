// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "huzaifa khan";
// convert name into lower case
console.log("Lower Case:", PersonName.toLowerCase());
// convert name into Upper case
console.log("Upper Case:", PersonName.toUpperCase());
// convert name into Title case
var words = PersonName.split(" ");
var ToTitlecase = words.map(function (word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(); });
var result = ToTitlecase.join(" ");
console.log("Title Case:", result);
