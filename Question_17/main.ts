/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let new_guests : string[] = ["Mr. Ghilman", "Mr. Kamal", "Mr. Riyaz", "Mr.Hashir", "Mr. Iqbal", "Mr. Mohsin", "Mr. Ayan"];

console.log("Sorry, I can only invite two guests due to some circumstances " );
// using 'pop' function to remove a guest from inviting list
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
// using loop to print guests those are still invited
for(let i = 0; i < new_guests.length; i++){
    console.log(`${new_guests[i]} You are still invited for dinner `);
}
let remove_guest6 = new_guests.pop();
let remove_guest7 = new_guests.pop();
console.log(new_guests);
