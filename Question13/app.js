var transpotation = ["Honda Motorcycle", "150cc Bike", "Civic", "Bugati"];
var statement = "I would like to own a [Motorcycle]";
for (var _i = 0, transpotation_1 = transpotation; _i < transpotation_1.length; _i++) {
    var vehicle = transpotation_1[_i];
    var statments = statement.replace("[Motorcycle]", vehicle);
    console.log(statments);
}
