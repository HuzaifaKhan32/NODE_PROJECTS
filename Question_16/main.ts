/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
let GuestNames: string[] = ["Mr. Kamal", "Mr. Riyaz", "Mr. Iqbal", "Mr. Mohsin"];

console.log(`Dear guests, I just found a bigger dinner table `); 
console.log("I am inviting some new guests");
// using 'unshift' function to add a new guest from the beginning of the array 
GuestNames.unshift("Mr. Ghilman");
// using 'push' function to add a new guest at the end of the array 
GuestNames.push("Mr. Ayan");
GuestNames.splice(3, 0, "Mr. Hashir");

let Invitation : string = "Please, Have a dinner with us!"; 
for(let i = 0; i < GuestNames.length; i++ ){
    console.log(GuestNames[i] + ", " + Invitation);
}
console.log(GuestNames);