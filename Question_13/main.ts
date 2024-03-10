/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let transpotation : string[] = ["Honda Motorcycle", "150cc Bike", "Civic", "Bugati"];
for (let vehicle of transpotation ){
    let statement : string = `I would like to own a ${vehicle}`;
    console.log(statement);  
}