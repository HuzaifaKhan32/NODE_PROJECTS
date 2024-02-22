let transpotation : string[] = ["Honda Motorcycle", "150cc Bike", "Civic", "Bugati"];
let statement : string = "I would like to own a [Motorcycle]";
for (let vehicle of transpotation ){
    let statments : string = statement.replace("[Motorcycle]", vehicle);
    console.log(statments);  
}