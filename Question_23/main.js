/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
var car = "subaru";
console.log("car == 'subaru', This will be true");
console.log(car == "subaru");
console.log("car != 'subaru', This will be false");
console.log(car != "subaru");
console.log("car != 'Subaru', This will be true");
console.log(car != "Subaru");
console.log("car == 'SUBARU', This will be false");
console.log(car == "SUBARU");
console.log("car.length < 7, This will be true");
console.log(car.length < 7);
console.log("car.length > 6, This will be false");
console.log(car.length > 6);
console.log("car.length != 6, This will be false");
console.log(car.length != 6);
console.log("car.length <= 6, This will be true");
console.log(car.length <= 6);
console.log("car.length == 7 && car == 'subaru', This will be false");
console.log(car.length == 7 && car == "subaru");
console.log("car.length == 7 || car == 'subaru', This will be true");
console.log(car.length == 7 || car == "subaru");
