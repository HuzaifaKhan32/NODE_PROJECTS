/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */
var friend_name = ["Ebtisam", "Ghilman", "Abdul Wasey", "Hashir"];
// using  'For loop' to print array's elements
for (var _i = 0, friend_name_1 = friend_name; _i < friend_name_1.length; _i++) {
    var name_1 = friend_name_1[_i];
    var message = "Hi! ".concat(name_1, " hope you're doing OK");
    console.log(message);
}
