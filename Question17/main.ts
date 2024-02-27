let new_guests : string[] = ["Mr. Ghilman", "Mr. Kamal", "Mr. Riyaz", "Mr.Hashir", "Mr. Iqbal", "Mr. Mohsin", "Mr. Ayan"];

console.log("Sorry, I can only invite two guests due to some circumstances " );
let remove_guest1 = new_guests.pop();
console.log(`Sorry, ${remove_guest1} I can't invite you on dinner anymoere`); 
let remove_guest2 = new_guests.pop();
console.log(`Sorry, ${remove_guest2} I can't invite you on dinner anymoere`); 
let remove_guest3 = new_guests.pop();
console.log(`Sorry, ${remove_guest3} I can't invite you on dinner anymoere`); 
let remove_guest4 = new_guests.pop();
console.log(`Sorry, ${remove_guest4} I can't invite you on dinner anymoere`); 
let remove_guest5 = new_guests.pop();
console.log(`Sorry, ${remove_guest5} I can't invite you on dinner anymoere`); 
for(let i = 0; i < new_guests.length; i++){
    console.log(`${new_guests[i]} You are still invited for dinner `);
}
let remove_guest6 = new_guests.pop();
let remove_guest7 = new_guests.pop();
console.log(new_guests);
