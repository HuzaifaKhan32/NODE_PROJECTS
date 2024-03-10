/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */
let friend_name : string[] = ["Ebtisam", "Ghilman", "Abdul Wasey", "Hashir"];
// using  'For loop' to print array's elements
for(let name of friend_name){
    let message : string = `Hi! ${name} hope you're doing OK`;
    console.log(message);
}
