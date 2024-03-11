// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var Users = ["Admin", "Abdul Wasif", "Huzaifa", "Haris", "Hamza"];
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var name_1 = Users_1[_i];
    if (name_1 == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(name_1, ", thank you for logging in again."));
    }
}
