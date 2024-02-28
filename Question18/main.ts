let favourite_place : string[] = ["Khana-e-Kaba", "Berlin", "Oslo", "Dubai", "Singapore"];
console.log("Orignal Oder:", favourite_place);


console.log("Alphabetically Arranged:", [...favourite_place].sort());

console.log("Still in orignal order:", favourite_place);


console.log("Arranged in reverse alphabetical order:", [...favourite_place].sort().reverse());


console.log("Still in orignal order:", favourite_place);

favourite_place.reverse();
console.log("Reversing the array",favourite_place);

favourite_place.reverse();
console.log("Reverse the array again so it comes in its orignal order",favourite_place);

favourite_place.sort();
console.log("Alphabetically arranged:", favourite_place);


favourite_place.sort().reverse();
console.log("Arranged in reverse alphabetical order:", favourite_place);