"use strict";
let transpotation = ["Honda Motorcycle", "150cc Bike", "Civic", "Bugati"];
let statement = "I would like to own a [Motorcycle]";
for (let vehicle of transpotation) {
    let statments = statement.replace("[Motorcycle]", vehicle);
    console.log(statments);
}
