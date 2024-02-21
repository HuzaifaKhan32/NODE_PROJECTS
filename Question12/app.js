var friend_name = ["Ebtisam", "Ghilman", "Abdul Wasey", "Hashir"];
var meassage = "Hi! [NAME] hope you're doing OK";
for (var _i = 0, friend_name_1 = friend_name; _i < friend_name_1.length; _i++) {
    var name_1 = friend_name_1[_i];
    var personmeassage = meassage.replace("[NAME]", name_1);
    console.log(personmeassage);
}
