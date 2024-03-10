// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var PersonName = "Huzaifa Khan";
console.log("Lower Case:", PersonName.toLowerCase());
console.log("Lower Case:", PersonName.toUpperCase());
var ToTitlecase = PersonName.charAt(0).toUpperCase() + PersonName.substring(1).toLowerCase();
console.log("Lower Case:", ToTitlecase);
