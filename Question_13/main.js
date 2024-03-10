/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var transpotation = ["Honda Motorcycle", "150cc Bike", "Civic", "Bugati"];
for (var _i = 0, transpotation_1 = transpotation; _i < transpotation_1.length; _i++) {
    var vehicle = transpotation_1[_i];
    var statement = "I would like to own a ".concat(vehicle);
    console.log(statement);
}
